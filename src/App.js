import React from 'react';

import './App.css';
import Footer from './components/1Footer';
import Header from './components/1Header';
import Nav from './components/1Nav';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/1Main';
import About from './components/1About';
import Menu from './components/1Menu';
import Bookings from './components/1Bookings';
import OrderOnline from './components/1Order';
import Login from './components/1Login';


function App() {
  return (
    <Router>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
