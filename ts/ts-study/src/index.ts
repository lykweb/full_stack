const enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}


interface Person{
  name:string;
  age:number;
  location:string;
}

type K1=keyof Person;//"name"| "age"|"localtion"
let k1: K1 = 'name';
type K2=keyof Person[] // numner|"length"|"push"....
type K3 =  keyof {[x:string]:Person};//string|number

class Person1 {
  name: string = "Semlinker";
  age: string = "ttt";
}

type Kp1 = keyof Person1;
let Kp1: Kp1;
Kp1 = "name";


// function prop(obj: object, key: string) {
//   return obj[key];
// }

interface User {
  /** 这个是idkkk */
  id: string;
  name: string;
}

// let user: User = {
// }
