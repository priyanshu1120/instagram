import React, { useEffect, useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {FaSearch,FaSignInAlt} from "react-icons/fa"
import {FcAbout,FcContacts} from "react-icons/fc"
import{CgProfile} from "react-icons/cg"
import { Box, Flex, Img, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Input, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [size, setSize] = useState(window.innerWidth);
    const updateSize = () => setSize(window.innerWidth);
    useEffect(() => (window.onresize = updateSize), []);


  return (
    <>  
        <Flex w="100%" h="70px" position="sticky" top="0px" justify="space-between" align="center" boxShadow='md' p='6' rounded='md' bg='white' >
            {
                size>600 ? <>
                <Flex w="130px" h="60px"><Img src="https://cdn.mos.cms.futurecdn.net/uE49BtPU4iDJAoHFEHn8m7.jpg" objectFit="cover" alt="logo" w="100%" h="100%" /></Flex>
                <Flex w={["70%","60%","40%"]} justify="space-between" align="center" >
                <Link to="/">Profile</Link> 
                <Link to="/contact">Create Post</Link> 
                <Link to="/About">following post</Link> 
                <Link to="/account" >Logout</Link>
                </Flex></> :<Flex w="100%" h="70px"  position="sticky" top="0px"  justify="space-between" align="center" boxShadow='none' p='0' rounded='md' bg='white'>
                <Flex w="120px" h="60px"><Img src="https://cdn.mos.cms.futurecdn.net/uE49BtPU4iDJAoHFEHn8m7.jpg" objectFit="cover" alt="logo" w="100%" h="100%" /></Flex>
                <Flex w={["5%"]} justify="space-between" align="center">
                 <Mobile/>
                </Flex>    
                </Flex>
            }
        
        </Flex>
    </>
  )
}

const Mobile = ()=>{
  return(
  <Menu>
  <MenuButton as={IconButton} variant="unstyled">
 {<GiHamburgerMenu fontSize={"20px"} />}
  </MenuButton>
  <MenuList>
    <Link to="/" ><MenuItem icon={<CgProfile />}>Profile</MenuItem></Link>
    <Link to= "/about" ><MenuItem icon = {<FcAbout/>}>Create Post</MenuItem></Link>
    <Link to="/contact" ><MenuItem icon ={<FcContacts />}>following post</MenuItem></Link>
    <Link to="/account" ><MenuItem icon = {<FaSignInAlt/>}>Logout</MenuItem></Link>
  </MenuList>
</Menu>
  )
}

export default Navbar
