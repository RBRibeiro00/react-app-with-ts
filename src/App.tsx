/*O react tem um importante papel de componentização para
tornar o código mais limpo e reutilizável*/

import { Layout } from "./components/Layout";
import styled from 'styled-components';

// Componentizando o css
const Box = styled.div`
  background-color: orange;
  border-radius: 25px;
  padding-left: 15px;
`

function App() {
  return (
    /* <React.fragment></React.fragment> é usado para não criar tags sem funcionalidade relevante,  
    por exemplo uma div para agrupar outras divs, economizando processamento */

    <>  {/* pode usar uma tag vazia também: <></> representa o React.Fragment */}
      <Layout>
        <Box>
          <h1>Faça o login</h1>
        </Box>
        <label htmlFor='emailInput'>
          Email
        </label>
        <input id='emailInput' type='email' />

        <label htmlFor='passwordInput'>
          Senha
        </label>
        <input id='passwordInput' type='password' />
        <button>
          Entrar
        </button>
      </Layout>
    </>
  );
}

export default App;
