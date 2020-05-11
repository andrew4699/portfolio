import React from 'react';
import styles from './Home.module.css';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Experience from '@/components/Experience';

export default () => {
  return (
    <div className={ styles.home }>
      <nav className={ styles.sidebar }>
        <Sidebar />
      </nav>

      <main className={ styles.main }>
        <section className={ styles.header }>
          <Header />
        </section>

        <section className={ styles.experience }>
          <Experience />
        </section>
      </main>
    </div>
  );
};
