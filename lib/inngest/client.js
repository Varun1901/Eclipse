import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ 
    id: "eclipse", 
    name: "Eclipse",
    credentials: {
        gemini: {
            apiKey: process.env.GEMINI_API_KEY,
        },
    },
});
