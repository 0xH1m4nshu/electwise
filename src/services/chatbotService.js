
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function getChatbotResponse(userMessage) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are ElectWise, an assistant that explains election processes clearly and interactively. User question: ${userMessage}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't understand that."
    );
  } catch (error) {
    console.error(error);
    return "Error connecting to AI service.";
  }
}
