import { Text } from "@chakra-ui/react";

const MediumText = ({ text }) => {
    return (
        <Text
            color={"blackAlpha.900"}
            fontSize={{ base: '1.3rem', md: '1.5rem' }}
            textAlign={'center'}
            lineHeight={'2.0625rem'}
            fontWeight={'medium'}
            fontStyle={'normal'}
        >{text}</Text>
    );
}

export default MediumText;