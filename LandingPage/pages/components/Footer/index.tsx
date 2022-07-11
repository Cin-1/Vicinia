import React from 'react';
import Links from './Links';
import BottomSection from './BottomSection';
import UpperSection from './UpperSection';

import * as styles from './styles';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.CONTAINER}>
      <UpperSection />
      <Links />
      <BottomSection />
    </footer>
  );
};

export default Footer;
