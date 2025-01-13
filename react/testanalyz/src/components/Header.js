// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="logo" style={logoStyle}>
        <h1>Test Uygulaması</h1>
      </div>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}><Link to="/test" style={linkStyle}>Test</Link></li>
          <li style={navItemStyle}><Link to="/document" style={linkStyle}>Dökümantasyon</Link></li>
          <li style={navItemStyle}><Link to="/formPage" style={linkStyle}>Dökümanın Arayüzü</Link></li>
        </ul>
      </nav>
    </header>
  );
}


const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#2C3E50',
  padding: '15px 30px',
  color: 'white',
  fontFamily: "'Arial', sans-serif",
  textAlign:"center"
};

const logoStyle = {
  margin: 0,
  fontSize: '24px',
  letterSpacing: '1px',
  color: '#ECF0F1',
};

const navListStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};

const navItemStyle = {
  marginLeft: '30px',
};

const linkStyle = {
  color: '#ECF0F1',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: '500',
  transition: 'color 0.3s ease',
};

export default Header;
