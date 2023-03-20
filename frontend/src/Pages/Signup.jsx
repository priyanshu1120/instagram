import { Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { chakra } from "@chakra-ui/react";
import axios from "axios";
import { baseurl } from "../Api";
const StyledLink = chakra(RouterLink, {
  baseStyle: {
    color: "blue.500",
    textDecoration: "none",
  }
});
const Signup = () => {

  const [input,setInput] = useState({name:"",email:"",password:""})
  const navigate = useNavigate()

  const handleChange = (e)=>{
     const {name,value} = e.target
     setInput({...input,[name]:value})
}

console.log(input)
const handleSubmit = (e)=>{
     e.preventDefault()
    axios.post(`${baseurl}/user/signup`,input).then((res)=>{
        console.log(res)
        navigate("/login")    
    }).catch((err)=>{
        alert("signup failed")
    })
}
  


  
  return (
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    backgroundImage="url('https://static.vecteezy.com/system/resources/previews/002/486/289/original/gradient-background-instagram-free-vector.jpg')"
    >
       <Box w={["90%","70%","40%","30%"]} minW="200px" h="auto" p="30px" bg="white"  borderRadius="20px" >
            <Heading>Signup</Heading>
            <form onSubmit ={handleSubmit}>
            <FormControl mt="30px">
                <FormLabel>Username</FormLabel>
                <Input type='text'onChange = {handleChange} name="name" value={input.name} required/>
             </FormControl>
             <FormControl mt="10px">
                <FormLabel>Email address</FormLabel>
                <Input type='email' onChange = {handleChange} name="email" value={input.email} required/>
             </FormControl>
             <FormControl mt="10px">
                <FormLabel>Password</FormLabel>
                <Input type='password' onChange = {handleChange} name="password" value={input.password} required/>
             </FormControl>
             <FormControl mt="20px" bg="blue" p="10px" borderRadius={"5px"} cursor = "pointer"color="white">
                <Input type='submit' variant={"unstyled"} cursor = "pointer"/>
             </FormControl>
             </form>
             <Text fontSize={["12px","14px"]} align="center" mt="10px">Already have an account ? <StyledLink to="/login">SignIn</StyledLink></Text>
       </Box>
  </Flex>
  );
};

export default Signup;
