import { Box, Button, FormControl, FormLabel, Heading, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Switch, Text, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Thread from './Thread'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'

const Threads = () => {
  // const [threads,setThreads] = useState();
  const threads = useRef();
  const [isLoading,setLoading] = useState(false);
  const array = ["Web Developer", "App Developer"]
  const [isThreadOpen,setThreadOpen] = useState(false)
  const getThreads = async()=>{
    setLoading(true)
    return await axios.get('https://asadparkar.tech/devconnectb/api/thread/threads')
  }

  //THIS IS FOR MODAL
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  useEffect(()=>{
    getThreads().then((response)=>{
      // setThreads(response.data.threads);
      threads.current = response.data.threads
      setLoading(false)
      console.log(threads.current.filter(threads=>threads.status.includes('closed')))
    });
  },[])
  return (
    <Box padding={{base:1,sm:15}} bg='#F5F7F7'>
      <Box display={'flex'} justifyContent='center' alignItems={'center'}>
        <Heading color={'black'} fontSize={{ base: 'xl', sm: '2xl' }} marginBottom='20px' marginLeft={'10px'}>
         All Opportunities
        </Heading>
        <IconButton
        onClick={onOpen}
        marginLeft={'auto'}
          colorScheme='blue'
          aria-label='Search database'
          icon={<SettingsIcon />}
        />

      </Box>

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
        {!isThreadOpen && threads.current?.map((item)=>(
          <Box marginTop={'15px'}>
            <Thread title={item.title} status={item.status} positions={item.positions} name={item.user_id?.name} mode={item.mode} author='Asad Parkar' applicants={item.application_ids.length} id={item._id}  />
          </Box>
        ))}
        
        {isThreadOpen && threads?.current?.filter(threads=>threads.status.includes('open')).map((item)=>(
          <Box marginTop={'15px'}>
            <Thread title={item.title} status={item.status} positions={item.positions} name={item.user_id?.name} mode={item.mode} author='Asad Parkar' applicants={item.application_ids.length} id={item._id}  />
          </Box>
        ))}
        </Box>

        <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Settings</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                      <Text>show open threads only</Text>
                      <Switch onChange={()=>setThreadOpen(!isThreadOpen)} isChecked={isThreadOpen} size='md' />                      
                    </Box>

                  </ModalBody>
                </ModalContent>
              </Modal>
    </Box>
  )
}

export default Threads