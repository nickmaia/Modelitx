// chakra
import {
    Box,
    Flex,
    Stack
} from '@chakra-ui/react';

// components
import CustomButton from '../../components/button/CustomButton';
import RightImage from '../../components/image/RightImage';


import CustomButtonDoubt from '../../components/button/CustomButtonDoubt';
import CustomCSVReader from '../../components/button/CustomCSVReader';
import BigText from '../../components/text/BigText';
import SmallText from '../../components/text/SmallText';



const UploadFilePage = () => {

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
                        <SmallText text="Carregue o" />
                        <BigText text="arquivo .csv" />
                        <SmallText text="para gerar" />
                        <BigText text="a função" />

                        <br />
                        <br />
                        <br />
                        <Stack
                            spacing={4}
                            flexDir={'row'}
                            marginInlineStart={'8'}
                        >
                            <CustomCSVReader />

                            <Box marginInlineStart={'-8'}>
                                <CustomButtonDoubt />
                            </Box>
                        </Stack>


                        <br />
                        <br />

                        <CustomButton
                            text={"Veja o Gráfico"}
                            next={'/GraphicResultPage'}
                            previous={'/TypeFunctionPage'}

                        />


                    </Flex>
                </Stack>
            </Flex>

            <RightImage />

        </Stack>
    );
}

export default UploadFilePage;