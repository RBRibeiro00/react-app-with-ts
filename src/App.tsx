/*O react tem um importante papel de componentização para
tornar o código mais limpo e reutilizável*/

import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    /* <React.fragment></React.fragment> é usado para não criar tags sem funcionalidade relevante,  
    por exemplo uma div para agrupar outras divs, economizando processamento */

    <>  {/* pode usar uma tag vazia também: <></> representa o React.Fragment */}
      <Layout>
        Hello world!
        {/* Chama o componente Card */}
        <Card
          id={1}
          paragraph='Typescript'
          details='TS para frontend e backend'
        />
        <Card
          id={2}
          paragraph='HTML'
          details='HTML para frontend '
        />
        <Card id={3} paragraph='SQL' details='SQL para banco de dados'
        />
      </Layout>
    </>
  );
}

export default App;
