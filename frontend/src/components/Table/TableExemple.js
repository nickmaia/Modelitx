import { Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

const TableExemple = ({ textA, textB, text, A, B }) => {
    return (

        <TableContainer textColor={"green.900"}>
            <br />
            <Text
                color={"blackAlpha.800"}
                fontSize={{ base: '1.2rem', md: '1.3rem' }}
                textAlign={'center'}
                lineHeight={'2rem'}
                fontWeight={'medium'}
                fontStyle={'normal'}
            >
                {text}
            </Text>

            <br />
            <Table size='md'>
                <Thead>
                    <Tr >
                        <Th >{A}</Th>
                        <Th >{B}</Th>
                    </Tr>
                </Thead>
                <Tbody
                >
                    <Tr>
                        <Td >{textA}</Td>
                        <Td >{textB}</Td>
                    </Tr>
                    <Tr>
                        <Td >{textA}</Td>
                        <Td >{textB}</Td>
                    </Tr>
                    <Tr>
                        <Td >{textA}</Td>
                        <Td >{textB}</Td>
                    </Tr>
                </Tbody>

            </Table>
        </TableContainer>
    );
}

export default TableExemple;