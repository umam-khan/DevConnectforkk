import { Box, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Thread from './Thread'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const Threads = () => {
  const [threads,setThreads] = useState();
  const [isLoading,setLoading] = useState(false);
  const array = ["Web Developer", "App Developer"]
  const getThreads = async()=>{
    setLoading(true)
    return await axios.get('https://asadparkar.tech/devconnectb/api/thread/threads')
  }
  useEffect(()=>{
    getThreads().then((response)=>{
      setThreads(response.data.threads);
      setLoading(false)
    });
  },[])
  return (
    <Box padding={{base:1,sm:15}} bg='#F5F7F7'>
       <Heading color={'black'} fontSize={{ base: 'xl', sm: '2xl' }} marginBottom='20px' marginLeft={'10px'}>
         All Opportunities
        </Heading>

        {isLoading && <div style={{background:'#FFFFFF', padding:'30px', width:'90%', borderRadius:'20px', boxShadow:'5px 5px 15px gray', height:'350px'}}>
          <Skeleton height={'20px'} w='90%' />
          <Skeleton height={'20px'} w='50%' marginTop={'10px'} />
          <Skeleton height={'100px'} w='20%' marginTop={'15px'} />
          <Skeleton height={'45px'} w='10%' marginTop={'50px'} />
        </div>}

        {isLoading && <div style={{background:'#FFFFFF', padding:'30px', width:'90%', borderRadius:'20px', boxShadow:'5px 5px 15px gray', marginTop:'25px'}}>
          <Skeleton height={'20px'} w='90%' />
          <Skeleton height={'20px'} w='50%' marginTop={'10px'} />
          <Skeleton height={'100px'} w='20%' marginTop={'15px'} />
          <Skeleton height={'45px'} w='10%' marginTop={'50px'} />
        </div>}





        <Box display={'flex'} justifyContent='center' flexDirection={'column'}>
        {threads?.map((item)=>(
          <Box marginTop={'15px'}>
            <Thread title={item.title} status={item.status} positions={item.positions} mode={item.mode} author='Asad Parkar' applicants={item.application_ids.length} id={item._id}  />
          </Box>
        ))}

        </Box>
    </Box>
  )
}

export default Threads