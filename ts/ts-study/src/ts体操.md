# TS 训练

## 1. Implment MyReturnType

> Implement the built-in ReturnType\<T> generic without using it.

**For example:**

```typescript
const fn = (v: boolean) => {
  return v ? 1 : 2;
}

type a = MyReturnType<typeof fn>; // should be "1 | 2"
```

> 从 fn 这个函数来看，返回值应该是推断的 1|2 而非 number（更宽泛）。一般开发的时候用 type，开发 sdk 或者接口的时候可以使用 interface。

### 分解

#### 1.1 可以先写个 MyReturnType 接受 泛型T  any，这样的结果虽然不报错，但显然不满足要求的。

```typescript
type MyReturnType<T> = any;
```

#### 1.2 通过 MyReturnType 获取函数返回值类型，应该使用 extends 约束 T 是函数

> 并不是说 TS 一定不能写 any，主要是用的合理。这个函数的入参、出参不固定，因此可以用 any。

```typescript
type MyReturnType<T extends (...arg: any) => any> = any;
```

#### 1.3 使用 extends、infer，推断返回值类型

```typescript
type MyReturnType<T extends (...arg: any) => any> = T extends (...arg: any) => infer R ? R : never;
```
## 2. Implment MyOmit

> Implement the built-in Omit<T, K> generic without using it.
> Constructs a type by picking all properties from T and then removing K

**For example:**

```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
```

### 分解

#### 1、声明 MyOmit 为 any 接受两个泛型 T、K，这样的结果虽然不报错，但显然不满足要求的。

```typescript
type MyOmit<T, K> = any;
```

#### 2、分析：T 表示原类型，K 是 T 中要丢掉的 key 的联合类型。因此只要能遍历出 T 中的 key，并在每个迭代中判断出 key 是否存在 K 中，然后，丢掉符合条件的 key 及其对应的值即可。遍历可使用 in keyof，条件判断使用 extends 实现。

```typescript
type MyOmit<T, K> = {
  [key in keyof T extends K ? never : key]: T[key]
}
```

> 你或许会通过上述代码实现，但是会报：类型参数“key”具有循环约束 的错。
> 遍历时不能直接 extends，可以用 as 来实现。

```typescript
type MyOmit<T, K> = {
  [key in keyof T as key extends K ? never : key]: T[key]
}
```


## 3. Implment MyPick

> Implement the built-in Pick<T, K> generic without using it.
> Constructs a type by picking the set of properties K from T

**For example:**

```typescript

interface Todo {

  title: string

  description: string

  completed: boolean

}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {

  title: 'Clean room',

  completed: false,

}

```

## 4. Implment MyReadonly

> Implement the built-in Readonly\<T> generic without using it.
> Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

**For example:**

```typescript
interface Todo {

  title: string

  description: string

}


const todo: MyReadonly<Todo> = {

  title: "Hey",

  description: "foobar"

}


todo.title = "Hello" // Error: cannot reassign a readonly property

todo.description = "barFoo" // Error: cannot reassign a readonly property
```

> Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
> K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly\<T>.

**For example:**

```typescript
interface Todo {

  title: string

  description: string

  completed: boolean

}

const todo: MyReadonlyPick<Todo, 'title' | 'description'> = {

  title: "Hey",

  description: "foobar",

  completed: false,

}


todo.title = "Hello" // Error: cannot reassign a readonly property

todo.description = "barFoo" // Error: cannot reassign a readonly property

todo.completed = true // OK
```
