import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import CategoryDetail from './pages/CategoryDetail';
import Layout from './components/Layout';
import IncomePage from './components/Income/IncomePage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/income" element={<IncomePage />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
