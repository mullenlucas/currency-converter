import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CurrenciesPage from './displays/currencyPage';
import CurrencyDetails from './displays/detailsPage';

function App() {
  return (
    <div className="App">
      <Router className="App">
        <Nav title="Global Currency Converter" />
        <Routes>
          <Route path="/" element={<CurrenciesPage />} />
          <Route path="/details" element={<CurrencyDetails />} />
          <Route path="/*" element={<p>404 Page not found</p>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
