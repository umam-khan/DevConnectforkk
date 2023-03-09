import React, { useEffect } from 'react'
import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Threads from './Threads';
import Sidebar from '../components/Sidebar';
import { Outlet } from "react-router-dom"
const Home = () => {
    const token = localStorage.getItem('jwt');

    useEffect(()=>{
        const token = localStorage.getItem('jwt');
        if (!token){
            navigate('/');
        }
    },[token])
    const navigate = useNavigate();
    const handleClick = ()=>{
        localStorage.removeItem('jwt');
        navigate('/')
    }
  return (
    <Box display={'flex'} marginTop='10vh' height={'90vh'} overflow='hidden'>
      <Box>
      <Sidebar />
      </Box>
      <Box width={'100%'} overflowY={'scroll'} >
      <Outlet />
      </Box>
    {/* <Button colorScheme='red' onClick={handleClick}>Logout</Button> */}
    </Box>

  )
}

export default Home