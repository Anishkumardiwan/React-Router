import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Components/Page/About';
import { Contact } from './Components/Page/Contact';
import { Home } from './Components/Page/Home';
import { Layout } from './Components/Layout';
import { Post } from './Components/Page/Post';

function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='about' element={ <About /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
