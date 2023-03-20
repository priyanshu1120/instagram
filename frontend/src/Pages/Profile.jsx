import { Box, Avatar, Heading, Text, Button, Flex } from "@chakra-ui/react";

function ProfilePage() {
  return (
    <Box p={4} maxW="600px" mx="auto">
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar size="2xl" src="https://picsum.photos/id/537/500/500" mr={[8,8,10,12]} position="none" />
        <Box  w="100%">
          <Heading as="h1" size="lg">
            John Doe
          </Heading>
          <Text>Photographer</Text>
          <Flex w="80%"  justify={"space-between"} direction={["column","row"]}>
          <Flex direction={"column"}align="center" justify={"center"}><Text fontWeight={"bold"}>42</Text> <Text>Posts</Text></Flex>
          <Flex direction={"column"}align="center" justify={"center"}><Text fontWeight={"bold"}>2k</Text> <Text>Followers</Text></Flex>
          <Flex direction={"column"}align="center" justify={"center"}><Text fontWeight={"bold"}>4k</Text> <Text>Following</Text></Flex>
          </Flex>
      
        </Box>
      </Box>
      <Box mb={4}>
      </Box>
      <Box mb={4}>
        <Text fontWeight="bold">Photos:</Text>
        <Box display="flex" flexWrap="wrap">
          <Box w="33%" p={1}>
            <Box bg="gray.100" h={0} pb="100%" borderRadius="md" />
          </Box>
          <Box w="33%" p={1}>
            <Box bg="gray.100" h={0} pb="100%" borderRadius="md" />
          </Box>
          <Box w="33%" p={1}>
            <Box bg="gray.100" h={0} pb="100%" borderRadius="md" />
          </Box>
          <Box w="33%" p={1}>
            <Box bg="gray.100" h={0} pb="100%" borderRadius="md" />
          </Box>
          <Box w="33%" p={1}>
            <Box bg="gray.100" h={0} pb="100%" borderRadius="md" />
          </Box>
          <Box w="33%" p={1}>
            <Box bg="gray.100" h={0} pb="100%" borderRadius="md" />
          </Box>
        </Box>
      </Box>
      <Button colorScheme="blue" size="sm">
        Follow
      </Button>
    </Box>
  );
}

export default ProfilePage;
