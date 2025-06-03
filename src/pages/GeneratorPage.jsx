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

      setSavedExcuses(prev => [...prev, excuseObj]);

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