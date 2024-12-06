export const useCheckApiKey = () => {
  const checkKey = (key: string) => {
    return $fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`,
      {
        method: 'POST',
        query: { key },
        body: {
          contents: [
            {
              parts: [{ text: 'Write a story about a magic backpack.' }]
            }
          ]
        }
      }
    );
  };

  return {
    checkKey
  };
};
