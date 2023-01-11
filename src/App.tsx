/*O react tem um importante papel de componentização para
tornar o código mais limpo e reutilizável*/

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./components/AppContext";
import { Layout } from "./components/Layout";
import MainRoutes from "./routes";


function App() {
  return (
    /* <React.fragment></React.fragment> é usado para não criar tags sem funcionalidade relevante,  
    por exemplo uma div para agrupar outras divs, economizando processamento */
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>  {/* pode usar uma tag vazia também: <></> representa o React.Fragment */}
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
