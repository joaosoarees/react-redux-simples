import React from 'react';

import Card from '../Card';

const Draw = (props) => {
  const { min, max } = props;
  const draw = parseInt(Math.random() * (max - min)) + min;
  return (
    <Card title="Sorteio de Número" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{draw}</strong>
        </span>
      </div>
    </Card>
  );
};

export default Draw;