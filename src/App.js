import React from 'react';

import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import About from './components/about';
import Menu from './components/menu';
import Reservations from './components/reservations';
import OrderOnline from './components/order';
import Login from './components/login';


function App() {
  return (
    <Router>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
