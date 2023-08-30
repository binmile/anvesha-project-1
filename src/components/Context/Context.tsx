import React, { ReactNode } from 'react';
import ComponentC from './ComponentC';
import ComponentB from './ComponentB';


export const UserContext = React.createContext('');
export const ChannelContext = React.createContext('');


const Context:React.FC = () => {
  return (
    <div>
        <h1>Context</h1>
        <UserContext.Provider value={'Anvesha'}>
            <ComponentC/>
            <ChannelContext.Provider value={'React Trainee'}>
                <ComponentB/>
            </ChannelContext.Provider>
        </UserContext.Provider>
    </div>
  )
}

export default Context