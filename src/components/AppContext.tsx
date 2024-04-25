import React, { createContext, ReactNode, useState } from "react";

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

  const user = "Nascimento";

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
