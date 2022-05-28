import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css'
import Forum from './components/Forum';
import Support from './components/Support';

const  App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Support />}/>
      
        <Route path='/Forum' element={<Forum />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App