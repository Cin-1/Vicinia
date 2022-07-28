import React from 'react';

interface IProps {
  imageSource: string;
  title: string;
  text?: string;
  url: string;
}

const Card = ({ imageSource, title, text, url }: IProps): JSX.Element => {
  return (
    <div className="container px-5 py-24">
      <div className="p-4 w-[10rem] md:w-[20rem]">
        <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
          <img
            className="object-cover object-center w-full lg:h-72 md:h-48"
            src={imageSource}
            alt="image"
          />
          <div className="p-6 transition duration-300 ease-in hover:bg-secondary hover:text-white">
            <h1 className="mb-3 text-2xl font-semibold">{title}</h1>
            <p className="mb-3 leading-relaxed">{text}</p>
            <div className="flex flex-wrap items-center ">
              <a
                href={url}
                className="inline-flex items-center text-indigo-300 md:mb-2 lg:mb-0"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
