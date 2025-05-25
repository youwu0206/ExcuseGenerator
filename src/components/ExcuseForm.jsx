import { useState } from 'react';

function ExcuseForm({ onGenerate }) {
  const [reason, setReason] = useState('');
  const [tone, setTone] = useState('serious');

  const handleGenerate = () => {
    if (!reason.trim()) return;
    
    let excuse = '';

    switch (tone) {
      case 'serious':
        excuse = `Due to unforeseen circumstances, I couldn't ${reason.toLowerCase()}.`;
        break;
      case 'chill':
        excuse = `Hey, I just totally forgot to ${reason.toLowerCase()}, my bad!`;
        break;
      case 'humorous':
        excuse = `I couldn't ${reason.toLowerCase()} because my pet goldfish needed emotional support.`;
        break;
      default:
        excuse = `Something came up and I couldn't ${reason.toLowerCase()}.`;
    }

    onGenerate({ text: excuse, tone });
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
            backgroundColor: '#007bff',
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