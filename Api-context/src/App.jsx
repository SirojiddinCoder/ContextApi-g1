import React from 'react';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css'

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav style={{ backgroundColor: darkMode ? '#333' : '#eee', color: darkMode ? '#fff' : '#000' }}>
      <ul className='nav-items'>
        <li className='nav-item'><Link className="nav-link" to="/">Home</Link></li>
        <li className='nav-item'><Link className="nav-link" to="/about">About</Link></li>
        <li className='nav-item'><Link className="nav-link" to="/contact">Contact</Link></li>
        <li className='nav-item'>
          <button className='btn' onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
