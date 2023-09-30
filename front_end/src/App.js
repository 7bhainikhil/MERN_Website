import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';
import Signup from './component/Signup';
import Profile from './component/Event';
import Login from './component/Login';
import Service from './component/Service'
import Contact from './component/Contact';
import About from './component/About'
import Reviews from './component/Reviews';

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
