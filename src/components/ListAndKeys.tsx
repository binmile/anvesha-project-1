import React from "react";

import { PersonProps, PersonType, PersonTypeList } from "./type";

const ListAndKeys: React.FC<PersonTypeList> = ({ persons }) => { 
  return (
    <div>
      {
        persons.map((person)=>{
          return <h6 key={person.id}>I am {person.name}. I am {person.age} years old. I like {person.skill}</h6>
        })
      }
    </div>
  );
};

export default ListAndKeys;
