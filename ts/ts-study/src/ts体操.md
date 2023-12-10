# TS 训练

## 1. Implment MyReturnType

> Implement the built-in ReturnType\<T> generic without using it.

**For example:**

```typescript
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // should be "1 | 2"
```

> 从 fn 这个函数来看，返回值不应该是
