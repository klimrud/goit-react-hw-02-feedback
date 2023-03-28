import React from 'react';
import PropTypes, { number } from 'prop-types';
import css from 'components/Feedback/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      {/* <h2>Statistics</h2> */}
      <span>
        <p>Good:</p>
        {good}
      </span>
      <span>
        <p>Neutral:</p>
        {neutral}
      </span>
      <span>
        <p>Bad:</p>
        {bad}
      </span>
      <span>
        <p>Total:</p>
        {total}
      </span>
      <span>
        <p>Positive feedback:</p>
        {positivePercentage}%
      </span>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: number.isRequired,
};
