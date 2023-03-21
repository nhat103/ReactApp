import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
