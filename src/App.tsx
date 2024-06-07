import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import Reconciliation from './features/Reconciliation/Reconciliation';
import MainLayout from './layouts/MainLayout';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reconciliation" element={<Reconciliation />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
