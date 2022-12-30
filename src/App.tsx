/*O react tem um importante papel de componentização para
tornar o código mais limpo e reutilizável*/

import {
  ChakraProvider
} from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    /* <React.fragment></React.fragment> é usado para não criar tags sem funcionalidade relevante,  
    por exemplo uma div para agrupar outras divs, economizando processamento */

    <>  {/* pode usar uma tag vazia também: <></> representa o React.Fragment */}
      <ChakraProvider>
          <Layout>
            <Home />
          </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;
