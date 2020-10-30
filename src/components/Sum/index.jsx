import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card';

const Sum = (props) => {
  const { min, max } = props;
  console.log(props)

  return (
    <Card title="Soma de Números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Sum);