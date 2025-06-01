import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';

const Subscribe = () => {
  return (
    <Container h={'90'} py={'24'}>
      <Heading children="Welcome" my={'8'} textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        borderRadius={'lg'}
        spacing={'0'}
        alignItems={'stretch'}
      >
        <Box bg={'yellow.400'} p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text color={'black'} children="Pro Pack - $299.00" />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text
              children="Join pro pack and get access to all content"
            />
            <Heading size={'md'} children="$299 only"/>
            <Button my={'8'} width={'full'} colorScheme='yellow'>Buy Now</Button>
          </VStack>
        </Box>
        <Box p={'4'} bg={'blackAlpha.600'} borderRadius={'0 0 8px 8px'}>
            <Heading color={'white'} size={'sm'} textTransform={'uppercase'} children="100% refund on cancellation"/>
            <Text color={'white'} size={'xs'} children="*Terms & Conditions apply"/>
        </Box>
      </VStack>
    </Container>
  );
};
export default Subscribe;