import React from 'react';

import {  PersonProps } from './type'

const Person = (props:PersonProps) => {
  return (
    <div>
        {props.name.first} {props.name.last}
    </div>
  )
}

export default Person; 