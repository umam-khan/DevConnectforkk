import { Box, Button, Link, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaLaptop,FaBiking,FaMapMarker,FaTrophy,FaUserFriends,FaUserAlt} from "react-icons/fa";
import axios from 'axios';

const ViewThread = () => {
    const {id} = useParams();
    const array = ['Web Developer','App Developer']
    const [index,setThread] = useState({});
    const getThread = async()=>{
        return await axios.get(`https://asadparkar.tech/devconnectb/api/thread/thread/${id}`)
    }
    useEffect(()=>{
        getThread().then((response)=>{
            setThread({
                title:response.data.thread.title,
                field:response.data.thread.field,
                problem:response.data.thread.problem,
                mode:response.data.thread.mode,
                location:response.data.thread.location,
                description:response.data.thread.description,
                positions:response.data.thread.positions,
                responsibilities:response.data.thread.responsibilities,
                prize:response.data.thread.prize,
                additionalDetail:response.data.thread.additionalDetail,
                application_ids:response.data.thread.application_ids,
            })
        }).catch((error)=>{
            console.log(error.response.data.error)
        })
    },[])
  return (
    <Box padding={'45px'} fontFamily='Poppins' >
        <Box bg='gray.100' padding={'10px'} borderRadius='15px'>
            <Text fontSize={'3xl'} fontWeight='bold'>{index.title}</Text>
            <Text fontSize={'2xl'} color='gray.500' fontWeight={'medium'}>{index.field}</Text>
            <Text fontSize={'lg'} marginTop='20px' fontWeight={'medium'} color='#3B49DF'>Problem Statement:</Text>
            <Text fontSize={'lg'}>{index.problem}</Text>

            <Box marginTop={'15px'} display='flex'>
                <Box display={'flex'} alignItems='center'>
                    <FaLaptop/>
                    <Text marginLeft={'10px'} marginRight='15px'>{index.mode}</Text>
                </Box>
                <Box display={'flex'} alignItems='center'>
                    <FaMapMarker/>
                    <Text marginLeft={'10px'}>{index.location}</Text>
                </Box>
            </Box>

            <Text fontSize={'lg'} marginTop='20px' fontWeight={'medium'} color='#3B49DF'>Description:</Text>
            <Text fontSize={'lg'} >{index.description}</Text>

            <Text fontSize={'lg'} marginTop='20px' fontWeight={'medium'} color='#3B49DF'>Offering Positions</Text>
            <Box display={'flex'} padding='5px'>
                {index.positions?.map((index)=>(
                    <Box borderRadius={'5px'} color={'gray.600'} padding='5px' border='1px solid #000' marginRight={'15px'} key={index}>
                        <Text>{index}</Text>
                    </Box>
                ))}
            </Box>

            <Text fontSize={'lg'} marginTop='20px' fontWeight={'medium'} color='#3B49DF'>Key responsibilities:</Text>
            <Text fontSize={'lg'}>
            {index.responsibilities}
            </Text>

            <Text fontSize={'lg'} marginTop='20px' fontWeight={'medium'} color='#3B49DF'>Rewards <FaTrophy/> </Text>
            <Text fontSize={'lg'}>
            {index.prize}
            </Text>

            <Text fontSize={'lg'} marginTop='20px' fontWeight={'medium'} color='#3B49DF'>Additional Details:</Text>
            <Text fontSize={'lg'} >
            {index.additionalDetail}
            </Text>

            <Box display={'flex'} alignItems='center' color={'gray.500'} marginTop='40px'>
                <Box marginRight={'10px'}>
                    <FaUserAlt />
                </Box>
                <Box fontSize={'xl'} fontWeight='bold' key={index} >
                    {index.application_ids?.length}+ Applicants
                </Box>
            </Box>

            <Button marginTop={'25px'} _hover={{bg:'#3E54AC'}} color={'white'} bg={'#3B49DF'}>Apply Now</Button>
        </Box>
    </Box>
  )
}

export default ViewThread