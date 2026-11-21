import { GoogleGenAI } from "@google/genai";

export async function POST({ request }) {
    try {
        const { prompt } = await request.json();

        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
        });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        return Response.json({
            answer: response.text,
        });
    } catch (error) {
        return Response.json(
            {
                error: error.message,
            },
            {
                status: 500,
            }
        );
    }
}