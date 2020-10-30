import React from 'react';

import Card from '../Card';

const Sum = (props) => {
  return (
    <Card title="Soma de Números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>10</strong>
        </span>
      </div>
    </Card>
  );
};

export default Sum;