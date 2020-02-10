# 마침내 TypeScript에서 어떻게 제네릭을 이해했는가

(출저 : https://medium.com/better-programming/typescript-generics-90be93d8c292 )

**이상한 <T> 구문을 이해하고 그것을 적 대신 친구로 삼자.**

![code](https://miro.medium.com/max/726/1*Eq3CXJ-UeO6zfT8VFLd1Ug.png)

Java 와 같은 강력한 유형의 언어를 경험 한 베테랑이 아니라면 TypeScript에서 일반 유형을 처음 보았을 때와 같은 "WTF?" 이라는 말이 떠올랐을 것입니다.
문법은 우리가 JavaScript에서 본 다른 것과는 거리가 멀고, 이를 즉시 알아보기가 어려울 수 있습니다.
저는 제네릭이 그다지 무섭지 않다고 말하려고 여기 있습니다.
JavaScript에서 인수를 사용하여 함수를 작성할 수 있으면 전문가처럼 TypeScript Generics를 작성하고 사용할 수 있습니다. 시작!

## TypeScript의 제네릭이란 무엇입니까?

typeScript 설명서에서는 Generics에

> "단일 유형이 아닌 다양한 유형에서 작동 할 수있는 구성 요소를 만들 수 있다"
> 고 설명합니다.
> 좋아요! 그것은 우리에게 기본 아이디어를 제공합니다. Generics를 사용하여 다양한 유형에 사용할 수 있는 재사용 가능한 컴포넌트를 만듭니다.
> 그러나 어떻게 해야야할까요? 여기 제가 생각하는 방법이 있습니다.

**제네릭은 함수 인자에 어떤 값을 입력해야하는지 컴포넌트 (함수, 클래스 또는 인터페이스)에 알려주는 방법입니다. type 호출 할 때 인수로 사용할 값을 함수에 알려주는 방식과 마찬가지로 호출 할 때 사용하려고합니다.**

이 문장의 의미를 이해하는 가장 좋은 방법은 일반 아이덴티티 함수를 작성하는 것입니다.
identity 함수는 전달 된 인수를 단순히 반환하는 함수입니다. 일반 JavaScript에서는 다음과 같습니다.

```js
function identity(value) {
  return value;
}

console.log(identity(1)); // 1
```

이제 타입스크립트에서 넘버 타입으로 적용시켜 보겠습니다!

```js
function identity(value: Number): Number {
  return value;
}

console.log(identity(1)); // 1
```

우리가 지금 그 안에 어떤 유형을 가지고 있다는 것은 좋지만, 그 기능은 그다지 유연하지 않습니다.
ID 기능은 단순히 숫자가 아니라 전달된 값에 대해 작동해야 한다. 여기가 제네릭이 들어오는 곳입니다.
제네릭은 우리가 어떤 유형이든 받아들일 수 있는 기능을 쓸 수 있게 해주며, 그 유형을 바탕으로 우리의 기능을 변화시킬 것입니다.

```js
function identity<T>(value: T): T {
  return value;
}

console.log(identity < Number > 1); // 1
```

여기 친숙하지 않은 <T> 문법이 있습니다. 그러나 아무것도 아니니 두려워하지 마세요.
그저 우리가 인자를 넘겨주면 특정 기능 호출에 사용하고자 하는 유형을 전달합니다.

![gnr](https://miro.medium.com/max/662/1*5GZ39qVIwNGWJUsY1ekZaw.png)

위의 이미지를 참조하여, 우리가 아이덴티티를 <Number>(1) 이라고 부를 때, 숫자 유형은 1과 같은 인수입니다.
나타나는 곳마다 T값을 채우고 또한 우리가 여러 가지 논쟁을 할 수 있는 것처럼 여러 가지 형태를 취할 수 있습니다.

![gnr2](https://miro.medium.com/max/820/1*v68QEnkC4qbsdcLOrBj47g.png)

이 기능을 어떻게 부르고 있는지 유의하십시오. 그 구문은 지금 당신에게 이해되기 시작할 것입니다!
T나 U에 대해 특별한 것은 없습니다. 그것들은 단지 우리가 선택한 변수 이름일 뿐입니다.
우리는 우리가 기능을 호출할 때 그들에게 유형 값을 채우고 그리고 그것은 그러한 유형을 사용한다.
제네릭을 생각할 수 있는 또 다른 방법은 당신이 전달하는 데이터의 종류에 따라 기능을 변형시킨다는 것입니다.
아래 애니메이션은 다양한 데이터 유형에 따라 ID 기능이 어떻게 변화하는지 보여줍니다.

![gnr3](https://miro.medium.com/max/780/1*Zz4Y9ScEbGbRrtIWby4msg.gif)

보시다시피, 이 기능은 어떤 유형이든 전달하여, 문서에서 약속했던 것처럼 다른 유형의 재사용 가능한 구성요소를 만들 수 있게 해줍니다.
애니메이션에서 두 번째 콘솔 로그 문구를 반드시 주목하십시오. 우리는 유형을 제공하지 않습니다.
이 경우, TypeScript는 데이터를 바탕으로 유형을 추론하려고 할 것입니다.

**주의 - 단순한 데이터에 대해서만 추론이 가능합니다. 객체나 다중 배열처럼 좀 더 복잡한 것을 통과하면 그 유형이 어떤 유형인지 유추하게 되고, 이것이 우리의 유형 안전 점검을 망가뜨릴 수 있습니다.**

## 클래스 및 인터페이스에 대한 일반적 작동 방식과 정확히 동일한 기능

우리는 이제 제네릭이 단지 한 요소에게 유형을 전달하는 방법일 뿐이라는 것을 알게 되었습니다.
우리는 이것이 기능에 어떻게 작용하는지를 보았고 좋은 소식은 인터페이스와 class 에 정확히 같은 방식으로 작동한다는 것입니다.
이것을 우리의 인터페이스나 클래스 이름 바로 뒤에 타입을 놓습니다.
다음 코드 블록이 적합한지 확인하십시오. 잘하기를 바랍니다!

```js
interface GenericInterface<U> {
  value: U
  getIdentity: () => U
}

class IdentityClass<T> implements GenericInterface<T> {
  value: T

  constructor(value: T) {
    this.value = value
  }

  getIdentity () : T {
    return this.value
  }

}

const myNumberClass = new IdentityClass<Number>(1)
console.log(myNumberClass.getIdentity()) // 1

const myStringClass = new IdentityClass<string>("Hello!")
console.log(myStringClass.getIdentity()) // Hello!
```

즉시 이해가 되지 않는 경우, 함수 호출에서부터 체닝된 유형 값을 추적해 보십시오.
이 기능은 다음과 같습니다.

1. 우리는 IdentityClass의 새로운 인스턴스를 인스턴스화하여 Number와 1을 전달합니다.
2. 아이덴티티 클래스에서 T는 숫자가 됩니다.
3. `IdentityClass implements GenericInterface<T>`와 우리는 T가 숫자라는 것을 알고 있으므로 GenericInterface<number>를 구현하는 것과 같습니다.
4. GenericInterface에서 U는 Number가 됩니다.

유형 값이 체인에 전파되고 변수 이름은 중요하지 않다는 것을 보여주기 위해 의도적으로 다른 변수 이름을 사용했습니다.

## 실제 사용 사례: 원시 유형 이상으로 이동

위에 제시된 모든 예는 숫자나 문자열과 같은 원시적인 유형을 사용했습니다.
이것들은 예제로 사용 하는 것이 좋지만 실제로 말하면 기본 유형에 제네릭을 사용하지 않을 것입니다.
제네릭의 진정한 힘은 상속 트리를 형성하는 사용자 정의 유형 또는 클래스가 있을 때 나타납니다.
자동차를 예시로 전형적인 상속 사례를 생각해 보겠습니다.
우리는 Truck과 Vespa의 베이스로 사용되는 Car 를 가지고 있습니다.
그런 다음 우리는 Car 인스턴스를 사용한 다음 이를 반환하는 유틸리티 기능인 세차(Wash Car)를 작성합니다.

```js
class Car {
  label: string = 'Generic Car'
  numWheels: Number = 4
  horn() {
    return "beep beep!"
  }
}

class Truck extends Car {
  label = 'Truck'
  numWheels = 18
}

class Vespa extends Car {
  label = 'Vespa'
  numWheels = 2
}

function washCar <T extends Car> (car: T) : T {
  console.log(`Received a ${car.label} in the car wash.`)
  console.log(`Cleaning all ${car.numWheels} tires.`)
  console.log('Beeping horn -', car.horn())
  console.log('Returning your car now')
  return car
}

const myVespa = new Vespa()
washCar<Vespa>(myVespa)

const myTruck = new Truck()
washCar<Truck>(myTruck)
```

우리의 Wash 함수에에 T가 Car를 extends(확장)해야 한다고 말함으로써,
우리는 기능 내에서 우리가 부를 수 있는 기능과 속성을 알고 있습니다.
또한 일반 차량을 사용하면 비특정 차량 대신 통과하는 특정 유형을 반환할 수 있습니다.

이 코드의 출력:

```
Received a Vespa in the car wash.
Cleaning all 2 tires.
Beeping horn - beep beep!
Returning your car now
Received a Truck in the car wash.
Cleaning all 18 tires.
Beeping horn - beep beep!
Returning your car now
```

## 마무리

이 게시물이 제네릭을 더 명확하게 만들었기를 바랍니다. 당신이하고있는 일은 type함수에 값을 전달하는 것뿐입니다 . :)
제네릭에 대한 자세한 내용을 보려면 아래 링크를 확인하십시오.

추가 자료 :
[TypeScript Generics 설명서](https://www.typescriptlang.org/docs/handbook/generics.html)
[TypeScript Generics Explained](https://medium.com/@rossbulat/typescript-generics-explained-15c6493b510f)
— 여기에서 제공하는 빠른 입문서보다 제네릭에 대해 더 심도있게 살펴 봅니다.
