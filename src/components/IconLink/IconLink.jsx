import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames/bind';
// import styles from './IconLink.module.css';

const IconLink = ({ href, icon, width, height }) => {
  const imgStyle = {
    width: `${width}px`,
  };

  return (
    <a href={ href }>
      <img src={ icon } style={ imgStyle } />
    </a>
  );
};

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default IconLink;
