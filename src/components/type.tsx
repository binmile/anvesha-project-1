export interface GreetProps {
  name: string
  messageCount: number
  isLoggedIn:boolean
}

export interface Person{
    name:{
        first:string
        last:string
    }
}  


export interface PersonListProps {
    names:{
        first:string
        last:string
    }[]
}

export interface PersonProps{
    name:{
        first:string,
        last:string
    }
}

export interface StatusProps{
    status:'loading' | 'success' | 'error'
}

export interface HeadingProps{
    children:string
}

export interface AuthUser{
    name:string
    email:string
}