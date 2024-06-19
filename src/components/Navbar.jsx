import { Box, Flex, Text, Button, Stack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="white" px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            TenFAST
          </Text>
        </Box>
        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Link as={RouterLink} to="/fastighetssystem">
              Fastighetssystem
            </Link>
            <Link as={RouterLink} to="/om-oss">
              Om oss
            </Link>
            <Link as={RouterLink} to="/pris">
              Pris
            </Link>
            <Link as={RouterLink} to="/support">
              Support
            </Link>
            <Button as={RouterLink} to="/kom-igang" colorScheme="teal">
              Kom igång
            </Button>
            <Button as={RouterLink} to="/logga-in" variant="outline">
              Logga in
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;