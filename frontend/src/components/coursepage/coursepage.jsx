import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import intro from '../../assets/videos/intro.mp4';
import { useState } from 'react';
const CoursePage = () => {
  const [lectureNumber,setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'sad',
      title: 'Sample Video',
      description: 'sample description for sample video',
      video: {
        url: 'sample',
      },
    },
    {
        _id: 'sad2',
        title: 'Sample Video 2',
        description: 'sample description for sample video',
        video: {
          url: 'sample2',
        },
      },
      {
        _id: 'sad3',
        title: 'Sample Video 3',
        description: 'sample description for sample video',
        video: {
          url: 'sample3',
        },
      },
  ];
  return (
    <Grid px={'8'} mt={'24'} minH={'90'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
        style={{ borderRadius: '16px 16px 16px 16px'}}
        width={'100%'}
        
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={intro}
        ></video>

        <Heading
          m={'4'}
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        ></Heading>
        <Heading m={'4'}>Description</Heading>
        <Text m={'4'} children={lectures[lectureNumber].description} />
      </Box>
      <VStack ml={'4'}>
        {lectures.map((item, index) => (
          <button
          onClick={()=>setLectureNumber(index)}
            key={item._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '8px 8px 8px 8px'
            }}
          >
            <Text>
              #{index + 1} {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};
export default CoursePage;