import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, FormControl, Input, Select, Text, Textarea } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Apply = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const {title,id,positions} = location.state;
    const [position,setPosition] = useState('')
    const [work,setWork] = useState();
    const [project_link,setProjectLink] = useState();
    const [experience,setExperience] = useState()
    const [project,setProject] = useState()
    const options = ['App Developer',"Web Developer"]

    const [isError,setError] = useState(false);
    const [errorMessage,setErrorMessage] = useState('');
    const [isSubmitted,setSubmitted] = useState(false)

    const sendRequest = async()=>{
        return await axios.post('https://asadparkar.tech/devconnectb/api/application/post',{
            position:position,
            why_work:work,
            best_project:project,
            best_project_link:project_link,
            experience:experience,
            thread:id,
            status:'pending'
        },{
            headers:{
                'Authorization':`bearer ${localStorage.getItem('jwt')}`
            }
        })
    }

    const handleSubmit = ()=>{
        if (!position || !work || !project || !project_link || !experience){
            setError(true);
            setErrorMessage("Please fill all asked details before applying!")
            return;
        }
        sendRequest().then((response)=>{
            if (response.status === 200){
                setError(false);
                setSubmitted(true);
                return;
            }
        }).catch((err)=>{
            setError(true);
            setErrorMessage('Sorry an Error Occurred!')
            return;
        })
    }
  return (
    <Box padding={'40px'} fontFamily='Poppins'>
    
    {!isSubmitted && <Box>
        <Text fontSize={'xl'} >Applying for <span style={{fontWeight:'medium', color:'#3B49DF'}}>{title}</span></Text>
        <Text fontSize={'lg'} fontWeight={'bold'} marginTop='20px'>Apply as</Text>

        <Select placeholder='Select option' marginTop={'20px'} borderColor='black' value={position} onChange={(e)=>{
            setPosition(e.target.value);
        }}>
        {positions?.map((index)=>(
            <option key={index} value={index}>{index}</option>
        ))}
        </Select>

        <Text marginTop={'30px'} fontSize={'lg'} color={'gray.500'} fontWeight='medium'>Why should you work with us?</Text>
        <Textarea placeholder='Tell us why you want to work with us' onChange={(e)=>{setWork(e.target.value)}} fontSize='md' borderColor={'black'} maxLength={1000} size={'lg'} />

        <Text marginTop={'30px'} fontSize={'lg'} color={'gray.500'} fontWeight='medium'>Tell us your best Project</Text>
        <Textarea placeholder='Desribe and tell us about your best project in detail related to the position you are applying for' onChange={(e)=>{setProject(e.target.value)}} fontSize='md' borderColor={'black'} maxLength={1000} size={'lg'} />

        <Text marginTop={'30px'} fontSize={'lg'} color={'gray.500'} fontWeight='medium'>Best Project Link</Text>
        <Input onChange={(e)=>{
            setProjectLink(e.target.value)
        }} placeholder='Github link of the project mentioned above' borderColor={'black'}  />

        <Text marginTop={'30px'} fontSize={'lg'} color={'gray.500'} fontWeight='medium'>Tell us about your previous experiences working with a team</Text>
        <Textarea placeholder='Mention here your previous experiences on working with a team. Any comittee work done by you or your internships should be in here' onChange={(e)=>{setExperience(e.target.value)}} fontSize='md' borderColor={'black'} maxLength={1500} size={'lg'} />

    {isError && <Alert marginTop={'10px'} status='error'>
        <AlertIcon />
        {errorMessage}
    </Alert> }

    <Button marginTop={'25px'} _hover={{bg:'#3E54AC'}} color={'white'} bg={'#3B49DF'} onClick={handleSubmit}>Apply</Button>
    </Box>} 

        {isSubmitted && <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
    >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
            Application submitted!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
            Thanks for submitting your application. Sit back and relax till our team reviews your application 😺
        </AlertDescription>
        <Button boxShadow={'lg'} onClick={()=>{
            navigate(`/home/thread/${id}`)
        }}>Back</Button>
        </Alert>}
    </Box>


  )
}

export default Apply