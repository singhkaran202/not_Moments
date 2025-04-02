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
import AlTalk2 from '../assets/images/Guest Lec/AlTalk2.png'
import MrUdayaKumar from '../assets/images/Guest Lec/MrUdayaKumar.jpg'
import Rajayogan from '../assets/images/Guest Lec/Rajayogan.jpg'
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
const gl2 = [
  '🌟 Save the Date!',

'Join us for an exclusive Alumni Talk with Rajprabhu Thangappa (Batch 2014) 🎓, Bridge Engineer at RK&K, Raleigh, USA 🌉✨',

'📢 Topic: Ground Motion Selection for Response Verification',
'📅 Saturday, 29th March 2025',
'🕖 07:00 PM - 08:00 PM IST',
'📍 Online (MS Teams)',

'Gain valuable insights from an expert in the field of bridge engineering and earthquake response!',
'Dont miss this chance to learn from a seasoned professional! 🚀'
];
const gl3 = [
  'Step into the future of Innovation in Civil Engineering! Witness an exclusive guest lecture by Mr. P. Udaya Kumar, Vice President - Projects at Bagmane Developers Pvt. Ltd., at MOMENTS25. With a distinguished career spanning over 25 years, Mr. Udaya Kumar has played a key role in executing large-scale commercial projects. His tenure as Construction Manager at Larsen & Toubro (L&T) further solidified his expertise in managing complex infrastructure developments. Recognized for his strategic leadership in high-value real estate and construction, he has been at the forefront of delivering state-of-the-art developments in India. Dont miss this opportunity to learn from an industry expert!'
];
const gl4 = [
  'Innovators of the future!! Join us at MOMENTS 25 as we welcome Prof(Retd). Rajayogan Palanichamy to deliver a Guest Lecture. A distinguished civil engineer with over four decades of experience. His illustrious career includes serving as Immediate Past President of the American Society of Civil Engineers (ASCE) India Section. Prof(Retd). Palanichamy has held esteemed academic positions, including Professor of Civil Engineering at institutions in Ethiopia and Eritrea, and has been actively involved in promoting sustainable engineering practices . Dont miss this opportunity to gain valuable insights from our revered expert!!'
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
//           description="🌟 Mark your calendars!
// Join us on 25th March 2025 at 3 PM for an exclusive Alumni Talk with Sujeet Kumar, Chief - Projects and Construction at Tata Steel! 🏗️✨
// Dive into a real-world Case Study on Slope Protection at Iron Ore Mines 🏞️ and gain insights from an industry veteran!
// "
          rules={gl1}
          url={AlTalk}
          // registerLink="https://moments.nitt.edu/"
          tag="Guest Lecture"
        />
        <GLCard
          title="Alumini-Talk (Ground motion selection for response verification)"
//           description="🌟 Save the Date!

// Join us for an exclusive Alumni Talk with Rajprabhu Thangappa (Batch 2014) 🎓, Bridge Engineer at RK&K, Raleigh, USA 🌉✨"
          rules={gl2}
          url={AlTalk2}
          // registerLink="https://moments.nitt.edu/"
          tag="Guest Lecture"
        />
        <GLCard
          title="Guest Lecture By Mr. P Udaykumar"
          // description="Step into the future of Innovation in Civil Engineering! Witness an exclusive guest lecture by Mr. P. Udaya Kumar, Vice President - Projects at Bagmane Developers Pvt. Ltd., at MOMENTS'25. With a distinguished career spanning over 25 years, Mr. Udaya Kumar has played a key role in executing large-scale commercial projects. His tenure as Construction Manager at Larsen & Toubro (L&T) further solidified his expertise in managing complex infrastructure developments. Recognized for his strategic leadership in high-value real estate and construction, he has been at the forefront of delivering state-of-the-art developments in India. Don’t miss this opportunity to learn from an industry expert!"
          rules={gl3}
          url={MrUdayaKumar}
          // registerLink="https://moments.nitt.edu/"
          tag="Guest Lecture"
        />
         <GLCard
          title="Guest Lecture By Prof(retired). Rajayogan Palanichamy"
          // description="Innovators of the future!! Join us at MOMENTS '25 as we welcome Prof(Retd). Rajayogan Palanichamy to deliver a Guest Lecture. A distinguished civil engineer with over four decades of experience. His illustrious career includes serving as Immediate Past President of the American Society of Civil Engineers (ASCE) India Section. Prof(Retd). Palanichamy has held esteemed academic positions, including Professor of Civil Engineering at institutions in Ethiopia and Eritrea, and has been actively involved in promoting sustainable engineering practices . Don't miss this opportunity to gain valuable insights from our revered expert!!"
          rules={gl4}
          url={Rajayogan}
          // registerLink="https://moments.nitt.edu/"
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
      {/* <Text>
        {description === ''
          ? 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam duaisdhusia dusa duashu duasdhusahd saudusahud ausdhuisahdui ddcdsfd'
          : description}
      </Text> */}
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
            {/* <Button
              colorScheme="blue"
              m={3}
              onClick={() => {
                window.location.assign(registerLink);
              }}
            >
              Register Now
            </Button> */}
          </Center>

          {/* </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Guestlecture;
