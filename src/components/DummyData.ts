type PersonName = {
  first: string;
  last: string;
};

type PersonType = {
  id: number;
  name: string;
  age: number;
  skill: string;
};

type PersonTypeList = {
  persons: Array<PersonType>;
};

type Name ={
  first: string;
  last: string;
}

type PersonListProps ={
  names: Array<Name>;
}


type userDetails= {
  user:string;
  
  profile:string;
}



const details:userDetails = {
  user: "Anvesha",
  profile: "LearnCoding"
}

export const personPropsListArray:PersonListProps ={
  names:[
    {
      first: "John",
      last: "Doe"
    },
    {
      first: "Jane",
      last: "Doe"
    },
    {
      first: "Alice",
      last: "Doe"
    }
    ,{
      first: "Benn",
      last: "Doe"
    }
  ]
}

export const personName: PersonName = {
  first: "Alice",
  last: "Chopra",
};

export const nameList: Array<PersonName> = [
  {
    first: "Bob",
    last: "Sharma",
  },
  {
    first: "Lara",
    last: "Queens",
  },
  {
    first: "John",
    last: "Jadeja",
  },
];

export const personList: PersonTypeList["persons"] = [
  {
    id: 1,
    name: "Charlie",
    age: 34,
    skill: "eating",
  },
  {
    id: 2,
    name: "Marie",
    age: 43,
    skill: "dancing",
  },
  {
    id: 3,
    name: "Bob",
    age: 54,
    skill: "bad jokes",
  },
  {
    id: 4,
    name: "Dora",
    age: 35,
    skill: "cooking",
  },
  {
    id: 5,
    name: "Sam",
    age: 14,
    skill: "skating",
  },
];
