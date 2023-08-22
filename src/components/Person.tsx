import React from 'react';

import {  Name, PersonProps } from './type';

const Person :React.FC<Name> = ({first, last}) => {


  
  return (
    <div>
        {first} {last}
    </div>
  );
}

export default Person; 