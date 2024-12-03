// server/api/webhook.ts
import type { H3Event } from 'h3';
import * as line from '@line/bot-sdk';
import type { TextMessage } from '@line/bot-sdk';
// LINE SDK 設定
const config = {
  channelSecret: process.env.CHANNEL_SECRET || '' // 設定頻道密鑰
};

// LINE SDK 客戶端
const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '' // 設定 token
});

// 事件處理函式
async function handleEvent(event: line.WebhookEvent) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // 忽略非文字訊息的事件
    return null;
  }

  // 創建一個回聲文字訊息
  const echo: TextMessage = {
    type: 'text',
    text: event.message.text
  };

  try {
    const result = await client.replyMessage({
      replyToken: event.replyToken,
      messages: [echo]
    });
    console.log('Reply Message Result:', result);
  } catch (error) {
    console.error('Error replying message:', error);
  }
}

// Webhook 處理器
export default defineEventHandler(async (event: H3Event) => {
  const signature = getHeader(event, 'x-line-signature');
  if (!signature) {
    throw createError({
      statusCode: 400,
      message: '缺少簽章'
    });
  }

  const body = await readBody(event);

  try {
    line.validateSignature(
      JSON.stringify(body),
      config.channelSecret,
      signature
    );
  } catch (err) {
    console.log(err);

    throw createError({
      statusCode: 403,
      message: '簽章無效'
    });
  }

  const results = await Promise.all(
    body.events.map((event: line.WebhookEvent) => handleEvent(event))
  );

  return results;
});
