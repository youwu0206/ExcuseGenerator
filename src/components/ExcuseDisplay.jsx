function ExcuseDisplay({ excuse, onSave, onReset }) {
    const { text, tone } = excuse;
  
    const toneColors = {
      serious: '#f8d7da',
      chill: '#d1ecf1',
      humorous: '#fff3cd',
    };
  
    const backgroundColor = toneColors[tone] || '#f0f0f0';
  
    return (
      <div style={{ backgroundColor, padding: '1rem', marginTop: '1rem', borderRadius: '8px' }}>
        <p><strong>Tone:</strong> {tone}</p>
        <p>{text}</p>
        <button onClick={onSave}>Save</button>
        <button onClick={onReset} style={{ marginLeft: '1rem' }}>Generate Another</button>
      </div>
    );
  }
  
  export default ExcuseDisplay;