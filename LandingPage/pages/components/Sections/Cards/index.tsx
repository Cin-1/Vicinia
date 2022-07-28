import React from 'react';
import Card from '../Card';
import test from './test.json';

const cards = [
  {
    id: 1,
    title: 'Card 1',
    image: 'https://picsum.photos/id/188/720/400',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum accusamus?',
    url: 'https://google.com',
  },
  {
    id: 2,
    title: 'Card 2',
    image: 'https://picsum.photos/id/1016/720/400',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum accusamus?',
    url: 'https://google.com',
  },
  {
    id: 3,
    title: 'Card 3',
    image: 'https://picsum.photos/id/1011/720/400',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum accusamus?',
    url: 'https://google.com',
  },
];

const Cards = (): JSX.Element => {
  const { links } = test;

  return (
    <div className="flex flex-row my-4 overflow-auto flex-nowrap lg:flex-wrap lg:justify-center hideScrollBar hideScrollBarChrome">
      {cards.map(({ title, image, text, url, id }) => (
        <div key={id}>
          <Card imageSource={image} title={title} url={url} text={text} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
