import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card';

const Draw = (props) => {
  const { min, max } = props;
  const draw = parseInt(Math.random() * (min + max)) + min;

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

const mapStateToProps = state => {
  return {
    min: state.numbers.min,
    max: state.numbers.max
  };
};

export default connect(mapStateToProps)(Draw);