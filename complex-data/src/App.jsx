import react, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyModal from "./components/MyModal";
import Home from "./components/Home";
import Spread from "./components/Spread";
import Login from "./components/Login";
import Destructuring from "./components/Destructuring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="navbar2">
          <Link to="/">Home</Link>
          <Link to="/spread">Spread</Link>
          <Link>
            <div className="dropdown">
              <div className="dropbtn">Objects 
                <i className="fa fa-caret-down"></i>
              </div>
              <div className="dropdown-content">
                <Link to="/destructuring">Destructuring</Link>
              </div>
            </div>
          </Link>
          <Link className="float-right"><MyModal/></Link>
        </div>
       {/* <Login/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/spread" element={<Spread/>} />
          <Route path="/destructuring" element={<Destructuring/>} />
        </Routes>         
      </BrowserRouter> 
    <p>
      Font Awesome <FontAwesomeIcon icon={faCoffee} />
    </p>
    </>
  )
}

export default App

