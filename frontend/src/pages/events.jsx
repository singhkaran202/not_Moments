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
  // UnorderedList,
  // ListItem,
  Image,
} from '@chakra-ui/react';

import banner from '../assets/images/banner.png';
import Navbar from '../components/nav';
import Footer from '../components/footer';
// import ComingSoon from '../components/events-comingsoon';
import BidToBuild from '../assets/images/Events/BidToBuild.jpg'
import StructuraQuest from '../assets/images/Events/StructuraQuest.jpg'
import BuildSmart from '../assets/images/Events/BuildSmart.jpg'
import RoadSafety from '../assets/images/Events/RoadSafety.jpg'
export default function Events() {
  return (
    <Box>
      <Navbar />
      <Flex
        w={'full'}
        h={'40vh'}
        backgroundImage={banner}
        // backgroundColor={'rgba(12, 47, 122, 0.66)'}
        backgroundBlendMode={'overlay'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        back
      ></Flex>

        {/* <Center as="section" w="100%">
          <Stack
            w="50%"
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
              <Text ml={'0.5rem'} fontSize={'3xl'}>
                RuleBook
              </Text>
            </Center>
            <Text color={'red.600'} align={'center'} fontSize={'2xl'}>
            <a href="https://drive.google.com/file/d/1a6Avgr8XsoYCluZkZbeofe96oOaJh1Dx/view?usp=sharing"> <b> Click here</b></a>
            </Text>
          </Stack>
        </Center> */}

      {/* <Center>
          <ComingSoon />
      </Center> */}



      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={{ base: 10, md: 15 }}
        p={50}
      >
        <Event1 />
        <Event2 />
        <Event3 />
        <Event4 />
       
        
      </SimpleGrid>

      <Footer />
    </Box>
  );
}




// function Event0() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Box
//         maxW="sm"
//         borderWidth="2px"
//         borderRadius="lg"
//         overflow="hidden"
//         p={15}
//         pb={20}
//         position="relative"
//       >
//         <Badge borderRadius="full" px="5" py="1">
//           event{' '}
//         </Badge>
//         <Text as="h3" my={5} fontWeight="bold" fontSize="2xl" color={'accent'}>
//           {' '}
//           CAMPUS AMBASSADOR PROGRAM{' '}
//         </Text>{' '}
//         <Text>
//           {' '}
//           Welcome to our Campus Ambassador Program, where leadership meets innovation, and tomorrow's pioneers are nurtured today. This program
//           is designed to empower students with the skills, resources, and opportunities needed to become influential voices within their campus communities and beyond.{' '}
//         </Text>{' '}
//         <Center>
//           <Button
//             mt={25}
//             size="md"
//             height="40px"
//             width="100px"
//             border="1px"
//             borderColor="#C0C1D1"
//             borderRadius={4}
//             zIndex={1}
//             _hover={{
//               textDecoration: 'none',
//               bg: useColorModeValue('accent', 'accent'),
//               color: 'white',
//             }}
//             onClick={onOpen}
//             style={{ position: 'absolute', bottom: '20px' }}
//           >
//             View more
//           </Button>
//         </Center>
//         <Modal
//           scrollBehavior="inside"
//           isOpen={isOpen}
//           onClose={onClose}
//           isCentered
//           motionPreset="slideInBottom"
//           size="xl"
//         >
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader color={'accent'}> BUILD IT </ModalHeader>{' '}
//             <ModalCloseButton />
//             <ModalBody>
//               <Center>
//                 <a href="https://i.imgur.com/TlULIHZ.png" target="_blank">
//                   <Image
//                     height="400"
//                     src="https://i.imgur.com/TlULIHZl.png"
//                     alt="BUILD IT"
//                   />
//                 </a>
//               </Center>
//               <Text as="h3" my={5} fontWeight="bold" fontSize="xl">
//                 {' '}
//                 Event description{' '}
//               </Text>{' '}
//               <Text as="p" my={5}>
//                 {' '}
//                 Designing a building from scratch takes a lot of patience.If you
//                 are someone who has an eye for perfection, the event "BUILD IT"
//                 is for you.{' '}
//                 <br />
//               <br />
//               Go check out the rule book for more information.
//               </Text>
             
//             </ModalBody>
//             {/* <ModalFooter> */}{' '}
//             <Center>
//               <Button
//                 colorScheme="blue"
//                 m={3}
//                 onClick={() => {
//                   window.location.assign('https://forms.gle/62BBDXtCck7RFppQ9');
//                 }}
//               >
//                 Register Now{' '}
//               </Button>{' '}
//             </Center>
//             {/* </ModalFooter> */}{' '}
//           </ModalContent>{' '}
//         </Modal>
//       </Box>
//     </>
//   );
// }


function Event1() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
          event{' '}
        </Badge>
        <Text as="h3" my={5} fontWeight="bold" fontSize="2xl" color={'accent'}>
          {' '}
          BID TO BUILD{' '}
        </Text>{' '}
        <Text style={{ textAlign: 'justify' }}> 
          
          
          Construction Bidding challenge tests cost estimation and negotiation skills. <br></br>Teams submit tenders in Round 1 and negotiate bids in Round 2 to win the project.
          
        </Text>
        
        <Center>
          <Button
            mt={25}
            size="md"
            height="40px"
            width="130px"
            border="1px"
            borderColor="#C0C1D1"
            borderRadius={4}
            zIndex={1}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('accent', 'accent'),
              color: 'white',
            }}
            color={'black'}
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
            <ModalHeader color={'accent'}> BID TO BUILD </ModalHeader>{' '}
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <a href="https://i.imgur.com/TlULIHZ.png" target="_blank">
                  <Image
                    height="400"
                    src={BidToBuild}
                    alt="BidToBuild"
                  />
                </a>
              </Center>
              <Text as="h3" my={5} fontWeight="bold" fontSize="xl">
                {' '}
                Event description{' '}
              </Text>{' '}
              <Text as="p" my={5}>
                {' '}
                Tender Submission
                {' '}
                <br />
                Cost Estimation
              <br />
              Bid Negotiation
              <br />
              Project Award
              <br />
              <br />
              Registration Fee: Rs.50
              <br />
              Prize Money:Rs.10,000
              {/* <br />
              <br />
              Go check out the rule book for more information. */}
              </Text>
              
            </ModalBody>
            {' '}
            <Center>
              <Button
                colorScheme="blue"
                m={3}
                onClick={() => {
                  window.location.assign('https://unstop.com/competitions/bid-to-build-national-institute-of-technology-trichy-1436101?lb=HiMnG0K1&utm_medium=Share&utm_source=shortUrl');
                }}
              >
                Register Now{' '}
              </Button>{' '}
            </Center>
            {' '}
          </ModalContent>{' '}
        </Modal>
      </Box>
    </>
  );
}

