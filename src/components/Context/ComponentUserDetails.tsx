import React, { useContext } from "react";
import { UserContext} from "./Context";

const ComponentUserDetails:React.FC = () => {

  const user  = useContext(UserContext);
 

  return (
    <div>
      <p> Name: {user} </p>
      <p>Experience : Fresher</p>
      <p></p>
    </div>
  );
};

export default ComponentUserDetails;
