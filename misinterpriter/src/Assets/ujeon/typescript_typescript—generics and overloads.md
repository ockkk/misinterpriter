# 타입스크립트 제네릭과 오버로드

_본 기사는 [Charly Poly](https://medium.com/@wittydeveloper?source=post_page-----999679d121cf----------------------)의 [Typescript — Generics and overloads](https://medium.com/@wittydeveloper/typescript-generics-and-overloads-999679d121cf)을 번역한 기사입니다._

![](https://miro.medium.com/max/2000/0*9vLufA771W-hnhJh.)

이 기사는 "[타입스크립트 에센셜](https://medium.com/@wittydeveloper/typescript-essentials-b7ae85b0f561)" 모음의 일부 중 네번째 챕터입니다.

---

지난 기사 "[타입스크립트—기초 배우기](https://medium.com/@wittydeveloper/typescript-learn-the-basics-2f56eb9b02eb)"에서 타입스크립트 타입의 기본적인 사용 방법에 대해서 살펴보았습니다.

기번 기사가 끝날 때 쯤,

여러분은 왜 제네릭 타입이 **실제 사용**에 필수적인지 이해하시게 될 것입니다.

---

## 제네릭—설정가능한 타입

> `interface` 와 같은 기본 타입은 데이터 및 기본 함수 기능 서명을 설정하는데 유용하지만, 제네릭은 타입을 "열리고" 재사용할 수 있도록 도와줍니다.

### 제네릭 타입을 사용하는 이유는 무엇인가요?

다음 헬퍼 함수를 어플리케이션에 노출시키고 싶다고 상상해보세요:

```typescript
function withUID(obj) {
  return Object.assign({}, obj, { uuid: _.uniqueId() });
}
```

이 함수에 조금 더 직관적으로 "타입"을 지정하는 방법은:

```typescript
function withUID(obj: any) {
  return Object.assign({}, obj, { uuid: _.uniqueId() });
}
```

어떤 값을 허용하도록 만들기 위해서 `any` 타입을 사용합니다. — 게다가 `object` 도 사용가능하죠.

문제는 **함수가 유추하는 반환 타입이 `any` 라는 것 입니다.**

![](https://miro.medium.com/max/1552/1*0lnCILE5kwa1NSTPGzyjsA.png)

스칼라 타입(`object`...) 또는 어떤 것을 사용함으로써,

타입스크립트가 반환 타입을 유추하는 것을 방지할 수 있습니다.

이 문제를 극복하기 위해서, **제네릭 타입을 사용할 것입니다.**

### 제네릭 타입 사용하기

> C# 과 Java 같은 언어에서, 재사용 가능한 컴포넌트를 생성하기 위한 도구 상자의 주요 도구 중 하나는 제네릭입니다. 즉, 제네릭으로 한 가지의 타입이 아니라 다양한 타입과 동작가능한 컴포넌트를 생성할 수 있습니다.

_[_https://www.typescriptlang.org/docs/handbook/generics.html*](https://www.typescriptlang.org/docs/handbook/generics.html)\*

타입스크립트 문서에서 발췌한 부분처럼, 타입을 잃지않고 여러 가지 타입을 허용하는 함수를 만들고 싶은 경우가 있습니다. — `any` 타입을 사용하지 않고 말이죠.

제네릭을 사용한 `withID` 를 살펴보겠습니다.

```typescript
function withUID<T>(obj: T) {
  return Object.assign({}, obj, { uuid: _.uniqueId() });
}
```

`<>` 구문은 제네릭 타입을 설명하기 위해서 남겨두겠습니다.

제네릭은 `<>` 에 나열된 많은 "타입 인수"를 나타냅니다.

제네릭은 `interfaces`, `class` 그리고 `function`에 적용될 수 있습니다.

```typescript
interface A<T, S> {
  a: T;
  b: S;
  c: { id: string } & S;
}
```

보시다시피, 필요한 만큼 "타입 인수"를 정의할 수 있습니다.

![](https://miro.medium.com/max/1556/1*UOp28xX0c9pLwAxOseXMCw.png)

타입 인수가 명시적으로 전달되지 않으면, 타입스크립트는 함수 인수에 전달 된 값으로 유추하려고 시도합니다.

예를 들어, `withUID` 에서, `T` 는 `obj` 인자의 타입에서 유추됩니다.

### 제네릭은 "extends" 할 수 있습니다.

타입 인자는 `extends` 키워드를 사용함으로써 제약 조건을 제공할 수 있습니다.

```typescript
withUID({ a: 1 }); // is valid
withUID("hello"); // is NOT valid
```

여기서 `T` 는 "객체 타입"이라는 조건을 충족해야 합니다.

```typescript
interface Person {
  name: string;
}
function withUID<T extends Person>(obj: T) {
  return Object.assign({}, obj, { uuid: _.uniqueId() });
}
withUID({ name: "POLY", surname: "Chack" }); // is valid
```

### 제네릭은 "디폴트 타입 값"을 가질 수 있습니다.

마지막으로 인자 타입들은 "default"나 "computed value"를 가질 수 있습니다.

```typescript
interface A<T = string> {
  name: T;
}
const a: A = { name: "Charly" };
const a: A<number> = { name: 101 };
```

이는 함수 제네릭과 달리 타입 인수를 생략할 수 없는 인터페이스에 특히 중요합니다. 예를 들어:

![](https://miro.medium.com/max/2064/1*hB7mnJ7Jl0vwWU17NDHGHw.png)

이것이 "기본 타입 값"이 "알아두기 좋은" 이유입니다.

![](https://miro.medium.com/max/1188/1*WXnbQAOss1pJjVpPb1Dyug.png)

**팁 — 기본 타입 인자는 다른 타입 인자를 재사용 할 수 있습니다.**

아래 예시는 타입 인자를 다른 타입 위에 정의할 수 있는 방법을 설명합니다:

```typescript
function MyFunction<T extends Person, S = T & { ssid: string }>(person: S): S {
  /* ... */
}
```

---

## 오버로드 — 확장가능한 함수 타입

제네릭은 단순 격리 계산이나 주어진 값에 따른 예측 가능한 반환을 하는 함수에 유용합니다.

안타깝게도, 모든 것들이 간단하지는 않죠. 몇몇 "큰" 함수들은 다양한 반환 타입으로 복잡성이 높을 수 있습니다.

이 문제를 극복하기 위해서 제네릭을 "오버로드"와 함께 사용할 수 있습니다.

예를 들어서, 다음 함수에 어떻게 타입을 지정할 수 있을까요?

```typescript
function getArray(...args) {
  if (args.length === 1 && typeof args[0] === "number") {
    return new Array(args[0]);
  } else if (args.length > 1) {
    return Array.from(args);
  }
}
getArray(5); // => [undefined x 5]
getArray("a", "b", "c"); // => ['a', 'b', 'c']
```

유추된 결과 타입은 다음과 같습니다:

![](https://miro.medium.com/max/1940/1*ll35-GyCCaJGuViH53NelQ.png)

해결 방법은 "오버로드"를 사용하는 것 입니다.

> 정답은 오버로드 목록으로써 동일한 함수에 대해 여러 함수 타입을 제공하는 것입니다. 이 목록은 컴파일러가 함수 호출을 해결(resolve)하는 데 사용하는 것입니다.

https://www.typescriptlang.org/docs/handbook/functions.html

![](https://miro.medium.com/max/2000/1*fayRzWScAmF0nFgu3QP1Kg.png)

오버로드는 주어진 함수에 대해 가능한 모든 입력/출력 타입을 나열하는 사실입니다.

ℹ️ 다음을 기억하세요:

- 오버로드는 **바디**가 없습니다.
- 구현 함수는 **가능한 개방되어** 있어야 합니다.(오버로드 허용)

---

## 실제 사례

**제네릭과 인터페이스 예시: `React.Component`**

여러분은 ES6에서 React Component를 선언하는 방법에 대해서 알고 계실 겁니다:

```typescript
class MyComponent extends React.Component {}
```

타입스크립트에서는, `React.Component` 클래스는 `Component` 타입을 참조합니다.

![](https://miro.medium.com/max/2772/1*96pJoLvaCBsW73Ffg9WaPA.png)

P는 Props 타입의 약자이고, S는 State 타입의 약자입니다.

`Component` 타입은 `ComponentLifecycle`을 확장합니다. — `ComponentLifecycle`은 유명한 라이프사이클 메서드를 제공하죠:

![](https://miro.medium.com/max/3516/1*lmXc14detC19SNF2xAAFYA.png)

따라서 타입스크립트와 리액트를 함께 사용하는 경우 Props 및 State에 타입 인자를 제공해야 합니다!

```typescript
interface Props {
  user: User;
}
interface State {}
class MyComponent extends React.Component<Props, State> {
  state: State = {}; // important!

  // ...
}
```

**오버로드 예시: `lodash _.filter()`**

`_.filter` 는 다른 타입의 인수를 값으로 사용할 수 있으므로, 오버로드 타이핑과 제네릭 조합이 매우 복잡합니다.

![](https://miro.medium.com/max/1640/1*w_k1J5TuTXngsneHguLYJQ.png)

모든 `lodash` 함수들은 이렇듯 고급지고 완벽한 타이핑을 제공합니다!

---

저는 이제 여러분이 제네릭과 오버로드의 개념에 대해 이해하셨기를 바라며, 특히 이것들이 중요한 이유는 실제 타입스크립트 프로젝트이기 때문입니다.

더 깊게 알고 싶거나 타이핑 기술을 향상 시키려면 다음 타이핑을 살펴보는 것도 좋습니다:

- [React-Apollo 타입](https://github.com/apollographql/react-apollo/blob/master/src/types.ts)
- [React-redux 타입](https://www.npmjs.com/package/@types/react-redux): 특히 데코레이터 입력을 소개하는 `connect()`
