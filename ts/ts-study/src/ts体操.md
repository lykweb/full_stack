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
