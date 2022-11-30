import {
  Heading,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  useDisclosure,
  useColorMode,
  Text,
  Button,
  Box,
  Container,
  Flex,
  Divider,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';
import DrawerExample from '../AddTask';
import EditItem from '../Edittask';

const Important = props => {
  const { items = [] } = props;

  /* useDisclosure for 'Delete' Alert dialog */
  const {
    isOpen: delOpen,
    onOpen: onDelOpen,
    onClose: onDelClose,
  } = useDisclosure();

  const cancelRef = React.useRef();

  /* DELETE request to the server */
  const deleteSubmit = async data => {
    await axios.delete('http://localhost:8080/delete/' + data.id);
    onDelClose(data.id);
  };

  /* Filter for showing only important tasks */
  const it = items.filter(item => item.important === true);

  const { colorMode } = useColorMode();

  const [index, setIndex] = useState([it]);
  const handleChange = nextIndex => {
    setIndex(nextIndex);
  };

  return (
    <Container my={2} maxW="100%">
      {/* Title of the page*/}
      <Container>
        <Box>
          <Heading align="center" width="100%" height="100%">
            My Dreams
          </Heading>
          <Divider />
        </Box>
      </Container>

      <Container maxW="100%" my={4}>
        <Accordion allowToggle index={index} onChange={handleChange}>
          {it.map(item => (
            <AccordionItem my={6} key={item.id} index={item.id}>
              <h2>
                <AccordionButton
                  bg={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
                  h="100px"
                >
                  <Flex
                    key={item.title}
                    flex="1"
                    justifyContent="space-between"
                    alignItems="center"
                    textAlign="left"
                  >
                    <Text as="b" maxW="80%">
                      {item.title}
                    </Text>
                    <AccordionIcon />
                  </Flex>
                </AccordionButton>
              </h2>

              <AccordionPanel key={item.title} pb={4}>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text>{item.description}</Text>
                  <Box>
                    <Container alignContent="center">
                      <Button
                        colorScheme="red"
                        variant="solid"
                        m={1}
                        onClick={onDelOpen}
                      >
                        Unreal
                      </Button>

                      {/* 'Delete' Alert dialog */}
                      <AlertDialog
                        isOpen={delOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onDelClose}
                      >
                        <AlertDialogOverlay>
                          <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                              Delete
                            </AlertDialogHeader>

                            <AlertDialogBody>
                              Are you sure? You can't undo this action
                              afterwards.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                              <Flex
                                justifyContent="space-between"
                                alignItems="center"
                              >
                                <Box>
                                  <Button ref={cancelRef} onClick={onDelClose}>
                                    Cancel
                                  </Button>
                                </Box>

                                <Box>
                                  <AccordionButton
                                    className="chakra-button css-18m2ta5"
                                    onClick={() => deleteSubmit(it[index])}
                                    ml={3}
                                  >
                                    Delete
                                  </AccordionButton>
                                </Box>
                              </Flex>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialogOverlay>
                      </AlertDialog>

                      {/* Edit task */}
                      <EditItem
                        text={{
                          str: 'Task',
                          type: false,
                          id: item.id,
                          data: item,
                        }}
                      />
                    </Container>
                  </Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
      <Flex justifyContent="center" my={10}>
        <Box as="a" w="100">
          <DrawerExample text={{ str: 'Dream', type: true }} />
        </Box>
      </Flex>
    </Container>
  );
};
export { Important };
