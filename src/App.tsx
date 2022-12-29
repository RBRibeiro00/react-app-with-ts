/*O react tem um importante papel de componentização para
tornar o código mais limpo e reutilizável*/

import { Card } from "./components/Card";

function App() {
  return (
    <div>
      Hello world!
      <div>
        <h1>Card</h1>
        <p>Parágrafo</p>
      </div>
      {/* Chama o componente Card */}
      <Card />
    </div>
  );
}

export default App;
