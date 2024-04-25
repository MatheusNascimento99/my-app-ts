import { Text, Center, Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const  {setIsLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    setIsLoggedIn(false)
    navigate('/')
  }
  
  return (
    <Flex backgroundColor="orange" width="100%">
      <Text >
        <Center>
          <Button onClick={()=> logout()} backgroundColor="orange" cursor={"pointer"} color={"purple"} padding={12} fontSize={20} fontWeight={600} border={"none"} >SAIR</Button>
        </Center>
      </Text>
    </Flex>
  );
};

export default Header;
