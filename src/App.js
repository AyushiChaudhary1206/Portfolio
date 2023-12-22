import './App.css';


import About from './Components/About';

import {
  HashRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Home from './Components/Home';
import Contact from './Components/Contact';

function App() {


  return (
    <>
   
    <HashRouter>
    <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/projects" element={<Projects/>}></Route>
      <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;

