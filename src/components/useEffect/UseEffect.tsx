import React, { useEffect, useState } from "react";
import { PersonListProps } from "../type";

const UseEffect: React.FC<PersonListProps> = ({ names }) => {
  const [message, setMessage] = useState<String | null>(null);

  const disappearMessage = () => {
    console.log("disAPp");
    setTimeout(() => {
      console.log("setTimeOur");
      setMessage("Please have a Look ...");
    }, 5000);
  };

  useEffect(() => {
    setMessage("Hey There, here's the list");
    disappearMessage();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      {names.map(({ first, last }) => {
        return (
          <h2 key={first}>
            {first} {last}
          </h2>
        );
      })}
    </div>
  );
};

export default UseEffect;
