import React from 'react';
import { Box, Button, Heading, Text, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Center height='100vh' width='100vw' bg='gray.100'>
      <Box textAlign='center'>
        <Heading as='h1' size='4xl' color='red.500'>
          404
        </Heading>
        <Text fontSize='xl' color='gray.600' mt={4}>
          Oops! Trang này không tồn tại.
        </Text>
        <Button as={Link} to='/' mt={6} colorScheme='teal' size='lg'>
          Về trang chủ
        </Button>
      </Box>
    </Center>
  );
};

export default NotFoundPage;
