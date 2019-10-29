import React from 'react';
import PropTypes from 'prop-types';
import styles from './Impression.module.css';

const Impression = ({ name, imgSrc }) => {
  const style = {
    background: `url(${ imgSrc })`,
  };
  
  return (
    <div className={ styles.impression } style={ style }>
      { name }
    </div>
  );
};

Impression.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Impression;
