import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function SavedPage () {

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
            const data = querySnapshot.docs.map(doc => doc.data());
            setExcuses(data);
          } catch (error) {
            console.error('Error fetching excuses:', error);
          }
        };
    
        fetchExcuses();
      }, []);
      
      return (
        <div>
          <h2>My Saved Excuses</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            {excuses.map((excuse, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: toneColors[excuse.tone] || '#eee',
                  padding: '1rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
              >
                <p><strong>Tone:</strong> {excuse.tone}</p>
                <p>{excuse.text}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default SavedPage;
