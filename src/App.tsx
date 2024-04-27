import { BrowserRouter } from "react-router-dom";

import { AppContextProvider } from "./components/AppContext";
import MainRoutes from "./routes";
import { creatLocalStorage, getAllLocalStorage } from "./services/storage";




function App() {

    !getAllLocalStorage() && creatLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <MainRoutes/>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
