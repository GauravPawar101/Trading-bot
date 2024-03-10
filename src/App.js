import React from 'react';
import './App.css';
import Main from './components/Main';
import About from './components/About';
import Nav from './components/Nav';
import Features from './components/features';
import { BrowserRouter as Router, Outlet, Route, Link, Routes, Switch } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
        <Nav/>
        <div>
          <Routes>
            <Route path="/" element={<Main/>}>
              </Route>
            <Route path="/about" element={<About/>}>
              </Route>
            <Route path="/features" element={<Features/>}>
              </Route>
          </Routes>
          <Footer />
        </div>
    </Router>
        
  );
};

export default App;
