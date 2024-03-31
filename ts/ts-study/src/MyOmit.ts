interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}

// 1 定义泛型

type MyOmit<T, K> = any;

// 2 分析泛型

// 报错
// type MyOmit<T, K> = {
//   [key in keyof T extends K ? never : key]: T[key]
// }

// T中的key 也在 K 中
// type MyOmit<T, K> = {
//   [key in keyof T as key extends K ? never : key]: T[key]
// }

