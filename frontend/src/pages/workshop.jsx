import React from 'react';
import {
  Box,
  Flex,
  Center
} from '@chakra-ui/react';



// import {
//   Box,
//   Flex,
//   SimpleGrid,
//   Stack,
//   Badge,
//   Button,
//   Text,
//   useColorModeValue,
//   Center,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   ModalFooter,
//   UnorderedList,
//   ListItem,
//   Image,
// } from '@chakra-ui/react';


import banner from '../assets/images/banner.png';
import Navbar from '../components/nav';
import Footer from '../components/footer';
// import Tekla from '../assets/images/Workshop_Images_2024/Tekla_software.jpeg'
// import SAP2000 from '../assets/images/Workshop_Images_2024/SAP2000.jpeg'
import Comingsoon from '../components/comingsoon';

// const workshop1 = [
//   'Worried about industry skills to add in your resume? MOMENTS’24 Workshops got you covered!!! This is your chance to impress potential employers, boost your project speed, and become an indispensable asset in the field.',
//   'Imagine revolutionising your civil engineering workflow with the power of Tekla at your fingertips! This exclusive workshop is not just about learning industry-leading BIM software - it is about taking your skills to the next level and gaining a serious edge in the job market.',
//   'Experienced instructors will guide you through creating 3D models, collaborating seamlessly on projects, and automating tasks for ultimate efficiency. Do not miss this opportunity to unlock your full potential as a civil engineer. ',
//   'Date & Time : 31th March 9:00 AM to 12:00 PM',
//   'Venue: Third Eye',
//   'Taken By: Mr. Ganesh S Sundaram (Project Engineer Esskay Structures)',
//   'Registration Fee: ₹250',
//   'Limited seats available, Register now! ',
// ];

// const workshop3 = [
//   'Bridges constitute a significant portion of the national economy of a country and serve as a foundation for infrastructure development. As a civil engineer, it is essential to know about the basics of bridge engineering and technology. MOMENTS ’23 presents a workshop session on ‘Overview Of Bridge Engineering and Technology’, where budding engineers will gain deep understanding of modern bridge technology.',
//   'Registration fee: ₹200',
//   'Date & Time : 3rd Feb 2 PM to 4:30 PM',
//   'Check out the workshop description for more information.',
// ];

// const workshop4 = [
//   'To thrive as a pro in designing multi-storey buildings is still an aspiration for many. Fret Not! Moments 22 is here to present a workshop on ETABS, which is the ultimate software package for structural analysis. Udhaya Sankar Ramasamy would provide detailed mentoring all the way through.',
//   'Registration fee: ₹250',
//   'Date & Time : 10th Apr 2 PM to 5 PM',
// ];

function Workshop() {
  return (
    <Box>
      <Navbar />
      <Flex
        w={'full'}
        h={'40vh'}
        // background={banner}
        // backgroundColor={'rgba(122, 12, 32, 0.66)'}
        backgroundImage={banner}
        backgroundBlendMode={'overlay'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        back
      ></Flex>


{/* Description or rulebook thing for workshops */}
{/* <Center as="section" w="100%">
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


        
      <Center>
        <Comingsoon />
      </Center>




{/* 
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={{ base: 10, md: 15 }}
        p={50}
      >


      {/* <WorkshopCard
          title="Hands on workshop on SAP 2000 Software"
          description="Dive into the realm of structural engineering with SAP2000 workshop on March 29, from 2:30 PM to 5:30 PM, conducted by esteemed Assistant Professor Dr. Mashuda Sultana at Third Eye🏗️"
          tag="29th March 2:30 PM to 5:30 PM"
          rules={workshop2}
          url={SAP2000}
          registerLink="https://unstop.com/p/hands-on-workshop-of-sap2000-moments-national-institute-of-technology-tiruchirappalli-936177"
        /> */}


        {/* <WorkshopCard
          title="Hands on workshop on Tekla Software"
          description="Worried about industry skills to add in your resume?
          MOMENTS’24 Workshops got you covered!!! This is your chance to impress potential employers, boost your project speed, and become an indispensable asset in the field ."
          tag="31th March 9:00 AM to 12:00 PM"
          rules={workshop1}
          url={Tekla}
          registerLink="https://unstop.com/p/hands-on-workshop-of-tekla-moments-national-institute-of-technology-tiruchirappalli-936042"
        /> */}




        {/* <WorkshopCard
          title="‘Overview Of Bridge Engineering and Technology"
          description="Bridges constitute a significant portion of the national economy of a country and serve as a foundation for infrastructure development. As a civil engineer, it is essential to know about the basics of bridge engineering and technology. MOMENTS ’23 presents a workshop session on ‘Overview Of Bridge Engineering and Technology’, where budding engineers will gain deep understanding of modern bridge technology."
          tag="3rd Feb 2 PM to 4:30 PM"
          rules={workshop3}
          url="https://i.imgur.com/jY9L3hI.png"
          registerLink="https://forms.gle/cuBUYzh7vkC2B1YFA"
        /> */}




        {/* <WorkshopCard
          title="ETABS workshop"
          description="To thrive as a pro in designing multi-storey buildings is still an aspiration for many. Fret Not! Moments 22 is here to present a workshop on ETABS, which is the ultimate software package for structural analysis."
          tag="10th Apr 2 PM to 5 PM"
          rules={workshop4}
          url="https://i.imgur.com/bamZh62.png"
          registerLink="https://forms.gle/CUvxqvwiLxmYb9pN9"
        /> */}
      {/* </SimpleGrid> */}




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

// function WorkshopCard({ title, description, rules, tag, url, registerLink }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <Box
//       maxW="sm"
//       borderWidth="2px"
//       borderRadius="lg"
//       overflow="hidden"
//       p={15}
//       pb={20}
//       position="relative"
//     >
//       <Badge borderRadius="full" px="5" py="1">
//         {tag}
//       </Badge>

//       <Text as="h3" my={5} fontWeight="bold" fontSize="2xl">
//         {title}
//       </Text>
//       <Text>
//         {description === ''
//           ? 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam duaisdhusia dusa duashu duasdhusahd saudusahud ausdhuisahdui ddcdsfd'
//           : description}
//       </Text>
//       <Center>
//         <Button
//           mt={25}
//           size="md"
//           height="40px"
//           width="120px"
//           border="1px"
//           borderColor="#C0C1D1"
//           borderRadius={4}
//           zIndex={1}
//           _hover={{
//             textDecoration: 'none',
//             bg: useColorModeValue('accent', 'accent'),
//             color: 'white',
//           }}
//           onClick={onOpen}
//           style={{ position: 'absolute', bottom: '20px' }}
//         >
//           View more
//         </Button>
//       </Center>

//       <Modal
//         scrollBehavior="inside"
//         isOpen={isOpen}
//         onClose={onClose}
//         isCentered
//         motionPreset="slideInBottom"
//         size="xl"
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>{title}</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Center>
//               <Image height="400" src={url} alt={title} />
//             </Center>

//             <UnorderedList>
//               {rules.map((s, i) => {
//                 return <ListItem key={i}>{s}</ListItem>;
//               })}
//             </UnorderedList>
//           </ModalBody>

//           {/* <ModalFooter> */}
//           <Center>
//             <Button
//               colorScheme="blue"
//               m={3}
//               onClick={() => {
//                 window.location.assign(registerLink);
//               }}
//             >
//               Register Now
//             </Button>
//           </Center>

//           {/* </ModalFooter> */}
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }

export default Workshop;
