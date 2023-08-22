import React from "react";
import {StatusProps} from './type'

const Status:React.FC<StatusProps> = ({status}) => {
  let message:string=""
  if (status === "loading") {
    message = "Loading ...";
  } else if (status === "success") {
    message = "Data fetched successfully!";
  }
  else if(status==='error'){
    message='Error fetching data';
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Status;
