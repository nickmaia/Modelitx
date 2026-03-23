import { Text } from "@chakra-ui/react";

const BigText = ({text}) => {
  return (
    <Text 
      color={"#207AC6"} 
      fontSize={{ base: '2.3rem', md: '2.6rem'}} 
      textAlign={'center'} 
      lineHeight={'3.0625rem'} 
      fontWeight={'bold'} 
      fontStyle={'normal'}
    >{text}</Text>
  );
}

export default BigText