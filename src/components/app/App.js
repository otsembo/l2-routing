import './App.css';
import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import About from '../about/About';
import Home from '../home/Home';
import User, {Doubler} from '../user/User';
import { HashRouter as Router, Routes, Link, Route } from 'react-router-dom';

function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <Contact/>
    <About/>
   </div>
  );
}

function MainApp(){

  const numbers = [1,2,3,4,5,6,7,8,9,10]
  const links = numbers.map((item) => (<Link to={`/doubler/${item}`}>ITEM: {item}</Link>))

  return(
    <Router>
      <div>
        {/* All routes go here */}

        <div className="topNavBar">
            <Link  to="/">Home</Link>.
            <Link to="/contact">Contact</Link>
            <Link className="active" to="/about">About</Link>
            <Link to="/user/faith">USER FAITH</Link>
            <Link to="/doubler/1">DOUBLE 1</Link>
            {links}
        </div>

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route path='/user/:username' element={<User/>} />
          <Route path='/doubler/:num' element={<Doubler/>} />
        </Routes>
      </div>
    </Router>
  )

}



export default App;
export { MainApp }
