// chakra
import {
  Flex,
  Image,
  Stack
} from '@chakra-ui/react';

// assets
import modelitImage from '../../assets/modelit.svg';
import xImage from '../../assets/x.svg';
import logoImage from '../../assets/logo.svg';

// components
import CustomButton from '../../components/button/CustomButton';
import RightImage from '../../components/image/RightImage';



export default function HeroPage() {

  return (
    <Stack
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
      bgColor="#000"

    >
      <Flex p={8} flex={1} align={'center'} justify={'center'} bgColor="#000" >
        <Stack spacing={6} w={'full'} maxW={'lg'}>

          <Flex
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Flex flexDir={'row'}>
              <Image
                src={modelitImage}
                alt="Modelit"
                height="2rem"
              />
              <Image
                src={xImage}
                alt="X"
                height="2.4rem"
                marginLeft={'-0.4rem'}
              />
            </Flex>




            <br />
            <br />
            <br />
            <br />
            <br />

            <Flex flex='1' >
              <Image src={logoImage} width="16rem" height="8rem" alt="Logo" />
            </Flex>

            <br />
            <br />
            <br />
            <br />
            <br />


            <CustomButton
              text={"Começar"}
              next={'/TypeFunctionPage'}
            />
          </Flex>

        </Stack>
      </Flex>

      <RightImage />


    </Stack>
  );
}