interface Todo1 {

  title: string

  description: string

  completed: boolean

}

type TodoPreview1 = MyPick<Todo1, 'title' | 'completed'>

const todo1: TodoPreview1 = {

  title: 'Clean room',

  completed: false,

}

// 没有约束K
// type MyPick<T, K> = {
//   [key in keyof T as key extends K ? key : never]: T[key]
// };

type XXX = keyof Todo1

// 约束K
// type MyPick<T, K extends keyof T> = {
//   [key in keyof T as key extends K ? key : never]: T[key]
// };

// 简化点
type MyPick<T, K extends keyof T> = {
  [key in  K]: T[key];
};