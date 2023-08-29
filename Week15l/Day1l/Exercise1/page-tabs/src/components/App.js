import React, { useState } from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
import './App.css'; 

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={() => handlePageChange('home')}>Home</button>
            </li>
            <li>
              <button onClick={() => handlePageChange('about')}>About</button>
            </li>
            <li>
              <button onClick={() => handlePageChange('services')}>Services</button>
            </li>
            <li>
              <button onClick={() => handlePageChange('contact')}>Contact</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;