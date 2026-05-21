import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function analyzeImage(base64, mimeType) {
  const response = await groq.chat.completions.create({
    model: 'meta-llama/llama-4-scout-17b-16e-instruct',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'image_url',
            image_url: { url: `data:${mimeType};base64,${base64}` },
          },
          {
            type: 'text',
            text: 'Analyze this image and list all visible objects, animals, people, places, activities, colors and elements. Return ONLY a valid JSON array of short English strings, like: ["dog","grass","person","outdoor"]. No explanation, no markdown, just the JSON array.',
          },
        ],
      },
    ],
    temperature: 0.1,
    max_tokens: 500,
  });

  let text = response.choices[0].message.content.trim();
  // Eliminar bloques markdown si el modelo los incluye
  text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

  try {
    const objects = JSON.parse(text);
    return Array.isArray(objects) ? objects.map((o) => o.toLowerCase()) : [];
  } catch {
    // Si no parsea, extraemos palabras entre comillas
    const matches = text.match(/"([^"]+)"/g);
    return matches ? matches.map((m) => m.replace(/"/g, '').toLowerCase()) : [];
  }
}