function Event2() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
          event{' '}
        </Badge>
        <Text as="h3" my={5} fontWeight="bold" fontSize="2xl" color={'accent'}>
          {' '}
          BUILD SMART{' '}
        </Text>{' '}
        <Text style={{ textAlign: 'justify' }}> 
          
          
          <strong>Build Smart </strong>is a two-round competition on structural stability and architectural design.<br></br> Teams analyze structures in Round 1 and create floor plans in Round 2 using AutoCAD. 
          
        </Text>
        
        <Center>
          <Button
            mt={25}
            size="md"
            height="40px"
            width="130px"
            border="1px"
            borderColor="#C0C1D1"
            borderRadius={4}
            zIndex={1}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('accent', 'accent'),
              color: 'white',
            }}
            color={'black'}
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
            <ModalHeader color={'accent'}> BUILD SMART </ModalHeader>{' '}
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <a href="https://i.imgur.com/TlULIHZ.png" target="_blank">
                  <Image
                    height="400"
                    src={BuildSmart}
                    alt="BuildSmart"
                  />
                </a>
              </Center>
              <Text as="h3" my={5} fontWeight="bold" fontSize="xl">
                {' '}
                Event description{' '}
              </Text>{' '}
              <Text as="p" my={5}>
                {' '}
                Engineering Analysis
                {' '}
                <br />
                Space Utilisation
              <br />
              Design Accuracy
              <br />
              Practical Feasibility
              <br />
              <br />
              Registration Fee: Rs.50
              <br />
              Prize Money:Rs.7000
              {/* <br />
              <br />
              Go check out the rule book for more information. */}
              </Text>
              
            </ModalBody>
            {' '}
            <Center>
              <Button
                colorScheme="blue"
                m={3}
                onClick={() => {
                  window.location.assign('https://unstop.com/competitions/build-smart-national-institute-of-technology-trichy-1436000?lb=HiMnG0K1&utm_medium=Share&utm_source=shortUrl');
                }}
              >
                Register Now{' '}
              </Button>{' '}
            </Center>
            {' '}
          </ModalContent>{' '}
        </Modal>
      </Box>
    </>
  );
}


