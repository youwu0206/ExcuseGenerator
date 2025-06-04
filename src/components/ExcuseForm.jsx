import { useState } from 'react';
import { generateExcuse } from '../api/openai';

function ExcuseForm({ onGenerate }) {
  const [reason, setReason] = useState('');
  const [tone, setTone] = useState('serious');

  const handleGenerate = async () => {
    if (!reason.trim()) return;

    try {
      const excuseText = await generateExcuse(reason, tone);
      onGenerate({ text: excuseText, tone });
    } catch (err) {
      onGenerate({ text: 'Sorry, something went wrong with the excuse generator.', tone });
    }
  };

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
        marginBottom: '2rem',
        maxWidth: '100%',
        width: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <input
          type="text"
          placeholder="e.g., finish homework"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          style={{ padding: '0.5rem', width: '250px' }}
        />
        <select 
          value={tone} 
          onChange={(e) => setTone(e.target.value)}
          style={{ padding: '0.5rem' }}
        >
          <option value="serious">Serious</option>
          <option value="chill">Chill</option>
          <option value="humorous">Humorous</option>
        </select>
        <button
          onClick={handleGenerate}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#5c7f9e',
            color: '#fff',
            borderRadius: '5px',
            cursor: 'pointer',
            border: 'none'
          }}
        >
          Generate Excuse!
        </button>
      </div>
    </div>
  );
}

export default ExcuseForm;
