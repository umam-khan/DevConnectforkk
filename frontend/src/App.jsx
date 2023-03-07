import { useEffect, useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './Pages/Login';
import Home from './Pages/Home';
import {Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './Pages/SignUp';


function App() {
  // const token = localStorage.getItem('jwt');
  // const [tokenExists,setTokenExists] = useState(false)
  // useEffect(()=>{
  //   if (token){
  //     setTokenExists(true);
  //   }
  // },[])
  return (
    <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<SignUp />} />

    </Routes>
    </>
  )
}

export default App
