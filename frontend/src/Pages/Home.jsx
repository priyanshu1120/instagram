import React from 'react'
import Navbar from '../Components/Navbar'
import ProfilePage from './Profile'
import { Box, Flex, Image, Text, Input, IconButton, Icon, Heading } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Home = () => {
  const data = [{name:"hii"},{name:"hello"},{name:"tushar"}]
  return (
    <div>
      <Navbar/>
      <Box>
       {data.map((item)=>(
            <Box borderWidth="1px" maxW="600px" m="auto" borderRadius="lg" overflow="hidden" boxShadow="lg" p="4">
            <Flex align="center" mb="4">
              <Heading fontWeight="bold">{"priyanshu"}</Heading>
            </Flex>
            <Box>
              <Image src={"https://picsum.photos/id/537/500/500"} alt={"title img"} boxSize="full" h="300px" objectFit="cover" mb="4" />
              <Flex align="center" justify="space-between" mb="4">
                <Flex align="center">
                  <IconButton aria-label="Like" position="none" icon={<Icon as={FaHeart} position="none" />} variant="ghost" mr="2" />
                  <Text fontWeight="bold">100 Likes</Text>
                </Flex>
                <Text fontWeight="bold">{"title"}</Text>
              </Flex>
              <Text>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ac odio vel pharetra. Sed lobortis mi at dolor dignissim, eget rutrum arcu ullamcorper. Sed luctus sapien sed nisi dictum, quis mollis nulla iaculis."}</Text>
              <Input placeholder="Add a comment..." mt="4"  variant={"unstyled"}/>
            </Box>
          </Box>
       ))}
      </Box>
   
    </div>
  )
}

export default Home
