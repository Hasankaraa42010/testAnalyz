import React, { useState } from 'react';

const TestPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [responseValue, setResponseValue] = useState('');

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:5000/api', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: inputValue }),  // 'input' yerine 'url' olarak değiştirdik
    });

    const data = await response.json();
    setResponseValue(JSON.stringify(data.table_data, null, 2));  // table_data'yı daha anlaşılır şekilde gösterelim
  };

  return (
    <div style={testPageContainerStyle}>
      <h1>Test Page</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        style={inputStyle}
      />
      <button onClick={handleSubmit} style={buttonStyle}>Submit</button>
      <pre>Response: {responseValue}</pre> {/* JSON verisini daha iyi görmek için <pre> etiketi kullanıyoruz */}
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
