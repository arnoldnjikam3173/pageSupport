import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css'
import './services.css'
import Home from './components/Home';
import Forum from './components/Forum';
import Services from './components/Services';

const  App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Support' element={<Home />}/>
        <Route path='/Forum' element={<Forum />}/>
        <Route path='/Services' element={<Services />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App