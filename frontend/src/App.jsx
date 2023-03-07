import { useEffect, useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './Pages/Login';
import Home from './Pages/Home';
import {Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Navbar from './components/navbar';


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App
