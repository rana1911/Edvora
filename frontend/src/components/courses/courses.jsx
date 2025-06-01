import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import web from '../../assets/images/web-dev.jpg';
const Course = ({
  add,
  creator,
  description,
  lectureCount,
  imgSrc,
  id,
  views,
  title,
}) => {
  const addToPlaylistHandler = ({ id }) => {
    console.log('added to playlist');
  };
  return (
    <VStack className='course' alignItems={['center', 'flex-start']}>
      <Image boxSize={'60'} objectFit={'contain'} src={imgSrc} />
      <Heading
        size={'md'}
        fontFamily={'sans-serif'}
        noOfLines={'3'}
        textAlign={['center', 'left']}
      >
        {title}
      </Heading>
      <Text noOfLines={'2'}>{description}</Text>
      <HStack>
        <Text textTransform={'uppercase'} fontWeight={'bold'}>
          Creator:
        </Text>
        <Text textTransform={'uppercase'} fontFamily={'body'}>
          {creator}
        </Text>
      </HStack>
      <Text fontSize={'xs'} textTransform={'uppercase'} fontWeight={'bold'}>
        Lectures - {lectureCount}
      </Text>
      <Text fontSize={'xs'} textTransform={'uppercase'} fontWeight={'bold'}>
        Views - {views}
      </Text>
      <Stack direction={['column', 'row']}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme="yellow"
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};
const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    'Web Development',
    'App Development',
    'Data Science',
    'Artificial Intelligence',
    'Machine Learning',
  ];
  return (
    <Container minH={'90vh'} py={'16'} maxW={'container.lg'}>
      <Heading children="All Courses" m={'8'} />

      <Input
        type="text"
        value={keyword}
        placeholder="Search a Course..."
        onChange={e => {
          setKeyword(e.target.value);
        }}
        focusBorderColor="yellow.400"
      />
      <HStack overflowX={'auto'}>
        {categories.map((item, index) => (
          <Button
            key={index}
            value={category}
            onClick={() => setCategory(item)}
            minW={'60'}
          >
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start','space-evenly']}
        alignItems={['center','flex-start']}
      >
        <Course
          creator={'Rana'}
          description={'Sample Description'}
          lectureCount={'3'}
          imgSrc={web}
          id={'Sample'}
          title={'Sample'}
          views={'10'}
        ></Course>
      </Stack>
    </Container>
  );
};
export default Courses;