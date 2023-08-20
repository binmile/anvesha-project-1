type PersonName = {
  first: string;
  last: string;
};

type PersonType = {
  id:number;
  name:string;
  age:number;
  skill:string;
};

type PersonTypeList={
  persons:Array<PersonType>
}


export const personName: PersonName = {
  first: "Alice",
  last: "Chopra",
};



export const nameList :Array<PersonName> = [
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


export const personList:PersonTypeList['persons'] = [
  {
    id:1,
    name:'Charlie',
    age:34,
    skill:'eating'
  },
  {
    id:2,
    name:'Marie',
    age:43,
    skill:'dancing'
  },
  {
    id:3,
    name:'Bob',
    age:54,
    skill:'bad jokes'
  },
  {
    id:4,
    name:'Dora',
    age:35,
    skill:'cooking'
  },
  {
    id:5,
    name:'Sam',
    age:14,
    skill:'skating'
  },
]