// chakra
import { Image, Flex } from '@chakra-ui/react';
import image from '../../assets/imagelado.png'

const RightImage = () => {
    return (

        <Flex flex={1} height={'100vh'} display={{ base: "none", sm: "block" }} bgColor="#000" >
            <Image

                w="100%"
                h="100%"
                alt={'Login Image'}
                objectFit={'cover'}
                src={
                    image
                }
            />
        </Flex>
    );
}
export default RightImage;