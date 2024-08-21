import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart'; // Import Cart component
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'; // Import PlaceOrder component
import Footer from './components/Footer/Footer'; // Import Footer component
import LoginPopup from './components/LoginPopup/LoginPopup';
import About from './components/about/about'
const App = () => {

  const[showLogin,setShowLogin]=useState(false)
  return (
    <>

    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;
