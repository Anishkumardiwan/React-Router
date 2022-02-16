import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Components/Page/About';
import { Contact } from './Components/Page/Contact';
import { Home } from './Components/Page/Home';
import { Layout } from './Components/Layout';
import { Post } from './Components/Page/Post';
import PostLayout from './Components/PostLayout';
import { PostDetails } from './Components/Page/PostDetails';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='about' element={ <About /> } />
            <Route path='contact' element={ <Contact /> } />
            <Route path='post' element={ <PostLayout /> } >
              <Route index element={ <Post /> } />
              <Route path=':category' element={ <PostDetails /> } />
            </Route>
            <Route index element={ <Home /> } />
            <Route path='*' element={<h1>Error Page not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
