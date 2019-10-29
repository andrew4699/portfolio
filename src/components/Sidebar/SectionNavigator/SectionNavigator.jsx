import React from 'react';
import PropTypes from 'prop-types';

const SectionNavigator = ({ children, section }) => {
  function navigate() {
    console.log('navigate', section);
  }

  return (
    <div onClick={ navigate }>
      { children }
    </div>
  );
};

SectionNavigator.propTypes = {
  children: PropTypes.element.isRequired,
  section: PropTypes.string.isRequired,
};

export default SectionNavigator;
