import React from 'react';
import styles from './Experience.module.css';
import Banner from '@/components/Banner';
import Impression from '@/components/Experience/Impression';
import { gusto, piper, sflimo, offtoyou } from '@/services/me';

function toProject([ { name, imgSrc }, weight ]) {
  return (
    <a key={ name } href='' className={ styles.project }>
      <Banner>
        <Impression name={ name } imgSrc={ imgSrc } />
      </Banner>
    </a>
  );
}

function toSection({ name, projects }) {
  return (
    <section key={ name } className={ styles.section }>
      <div className={ styles.name }>
        { name }
      </div>

      <div className={ styles.projects }>
        { projects.map(toProject) }
      </div>
    </section>
  );
}

function parts() {
  const sections = [
    {
      name: 'Work',
      projects: [
        [ gusto, 1 ],
        [ piper, 1 ],
        [ sflimo, 0.5 ],
        [ offtoyou, 0.5 ],
      ],
    },
  ];

  return sections.map(toSection);
}

export default () => {
  return (
    <div>
      { parts() }
    </div>
  );
}
