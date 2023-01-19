import './App.css';
import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import About from '../about/About';
import Home from '../home/Home';
import User from '../user/User';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/user/:email" element={<About />}></Route>
      <Route path="/user/:name" element={<User />}></Route>
    </Routes>

   </BrowserRouter>
  );
}


export default App;
