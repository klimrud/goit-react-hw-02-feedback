import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Feedback/FeedbackOptions.module.css'

export const FeedbackOptions = ({onGood, onNeutral, onBad}) => {
  return(<div className={css.containerBtn}>
    <button className={css.btnGreen} type="click" onClick={onGood}>
      Good
    </button>
    <button className={css.btnBlue} type="click" onClick={onNeutral}>
      Neutral
    </button>
    <button className={css.btnRed} type="click" onClick={onBad}>
      Bad
    </button>
  </div>);
}

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired, 
  onNeutral:PropTypes.func.isRequired, 
  onBad: PropTypes.func.isRequired,
};
