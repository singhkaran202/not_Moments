import { Box, SimpleGrid, Text, Stack, Flex ,
  useColorModeValue, Image, Center, HStack} from '@chakra-ui/react';

import {MEMBERDATA, profData} from '../data/membersDat'
function importAll(r) {
  let images = {};

  r.keys().map((item, index) => ( images[item.replace('./', '')] = r(item)) )

  return images;
}

const images = importAll(require.context('../data/member-photos', false, /\.(png|jpe?g|svg|JPE?G|jfif|jpg)$/));

const memberbig= MEMBERDATA.slice(0,3)
// const membersmall= MEMBERDATA.slice(4,MEMBERDATA.length)

const Feature = ({ title, text, icon }) => {
 
  return (
    <Stack alignItems={'center'} spacing={0}>
      
      <Flex
        
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={13}
        >
        {icon}
      </Flex>
      <HStack spacing={1}>
      <Text m={0} p={0} fontWeight={400} color={'#32de84'} fontSize={13}>{title.split(' ')[0]}</Text>
      <Text  m={0} p={0} fontWeight={400} fontSize={13}>{title.split(' ').reverse().slice( 0,-1).reverse().join(' ')}</Text>
      </HStack>
      <Text color={'gray.600'}fontSize={10} mt={0}>{text}</Text>
    </Stack>
  );
};

export default function Members() {
  
  return (
    
    <Box p={4} bg={useColorModeValue('#FBFBFD','#202736')}
    
    
    
    >
<Center spacing={10} mb={25}>
<Text fontSize={{base:'2xl',md:'5xl'}} color={'#32de84'} >MOMENTS CORE</Text><Text ml={'0.7em'} fontSize={{base:'2xl',md:'5xl'}}>24-25</Text>
</Center>

      <SimpleGrid columns={{ base: 1, md: 2, lg:2}} spacing={{base:5,md:5}} p={100} pb={8} pt={25}  >
      {profData.map((info) => (         
        <Feature
          icon={<Image src={images[info.image]} alt={info.name} borderRadius='full' maxH={{base: 300, md:190}} />}
          title={info.name}
          text={info.position}
          pb={{base:50,md:0}}
        />
      ))}
      </SimpleGrid>

      <SimpleGrid columns={{ base: 2, md: 2, lg:3}} spacing={{base:10,md:15}} p={10} pb={0}  >
      {memberbig.map((info) => (         
        <Feature
          icon={<Image src={images[info.image]} alt={info.name} borderRadius='full' maxH={{base: 300, md: 175}} />}
          title={info.name}
          text={info.position}
          pb={{base:50,md:0}}
        />
      ))}
      </SimpleGrid>



     
      {/* <SimpleGrid columns={{ base: 2, md: 3,lg:5, xl:6 }} align={'center'} spacing={10} p={10} pt={50} mt={50} >
      {membersmall.map((info) => (         
        <Feature
          icon={<Image src={images[info.image]} alt={info.name} borderRadius='full'  maxH={{base: 300, md:150}}/>}
          title={info.name}
          text={info.position}
          pb={50}
        />
      ))}
      </SimpleGrid> */}
     
      
    </Box>
  );
}