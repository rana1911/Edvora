import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    Textarea,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  const Request = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [course, setCourse] = useState();
    return (
      <Container h="90vh">
        <VStack h={'full'} justifyContent={'center'} spacing={'8'}>
          <Heading children="Request New Course" />
          <form style={{ width: '100%' }}>
            <Box marginY={'4'}>
              <FormLabel htmlFor="name" children="Name" />
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
              <FormLabel htmlFor="email" children="Email Address" />
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
              <FormLabel htmlFor="course" children="Course" />
              <Textarea
                required
                id="course"
                type="text"
                value={course}
                focusBorderColor="yellow.500"
                placeholder="Explain the course..."
                onChange={e => setCourse(e.target.value)}
              />
            </Box>
            <Button type="submit" colorScheme="yellow" minW={'80px'} marginY={'4'}>
              Send Mail
            </Button>
          </form>
        </VStack>
      </Container>
    );
  };
  export default Request;
  