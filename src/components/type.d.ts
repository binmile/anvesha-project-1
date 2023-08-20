export interface GreetProps {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
}

export interface Name {
  first: string;
  last: string;
}

export interface Person {
  name: Name;
}

export interface PersonListProps {
  names: Array<Name>;
}

export interface PersonProps {
  name: Name;
}
export interface StatusProps {
  status: "loading" | "success" | "error";
}

export interface HeadingProps {
  children: string;
}

export interface AuthUser {
  name: Name;
}


export interface PersonType {
  id:number;
  name:string;
  age:number;
  skill:string;
};

export interface PersonTypeList{
  persons:Array<PersonType>
}


