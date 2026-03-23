// chakra
import {
    Flex,
    Text,
    Stack,
    Box

} from '@chakra-ui/react';

//Formula
import MathJax from 'react-mathjax';

//Gráfico
import Grafico from "../../components/graphic/Grafico";

// components
import CustomButton from '../../components/button/CustomButton';
import RightImage from '../../components/image/RightImage';
import { useContext } from 'react';
import { GraphContext } from '../../App';
import BigText from '../../components/text/BigText';
import SmallText from '../../components/text/SmallText';



const GraphicResult = () => {

    const { graphFormulae } = useContext(GraphContext);

    let formulae = graphFormulae;

    return (
        <Stack
            
        minH={'100vh'}
        direction={{ base: 'column', md: 'row' }}
        bgColor="#000"
        >
            <Flex p={8} flex={1} align={'center'} justify={'center'}  height={'100vh'} >
                <Stack spacing={6} w={'full'} maxW={'lg'} >

                    <Flex
                        flexDir={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <BigText text={'Função'} />
                        <SmallText text={'gerada com sucesso'} />

                        <br />
                        <br />



                        <MathJax.Provider >
                            <Flex
                                textAlign={'center'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                border={'4px'}
                                borderColor={'#207AC6'}
                                borderRadius={'40px'}
                                color={'#FFFFFF'}
                                w={'100%'} h={'100%'}
                                
                                

                            >
                                <Text
                                    w={'100%'} h={'100%'}
                                    fontSize={{ base: 'sm', md: 'xl',sm:'xs'}}
                                    fontWeight={'medium'}
                                >
                                    <MathJax.Node inline formula={formulae} />
                                </Text>


                            </Flex>
                        </MathJax.Provider>

                        <br />
                        <br />


                        <Box
                            
                            h={{ base: '12.875rem', md: '19rem' }}
                            w={{ base: '20rem', md: '30rem' }}
                            border={'2px'}
                            borderColor={'#FFFFFF'}
                            borderRadius={'0.9375rem'}
                        >
                            <Grafico />
                        </Box>

                        <br />
                        <br />
                
                            <CustomButton
                                text={"Recomeçar"}
                                next={'/'}
                                previous={'/UploadFilePage'}
                            />
                            
                            
                    </Flex>
                </Stack>
            </Flex>

            <RightImage />


        </Stack>
    );
}
export default GraphicResult;