// src/components/Document.js
import React from 'react';

const Documentation = () => {
  const tableData = [
    { name: 'Döküman İsmi', type: 'alfanumerikstring', size: '50', required: 'zorunlu', editable: 'evet' },
    { name: 'ülke', type: 'seçilebilir', size: '-', required: '-', editable: 'evet' },
    { name: 'şehir', type: 'seçilebilir', size: '-', required: 'ülke seçilmişşe zorulu', editable: 'evet' },
    { name: 'tarih', type: 'date', size: '-', required: 'zorunlu', editable: '-' },
  ];

  const attachedDocuments = [
    { name: 'seri', type: 'alfanumerikstring', size: '255', required: 'zorunlu', editable: 'evet' },
    { name: 'numara', type: 'string', size: '10', required: 'zorunlu', editable: 'evet' },
    { name: 'Alan adı', type: 'string', size: '50', required: 'zorunlu', editable: 'evet' },
  ];
  const tableInfo = [
    { name: 'İsim', type: 'alfanumerikstring', size: '255', required: 'zorunlu', editable: 'evet' },
    { name: 'Soyisim', type: 'string', size: '10', required: 'zorunlu', editable: 'evet' },
    { name: 'Yaş', type: 'integer', size: '-', required: 'zorunlu', editable: 'evet' },
    { name: 'email', type: '-', size: '-', required: 'zorunlu', editable: 'evet' },

  ];
  return (
    <div style={containerStyle}>
      <h2>Dökümantasyon</h2>
      
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Alan Adı</th>
            <th style={tableHeaderStyle}>Tip</th>
            <th style={tableHeaderStyle}>Boyut</th>
            <th style={tableHeaderStyle}>Zorunlu</th>
            <th style={tableHeaderStyle}>Düzenlenebilir</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{item.name}</td>
              <td style={tableCellStyle}>{item.type}</td>
              <td style={tableCellStyle}>{item.size}</td>
              <td style={tableCellStyle}>{item.required}</td>
              <td style={tableCellStyle}>{item.editable}</td>
            </tr>
          ))}
          {/* Ekli Belgeler Kısmı */}
          <tr>
            <td colSpan="5" style={sectionHeaderStyle}>Ekli Belgeler</td>
          </tr>
          {attachedDocuments.map((item, index) => (
            <tr key={`attached-${index}`}>
              <td style={{ ...tableCellStyle, textAlign: 'left' }}>{item.name}</td>
              <td style={tableCellStyle}>{item.type}</td>
              <td style={tableCellStyle}>{item.size}</td>
              <td style={tableCellStyle}>{item.required}</td>
              <td style={tableCellStyle}>{item.editable}</td>
            </tr>
          ))}
           {/* İnfo bilgiler*/}
           <tr>
            <td colSpan="5" style={sectionHeaderStyle}>Kişisel Bilgiler</td>
          </tr>
          {tableInfo.map((item, index) => (
            <tr key={`info-${index}`}>
              <td style={{ ...tableCellStyle, textAlign: 'left' }}>{item.name}</td>
              <td style={tableCellStyle}>{item.type}</td>
              <td style={tableCellStyle}>{item.size}</td>
              <td style={tableCellStyle}>{item.required}</td>
              <td style={tableCellStyle}>{item.editable}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const containerStyle = {
  margin: '20px',
  fontFamily: 'Arial, sans-serif',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
  border: '2px solid black', // Tablo dış hatları için kapalı çizgiler
};

const tableHeaderStyle = {
  backgroundColor: '#2980B9',
  color: 'white',
  fontWeight: 'bold',
  padding: '10px',
  border: '1px solid black', // Başlıklar için çizgiler
  textAlign: 'center',
};

const tableCellStyle = {
  border: '1px solid black', // Hücrelerdeki çizgiler
  padding: '8px',
  textAlign: 'center', // Varsayılan olarak merkez hizalı
};

const sectionHeaderStyle = {
  backgroundColor: '#f2f2f2',
  fontWeight: 'bold',
  textAlign: 'left', // Ekli belgeler sola yaslı
  padding: '10px',
  border: '1px solid black',
};

export default Documentation;
