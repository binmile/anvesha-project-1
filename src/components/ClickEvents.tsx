import React,{MouseEvent} from 'react';


const ClickEvents = () => {
    const handleClick =(event:MouseEvent<HTMLButtonElement>):void=>{
        console.log('Hey');
        console.log(event);
    }

    
  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
    </div>

  )
}

export default ClickEvents;