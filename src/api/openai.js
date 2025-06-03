import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;


export const generateExcuse = async (reason, tone) => {
  const prompt = `Generate a ${tone} excuse for why someone couldn't ${reason}.`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating excuse:', error);
    return 'Sorry, something went wrong with the excuse generator.';
  }
};
