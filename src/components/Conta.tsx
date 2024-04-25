import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardInfo from "./CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import { AppContext } from "./AppContext";
import { isJSDocLink } from "typescript";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

export const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
  const navigate = useNavigate();

  const   { isLoggedIn }  = useContext(AppContext)
  console.log(isLoggedIn)

  !isLoggedIn && navigate('/')

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  const actualData = new Date();

  

  if (userData && id !== userData.id) {
    navigate("/");
  }
  return (
    <>
      <Header />
      <Center>
        <SimpleGrid column={2} spacing={8} paddingTop={16}>
          {userData === undefined || userData === null ? (
            <Center>
              <Spinner color="red.500" size="xl" />
            </Center>
          ) : (
            <>
              <CardInfo
                mainContent={`Bem vindo ${userData?.name}`}
                content={`${actualData.getDate()} / ${
                  actualData.getMonth() + 1
                } / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()} `}
              />
              <CardInfo
                mainContent="Saldo"
                content={`R$ ${userData.balance}`}
              />
            </>
          )}
        </SimpleGrid>
      </Center>
    </>
  );
};
