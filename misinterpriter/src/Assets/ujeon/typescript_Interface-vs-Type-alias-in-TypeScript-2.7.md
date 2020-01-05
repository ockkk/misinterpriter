# 타입스크립트 2.7에서의 Interface vs Type alias

​	*본 기사는 [Martin Hochel](https://medium.com/@martin_hotell?source=post_page-----2a8f1777af4c----------------------)의 [Interface vs Type alias in TypeScript 2.7](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c) 를 번역한 기사입니다.*

![Interface vs Type alias](https://miro.medium.com/max/1806/1*c7NX0rtwapsb_lVRCk1C-A.png)

많은 분들이 종종 저에게 물어보는게 있어요(온라인에서, 직장에서, 스케이트보드 공원 (아니😂)에서 말이죠). 타입스크립트에서 컴파일 할 때 타입을 지정하기 위해서 사용하는 `type` 과 `interface`의 차이가 무엇이냐고요.

그 때마다 저는 그 분들을 보면서 타입스크립트 핸드북을 가리켰죠.

안타깝게도 대부분의 경우 그 분들이 찾는 드로이드(역주: 로봇, 무언가를 해주는 의미로 사용한 것 같습니다.)를 발견하지 못했습니다(대부분의 경우 고급 타입 섹션에 숨겨져 있거든요). 심지어 찾아 낸 경우라도, 더 이상 사용되지 않는 정보들 뿐이었죠(기술된 지침은 typescript@2.0.x에 관한 것들이었습니다).

모두에게 좋은 소식입니다! 여러분들이 더 이상 살펴볼 필요가 없이, 이 포스트는 `interface` 대 `type` 별칭에 관한 설명과 스타일 가이드의 최신 버전이거든요.

## 공식문서에서는:

>*"type 별칭은 미묘한 차이가 있지만 일종의 interface 같은 역할을 합니다."*

**정확한 설명입니다!**

**근데 차이점이 뭐죠?**

>*1. "한 가지 차이점은, interface는 어디서든지 사용되는 새로운 이름을 생성합니다. type 별칭은 새로운 이름을 생성하지 않는다는 점입니다. — 예를 들어서, 에러 메세지는 별칭 이름을 사용하지 않습니다."*

**맞지 않는 설명입니다! (TypeScript 2.1 부터)**

Interface와 type 별칭을 통해서 `Point`에 컴파일 할때의 타입을 정의하고, interface와 type 별칭을 매개변수 타입 주석으로 사용하는 함수  `getRectangleSquare`를 두 번 실행해보겠습니다.

![interface와 type 별칭으로 타입이 지정된 Point](https://miro.medium.com/max/602/0*Ql6cSmhwupaPn7Ub.png)

![](https://miro.medium.com/max/1446/0*hvarXPxaDpoXWe_n.png)

![](https://miro.medium.com/max/861/0*ZjdAejKVlALo7PmC.gif)

두 경우에서 발생한 동일한 에러는:

```
// TS Error: 

// Interface:

Argument of type '{ x: number; }' is not assignable to parameter of type 'PointInterface'. Property 'y' is missing in type '{ x: number; }'.

// Type alias:

Argument of type '{ x: number; }' is not assignable to parameter of type 'PointType'. Property 'y' is missing in type '{ x: number; }'.
```

>*2. "조금 더 중요한 두 번째 차이점은 type 별칭을 확장하거나 구현할 수 없다는 점입니다. "*

**이 설명 역시 잘못되었습니다!**

Type 별칭을 사용하여 interface를 확장할 수 있습니다:

![](https://miro.medium.com/max/930/0*Ob_oxjG7dfN9sCBH.png)

혹은 클래스 제약을 구현하기 위해 type 별칭을 사용할 수도 있습니다.

![](https://miro.medium.com/max/858/0*Yx6SXZrPILT4_gZu.png)

또는 클래스 제약 조건을 구현하기 위해서 type에 의해서 확장된 interface를 사용할 수도 있죠.

![](https://miro.medium.com/max/998/0*TcJzYs6DA1MRG8eN.png)

마찬가지로 클래스 제약을 구현하기 위해서 type 별칭과 interface를 결합할 수도 있습니다.

![](https://miro.medium.com/max/1128/0*NR7Sulf-FHR0t7mL.png)

>*3. "type 별칭은 다른 타입을 확장하거나 구현할 수 없다."*

**이 설명 역시도 잘못되었습니다!**

>## 음 부분적으로는 맞는 설명이지만 공식화(formulation)가 빠졌습니다 👀.

교차 연산자 `&`을 통해서 interface나 다른 타입스크립트의 유효한 타입(원시 타입이 아닌 딕셔너리/자바스크립트 객체 형태를 가진)을 type 별칭을 확장하는데 사용할 수 있습니다.

![](https://miro.medium.com/max/1024/0*IBhNBUAwBdVP4n6z.png)

또한 interface 와 type 별칭의 다양한 변환에 매핑된 타입을 활용할 수 있습니다.

매핑된 타입 `Partial`를 통해 *Shape* 와 *Perimeter* 옵셔널을 만들어 봅시다.

![](https://miro.medium.com/max/1390/0*PwXJsDDc7rfded7O.png)

약한 수준의 타입 감지 또한 정상적으로 작동합니다. 

![](https://miro.medium.com/max/726/0*9YupZKHqno0SD5VI.gif)

## Type 별칭과 interface 모두 가진 하이브리드 타입

추가적인 속성을 가진 함수와 객체 두 가지 역할을 하는 객체를 정의하기를 바라실 수 있습니다.

여기서 이야기하려는 것은 함수(호출 가능한 객체)의 타입과 함수에 존재하는 정적인 속성을 정의하는 것입니다.

>이 패턴은 써드 파티 자바스크립트와 상호작용할 때, 타입의 형태를 완전히 묘사하기 위해 보셨을 수 있습니다.

![](https://miro.medium.com/max/1078/0*NG9ZykTgiohMQjAz.png)

Type 별칭도 동일하게 작동합니다!

![](https://miro.medium.com/max/604/0*fZ7POY2RBUCgmpsf.png)

그래도 정말 미묘한 차이가 있습니다. `Counter` 타입을 참조하는 대신에 IDE에서는 특정 형태의 타입을 얻습니다.

![](https://miro.medium.com/max/558/0*rKF8aP0S4ju-pfPR.gif)

일반적으로 좋은 아이디어/연습은, 하이브리드 정의를 두 부분으로 나누는 것 입니다:

- 호출가능한 객체 (함수) type 별칭

![](https://miro.medium.com/max/888/0*DMug0ru-CMmW3Co_.png)

- 정적인 속성 객체 형태

![](https://miro.medium.com/max/606/0*XNoxV8fPu1D8PIVh.png)

마지막으로 `Counter` 타입:

![](https://miro.medium.com/max/1072/0*3yZ-PtIuhyQPKBd1.png)

---

## 그래서 다시 type 별칭과 interface의 차이점은 무엇인가요🤖?

## 1. 타입 정의 내에서 `union` 연산자를 사용하면 type 별칭이 있는 클래스에서 `implements`를 사용할 수 없습니다.

다음 코드는 컴파일 에러를 발생시킵니다:

![](https://miro.medium.com/max/802/0*pLMBLSbJFAwbvUzP.gif)

>## 말이 됩니다! 클래스 청사진은 하나 혹은 또다른 형태 구조를 수행할 수 없기 때문에 특별히 놀라운 점은 없습니다.

type 별칭 사용이 유효하고 동작하는 경우는 객체 리터럴을 통한 객체 정의입니다. 그러므로 다음의 경우는 타당하고 컴파일 에러를 발생시키는데, 왜냐하면 `perimeter()` 나 `area()` 메서드 중 하나 혹은 모두 정의해야하기 때문입니다.

![](https://miro.medium.com/max/782/0*e20ZG3eabF2DdK6E.gif)

## 2. 타입 정의 내에서 `union` 연산자를 사용하면 type 별칭으로 interface를 `extends` 할 수 없습니다

![](https://miro.medium.com/max/800/0*6PqsTF77E9hCLZ4Q.gif)

다시 한 번 말씀드리면, 클래스의 `implements` 사용과 유사하게, interface는 "정적" 청사진입니다. — 인터페이스는 하나 혹은 또다른 형태 내에 존재할 수 없기 때문에, 유니언 타입 병합에 의해 `extended` 될 수 없습니다.

## 3. 선언 병합은 type 별칭과 함께 작동할 수 없습니다

선언 병합은 interface와는 작동하지만 type 별칭과는 작동하지 않습니다.

여기서 선언 병합은 무슨 말일까요?

선언 병합은 동일한 interface를 여러번 정의할 수 있고, interface의 정의들은 하나로 합쳐질 수 있다는 의미입니다:

![](https://miro.medium.com/max/1046/0*KaOLApvjRtJNeTZe.png)

이는 type 별칭에서는 유효하지 않습니다. 왜냐하면 타입은 유일한 타입 엔티티이기 때문이죠 (글로벌 스코프든 모듈 스코프이든):

![](https://miro.medium.com/max/1011/0*1_bOVV1QQebdP-x6.gif)

타입스크립트로 작성되지 않은 라이브러리에 대해 써드 파티 주변 타입 정의를 작성할 때 interface를 통한 선언 병합은 정말 중요합니다. 따라서 일부 정의가 누락 된 경우 사용자가 이를 확장할 수 있는 옵션이 존재합니다.

라이브러리가 타입스크립트로 작성되고 주변 타입 정의가 자동으로 생성되는 경우에도 동일하게 적용됩니다.

이것이 type 별칭 대신에 interface를 사용해야하는 유일한 경우입니다!

## ⚛️: 리액트 `Props`와 `State`에는 어떤 것을 사용해야 하나요?

일반적으로 원하는 것을 사용하되 ( type 별칭 / interface ) 일관성을 유지하면 됩니다만, ***개인적으로는 type 별칭을 사용하는 것이 좋다고 생각합니다:***

- `type Props = {}` 로 사용하는 것이 좀 더 짧습니다.
- 구문이 일관됩니다. ( 타입 교차가능성 때문에 type 별칭과 interface를 혼합해서 사용하지 않아야 합니다. )

```
// BAD
interface Props extends OwnProps, InjectedProps, StoreProps {}
type OwnProps = {...}
type StoreProps = {...}

// GOOD
type Props = OwnProps & InjectedProps & StoreProps
type OwnProps = {...}
type StoreProps = {...}
```

- 공개 컴퍼넌트 Props/State 수행(implementation)은 로컬로 확장하거나 수정할 수 없습니다. 그러한 이유때문에 컴포넌트 사용자는 절대로 interface 선언 병합을 활용할 필요가 없습니다. 확장을 위해서 HOC 등과 같이 명확하게 정의 된 패턴이 존재하죠.

## 요약

본 기사에서 최신 타입스크립트에서 `interface`와 `type` 별칭의 차이점에 대해 알아보았습니다.

그 내용을 다루면서, 컴파일 타입을 정의하는 메서드를 특정 시나리오에서 사용해야한다는 결론에 다다를 수 있었습니다. 

요약해보죠:

- type 별칭은 interface와 비슷한 역할을 하지만 중요한 3 가지 차이점이 존재합니다. ( 유니언 타입, 선언 병합 )
- 여러분과 여러분의 팀에 맞는 것을 사용하시되, 일관성을 유지하세요.
- 라이브러리 또는 써드 파티 주변 타입 정의를 작성할 때 항상 공개 API에 interface를 사용하세요.
- 리액트 컴포넌트 Props와 State에 `type`을 사용하세요.

언제나 그랬듯이, 궁금한 것이 있으시다면 이 게시글이나 트위터 (my handle [@martin_hotell](https://twitter.com/martin_hotell))를 통해서 저에게 핑을 찍는 것을 주저하지마세요. 끝으로, 행복한 타입 체킹이 되세요 여러분 그리고 다음에 봐요! 건배! 