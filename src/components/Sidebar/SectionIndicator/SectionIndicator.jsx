import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './SectionIndicator.module.css';

const c = classnames.bind(styles);

const SectionIndicator = ({ section }) => {
  function indicatorInner() {
    if(!true) {
      return null;
    }
    
    return <div className={ styles['indicator-inner'] } />;
  }
  
  return (
    <div className={ styles.container }>
      <div className={ c('indicator', 'indicator-selected') }>
        { indicatorInner() }
      </div>

      <div className={ styles.section }>
        { section }
      </div>
    </div>
  );
};

SectionIndicator.propTypes = {
  section: PropTypes.string.isRequired,
};

export default SectionIndicator;
