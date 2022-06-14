import React from 'react';
import test from './test.json';
import * as styles from './styles';

interface ILink {
  text: string;
  url: string;
}

const NavBar = (): JSX.Element => {
  const { links } = test;
  const url = '/PNG/icono-ventana-2.png';
  return (
    <nav className={styles.MAIN_CONTAINER}>
      <img src={url} alt="logo" className={styles.IMAGE} />
      {links.map((item: ILink, index: number) => (
        <a href={item.url} key={index} className={styles.LINK}>
          {item.text}
        </a>
      ))}
      <button className={styles.BUTTON}>Contacto</button>
    </nav>
  );
};

export default NavBar;
