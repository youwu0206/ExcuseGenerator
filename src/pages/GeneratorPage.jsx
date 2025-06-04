import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import ExcuseForm from '../components/ExcuseForm';
import ExcuseDisplay from '../components/ExcuseDisplay';

function GeneratorPage() {
  const [excuseObj, setExcuseObj] = useState(null);
  const [savedExcuses, setSavedExcuses] = useState([]);

  const handleGenerate = (excuseData) => {
    setExcuseObj(excuseData);
  };

  const handleSave = async () => {
    try {
      await addDoc(collection(db, 'excuses'), excuseObj);
      setSavedExcuses((prev) => [...prev, excuseObj]);
      alert('Excuse saved to Firestore!');
    } catch (error) {
      console.error('Error saving excuse:', error);
      alert('Failed to save excuse.');
    }
  };

  const handleReset = () => {
    setExcuseObj(null);
  };

  return (
    <div
      style={{
        minHeight: '30vh',
        width: '100%',
        padding: '2rem 1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          padding: '2rem',
          backgroundColor: '#fff',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.5rem', color: '#5c7f9e', marginBottom: '0.15rem', fontWeight: 'bold'}}>
          Welcome to the Excuse Generator
        </p>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          Generate an Excuse!
        </h1>

        {!excuseObj && <ExcuseForm onGenerate={handleGenerate} />}

        {excuseObj && (
          <ExcuseDisplay
            excuse={excuseObj}
            onSave={handleSave}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
}

export default GeneratorPage;


