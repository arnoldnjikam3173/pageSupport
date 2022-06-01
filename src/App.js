import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css'
import './styleforum.css'
import Home from './components/Home';
import Forum from './components/Forum';

const  App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Support' element={<Home />}/>
        <Route path='/Forum' element={<Forum />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App