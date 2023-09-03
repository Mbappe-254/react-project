import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import IceDirectoryPage from './pages/IceDirectoryPage';
import IceCreamDetailPage from './pages/IceCreamDetailPage';
import './App.css';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<IceDirectoryPage />} />
        <Route
          path='directory/:icecreamId'
          element={<IceCreamDetailPage />}

        />
        <Route path='about' element={<AboutPage />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
