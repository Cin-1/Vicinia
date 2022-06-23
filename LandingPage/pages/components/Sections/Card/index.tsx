import React from 'react';

interface IProps {
  imageSource: string;
  title: string;
  text?: string;
  url: string;
}

const Card = ({ imageSource, title, text, url }: IProps): JSX.Element => {
  return (
    <div>
      <div>
        <img src={imageSource} alt="image" />
      </div>
      <div>
        <h4>{title}</h4>
        <p className="card-text text-secondary">
          {text ? text : 'Lorem ipsum dolor sit amet consectetur.'}
        </p>
        <a
          href={url ? url : '#'}
          target="_blank"
          className="border-0 btn btn-outline-secondary"
          rel="noreferrer"
        >
          Go to {title}
        </a>
      </div>
    </div>
  );
};

export default Card;
