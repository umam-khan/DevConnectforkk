import { Box, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Thread from './Thread'

const Threads = () => {
  const [threads,setThreads] = useState();
  const array = ["Web Developer", "App Developer"]
  const getThreads = async()=>{
    return await axios.get('https://asadparkar.tech/devconnectb/api/thread/threads')
  }
  useEffect(()=>{
    getThreads().then((response)=>{
      setThreads(response.data.threads);
    });
  },[])
  return (
    <Box padding={{base:1,sm:15}} bg='#F5F7F7'>
       <Heading color={'black'} fontSize={{ base: 'xl', sm: '2xl' }} marginBottom='20px' marginLeft={'10px'}>
         All Opportunities
        </Heading>
        <Box display={'flex'} justifyContent='center' flexDirection={'column'}>
        {threads?.map((item)=>(
          <Box marginTop={'15px'}>
            <Thread title={item.title} status={item.status} positions={item.positions} mode={item.mode} author='Asad Parkar' applicants={item.application_ids.length}  />
          </Box>

        ))}

        </Box>
    </Box>
  )
}

export default Threads