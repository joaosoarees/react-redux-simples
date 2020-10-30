import './styles.css';

import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card';
import { changeMinNumber, changeMaxNumber } from '../../store/actions/numbers';

const Interval = (props) => {
  const { min, max } = props;

  return (
    <Card title="Intervalo de Números" red>
      <div className="Interval">
        <span>
          <strong>Mínimo:</strong>
          <input 
            type="number" 
            value={min} 
            onChange={e => props.changeMin(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input 
            type="number" 
            value={max}
            onChange={e => props.changeMax(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMin(newNumber) {
      // action creator -> action
      const action = changeMinNumber(newNumber);
      dispatch(action);
    },
    changeMax(newNumber) {
      const action = changeMaxNumber(newNumber);
      dispatch(action);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interval);