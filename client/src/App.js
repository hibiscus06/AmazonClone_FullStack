import React from 'react';
import Navbaar from './component/header/Navbaar';
import NewNavbar from './component/newnavbar/NewNavbar';
import Main from './component/home/Main';
import Footer from './component/footer/Footer';
import SignIn from './component/signup_signin/SignIn';
import SignUp from './component/signup_signin/SignUp';
import Cart from './component/cart/Cart';
import Buynow from './component/buynow/Buynow';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
  <>
  <Navbaar />
  <NewNavbar />
  <Routes>
    <Route path = "/" element={<Main/>} />
    <Route path = "/login" element={<SignIn/>} />
    <Route path = "/register" element={<SignUp/>} />
    <Route path = "/getproductsone/:id" element={<Cart/>} />
    <Route path = "/buynow" element={<Buynow/>} />
  </Routes>
  <Footer />

  </> 
  );
}

export default App;


