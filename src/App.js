import React, { useState } from 'react';
import './App.css';

import Average from './components/Average';
import Sum from './components/Sum';
import Draw from './components/Draw';
import Interval from './components/Interval';

function App() {
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(20);

  return (
    <div className="App">
      <h1>Exercício React-Redux(Simples)</h1>

      <div className="linha">
        <Interval 
          min={min}
          max={max}
          onMinChanged={setMin}
          onMaxChanged={setMax}
        />
      </div>

      <div className="linha">
        <Average min={min} max={max} />
        <Sum min={min} max={max} />
        <Draw min={min} max={max} />
      </div>
    </div>
  );
}

export default App;
