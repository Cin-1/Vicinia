import React, { FC } from 'react';

interface TextTypes {
  variant: string;
  color: 'primary' | 'secondary';
  children: React.ReactNode;
  style?: string | null;
  align?: string | 'left' | 'right' | 'center';
}

const defaultProps: TextTypes = {
  variant: 'h5',
  color: 'primary',
  children: '',
  align: 'left',
};

interface ObjectLiteral {
  [key: string]: string;
}

const variants: ObjectLiteral = {
  h1: 'text-3xl font-medium',
  h2: 'text-2xl font-medium',
  h3: 'text-xl font-medium',
  h4: 'text-lg font-medium',
  h5: 'text-base font-medium',
  tag: 'text-sm font-medium',
};

const colors: ObjectLiteral = {
  primary: 'text-black',
  secondary: 'text-secondary',
};

export const Text: FC<TextTypes> = ({
  variant,
  color,
  children,
  style,
  align,
}: TextTypes) => {
  const CONTAINER_TITLE = `block w-auto ${variants[variant]} text-${align} ${
    colors[color]
  } ${style ?? ''}`;

  return <span className={CONTAINER_TITLE}>{children}</span>;
};

Text.defaultProps = defaultProps;
