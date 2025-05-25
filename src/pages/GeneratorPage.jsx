import { useState } from 'react';
import ExcuseForm from '../components/ExcuseForm';
import ExcuseDisplay from '../components/ExcuseDisplay';

function GeneratorPage() {
  const [excuseObj, setExcuseObj] = useState(null);
  const [savedExcuses, setSavedExcuses] = useState([]);

  const handleGenerate = (excuseData) => {
    setExcuseObj(excuseData);
  };

  const handleSave = () => {
    setSavedExcuses(prev => [...prev, excuseObj]);
    alert('Excuse saved!');
  };

  const handleReset = () => {
    setExcuseObj(null);
  };

  return (
    <div style={{
        maxWidth: '800px',
        margin: '5rem auto',
        padding: '2rem',
        textAlign: 'center',
      }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Generate an Excuse!</h1>
      {!excuseObj && <ExcuseForm onGenerate={handleGenerate} />}
      {excuseObj && (
        <ExcuseDisplay
          excuse={excuseObj}
          onSave={handleSave}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

export default GeneratorPage;