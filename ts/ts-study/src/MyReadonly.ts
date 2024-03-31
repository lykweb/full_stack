interface Todo2 {

  title: string

  description: string

}


const todo2: MyReadonly<Todo2> = {

  title: "Hey",

  description: "foobar"

}


todo2.title = "Hello" // Error: cannot reassign a readonly property

todo2.description = "barFoo" // Error: cannot reassign a readonly 

// type MyReadonly<T> = any;

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
}
