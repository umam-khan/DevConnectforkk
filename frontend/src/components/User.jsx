import { Box, Button, Image, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'


const User = () => {
    const [isLoading,setLoading] = useState(false)
    const profile_pics = ['https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png','https://pbs.twimg.com/media/EyZAnGRW8Ak_9CQ.jpg:large','https://pbs.twimg.com/media/Eslwk0hXIAU5oDG.jpg:large','https://pbs.twimg.com/media/E4v9IG2WEAMIToW.jpg:large','https://pbs.twimg.com/media/E0zh_UCWEAMbzjA?format=jpg&name=large','https://pbs.twimg.com/media/EuYy8vVXYAM4XQS.jpg:large']

    const navigate = useNavigate();
    const [users,setUsers] = useState();
    const token = localStorage.getItem('jwt');
    const getUsers = async()=>{
        return await axios.get('https://asadparkar.tech/devconnectb/api/user/users',{
            headers:{
                'Authorization':`bearer ${localStorage.getItem('jwt')}`
            }
        });
    }
    useEffect(()=>{
        setLoading(true);
        getUsers().then((response)=>{
            setUsers(response.data.users);
            setLoading(false)
        }).catch((error)=>{
            if (error.response.status === 401){
                localStorage.removeItem('jwt');
                navigate('/')
            }
        })
    },[localStorage.getItem('jwt')])
  return (
  <Box>
    <Box>
        {isLoading && <Box bg='white' padding={'15px'} borderRadius='15px' boxShadow={'xl'} height='200px' w='80%'>
            <Box>
                <Skeleton height={'50px'} w='50px' marginTop={'10px'} borderRadius='100%'/>
            </Box>
            <Box>
                <Skeleton height={'20px'} w='70%' marginTop={'10px'} />
                <Skeleton height={'40px'} w='40%' marginTop={'10px'} />
                <Skeleton height={'20px'} w='20%' marginTop={'10px'} />
            </Box>
        </Box> }

        {isLoading && <Box bg='white' padding={'15px'} borderRadius='15px' boxShadow={'xl'} height='200px' w='80%' marginTop={'10px'}>
            <Box>
                <Skeleton height={'50px'} w='50px' marginTop={'10px'} borderRadius='100%'/>
            </Box>
            <Box>
                <Skeleton height={'20px'} w='70%' marginTop={'10px'} />
                <Skeleton height={'40px'} w='40%' marginTop={'10px'} />
                <Skeleton height={'20px'} w='20%' marginTop={'10px'} />
            </Box>
        </Box>}

        {isLoading && <Box bg='white' padding={'15px'} borderRadius='15px' boxShadow={'xl'} height='200px' w='80%' marginTop={'10px'}>
            <Box>
                <Skeleton height={'50px'} w='50px' marginTop={'10px'} borderRadius='100%'/>
            </Box>
            <Box>
                <Skeleton height={'20px'} w='70%' marginTop={'10px'} />
                <Skeleton height={'40px'} w='40%' marginTop={'10px'} />
                <Skeleton height={'20px'} w='20%' marginTop={'10px'} />
            </Box>
        </Box>}
   </Box>


   {users?.map((index)=>(
    <Box bg={'white'} w={{base:'100%',sm:'80%'}} padding={'15px'} boxShadow='xl' borderWidth={'2px'}  borderRadius='15px' fontFamily='Poppins' marginTop={'15px'}>
        <Box display={{md:'flex', sm:'column'}} justifyContent={{md:'flex-start', sm:'center'}} alignItems={'center'}>
            <Box>
                <Image boxShadow={'sm'} borderRadius='100%' w='120px' h='120px' src={profile_pics[Math.floor(Math.random() * profile_pics.length)]} alt='profile pic' />
            </Box>
            <Box marginLeft={'20px'}>
                <Text fontWeight={'bold'} fontSize='xl'>{index.name}</Text>
                <Text>{index.bio}</Text>
                <Text color={'gray.500'} fontSize={'md'} marginTop={'10px'}>Interests</Text>
                <Box display={{base:'column',sm:'flex'}}>
                {index.skills.map((index)=>(
                    <Box fontSize={{base:'xs',sm:'sm'}} borderRadius='5px' border={'1px solid'} padding='2px' marginRight={'10px'} marginTop='5px' key={index}>{index}</Box>
                )) }
                </Box>
                <Button bg='#3B49DF' color={'white'} _hover={{bg:'#3E54AC'}} marginTop='20px'>View Profile</Button>
            </Box>
        </Box>
    </Box>
   ))}

  </Box>

  )
}


export default User