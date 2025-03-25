import React from 'react';
import { 
  Box,
  Flex
} from '@chakra-ui/react';
// import { 
//   Box,
//   Flex,
//   AspectRatio,
//   Center
// } from '@chakra-ui/react';
import banner from '../assets/images/banner.png'
import './home.css';
// import sample from '../assets/videos/1.mp4';
import Navbar from '../components/nav';
import About from '../components/about';
import Members from '../components/members';
import Footer from '../components/footer';
// const theme= extendTheme({body:'monospace'},)
// import Fonts from '../fonts/fonts';

function Home() {
  return (
    <Box>
    
      <Navbar />
      <Flex
      w={'full'}
      h={{base:'450px', md: '45vh', lg: '45vh'}}
      
      // backgroundColor={'rgba(10, 12, 32, 0.22)'}
      backgroundImage={banner}
      backgroundBlendMode={'overlay'}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      back
       />
      {/* <div className="background-video"> */}
        {/* <video className='videoTag' autoPlay loop muted >
          <source src={sample} type='video/mp4' />
        </video> */}
      
       
        {/* <Center width={'full'} className='content'>
          <Box
            as="iframe"
            title="naruto"
            src="https://www.youtube.com/embed/5jV-naf_vyE"
            allowFullScreen
            width="600px"
            height="320px"
            borderRadius={20}
            boxShadow='md'
            mx={5}
          />
        </Center>  */}
      {/* </div>

      
      {/* </Flex> */}
      <About/>
          <Members/>
      <Footer/>
    </Box>
    
  );
}

export default Home;
