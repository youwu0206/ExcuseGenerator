const axios = require('axios');

exports.handler = async function(event) {
  const { reason, tone } = JSON.parse(event.body);

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
          'Authorization': `Bearer ${process.env.VITE_OPENAI_API_KEY}`,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ text: response.data.choices[0].message.content.trim() }),
    };
  } catch (err) {
    console.error('Error from OpenAI:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate excuse.' }),
    };
  }
};