import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import Reconciliation from './features/Reconciliation/Reconciliation';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reconciliation" element={<Reconciliation />} />
      </Routes>
    </Router>
  );
};

export default App;
