// chakra
import {
    Flex,
    Stack,
    SimpleGrid
} from '@chakra-ui/react';

// components
import CustomButton from '../../components/button/CustomButton';
import RightImage from '../../components/image/RightImage';

//assets
import linearImage from '../../assets/linear.svg';
import exponencialImage from '../../assets/exponencial.svg';
import sigmoidImage from '../../assets/sigmoid.svg';
import normalImage from '../../assets/normal.svg';
import polinomialgrau2Image from '../../assets/polinomialgrau2.svg';
import polinomialgrau3Image from '../../assets/polinomialgrau3.svg';



//Button
import CustomButtonType from '../../components/button/CustomButtonType';
import SmallText from '../../components/text/SmallText';
import BigText from '../../components/text/BigText';


export default function TypeFunctionPage() {

    return (
        <Stack
            minH={'100vh'}
            direction={{ base: 'column', md: 'row' }}
            bgColor="#000"
        >
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>

                    <Flex
                        flexDir={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >

                        <SmallText text="Escolha" />
                        <BigText text='o tipo' />
                        <SmallText text='de função' />

                        <br />
                        <br />

                        <SimpleGrid
                            columns={{base: 2, md: 3}} spacing={4}
                            justifyContent={'center'}
                            justifySelf={'center'}
                            justifyItems={'center'}
                            alignItems={'center'}>

                            <CustomButtonType
                                typeimage={linearImage}
                                type={'Linear'}
                            />
                            <CustomButtonType
                                typeimage={exponencialImage}
                                type={'Exponencial'}
                            />
                            <CustomButtonType
                                typeimage={sigmoidImage}
                                type={'Sigmoid'}
                            />
                            <CustomButtonType
                                typeimage={normalImage}
                                type={'Normal'}
                            />
                            <CustomButtonType
                                typeimage={polinomialgrau2Image}
                                type={'Polinomial 2°'}
                            />
                            <CustomButtonType
                                typeimage={polinomialgrau3Image}
                                type={'Polinomial 3°'}
                            />

                        </SimpleGrid>

                        <br />
                        <br />
                     
                            <CustomButton
                                text={"Próximo"}
                                next = {'/UploadFilePage'}
                                previous ={'/'}
                            />
                         
                    </Flex>
                </Stack>
            </Flex>

            <RightImage />


        </Stack>
    );
}