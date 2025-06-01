import { Box, Heading, Stack, VStack } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box p={'4'} h={'10vh'} bg={'blackAlpha.900'}>
            <Stack direction={['column','row']}>
                <VStack alignItems={['center','flex-start']} width={'full'} >
                    <Heading fontSize={'md'} color={'white'}>All Rights Reserved</Heading>
                    <Heading fontFamily={'body'} fontSize={'sm'} color={'yellow'}>@rana1911</Heading>
                </VStack>
            </Stack>
        </Box>
    )
}
export default Footer;