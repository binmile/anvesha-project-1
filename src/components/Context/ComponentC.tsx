import React, { ReactNode, useContext } from "react";
import { UserContext,ChannelContext} from "./Context";
import { userDetails } from "../type";

const ComponentC:React.FC = () => {

  const user  = useContext(UserContext);
 

  return (
    <div>
      <p> Name: {user} </p>
      <p>Experience : Fresher</p>
      <p></p>
    </div>
  );
};

export default ComponentC;
