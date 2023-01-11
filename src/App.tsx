/*O react tem um importante papel de componentização para
tornar o código mais limpo e reutilizável*/

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Conta from "./pages/Conta";
import ContaInfo from "./pages/ContaInfo";
import Home from "./pages/Home";

function App() {
  return (
    /* <React.fragment></React.fragment> é usado para não criar tags sem funcionalidade relevante,  
    por exemplo uma div para agrupar outras divs, economizando processamento */

    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={<Conta />} />
            <Route path='/infoconta' element={<ContaInfo />} />
          </Routes>
        </Layout>
      </ChakraProvider>  {/* pode usar uma tag vazia também: <></> representa o React.Fragment */}
    </BrowserRouter>
  );
}

export default App;
