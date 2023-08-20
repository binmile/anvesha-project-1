// import React,{createContext, useState} from 'react';

// export type AuthUser = {
//     name:string
//     email:string
// }

// type UserContextProviderProps = {
//     children: React.ReactNode
// }

// export const UserContext = createContext(null);

// export const UserContextProvider = ({children}:UserContextProviderProps)=>{
//     const [user,setUser] = useState<AuthUser | null>(null);
//     return <UserContext.Provider>
//         {children}
//     </UserContext.Provider>
// }

import React from 'react'

export const UserContext = () => {
  return (
    <div>UserContext</div>
  )
}
