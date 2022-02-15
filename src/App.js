import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Components/Page/About';
import { Contact } from './Components/Page/Contact';
import { Home } from './Components/Page/Home';
import { Navbar } from './Components/Navbar';
import { Post } from './Components/Page/Post';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<h1>Hello Anish Diwan</h1>} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/post/:category' element={<Post />} />
          <Route path='*' element={<h1 style={{ textAlign: 'center' }}>Error 404 Page not Found</h1>} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
