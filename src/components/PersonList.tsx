import React from 'react';
import { PersonListProps } from './type';


const PersonList : React.FC<PersonListProps> = ({names}) => {
  return (
    <div>
        {names.map(({first,last})=>{
        return (
            <h2 key={first}>{first} {last}</h2>
        )
       })}
    </div>
  )
}

export default PersonList;