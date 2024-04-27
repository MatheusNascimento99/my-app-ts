import { Center } from "@chakra-ui/react";
import { Card } from "./Card";
import { useContext, useState } from "react";
import { Login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import { changeLocalStorage } from "../services/storage";

export const Home = () => {
  const [email, setEmail] = useState<string>('')
  const {setIsLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()

  const validateUser = async (email:string) => {
      const loggedIn = await Login(email)

      if(!loggedIn){
        return alert('Email ou senha inválidos!')
      }

      setIsLoggedIn(true)
      changeLocalStorage({login: true})
      navigate('/conta/5')
  }

  return (
    <>
      <Card>
        <Center fontSize={35} color="aliceblue" fontWeight={600}>
          <h1>Faça Login</h1>
        </Center>
        <Center>
          {/*  <Text as='u' color="orange" margin="5px" fontSize='4xl'>{userData?.name}</Text> */}
        </Center>
        <Center>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email"
          />
        </Center>
        <Center>
          <input type="password" placeholder="senha" />
        </Center>
        <Center fontSize={25} color="aliceblue">
          <button onClick={() => validateUser(email)}>Enviar</button>
        </Center>
      </Card>
    </>
  );
};  
