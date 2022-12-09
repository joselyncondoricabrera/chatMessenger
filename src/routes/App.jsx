import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import '../styles/global.scss';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route exact path={'/'} element={<Login />}/>

     </Routes>
    </BrowserRouter>
  
  );
}

export default App;
