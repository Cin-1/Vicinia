import React from 'react';
import Card from '../Card';
import test from './test.json';

const cards = [
  {
    id: 1,
    title: 'Card 1',
    image: '',
    url: 'https://google.com',
  },
  {
    id: 2,
    title: 'Card 2',
    image: '',
    url: 'https://google.com',
  },
  {
    id: 3,
    title: 'Card 3',
    image: '',
    url: 'https://google.com',
  },
];

const Cards = (): JSX.Element => {
  const { links } = test;

  return (
    <div>
      <div>
        {cards.map(({ title, image, url, id }) => (
          <div key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
