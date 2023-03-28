import React from 'react';
import PropTypes from 'prop-types';
import { reviews } from './reviews';
import css from 'components/Feedback/FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.containerBtn}>
      <button
        className={css.btnGreen}
        type="button"
        onClick={() => onLeaveFeedback(reviews.good)}
      >
        Good
      </button>
      <button
        className={css.btnBlue}
        type="button"
        onClick={() => onLeaveFeedback(reviews.neutral)}
      >
        Neutral
      </button>
      <button
        className={css.btnRed}
        type="button"
        onClick={() => onLeaveFeedback(reviews.bad)}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
