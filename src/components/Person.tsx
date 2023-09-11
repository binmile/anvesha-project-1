import React from "react";
import style from "./Person.module.css";
import { Name, PersonProps } from "./type";

const Person: React.FC<Name> = ({ first, last }) => {
  return (
    <div className={style["name"]}>
      <h1>
        {first} {last}
      </h1>
    </div>
  );
};

export default Person;
