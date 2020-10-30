import React from 'react';

import Card from '../Card';

const Sum = (props) => {
  const { min, max } = props;

  return (
    <Card title="Soma de Números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(max + min)}</strong>
        </span>
      </div>
    </Card>
  );
};

export default Sum;