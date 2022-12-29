/*O react tem um importante papel de componentização para
tornar o código mais limpo e reutilizável*/

import {
  ChakraProvider,
  Input,
  Box,
  Center,
  Button
} from "@chakra-ui/react";
import { login } from "./services/login";

function App() {
  return (
    /* <React.fragment></React.fragment> é usado para não criar tags sem funcionalidade relevante,  
    por exemplo uma div para agrupar outras divs, economizando processamento */

    <>  {/* pode usar uma tag vazia também: <></> representa o React.Fragment */}
      <ChakraProvider>
        <Box minHeight='100vh' backgroundColor='#336EFF' padding='25px'>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
            <Center>
              <h1>Login</h1>
            </Center>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Center>
              <Button onClick={login} colorScheme='teal' size='sm' width='100%'>
                Sign in
              </Button>
            </Center>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
