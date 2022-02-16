import React, {useState} from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Components/Page/About';
import { Contact } from './Components/Page/Contact';
import { Home } from './Components/Page/Home';
import { Navbar } from './Components/Navbar';
import { Post } from './Components/Page/Post';
import Dashboard from './Components/Page/Dashboard';
import Login from './Components/Page/Login';

function App() {

  const [isLogged, setIsLogged] = useState(false);
  let data = {
    st : 'User not logged in'
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<h1>Hello Anish Diwan</h1>} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/post/:category/:id' element={<Post />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={isLogged ? <Dashboard /> : <Navigate to='/login' state={data} replace /> } />
          <Route path='*' element={<h1 style={{ textAlign: 'center' }}>Error 404 Page not Found</h1>} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
