import React, { useState } from 'react';

const TestPage = () => {
  const [documentUrl, setDocumentUrl] = useState('');
  const [uiUrl, setUiUrl] = useState('');
  const [responseValue, setResponseValue] = useState('');

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:5000/api', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ document_url: documentUrl, ui_url: uiUrl }),  // İki URL gönderiyoruz
    });

    const data = await response.json();
    setResponseValue(JSON.stringify(data, null, 2));  // Gelen tüm veriyi gösteriyoruz
  };

  return (
    <div style={testPageContainerStyle}>
      <h1>Test Page</h1>
      <input 
        type="text" 
        placeholder="Document URL" 
        value={documentUrl} 
        onChange={(e) => setDocumentUrl(e.target.value)} 
        style={inputStyle}
      />
      <input 
        type="text" 
        placeholder="UI URL" 
        value={uiUrl} 
        onChange={(e) => setUiUrl(e.target.value)} 
        style={inputStyle}
      />
      <button onClick={handleSubmit} style={buttonStyle}>Submit</button>
      <pre>Response: {responseValue}</pre>
    </div>
  );
}

const testPageContainerStyle = {
  margin: '20px',
  fontFamily: 'Arial, sans-serif',
};

const inputStyle = {
  padding: '10px',
  width: '300px',
  marginBottom: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#2980B9',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

export default TestPage;
