import Navbar from './component/Navbar';
import Home from './component/Carousel';
import Cities from './component/Cities';
import Footer from './component/Footer';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './style/App.css';

function App() {
  return (
    <div className='body'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='*' element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Cities' element={<Cities />}></Route>
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
