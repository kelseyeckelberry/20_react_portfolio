import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import portfolio from './portfolio.json';

function App() {
  return (
    <Router>
      <div class="body">
        <Header />
        <About />
        {portfolio.map((portfolios) => (
          <Portfolio key={portfolios.id} {...portfolios} />
        ))}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
