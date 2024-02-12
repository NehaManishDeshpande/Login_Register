import React,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Women from './Women'
import Home from './home'
import Kid from './Kid'
import Profile from './Profile'
import Wishlist from './Wishlist'
import Cart from './Cart'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/women' element={<Women />}></Route>
      <Route path='/kid' element={<Kid />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/wishlist' element={<Wishlist />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
