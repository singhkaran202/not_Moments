import React from 'react';

import {
  Box,
  Flex,
  SimpleGrid,
  Badge,
  Button,
  Text,
  useColorModeValue,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  // ModalFooter,
  UnorderedList,
  ListItem,
  Image,
} from '@chakra-ui/react';

import banner from '../assets/images/banner.png';
import Navbar from '../components/nav';
import Footer from '../components/footer';
import AlTalk from '../assets/images/Guest Lec/AluminTalk.png'
// import ComingSoonGL from '../components/gl-comingsoon'

const gl1 = [
'🌟 Mark your calendars!',
'Join us on 25th March 2025 at 3 PM for an exclusive Alumni Talk with Sujeet Kumar, Chief - Projects and Construction at Tata Steel! 🏗️✨',

'Dive into a real-world Case Study on Slope Protection at Iron Ore Mines 🏞️ and gain insights from an industry veteran!',

'📍 Online on MS Teams',
'🕒 03:00 PM - 04:00 PM',

'Link to join : https://teams.microsoft.com/l/meetup-join/19%3ameeting_N2JiMTUyNmMtOGNhYS00NjZkLTgwNzItZGMyYWViYjBlMTE0%40thread.v2/0?context=%7b%22Tid%22%3a%22a28450a7-db8c-4c33-912a-443311b22ddb%22%2c%22Oid%22%3a%2273a8f415-04ad-4ce6-bc26-7ef40e982059%22%7d',

'Don’t miss this opportunity to learn from one of the best in the field! 🚀'

];

function Guestlecture() {
  return (
    <Box>
      <Navbar />
      <Flex
        w={'full'}
        h={'40vh'}
        background={banner}
        // backgroundColor={'rgba(122, 12, 32, 0.66)'}
        backgroundImage={banner}
        backgroundBlendMode={'overlay'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        back
      ></Flex>
      {/* <Center>
          <ComingSoonGL />
      </Center> */}

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={{ base: 10, md: 15 }}
        p={50}
      >
        <GLCard
          title="Alumini-Talk (Case Study on Slope Protection at Iron Ore Mines)"
          description="🌟 Mark your calendars!
Join us on 25th March 2025 at 3 PM for an exclusive Alumni Talk with Sujeet Kumar, Chief - Projects and Construction at Tata Steel! 🏗️✨
Dive into a real-world Case Study on Slope Protection at Iron Ore Mines 🏞️ and gain insights from an industry veteran!
"
          rules={gl1}
          url={AlTalk}
          registerLink="https://moments.nitt.edu/"
          tag="Guest Lecture"
        />
      </SimpleGrid>
      <Footer />
    </Box>
  );
}


function GLCard({ title, description, rules, tag, url, registerLink }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      p={15}
      pb={20}
      position="relative"
    >
      <Badge borderRadius="full" px="5" py="1">
        {tag}
      </Badge>

      <Text as="h3" my={5} fontWeight="bold" fontSize="2xl">
        {title}
      </Text>
      <Text>
        {description === ''
          ? 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam duaisdhusia dusa duashu duasdhusahd saudusahud ausdhuisahdui ddcdsfd'
          : description}
      </Text>
      <Center>
        <Button
          mt={25}
          size="md"
          height="40px"
          width="100px"
          border="1px"
          borderColor="#C0C1D1"
          borderRadius={4}
          zIndex={1}
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('accent', 'accent'),
            color: 'white',
          }}
          onClick={onOpen}
          style={{ position: 'absolute', bottom: '20px' }}
        >
          View more
        </Button>
      </Center>

      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Image height="400" src={url} alt={title} />
            </Center>

            <UnorderedList>
              {rules.map((s, i) => {
                return <ListItem key={i}>{s}</ListItem>;
              })}
            </UnorderedList>
          </ModalBody>

          {/* <ModalFooter> */}
          <Center>
            <Button
              colorScheme="blue"
              m={3}
              onClick={() => {
                window.location.assign(registerLink);
              }}
            >
              Register Now
            </Button>
          </Center>

          {/* </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Guestlecture;
