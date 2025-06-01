import {
  Box,
  Button,
  Container,
  FormLabel,
  HStack,
  Heading,
  Input,
  VStack
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: Add registration logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading>Sign Up for Coursebundler</Heading>
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box marginY={'4'}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              required
              id="name"
              type="text"
              value={name}
              focusBorderColor="yellow.500"
              placeholder="Enter Your Name"
              onChange={e => setName(e.target.value)}
            />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              required
              id="email"
              type="email"
              value={email}
              focusBorderColor="yellow.500"
              placeholder="abc@gmail.com"
              onChange={e => setEmail(e.target.value)}
            />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              required
              id="password"
              type="password"
              value={password}
              focusBorderColor="yellow.500"
              placeholder="Enter Your Password"
              onChange={e => setPassword(e.target.value)}
            />
          </Box>

          <HStack justifyContent={'space-between'} marginY={'4'}>
            <Button type="submit" colorScheme="yellow" minW={'80px'}>
              Register
            </Button>
            <Link to="/login">
              <Button fontSize={'sm'} variant={'link'}>
                Already have an account?
              </Button>
            </Link>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
