import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './components/Routes';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CurrenciesPage from './displays/currencyPage';

function App() {
  return (
    <div className="App">
      <Router className="App">
        <Nav title="Global Currency Converter" routes={routes} />
        <Routes>
          <Route path="/" element={<CurrenciesPage />} />
          <Route path="/converter" element={<p>Converter Page</p>} />
          <Route path="/date" element={<p>Date Page</p>} />
          <Route path="/*" element={<p>404 Page not found</p>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
