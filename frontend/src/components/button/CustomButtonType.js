import { useContext } from 'react';
import { Image, Button,Text, Stack } from '@chakra-ui/react';
import { GraphContext } from '../../App';

const CustomButtonType = ({
    typeimage,
    type
}) => {

    const { graphType, setGraphType } = useContext(GraphContext)

    return (

        <Button
            onClick={() => setGraphType(type)}

            border={'8px'}
            borderColor={'white'}
            borderRadius={'3.125rem'}
            w='9rem' h='8rem'
            bg={graphType === type ? '#7F7F7F' : '#2F2F2F'}
            color={"#ffff"}
        >
            <Stack spacing={0.5}>
                <Image
                    src={typeimage}
                    alt={type}
                />
                <Text>
                    {type}
                </Text>
            </Stack>
        </Button >
    );

}
export default CustomButtonType;