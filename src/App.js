import { useState, useEffect } from "react";

function App() {
  const [char, setChar] = useState([]);
  const api_url = "https://thronesapi.com/api/v2/Characters";

  function getChar(){
    fetch(api_url)
      .then((response)=> {
        return response.json();
    })
      .then((data) => {
        setChar(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
    });

  };

  useEffect(() => {
    getChar();
  }, [])
  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '100px'
      }}>
        {char.map((item) => (
          <div
            style={{
              backgroundColor: 'lightblue',
              height: 'auto',
              padding: '10px',
              borderRadius: '5%',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <img
            src={item.imageUrl}
            style={{ width: '80%', height: 'auto', borderRadius: '8px' }}
          />
            <p>{item.fullName}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
