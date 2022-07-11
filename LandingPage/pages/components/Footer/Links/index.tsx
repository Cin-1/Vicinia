import React from 'react';
import { Text } from '../../UI';
import test from './test.json';

import * as styles from './styles';

interface ISubTitles {
  text: string;
  url: string;
}

interface ILink {
  title: string;
  subTitles: Array<ISubTitles>;
}

const Contact = (): JSX.Element => {
  const { items } = test;
  return (
    <div className={styles.MAIN_CONTAINER}>
      {items.map((item: ILink, index: number) => (
        <div className={styles.TEXT_CONTAINER} key={index}>
          <Text variant="h3" color="primary" style="mb-4 sm:mb-8">
            {item.title}
          </Text>
          {item.subTitles.map((item: ISubTitles, index: number) => (
            <Text variant="h5" color="secondary" key={index} style="mb-2">
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.text}
              </a>
            </Text>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Contact;
