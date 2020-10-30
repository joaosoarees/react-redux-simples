import './App.css';

import Average from './components/Average';
import Sum from './components/Sum';
import Draw from './components/Draw';
import Interval from './components/Interval';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux(Simples)</h1>

      <div className="linha">
        <Interval />
      </div>

      <div className="linha">
        <Average />
        <Sum />
        <Draw />
      </div>
    </div>
  );
}

export default App;
