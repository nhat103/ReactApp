import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        </Routes>
        <Main />
        <Sidebar />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
