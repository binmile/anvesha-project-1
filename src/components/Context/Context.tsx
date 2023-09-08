import React from 'react';
import ComponentUserDetails from './ComponentUserDetails';
import ComponentProfile from './ComponentProfile';

export const UserContext = React.createContext('');
export const ChannelContext = React.createContext('');


const Context:React.FC = () => {
  return (
    <div>
        <h1>Context</h1>
        <UserContext.Provider value={'Anvesha'}>
          <ComponentUserDetails/>
            <ChannelContext.Provider value={'React Trainee'}>
                <ComponentProfile/>
            </ChannelContext.Provider>
        </UserContext.Provider>
    </div>
  )
}

export default Context