import React from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Menu from './components/Menu';
import Bookings from './components/Bookings';
import OrderOnline from './components/Order';
import Login from './components/Login';


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
