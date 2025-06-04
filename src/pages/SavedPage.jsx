import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

function SavedPage() {
  const [excuses, setExcuses] = useState([]);

  const toneColors = {
    serious: '#f8d7da',
    chill: '#d1ecf1',
    humorous: '#fff3cd',
  };

  useEffect(() => {
    const fetchExcuses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'excuses'));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setExcuses(data);
      } catch (error) {
        console.error('Error fetching excuses:', error);
      }
    };

    fetchExcuses();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this excuse?');
    if (!confirmed) return;
  
    try {
      await deleteDoc(doc(db, 'excuses', id));
      setExcuses((prev) => prev.filter((excuse) => excuse.id !== id));
    } catch (error) {
      console.error('Error deleting excuse:', error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>My Saved Excuses</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        marginTop: '1rem',
        padding: '0 1rem'
      }}>
        {excuses.map((excuse) => (
          <div
            key={excuse.id}
            style={{
              backgroundColor: toneColors[excuse.tone] || '#eee',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              position: 'relative'
            }}
          >
            <p><strong>Tone:</strong> {excuse.tone}</p>
            <p>{excuse.text}</p>
            <button
              onClick={() => handleDelete(excuse.id)}
              style={{
                marginTop: '0.5rem',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                padding: '0.4rem 0.7rem',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedPage;
