import * as React from "react";
import { ChakraProvider, Box, Text, Center } from "@chakra-ui/react";


export const Card = ({children}:any) => {
 
  return (
    <ChakraProvider>
      <Box bg="#white" w="100%" p={4} color="black">
        <Box bg="#9413dc" w="100%" p={4} borderRadius={15} color="black">
          { children }
        </Box>
      </Box>
      <Center>
      <Text color={"blue"} fontSize={30}>
        Email aceito: teste@teste.com
      </Text>
      </Center>
      
    </ChakraProvider>
  );
};
