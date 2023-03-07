import React, { useEffect } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const token = localStorage.getItem('jwt');

    useEffect(()=>{
        const token = localStorage.getItem('jwt');
        if (!token){
            navigate('/');
        }
    },[])
    const navigate = useNavigate();
    const handleClick = ()=>{
        localStorage.removeItem('jwt');
        navigate('/')
    }
  return (
    <div>
    <Button colorScheme='red' onClick={handleClick}>Logout</Button>
    </div>

  )
}

export default Home