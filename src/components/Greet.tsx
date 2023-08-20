import React from 'react';

import { GreetProps } from './type'

const Greet : React.FC<GreetProps> = ({name,messageCount,isLoggedIn})=>{
    return (
        <div>
            <h2>
                {isLoggedIn ? `Welcome ${name}! You have ${messageCount} unread messages ` : `Welcome Guest`}
            </h2>
        </div>
    )
}

export default Greet; 