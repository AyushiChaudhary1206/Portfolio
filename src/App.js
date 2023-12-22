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

function App() {


  return (
    <>
   
    <HashRouter>
    <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/projects" element={<Projects/>}></Route>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;

