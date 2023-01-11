/*O react tem um importante papel de componentização para
tornar o código mais limpo e reutilizável*/

import { ChakraProvider } from "@chakra-ui/react";
import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Conta from "./pages/Conta";
import ContaInfo from "./pages/ContaInfo";
import Home from "./pages/Home";

interface IAppContext {
  user: string
}

export const AppContext = createContext({} as IAppContext)

const AppContextProvider = ({ children }: any) => {
  const user = 'Rômulo'

  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  )
}

function App() {
  return (
    /* <React.fragment></React.fragment> é usado para não criar tags sem funcionalidade relevante,  
    por exemplo uma div para agrupar outras divs, economizando processamento */
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/conta/:id' element={<Conta />} />
              <Route path='/infoconta' element={<ContaInfo />} />
            </Routes>
          </Layout>
        </ChakraProvider>  {/* pode usar uma tag vazia também: <></> representa o React.Fragment */}
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
