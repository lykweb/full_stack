// 实现 MyReturnType 用于得到函数返回值的类型

function fn(v: boolean) {
  return v ? 1 : 2;
}

type a = MyReturnType<typeof fn> // 1 | 2

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;