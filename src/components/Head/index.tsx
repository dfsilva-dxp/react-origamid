import React from 'react';

interface HeadProps {
  title: string;
  description: string;
}

const Head = ({title, description}: HeadProps): JSX.Element => {
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description)

  return <></>;
}

export default Head;