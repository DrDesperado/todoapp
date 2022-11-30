import { Container, Button, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

/* Sidebar */
const Sidebar = () => {
  return (
    <Container my={10} p={1}>
      <Stack>
        <Link to="/">
          <Button m={2} width="100%" height="100px">
            My tasks
          </Button>
        </Link>
        <Link to="/important">
          <Button m={2} width="100%" height="100">
            My Dreams
          </Button>
        </Link>
        <Link to="/completed">
          <Button m={2} width="100%" height="100">
            Completed
          </Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default Sidebar;
