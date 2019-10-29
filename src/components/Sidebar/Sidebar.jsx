import React from 'react';
import styles from './Sidebar.module.css';
import { gmail, github, linkedIn } from '@/services/me';
import gmailIcon from './gmail.png';
import githubIcon from './github.png';
import linkedInIcon from './linkedin.png';
import IconLink from '@/components/IconLink';
import SectionNavigator from '@/components/Sidebar/SectionNavigator';
import SectionIndicator from '@/components/Sidebar/SectionIndicator';
import Logo from '@/components/Logo';

function toSectionNavigator(section) {
  return (
    <div key={ section } className={ styles.indicator }>
      <SectionNavigator section={ section }>
        <SectionIndicator section={ section } />
      </SectionNavigator>
    </div>
  );
}

function sections() {
  const sections = [ 'Work', 'Personal Projects', 'Education', 'Awards' ];
  return sections.map(toSectionNavigator);
}

function toIconLink([ href, icon ]) {
  return (
    <div key={ href } className={ styles.icon }>
      <IconLink href={ href } icon={ icon } width={ 32 } />
    </div>
  );
}

function icons() {
  const external = [
    [ `//mailto:${ gmail }`, gmailIcon ],
    [ github, githubIcon ],
    [ linkedIn, linkedInIcon ],
  ];

  return external.map(toIconLink);
}

export default () => {
  return (
    <div className={ styles.sidebar }>
      <div className={ styles.sections }>
        <div key='logo' className={ styles.indicator }>
          <SectionNavigator section='logo'>
            <Logo />
          </SectionNavigator>
        </div>

        { sections() }
      </div>

      <div className={ styles.external }>
        { icons() }
        <div key='decoration' className={ styles.decoration } />
      </div>
    </div>
  );
}
