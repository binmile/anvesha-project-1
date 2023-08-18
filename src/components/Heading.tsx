import React from 'react';
import { HeadingProps } from './type';
const Heading: React.FC<HeadingProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Heading;