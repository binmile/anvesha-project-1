import {useState} from 'react'
import {AuthUser} from './type'

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = ()=>{
    setUser({
        name:'Anvesha',
        email:'anvesha@mail.com'
    })
  }
  const handleLogout = ()=>{
    setUser(null);
  }
  return(
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {user?.name}</div>
        <div>User email is {user?.email}</div>
    </div>
  )
  return (
    <div>User</div>
  )
}

export default User