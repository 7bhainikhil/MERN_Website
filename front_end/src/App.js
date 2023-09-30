import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Signup from './components/Signup';
import Profile from './components/Event';
import Login from './components/Login';
import Service from './components/Service'
import Contact from './components/Contact';
import About from './components/About'
import Reviews from './components/Reviews';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
