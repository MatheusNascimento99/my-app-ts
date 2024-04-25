import { BrowserRouter } from "react-router-dom";

import { AppContextProvider } from "./components/AppContext";
import MainRoutes from "./routes";
import { changeLocalStorage, creatLocalStorage } from "./services/storage";




function App() {

  creatLocalStorage()

  changeLocalStorage({
    login: true
  })
  
  return (
    <BrowserRouter>
      <AppContextProvider>
        <MainRoutes/>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
