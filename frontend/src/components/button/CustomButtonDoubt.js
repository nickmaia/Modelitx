import {
        Button, Modal,
        ModalBody,
        ModalCloseButton,
        ModalContent, ModalHeader,
        ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import React from "react";

import { FaRegQuestionCircle } from "react-icons/fa";


import TableExemple from "../Table/TableExemple";
import MediumText from "../text/MediumText";

const CustomButtonDoubt = () => {

        const { isOpen, onOpen, onClose } = useDisclosure()
        const [scrollBehavior] = React.useState('inside')
        const btnRef = React.useRef(null)

        return (
                <>

                        <Button
                                mt={3}
                                ref={btnRef}
                                onClick={onOpen}
                                bgColor={"#000"}
                                color={"#207AC6"}
                                _hover={{
                                        color: 'whiteAlpha.900'
                                }}
                        >
                                <FaRegQuestionCircle
                                        size={"85%"}
                                />
                        </Button>

                        <Modal
                                onClose={onClose}
                                finalFocusRef={btnRef}
                                isOpen={isOpen}
                                scrollBehavior={scrollBehavior}

                        >
                                <ModalOverlay />
                                <ModalContent>
                                        <ModalHeader>
                                                <MediumText
                                                        text='Exemplos de arquivos: '
                                                />
                                        </ModalHeader>
                                        <ModalCloseButton
                                                color={"#000"}
                                                fontWeight={'bold'} />
                                        <ModalBody justifyContent={'left'}>
                                                <TableExemple
                                                        text={"Separado por coluna:"}
                                                        A={"A"}
                                                        B={"B"}
                                                        textA={"10"}
                                                        textB={"20"}
                                                />
                                                <TableExemple
                                                        A={"A"}
                                                        text={"Separado por virgula:"}
                                                        textA={"10,10"}

                                                />
                                                <TableExemple
                                                        A={"A"}
                                                        text={"Separado por | :"}
                                                        textA={"10|10"}

                                                />
                                                <TableExemple
                                                        A={"A"}
                                                        text={"Separado por espaço em branco:"}
                                                        textA={"10 10"}

                                                />
                                                <TableExemple
                                                        A={"A"}
                                                        text={"Separado por aspas:"}
                                                        textA={"10''10"}

                                                />
                                                <TableExemple
                                                        A={"A"}
                                                        text={"Separado por ponto e vírgula:"}
                                                        textA={"10;10"}

                                                />

                                        </ModalBody>
                                </ModalContent>
                        </Modal>
                </>
        )
}
export default CustomButtonDoubt