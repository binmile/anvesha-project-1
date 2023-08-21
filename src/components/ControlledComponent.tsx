import React, { useState } from 'react';


const ControlledComponent = () => {
    const [name,setName] = useState("");

    const handleCLick=():void=>{
        console.log(name);
    }

  return (
    <div>
        <label htmlFor="name">Name: </label>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} />
        <button onClick={handleCLick} >Submit</button>
    </div>
  )
}

export default ControlledComponent; 