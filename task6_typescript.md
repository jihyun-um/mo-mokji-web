# 뭐 먹지? - TypeScript by Jihyun

## Objective
현재 JavaScript로 구성된 뭐먹지 프로젝트를 TypeScript로 migrate해보기.

## TypeScript Basics
- [Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html) - Boolean, Number, String, Array, Tuple, Any, Void, Null and Undefined
- [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html), [Classes](https://www.typescriptlang.org/docs/handbook/classes.html), [Enums](https://www.typescriptlang.org/docs/handbook/enums.html), [Generics](https://www.typescriptlang.org/docs/handbook/generics.html), [Functions](https://www.typescriptlang.org/docs/handbook/functions.html)
- [Literal Types](https://www.typescriptlang.org/docs/handbook/literal-types.html), [Union Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types), [Intersection Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types)
- [Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

## Migrating from JavaScript to TypeScript - [Tutorial](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#writing-a-configuration-file)
1. Add a config file - `tsconfig.json`
2. Change your source code file extensions from `.js` to `.ts` (If your file uses JSX, you’ll need to rename it to `.tsx`).
3. Start suppressing errors using `any`.
4. Go back to the code and start adding type annotations and fix identified bugs.

## Useful Reads
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive GitBook](https://basarat.gitbook.io/typescript/)