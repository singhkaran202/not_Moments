/* eslint-disable no-unused-vars */
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  useColorMode
  
} from '@chakra-ui/react';
import {FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
//import logo from '../assets/svgs/logo.svg';
//import whitelogo from '../assets/svgs/logo-w.svg'
import momentsLogo from '../assets/images/moments_black_logo.png'
import momentswhiteLogo from '../assets/images/moments_white_logo.png'


const ListHeader = ({ children }) => {
  
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'8xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 4, md: 3 }} spacing={50}>
          <Stack align={'flex-start'}>
            <ListHeader><strong>PAGES</strong></ListHeader>
            <Link href={'/home'}>Home</Link>
            {/* <Link href={'/about'}>About</Link> */}
            <Link href={'/workshop'}>Workshops</Link>
            <Link href={'/events'}>Events</Link>
            <Link href={'/guestlectures'}>Guest Lectures</Link>
            {/* <Link href={'/ca'}>Campus Ambassador</Link> */}
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader><strong>CONTACTS</strong></ListHeader>
            
            <Text >Kulandhaivelan<Link href={'tel:+919884734095'} color={'accent'} ml={1}>+919884734095</Link></Text>     
            <Text >Guruprasad<Link href={'tel:+916379034974'} color={'accent'} ml={7}>+916379034974</Link></Text>                      
            <Text >Rithika             <Link href={'tel:+916383188536'} color={'accent'} ml={16}>+916383188536</Link></Text>
            
            
          </Stack>


          <Stack align={'flex-start'}>
            <ListHeader ><strong>FOLLOW US ON</strong></ListHeader>
            <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/momentsnittrichy/'} >
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://instagram.com/moments.nitt'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Youtube'} href={'https://youtube.com/channel/UCC3RfmE-enzmzcMWHtIumag'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/company/civil-engineering-association-nittrichy/'}>
            <FaLinkedin />
            </SocialButton>


{/* 
            <SocialButton label={'Linkedin'} href={'#'}>
              <FaLinkedin />
            </SocialButton>
            
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton> */}
          </Stack>
            
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Stack direction={'row'} alignItems={'center'}>


          {colorMode === 'light' ? <Image src={momentsLogo} mr={0} boxSize={20}/> : <Image src={momentswhiteLogo} mr={0} boxSize={20}/>}
{/*           
          <Text >MOMENTS </Text> */}
          </Stack>
          <Text alignContents={'right'}>Official website for Moments'25, the national level technical symposium of the Department of Civil Engineering, NIT Trichy</Text>
          </Container>
      </Box>
    </Box>
  );
}