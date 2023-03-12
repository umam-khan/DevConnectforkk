import { useEffect, useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './Pages/Login';
import Home from './Pages/Home';
import {Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Threads from './Pages/Threads';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import NotFound from './components/NotFound.jsx';
import Explore from './Pages/Explore';
import ViewThread from './Pages/ViewThread';
import Apply from './Pages/Apply';
function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='home' element={<Home />}>
        <Route path='' element={<Threads />} />
        <Route path='explore' element={<Explore />} />
        <Route path='thread/:id' element={<ViewThread />} />
        <Route path='thread/apply/:id' element={<Apply />} />
      </Route>
      <Route path='register' element={<SignUp />} />
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
  )
}

export default App
