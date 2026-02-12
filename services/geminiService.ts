
import { GoogleGenAI } from "@google/genai";
import { AnimeSeries } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getConciergeResponse = async (userPrompt: string, currentCategory: AnimeSeries) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are "The Forge Keeper", a master artisan and obsessive expert for Manga Forge (mangaforge.co.uk). 
        Your tone is dramatic, passionate, and deeply knowledgeable about anime and gaming series like Jujutsu Kaisen, Demon Slayer, One Piece, Blue Lock, Berserk, Attack on Titan, Solo Leveling, Final Fantasy VII, and Dark Souls.
        Use "manga-speak" and "gaming-lore" where appropriate (e.g., referring to power levels, domain expansions, the Grand Line, or being Tarnished). 
        Keep your responses concise but high-energy. 
        The current user is browsing the ${currentCategory} section.
        Help them find the best figurine, explain the lore, or recommend a series based on their interests. 
        Always remind them that Manga Forge is UK-based and fulfills all orders personally from their UK workshop.`,
        temperature: 0.8,
      },
    });

    return response.text || "Forgive me, traveler. The forge is cooling. Ask again in a moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The spirits of the forge are restless. (API Error)";
  }
};