function Event3() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
          event{' '}
        </Badge>
        <Text as="h3" my={5} fontWeight="bold" fontSize="2xl" color={'accent'}>
          {' '}
          ROAD TO SAFETY{' '}
        </Text>{' '}
        <Text style={{ textAlign: 'justify' }}> 
          
          
          <strong>Road to Safety </strong>is a two-round competition where teams propose innovative road safety solutions for Tamil Nadu.<br></br>Shortlisted Teams will pitch thier ideas at Moments'25, competing on feasibility, impact, and originality. 
          
        </Text>
        
        <Center>
          <Button
            mt={25}
            size="md"
            height="40px"
            width="130px"
            border="1px"
            borderColor="#C0C1D1"
            borderRadius={4}
            zIndex={1}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('accent', 'accent'),
              color: 'white',
            }}
            color={'black'}
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
            <ModalHeader color={'accent'}> ROAD TO SAFETY </ModalHeader>{' '}
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <a href="https://i.imgur.com/TlULIHZ.png" target="_blank">
                  <Image
                    height="400"
                    src={RoadSafety}
                    alt="RoadToSafety"
                  />
                </a>
              </Center>
              <Text as="h3" my={5} fontWeight="bold" fontSize="xl">
                {' '}
                Event description{' '}
              </Text>{' '}
              <Text as="p" my={5}>
                {' '}
                Paper Presentation
                {' '}
                <br />
                Case Study
              <br />
              Solution Report
              <br />
              The Pitch for Safety
              <br />
              <br />
              Registration Fee: Rs.50
              <br />
              Prize Money:Rs.9000
              {/* <br />
              <br />
              Go check out the rule book for more information. */}
              </Text>
              
            </ModalBody>
            {' '}
            <Center>
              <Button
                colorScheme="blue"
                m={3}
                onClick={() => {
                  window.location.assign('https://unstop.com/competitions/road-to-safety-department-of-civil-engineering-national-institute-of-technology-trichy-1435306?lb=HiMnG0K1&utm_medium=Share&utm_source=shortUrl');
                }}
              >
                Register Now{' '}
              </Button>{' '}
            </Center>
            {' '}
          </ModalContent>{' '}
        </Modal>
      </Box>
    </>
  );
}


function Event4() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
          event{' '}
        </Badge>
        <Text as="h3" my={5} fontWeight="bold" fontSize="2xl" color={'accent'}>
          {' '}
          STRUCTURAQUEST{' '}
        </Text>{' '}
        <Text style={{ textAlign: 'justify' }}> 
          
          
          <strong>StructuraQuest </strong>is a two-round competition testing knowledge of iconic structures.<br></br> Shortlisted teams will compete in buzzer round at Moments'25, racing to answer with speed and accuracy. 
          
        </Text>
        
        <Center>
          <Button
            mt={25}
            size="md"
            height="40px"
            width="130px"
            border="1px"
            borderColor="#C0C1D1"
            borderRadius={4}
            zIndex={1}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('accent', 'accent'),
              color: 'white',
            }}
            color={'black'}
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
            <ModalHeader color={'accent'}> STRUCTURAQUEST </ModalHeader>{' '}
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <a href="https://i.imgur.com/TlULIHZ.png" target="_blank">
                  <Image
                    height="400"
                    src={StructuraQuest}
                    alt="StructuraQuest"
                  />
                </a>
              </Center>
              <Text as="h3" my={5} fontWeight="bold" fontSize="xl">
                {' '}
                Event description{' '}
              </Text>{' '}
              <Text as="p" my={5}>
                {' '}
                Civil Marvels
                {' '}
                <br />
                Picture Quiz
              <br />
              Buzzer Challenge
              <br />
              Top Teams
              <br />
              <br />
              Registration Fee: Rs.50
              <br />
              Prize Money:Rs.7000
              {/* <br />
              <br />
              Go check out the rule book for more information. */}
              </Text>
              
            </ModalBody>
            {' '}
            <Center>
              <Button
                colorScheme="blue"
                m={3}
                onClick={() => {
                  window.location.assign('https://unstop.com/quiz/structura-quest-national-institute-of-technology-trichy-1435925?lb=fRJ4zot&utm_medium=Share&utm_source=WhatsApp');
                }}
              >
                Register Now{' '}
              </Button>{' '}
            </Center>
            {' '}
          </ModalContent>{' '}
        </Modal>
      </Box>
    </>
  );
}

