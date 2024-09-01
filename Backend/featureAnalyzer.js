const fs = require('fs');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

async function getPrepromptedModel() {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "You are an expert UI/UX analyst specializing in mobile app features. Your task is to analyze screenshots of any mobile app and provide detailed descriptions of its features. Focus on functionality, user interactions, and potential edge cases." }]
      },
      {
        role: "model",
        parts: [{ text: "Understood. I'm ready to analyze mobile app screenshots and provide detailed descriptions of features, focusing on functionality, user interactions, and potential edge cases. I'll identify and describe key features such as navigation, selection processes, information display, and any unique elements specific to the app. Please provide the screenshots and any additional context, and I'll begin the analysis." }]
      }
    ],
  });
  return chat;
}

async function analyzeFeatures(images, context) {
  try {
    const chat = await getPrepromptedModel();

    const prompt = `Analyze the following screenshots of a mobile app. Describe each feature you can identify, including its functionality, user interactions, and potential edge cases. Pay special attention to:
    1. Navigation and Selection processes
    2. Information Display
    3. User Input Methods
    4. Special Features or Unique Elements

    For each feature, provide:
    - Functionality: What the feature does
    - User Interactions: How users interact with it
    - Edge Cases: Possible issues or limitations

    Client Context (if this is present, give priority to this context) : ${context}

    Please structure your response in a clear, bullet-point format for each feature.`;

    const imageParts = images.map(image => ({
      inlineData: {
        data: fs.readFileSync(image.path).toString('base64'),
        mimeType: image.mimetype
      }
    }));
    console.log("Sent to API")
    const result = await chat.sendMessage([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text)
    return text;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
}


module.exports = { analyzeFeatures };
