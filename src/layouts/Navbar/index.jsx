import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Link,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton
} from '@chakra-ui/react';

import { MdMenu } from 'react-icons/md';
import { path } from '~/constants/routes';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg='teal.500' p={3} color='white'>
      <Flex align='center' justify='space-between' wrap='wrap'>
        <Link href={path.Home}>
          <Heading size='lg'>Fack Bill</Heading>
        </Link>
        <Flex align='center' display={{ base: 'none', md: 'flex' }} ml={10}>
          <Link
            href={path.Vietcombank}
            px={4}
            py={2}
            rounded='md'
            _hover={{ bg: 'teal.600' }}
          >
            Vietcombank
          </Link>
          <Link
            href={path.Momo}
            px={4}
            py={2}
            rounded='md'
            _hover={{ bg: 'teal.600' }}
          >
            Momo
          </Link>
          <Link
            href={path.Viettinbank}
            px={4}
            py={2}
            rounded='md'
            _hover={{ bg: 'teal.600' }}
          >
            Viettinbank
          </Link>
          <Link
            href={path.Vpbank}
            px={4}
            py={2}
            rounded='md'
            _hover={{ bg: 'teal.600' }}
          >
            VPbank
          </Link>
        </Flex>
        <IconButton
          aria-label='Open menu'
          icon={<MdMenu />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction='column' align='start'>
              <Link href={path.Home} mb={2} onClick={onClose}>
                Home
              </Link>
              <Link href={path.Vietcombank} mb={2} onClick={onClose}>
                Vietcombank
              </Link>
              <Link href={path.Momo} mb={2} onClick={onClose}>
                Momo
              </Link>
              <Link href={path.Viettinbank} mb={2} onClick={onClose}>
                Viettinbank
              </Link>{' '}
              <Link href={path.Vpbank} mb={2} onClick={onClose}>
                VPbank
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
