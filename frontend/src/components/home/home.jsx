import React from 'react';
import { Link } from 'react-router-dom';
import {
  VStack,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import home from '../../../src/assets/images/home.jpg';
import './home.css';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'6'}
          >
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text
              fontSize={'xl'}
              children="Find Valuable Content at Reasonable Price"
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image className="animate" boxSize={'md'} src={home} />
        </Stack>
      </div>
      <Box p={'8'} bg={'blackAlpha.800'}>
        <Heading fontFamily={'body'} textAlign={'center'} color={'yellow.400'}>
          OUR BRANDS
        </Heading>
        <HStack
          justifyContent={'space-evenly'}
          color={'white'}
          fontSize={'3rem'}
          p={'4'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
    </section>
  );
};
export default Home;