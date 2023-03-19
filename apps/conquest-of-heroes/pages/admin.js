import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';

import Layout from '../components/layout';
import SchemaImage from '../assets/admin_schema.png';

const LinkItems = [
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout>
      <Box height="screen">
        <SidebarContent
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
        <Box ml={{ base: 0 }} p="4" bg="gray.100" minH="100vh">
          {children}
        </Box>
      </Box>
      <Box
        height="screen"
        borderTop="1px"
        borderTopColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Heading as="h1" size="2xl">
          Content
        </Heading>
        <Image src={SchemaImage} alt="admin schema" width={500} height={500} />
      </Box>
    </Layout>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderTop="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      borderTopColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        justifyContent="space-between"
        mx={{ base: 4, lg: 0 }}
      >
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          mx={{ lg: 4 }}
        >
          Admin
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} mx={0}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <NextLink href="#" passHref>
      <Flex
        as="a"
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue.500',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        <Text>{children}</Text>
      </Flex>
    </NextLink>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Admin
      </Text>
    </Flex>
  );
};