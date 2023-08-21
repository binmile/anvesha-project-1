import React from 'react';

import { ContainerProps } from './type';


const Container = ({styles}:ContainerProps) => {
  return (
    <div>
        <div style={styles}>
            Text content goes here
        </div>
    </div>
  )
}

export default Container;