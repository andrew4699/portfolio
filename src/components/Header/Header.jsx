import React from 'react';
import styles from './Header.module.css';

export default () => {
  return (
    <div>
      <div className={ styles.name }>
        Andrew Guterman
      </div>

      <div className={ styles.title }>
        Software Engineer
      </div>
    </div>
  );
}
