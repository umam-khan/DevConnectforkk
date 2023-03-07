import React from 'react'
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
  import { Logo } from './Logo'
  import { PasswordField } from './PasswordField'

const SignUp = () => (
    <Box
  w='100%' h='100%' bgGradient='linear(to-r, blue.200, purple.500)'
  >
    <Stack w='100%' h='100%' spacing="8" py={{
      base: '12',
      md: '24',
    }}
    px={{
      base: '0',
      sm: '8',
    }} >
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
            Create an account
          </Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">Already have an account?</Text>
            <Button variant="link" colorScheme="purple">
              Log in
            </Button>
          </HStack>
        </Stack>
      </Stack>
        <Stack spacing="6" mt="3rem">
          <Stack spacing="5">
          <FormControl>
              <FormLabel htmlFor="text">Name</FormLabel>
              <Input id="text" type="text" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <Stack spacing="6">
            <Button variant="solid" colorScheme="purple">Sign in</Button>
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

export default SignUp;