import React from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  // Stack,
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
import PrimeVera from '../assets/images/Workshops/PrimeVera.jpg'
import Drones from '../assets/images/Workshops/Drones.jpg'
import Etabs from '../assets/images/Workshops/Etabs.jpg'
// import Comingsoon from '../components/comingsoon';

const workshop1 = [
  
];
// const workshop2 = [
//   'Worried about industry skills to add in your resume? MOMENTS’24 Workshops got you covered!!! This is your chance to impress potential employers, boost your project speed, and become an indispensable asset in the field.',
//   'Imagine revolutionising your civil engineering workflow with the power of Tekla at your fingertips! This exclusive workshop is not just about learning industry-leading BIM software - it is about taking your skills to the next level and gaining a serious edge in the job market.',
//   'Experienced instructors will guide you through creating 3D models, collaborating seamlessly on projects, and automating tasks for ultimate efficiency. Do not miss this opportunity to unlock your full potential as a civil engineer. ',
//   'Date & Time : 31th March 9:00 AM to 12:00 PM',
//   'Venue: Third Eye',
//   'Taken By: Mr. Ganesh S Sundaram (Project Engineer Esskay Structures)',
//   'Registration Fee: ₹250',
//   'Limited seats available, Register now! ',
// ];
const workshop2 = [
  
];
const workshop3 = [
  
];

const workshop4 = [
  
];

function Workshop() {
  return (
    <Box>
      <Navbar />
      <Flex
        w={'full'}
        h={'40vh'}
        background={banner}
        // backgroundColor={'rgba(85, 122, 12, 0.66)'}
        backgroundImage={banner}
        backgroundBlendMode={'overlay'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        back
      ></Flex>
{/* 

Description or rulebook thing for workshops
<Center as="section" w="100%">
          <Stack
            w="60%"
            rounded="md"
            borderWidth={1}
            zIndex={2}
            boxShadow={'md'}
            borderRadius={20}
            m={30}
            p={6}
            spacing={4}
          >
            <Center spacing={10} mb={25}>
              <Text fontSize={'3xl'} color={'black'}>
                For Workshop Description:-
              </Text>{' '}
              <Text ml={'0.5rem'} fontSize={'3xl'} color={'red'}>
              <a href="https://drive.google.com/file/d/1lFsp11KZ_U8ZYTwmF_REX2IAlll9PtUR/view?usp=sharing"> Click here</a>
              </Text>
            </Center>
            <Text color={'gray.600'} align={'center'} fontSize={'2xl'}>
            <b>Registration for workshops will give you free entry to technical events.</b>
            </Text>
          </Stack>
        </Center> */}


        
      {/* <Center>
        <Comingsoon />
      </Center> */}


      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={{ base: 10, md: 15 }}
        p={50}
      >
        <WorkshopCard
          title="Introduction to ETABS By CSI Delhi"
          description="Learn the fundamentals of structural analysis and design using ETABS at InfraInnovate. Get hands-on experience in modelling, analysis, and real-world applications from industry experts."
          tag="4th April"
          rules={workshop3}
          url={Etabs}
          registerLink="https://unstop.com/workshops-webinars/etabs-workshop-national-institute-of-technology-nit-trichy-1446430?lb=HiMnG0K1"
        /> 

      <WorkshopCard
          title="Introduction to Drone in Surveying By Bhushan Madival & Kousie"
          description="Discover how dreams are transforming land surveying and mapping at infrainnovate. Learn about aerial data collection, terrain modelling, and real-world applications in civil engineering"
          tag="5th April"
          rules={workshop1}
          url={Drones}
          registerLink="https://unstop.com/workshops-webinars/drones-in-surveying-workshop-national-institute-of-technology-nit-tiruchirappalli-1446314?lb=HiMnG0K1"
        />


        <WorkshopCard
          title="Introduction To Primavera P6 By Kaarthik G & Dr. Santhosh Loganathan"
          description="Learn the essentials of project scheduling and resource management using Primavera P6 at Infrainnovate. Gain hands-on experience in planning and controlling real-time projects."
          tag="6th April"
          rules={workshop2}
          url={PrimeVera}
          registerLink="https://unstop.com/workshops-webinars/primavera-p6-workshop-national-institute-of-technology-nit-tiruchirappalli-1445683"
        /> 
       </SimpleGrid> 

      {
        // Code for Site Under construction
        /* <Center as="section" w="100%">
          <Stack
            w="100%"
            rounded="md"
            borderWidth={1}
            zIndex={2}
            // boxShadow={'md'}
            borderRadius={20}
            m={30}
            p={6}
            spacing={4}
          >
            <Center spacing={10} mb={25}>
              <Text fontSize={'4xl'} color={'accent'}>
                Under
              </Text>{' '}
              <Text ml={'0.5rem'} fontSize={'4xl'}>
                Construction
              </Text>
            </Center>
            <Text color={'gray.600'} align={'center'}>
              Take Diversion <br /> ------------------&gt;
            </Text>
          </Stack>
        </Center> */
      }

      <Footer />
    </Box>
  );
}

function WorkshopCard({ title, description, rules, tag, url, registerLink }) {
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
          width="120px"
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

export default Workshop;
