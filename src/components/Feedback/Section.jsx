import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Feedback//Section.module.css'

export const Section = ({ title, children }) => {
  // console.log('hi');
  return (
    <section className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propType = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}
 