interface Todo3 {

  /** fff */
  title: string

  description: string

  completed: boolean

}

const todo3: MyReadonlyPick<Todo3, 'title' | 'description'> = {

  title: "Hey",

  description: "foobar",

  completed: false,

}


todo3.title = "Hello" // Error: cannot reassign a readonly property

todo3.description = "barFoo" // Error: cannot reassign a readonly property

todo3.completed = true // OK

// type MyReadonlyPick<T, K> = any;

// type MyReadonlyPick<T, K extends keyof T> = {
//  readonly [key in K]: T[key];
// };

// type MyReadonlyPick<T, K extends keyof T> = Omit<T, K> & Readonly<T>;

// type MyReadonlyPick<T, K extends keyof T> = {
//  readonly [P in K]: T[P];
// } & {
//   [key in keyof T as key extends K ? never : key]: T[key]
// }

type MyReadonlyPick<T, K extends keyof T> = {
  +readonly [P in K]: T[P];
} & {
  [key in keyof T as key extends K ? never : key]: T[key]
}