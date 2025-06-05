import axios from 'axios';

export const generateExcuse = async (reason, tone) => {
  try {
    const res = await fetch('/.netlify/functions/generateExcuse', {
      method: 'POST',
      body: JSON.stringify({ reason, tone }),
    });
    const data = await res.json();
    return data.text;
  } catch (err) {
    console.error('Excuse generation failed:', err);
    return 'Something went wrong with the excuse generator.';
  }
};
