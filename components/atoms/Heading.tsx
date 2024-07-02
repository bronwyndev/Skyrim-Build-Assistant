import React from 'react';

interface HeadingProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6; 
}

const Heading: React.FC<HeadingProps> = ({ text, level }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return React.createElement(HeadingTag, {}, text);
};

export default Heading;