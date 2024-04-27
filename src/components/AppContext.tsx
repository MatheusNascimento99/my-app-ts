import React, { createContext, ReactNode, useState, useEffect } from "react";
import { getAllLocalStorage } from "../services/storage";
interface IAppContext {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

// Criando o contexto com um valor default adequado.
export const AppContext = createContext({} as IAppContext);

interface AppContextProviderProps {
  children: ReactNode; // Propriedade children com a tipagem correta.
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const storage = getAllLocalStorage();

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage);
      setIsLoggedIn(login);
    }
  }, []);

  const user = "Nascimento";

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
