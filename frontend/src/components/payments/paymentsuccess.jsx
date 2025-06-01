import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <Container h={'90vh'} p={'16'}>
      <Heading my={'8'} textAlign={'center'}>
        You have a Pro Plan
      </Heading>
      <VStack
        pb={'16'}
        boxShadow={'lg'}
        alignItems={'center'}
        borderRadius="lg"
      >
        <Box
          w={'full'}
          bg={'green.400'}
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
          textAlign={'center'}
        >
          <Text color={'black'}>Payment Successful</Text>
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'4'} mt={'4'} spacing={'8'}>
            <Text>
              Congratulations, you are now a pro memeber. You have access to
              premium content.
            </Text>
            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>

        <Link to="/profile">
          <Button variant={'ghost'}>Go to Profile</Button>
        </Link>
        <Heading size={'xs'}>Reference ID: yfukjkgftr6468</Heading>
      </VStack>
    </Container>
  );
};
export default PaymentSuccess;