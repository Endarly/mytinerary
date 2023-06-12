import React from 'react';
import './style/App.css';

import Footer from './component/Footer';
import Cities from './component/Cities';
import Carousel from './component/Carousel';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Carousel />
      <Cities />
      <Footer />
    </div>
  );
}

export default App;

