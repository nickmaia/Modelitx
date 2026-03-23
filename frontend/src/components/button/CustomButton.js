import { useNavigate } from 'react-router-dom';
import { Stack, Button } from "@chakra-ui/react";
//app
import { GraphContext } from '../../App';
import { useContext } from 'react';


const CustomButton = ({ text, next, previous}) => {

  const { graphType, graphData , setGraphFormulae, setGraphData, setGraphType} = useContext(GraphContext)

  const navigate = useNavigate();

  const previousClick = (previous) => {
    navigate(previous)
  }

  const nextClick = (next) => {

    //colocando alert se o usuario não escolher opções obrigatorias
    if (next === '/UploadFilePage' && graphType === null) {  
        alert('Escolha uma regressão');    
    }
    //colocando alert se o usuario não carregar arquivo .csv
    else if (next === '/GraphicResultPage' && graphData === null) {
        alert('Carregue seu arquivo csv');
    }
    else  if(next === '/'){
      setGraphData(null);
      setGraphFormulae(null);
      setGraphType(null);
      navigate(next);
    }
  

    else {
      navigate(next)
    }

    return;
  }

  const type = graphType;

  console.log("setGraphFormulae",graphType)

  return (
    text ==="Começar"?
      <Button
      isDisabled={(graphType === type && graphData == null && text==="Veja o Gráfico") ? true : false}
      className='ButtomContinuar'
      rounded={'full'}
      bg={'blackAlpha.900'}
      border="2px solid"
      borderColor="#207AC6"
      fontSize={'1.3rem'}
      width="14rem"
      color="whiteAlpha.900"
      py={'1.5rem'}
      onClick={() => nextClick(next)}
      _hover={{
        bg: "#207AC6",
        color: 'whiteAlpha.900'
      }}>
        {text}
      </Button>
      :
      <Stack direction={{ base: 'column', md: 'row-reverse' }}  spacing={4}>
      <Button
      
      isDisabled={(graphType === type && graphData == null && text==="Veja o Gráfico") ? true : false}
      className='ButtomContinuar'
      rounded={'full'}
      bg={'blackAlpha.900'}
      border="2px solid"
      borderColor="#207AC6"
      fontSize={'1.3rem'}
      width="14rem"
      color="whiteAlpha.900"
      py={'1.5rem'}
      onClick={() => nextClick(next) } 
      _hover={{
        bg: "#207AC6",
        color: 'whiteAlpha.900'
      }}>
        {text}
      </Button>
      <Button
     
      id='ButtomRetornar'
      rounded={'full'}
      bg={'blackAlpha.900'}
      border="2px solid"
      borderColor="#207AC6"
      fontSize={'1.3rem'}
      width="14rem"
      color="whiteAlpha.900"
      py={'1.5rem'}
      onClick={() => previousClick(previous)}
      _hover={{
        bg: "#207AC6",
        color: 'whiteAlpha.900'
      
      }}>
        Voltar
      </Button>
      </Stack>
  );
}

export default CustomButton;