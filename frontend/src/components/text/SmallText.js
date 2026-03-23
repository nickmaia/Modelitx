import { Text } from "@chakra-ui/react";

const SmallText = ({ text }) => {
  return (
    <Text
      color={"#ffff"}
      fontSize={{ base: '1.5rem', md: '1.8rem' }}
      textAlign={'center'}
      lineHeight={'2.0625rem'}
      fontWeight={'bold'}
      fontStyle={'normal'}
    >{text}</Text>
  );
}

export default SmallText; 