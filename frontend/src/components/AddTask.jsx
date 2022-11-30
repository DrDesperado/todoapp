import {
  Box,
  Stack,
  FormLabel,
  Button,
  Select,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Textarea,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function DrawerExample(props) {
  const { text } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();
  /* POST request to the server*/
  const onSubmit = async (data, e) => {
    new axios.post('http://localhost:8080/addtask', data);
    e.preventDefault();
    reset();
  };

  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
        Add {text.str}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader>{text.str}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel>My {text.str}</FormLabel>
                  <Input {...register('title')} />
                </Box>

                <Box>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    {...register('description')}
                    placeholder="your description of the task"
                    size="md"
                  />
                </Box>

                <Box>
                  <FormLabel>Type</FormLabel>
                  <Select defaultValue={text.type} {...register('important')}>
                    <option value={false}>My Task</option>
                    <option value={true}>My Dream</option>
                  </Select>
                </Box>

                <Box>
                  <FormLabel>Mark</FormLabel>
                  <Input {...register('mark')} />
                </Box>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="teal" mr={3} onClick={onClose} type="submit">
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default DrawerExample;
