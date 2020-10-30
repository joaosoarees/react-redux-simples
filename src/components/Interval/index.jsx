import './styles.css';

import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card';
import { changeMinNumber } from '../../store/actions/numbers';

const Interval = (props) => {
  const { min, max } = props;

  props.changeMin(30);

  return (
    <Card title="Intervalo de Números" red>
      <div className="Interval">
        <span>
          <strong>Mínimo:</strong>
          <input 
            type="number" 
            value={min} 
            readOnly
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input 
            type="number" 
            value={max}
            readOnly
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

const mapActionCreatorsToProps = dispatch => {
  return {
    changeMin(newNumber) {
      // action creator -> action
      const action = changeMinNumber(newNumber);
      dispatch(action);
    }
  }
}

export default connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(Interval);