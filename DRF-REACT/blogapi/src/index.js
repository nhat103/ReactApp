import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
//import * as serviceWorker from './serviceWorker';//
import Header from './components/header';
import Footer from './components/footer';
import Register from './components/register';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

//serviceWorker.unregister();
