// 接收搜尋指令，呼叫 Gemini API，並回傳搜尋結果
import resource from 'assets/resource.json';

const apiKey = () => {
  return localStorage.getItem('GEMINI_API_KEY') || '';
};

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-8b:generateContent`;

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

export const useGeminiSearch = async (input: string) => {
  const payload = {
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: `你是一個資料查詢助手，如果在 resource 中能找到相符或高度相關的資料，回傳一個陣列，元素為所有相符 json 物件的 id\\n如果在 resource 中找不到任何一筆相關的資料，則回傳 null\\n\\n舉例來說，如果 resource 是下列的json\\n[\\n  {\\n"id": "d9a6f142-b34d-46a7-9533-12f9e6f89462",\\n    "tags": ["籃球", "比賽", "台灣", "國際賽事", "冠軍"],\\n    "title": "籃球世界盃：台灣隊奪冠時刻 創歷史新頁"\\n  },\\n  {\\n    "id": "e77ff6c9-24a2-4a4a-911e-cf5e02b6e9d8",\\n    "tags": ["健康生活", "運動", "壓力管理"],\\n    "title": "運動與健康的完美結合"\\n  },\\n  {\\n    "id": "c45b29e3-5bf8-4d67-8c57-96d9e73f48ad",\\n    "tags": ["小狗", "萌寵", "寵物", "狗狗", "療癒"],\\n    "title": "AI生成的小狗照片"\\n  },\\n  {\\n    "id": "80f4ab34-bde5-4e91-a658-83e9595e8321",\\n    "tags": ["BLACKPINK", "LISA", "IU", "Taylor Swift", "K-Pop"],\\n    "title": "LISA & IU - 顛覆音樂的合作"\\n  }\\n]\\n如果關鍵字為"請幫我搜尋跟運動有關的內容"，那你要在所有物件裡面的key為tag的陣列中查詢關鍵字，有沒有相似的，然後紀錄其id回答我\\n像是tag包含"運動"的物件包含 id為"d9a6f142-b34d-46a7-9533-12f9e6f89462"，回答 ["d9a6f142-b34d-46a7-9533-12f9e6f89462]\\n如果關鍵字是"冰淇淋"，因為找不到相關的資料，所以回答 null\\n\\n以上是你的工作內容，接下來我會給你正式的資料集跟查詢關鍵字\\n`
          }
        ]
      },
      {
        role: 'user',
        parts: [
          {
            text: `我現有的資源如下: \n\`\`\`\n${JSON.stringify(
              resource
            )}\n\`\`\`\n而現在希望你幫我查詢:\n\`\`\`\n${input}\n\`\`\``
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 1,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 8192,
      responseMimeType: 'application/json'
    }
  };

  try {
    const response = await $fetch<GeminiResponse>(API_URL, {
      method: 'POST',
      query: { key: apiKey() },
      body: JSON.stringify(payload)
    });

    const text = response.candidates[0]?.content?.parts[0]?.text;

    return text ? JSON.parse(text) : null;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return null;
  }
};
