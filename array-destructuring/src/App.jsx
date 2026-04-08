import react, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyModal from "./components/MyModal";
import Home from "./components/Home";
import Spread from "./components/Spread";
import Login from "./components/Login";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter className="navbar">
       <div class="logo">MyLogo</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/spread">Spread</Link>
        </nav>
      {/* <div className="actions"><button>Login</button></div> */}
        <Login/>
        <Routes>
          {/* Define your route paths and the components they render */}
          <Route path="/" element={<Home />} />
          <Route path="/spread" element={<Spread />} />
        </Routes>         
      </BrowserRouter> 
      <MyModal/>
    </>
  )
}

export default App

