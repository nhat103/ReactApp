import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './utils/PivateRoute'
import { AuthProvider } from './context/AuthContext'

// import HomePage from './pages/HomePage'
import Test from './pages/testPages'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route element={< PrivateRoute />}>
              <Route path='/' element={<Test />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </AuthProvider>

      </Router>
    </div>
  );
}

export default App;