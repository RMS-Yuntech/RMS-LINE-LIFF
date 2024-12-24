// server/api/webhook.ts
import type { H3Event } from 'h3';
import * as line from '@line/bot-sdk';
import type { TextMessage } from '@line/bot-sdk';

// env
const runtimeConfig = useRuntimeConfig();
const { channelSecret, channelAccessToken } = runtimeConfig;

// LINE SDK 設定
const config = {
  channelSecret: channelSecret
};

// LINE SDK 客戶端
const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: channelAccessToken
});

// 事件處理函式
async function handleEvent(event: line.WebhookEvent) {
  if (event.type !== 'message') {
    return null;
  }

  const message = event.message;
  const resMsg: TextMessage = {
    type: 'text',
    text: `暫時不支援此媒體類型: ${JSON.stringify(message)}`
  };

  if (message.type === 'text') {
    resMsg.text = '您提供的內容是文字';
  }

  if (message.type === 'image') {
    resMsg.text = '您提供的內容是圖片';
  }

  await client.replyMessage({
    replyToken: event.replyToken,
    messages: [resMsg]
  });
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
