function SavedPage () {

    const mockSavedExcuses = [
        { text: "I couldn't finish it because my dog ate my router.", tone: "humorous" },
        { text: "I was caught in traffic during a goose parade.", tone: "chill" },
        { text: "Due to a family emergency, I couldn't submit on time.", tone: "serious" },
    ];
    const toneColors = {
        serious: '#f8d7da',
        chill: '#d1ecf1',
        humorous: '#fff3cd',
      };
      return (
        <div>
          <h2>My Saved Excuses</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            {mockSavedExcuses.map((excuse, index) => (
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
