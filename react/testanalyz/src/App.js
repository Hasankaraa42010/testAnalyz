// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TestPage from './components/TestPage';
import Document from './components/Document';
import FormPage from './components/FormPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div style={appContainerStyle}>
          <Routes>
            <Route path="/test" element={<TestPage />} />
            <Route path="/document" element={<Document />} />
            <Route path="/formPage" element={<FormPage />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

const appContainerStyle = {
  padding: '0 20px',
};

export default App;
