import { useState } from "react";
import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Logo } from '../components/Logo'
import { PasswordField } from '../components/PasswordField'
import axios from 'axios';

export const Login = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  const signIn = async()=>{
    return await axios.post('https://asadparkar.tech/devconnectb/api/user/login',{
      email:email,
      password:password
    })
  }
  const handleClick = ()=>{
    const userDetails = ({
      email:email,
      password:password
    })
    signIn().then((response)=>{
      console.log(response.data)
      console.log(response.status)
    }).catch((error)=>{
      let status = error.response.status;
      let error_text = error.response.data
      console.log(error_text)
      console.log(status)
    })
    
  }
  return (
        <Box w='100%' h='100%' bgGradient='linear(to-r, blue.200, purple.500)' >
            <Stack w='100%' h='100%' spacing="8" py={{
              base: '12',
              md: '24',
            }}
            px={{
              base: '0',
              sm: '8',
            }} style={{display:'flex', justifyContent:'center', alignItems:'center'}} >
              <Box
              maxWidth="lg"
                py={{
                  base: '0',
                  sm: '8',
                }}
                px={{
                  base: '4',
                  sm: '10',
                }}
                bg={{
                  base: 'transparent',
                  sm: 'bg-surface',
                }}
                boxShadow={{
                  base: 'none',
                  sm: 'lg',
                }}
                borderRadius={{
                  base: 'none',
                  sm: 'xl',
                }}
                border="1px"
                backgroundColor="white"
              >
                <Stack spacing="6">
                <Logo />
                <Stack
                  spacing={{
                    base: '2',
                    md: '3',
                  }}
                  textAlign="center"
                >
                  <Heading
                    size={{
                      base: 'xs',
                      md: 'sm',
                    }}
                  >
                    Log in to your account
                  </Heading>
                  <HStack spacing="1" justify="center">
                    <Text color="muted">Don't have an account?</Text>
                    <Button variant="link" colorScheme="purple">
                      Sign up
                    </Button>
                  </HStack>
                </Stack>
              </Stack>
                <Stack spacing="6" mt="3rem">
                  <Stack spacing="5">

                    <FormControl>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input onChange={(e)=>{e.preventDefault();setEmail(e.target.value)}} id="email" type="email" />
                    </FormControl>

                    <FormControl>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input onChange={(e)=>{e.preventDefault();setPassword(e.target.value)}} id="password" type="password" />
                    </FormControl>                  </Stack>
                  <HStack justify="space-between">
                    <Checkbox defaultChecked>Remember me</Checkbox>
                    <Button variant="link" colorScheme="purple" size="sm">
                      Forgot password?
                    </Button>
                  </HStack>
                  <Stack spacing="6">
                    <Button variant="solid" colorScheme="purple" onClick={handleClick}>Sign in</Button>
                    <HStack>
                      <Text
                      fontSize="sm"
                      textAlign="center"
                      color='gray.600'
                    >
                      By continuing, you acknowledge that you have read, understood, and agree to our terms and condition
                    </Text>
                    </HStack>
                    {/* <OAuthButtonGroup /> */}
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>
  )
}
  
export default Login;
