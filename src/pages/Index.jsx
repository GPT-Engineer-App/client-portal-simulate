import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, useToast, Image } from "@chakra-ui/react";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    if (username === "admin" && password === "123") {
      window.location.href = "http://54.169.246.202/ui/admin";
    } else if (username === "member" && password === "123") {
      window.location.href = "http://54.169.246.202/ui/member";
    } else {
      toast({
        title: "Invalid Credentials",
        description: "Username or password is incorrect.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={8} maxWidth="500px" mx="auto">
      <Image src="https://parsefiles.back4app.com/FSFjgTgpaoybzvmMhWLHAiSP9GfWZzMZFubLFSnN/23b09563476bc933b5c3240813d712b1_8DE98715-5EDD-415E-B9FE-8121E6FF8AD8.webp" alt="Company Logo" mx="auto" my={4} />
      <VStack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
        <FormControl isRequired>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input id="username" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button mt={4} width="full" type="submit" onClick={handleLogin}>
          Log In
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
