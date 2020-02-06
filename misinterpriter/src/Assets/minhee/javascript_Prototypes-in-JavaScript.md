## 자바스크립트의 프로토타입

이번 포스트에서는 자바스크립트의 프로토타입이 무엇인지, 그리고 객체 지향 프로그래밍의 개념을 자바스크립트에서 실현하기 위하여 프로토타입이 어떤 역할을 하는지 다뤄 보도록 하겠습니다.

이전 [포스트](https://medium.com/hackernoon/create-objects-in-javascript-10924cfa9fc7)에서는 자바스크립트에서 객체를 만드는 다양한 방법에 대해 알아보았습니다. 그 중 하나가 `constructor`를 사용하는 것이었지요.

**생성자 함수를 통해 객체를 만들 때의 문제점:**

아래의 `constructor` 함수를 살펴 봅시다.

```javascript
function Human(firstName, lastName){
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function(){
		return this.firstName + ' ' + this.lastName;
	}
}

var person1 = new Human("Virat", "Kohli");

console.log(person1)
```

`Human` 생성자 함수를 사용하여 `person1`과 `person2` 객체를 만들어 봅시다.

```js
var person1 = new Human("Virat", "Kohli");
var person2 = new Human("Sachin", "Tendulkar");
```

위의 코드를 실행하면, 자바스크립트 엔진이 생성자 함수의 두 복사본  `person1`과 `person2`를 만듭니다. 

![img](https://miro.medium.com/max/1676/1*3ftgUPoTz5nSmGPwTjf7VA.png)

생성자 함수를 통해 만들어지는 모든 객체는 자신만의 프로퍼티와 메소드 복사본을 가집니다. 하지만 `fullName` 함수 인스턴스가 두 개 만들어지는 것은 그다지 좋은 결과는 아닌 것 같습니다. `person1`과 `person2`의 `fullName`은 똑같은 기능을 하고 있기 때문입니다. 따라서 생성자 함수의 결과물인 두 객체가, 같은 인스턴스를 각자 저장하는 것은 메모리 낭비입니다. 이 글의 뒷부분에서, 이 문제를 어떻게 해결할지 다뤄보도록 하겠습니다.

**프로토타입**

어떤 함수가 생성될 때, 자바스크립트 엔진은 `prototype` 프로퍼티를 함수에 추가합니다. 이 `prototype` 프로퍼티는 객체(프로토타입 객체라고 불립니다)로서  `constructor`프로퍼티를 기본으로 가집니다. `constructor`프로퍼티는 프로토타입 객체를 프로퍼티로 가지는 함수를 다시 가리킵니다. `함수명.prototype`을 사용하여 함수의 프로토타입 프로퍼티에 접근할 수 있습니다.

![img](https://miro.medium.com/max/1606/1*15Qo3ab3NPkLfXpj5AncaQ.png)

위의 그림을 보면, `Human` 생성자 함수는 `prototype`이라는 프로퍼티를 가지는데, 이 프로퍼티는 `prototype` 객체를 가리킵니다. 이  `prototype`객체는 `constructor`라는 프로퍼티를 가집니다. 이것은 다시 `Human` 생성자 함수를 가리키고 있습니다. 아래의 예제를 봅시다.

```js
function Human(firstName, lastName){
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function(){
		return this.firstName + ' ' + this.lastName;
	}
}

var person1 = new Human("Virat", "Kohli");

console.log(person1) // 이 부분을 실행해 보겠습니다. 다음과 같은 메시지가 콘솔에 출력됩니다.
```

![img](https://miro.medium.com/max/1598/1*X_oNHEuvVlO6-YJ2ydIAWA.png)

`Human` 생성자 함수의 프로토타입 프로퍼티에 접근하기 위해서는, 다음과 같은 문법을 쓰면 됩니다.

```js
console.log(Human.prototype)
```

![img](https://miro.medium.com/max/1804/1*kh4nYJdSFj76DM576F_brg.png)

위의 그림에서 `Human` 함수의 프로토타입 프로퍼티는 객체(프로토타입 객체)이고, 이것은 두 개의 프로퍼티를 가지고 있습니다.

	1. `constructor` 프로퍼티. `Human` 함수 자체를 가리킵니다.
 	2. `__proto__` 프로퍼티. 이 개념에 대해서는 자바스크립트의 상속을 살펴보며 설명하도록 하겠습니다.



**생성자 함수를 사용하여 객체를 생성하기**

자바스크립트에서 객체가 생성될 때, 자바스크립트 엔진은 `__proto__`프로퍼티(dunder proto라고도 합니다)를 새로 생성될 객체에 추가합니다. `__proto__`는 생성자 함수의 프로토타입 객체를 가리킵니다.

![img](https://miro.medium.com/max/1742/1*425LxRkFEldC5CJWyhZRBg.png)

위의 이미지에서처럼, `Human`생성자를 통해 생성된 `person1` 객체는 `__proto__`프로퍼티를 가지고 있습니다. 이는 생성자 함수의 프로토타입 객체를 가리키고 있습니다.

```js
// Human 생성자 함수를 통해 person1 객체를 생성했습니다.
var person1 = new Human("Virat", "Kohli");
```

![img](https://miro.medium.com/max/1624/1*j4eUj1Ck_M93pijoX8S3Bw.png)

위의 그림에서 볼 수 있듯, `person1`의 `__proto__` 프로퍼티와 `Human.prototype`의 프로퍼티는 같습니다. `===` 연산자를 사용하여 이 둘이 같은 주소를 가리키고 있는지 확인해 봅시다.

```js
Human.prototype === person1.__proto__ // true
```

`person1`의 `__proto__`와 `Human.prototype`이 같은 객체를 가리키고 있습니다.

이제, `Human` 생성자 함수를 활용하여 `person2`라는 또 다른 객체를 만들어 봅시다.

```js
var person2 = new Human("Sachin", "Tendulkar");
console.log(person2);
```

![img](https://miro.medium.com/max/1708/1*AdEkzrGot4Qt3c3fqooW4A.png)

위의 콘솔 결과에 따르면, `person2`의 `__proto__`또한 `Human.prototype` 프로퍼티와 같으며 그 둘이 같은 객체를 가리키고 있다는 것을 알 수 있습니다.

```js
Human.prototype === person2.__proto__ //true
person1.__proto__ === person2.__proto__ //true
```

`person1`과 `person2`의 `__proto__` 가 `Human` 생성자 함수의 프로토타입 객체를 향하고 있다는 것을 다시 한 번 확인했습니다.

![img](https://miro.medium.com/max/1612/1*5qHhF8HTzZD2xdx3p-RLIQ.png)

즉, 생성자 함수의 프로토타입 객체는 해당 생성자 함수를 통해 생성된 모든 객체들 간에 공유되고 있습니다.



**프로토타입 객체**

프로토타입 객체는 **객체**이므로, 여러 프로퍼티와 메소드를 할당할 수 있습니다. 이를 통해, 생성자 함수를 통해 만들어진 모든 객체가 같은 프로퍼티와 메소드를 공유할 수 있도록 할 수 있습니다.

생성자 함수의 프로토타입 프로퍼티에 새로운 프로퍼티를 추가하기 위해서, 닷 노테이션과 대괄호 노테이션 모두를 사용할 수 있습니다.

```js
// Dot notation
Human.prototype.name = "Ashwin";
console.log(Human.prototype.name)//Output: Ashwin

// Square bracket notation
Human.prototype["age"] = 26;
console.log(Human.prototype["age"]); //Output: 26

console.log(Human.prototype);
```

![img](https://miro.medium.com/max/1844/1*OgeV095EQiZ5hSZiRNN8zw.png)

`name`과 `age`프로퍼티가 `Human`프로토타입에 추가되었습니다.



**Example**

```js
// 비어있는 생성자 함수를 만듭니다.
function Person(){
 
}

// name, age 프로퍼티를 Person 생성자 함수의 프로토타입 프로퍼티에 추가합니다.
Person.prototype.name = "Ashwin";
Person.prototype.age = 26;
Person.prototype.sayName = function(){
  console.log(this.name);
}

// Person 생성자 함수를 통해 객체를 만듭니다.
var person1 = new Person();

// person1 객체를 통해 name 프로퍼티에 접근합니다.
console.log(person1.name) // Ashwin이 출력됩니다.

```

`console.log(person.name)`을 했을 때 어떤 일이 일어나는지 살펴 보겠습니다. person 객체가  `name`프로퍼티를 가지고 있는지 확인해 봅시다.

```js
console.log(person1)
```

![img](https://miro.medium.com/max/2126/1*TrdhtLL9toNPQcmSgbFE7A.png)

`person1`은 비어있고, `__proto__`를 제외하고는 어떠한 프로퍼티를 가지고 있지 않습니다. 그렇다면, `console.log(person.name)`의 결과가 어떻게 "Ashwin"이 되었을까요?

객체의 프로퍼티에 접근하려고 할 때, 자바스크립트 엔진은 해당 객체의 프로퍼티를 찾으려 합니다. 만약 프로퍼티가 그 객체에 있다면, 그 객체의 값을 출력할 것입니다. 하지만 만약 프로퍼티가 해당 객체에 없으면, 그 객체의 프로토타입 객체 또는 `__proto__`에 있는 프로퍼티를 찾으려 합니다. 만약 값을 찾으면 반환을 할 것이고, 그렇지 않으면 원래 객체의 `__proto__`의 `__proto__`에서 또 다시 값을 찾으려는 시도를 합니다. 이러한 연결 고리는 `__proto__`가  `null`이 될 때까지 이어집니다. 이 때 결과값은 `undefined`가 되겠지요.

`person1.name`이 호출되었을 때, 자바스크립트 엔진은 프로퍼티가 `person1`객체에 존재하는지 확인합니다. 우리의 예제에서 name 프로퍼티는 `person1`객체에 없었습니다. 따라서, 이제 자바스크립트 엔진은 `name` 프로퍼티가 `person1`객체의 `__proto__` 프로퍼티 또는 프로토타입에 존재하는지 확인합니다. `name` 프로퍼티는 `person1`객체의 `__proto__`에 있었습니다. 따라서, "Ashwin"이라는 결과값이 도출되었습니다.

`Person` 생성자 함수를 사용하여 `person2`라는 또 다른 객체를 만들어 봅시다.

```js
var person2 = new Person();
// person2 객체를 사용하여 name 프로퍼티에 접근합니다.
console.log(person2.name) // 결과: Ashwin
```

이제, `person1` 객체의 `name` 프로퍼티를 정의해 봅시다.

```js
person1.name = "Anil";
console.log(person1.name) // 결과: Anil
console.log(person2.name) //결과: Ashwin
```

여기서 `person1.name`의 결과는 "Anil"입니다. 앞에서 언급했듯, 자바스크립트 엔진은 객체 자체에서 프로퍼티를 찾으려 시도합니다. 이 경우,현재  `name` 프로퍼티는 `person1` 자체에 있습니다. 따라서 자바스크립트 엔진은 `person1` 의 `name` 을 반환합니다.

`person2`의 경우, `name` 프로퍼티가 해당 객체 내에 없습니다. 따라서 `person2`의 프로토타입 객체의 `name`을 반환합니다.



## 프로토타입의 문제

생성자 함수를 통해 만들어진 모든 객체들은 프로토타입 객체를 공유하고, 때문에 이 객체들은 프로토타입 객체의 프로퍼티와 메소드 또한 공유합니다. `객체 A`가 원시 타입 값을 가진 프로토타입의 프로퍼티를 수정한다 하더라도, 다른 객체들은 영향을 받지 않습니다. `객체 A`가 내부에서 별도의 프로퍼티를 만들기 때문입니다.

```js
console.log(person1.name) // 결과: Ashwin
console.log(person2.name) // 결과: Ashwin

person1.name = "Ganguly"

console.log(person1.name) // 결과: Ganguly
console.log(person2.name) // 결과: Ashwin
```

1번과 2번 라인의 `person1`과  `person2`은 `name` 프로퍼티를 가지고 있지 않습니다. 이 두 객체는 프로토타입의 `name` 프로퍼티에 접근하였고, 때문에 결과(Ashwin) 또한 같습니다.

`person1`이 `name` 프로퍼티에 대해 다른 값을 가지고자 한다면, 해당 객체 자체에서 `name` 프로퍼티를 만들어야 합니다.

**프로토타입 객체에 참조 타입 프로퍼티가 포함되어 있을 경우**

```js
// 비어있는 생성자 함수를 만듭니다.
function Person(){
}
// name, age 프로퍼티를 Person 생성자 함수에 추가합니다.
Person.prototype.name = "Ashwin";
Person.prototype.age = 26;
Person.prototype.friends = ["Jadeja", "Vijay"];
// 자바스크립트에서 배열은 참조 타입입니다.
Person.prototype.sayName = function(){
  console.log(this.name);
}

// Person 생성자함수를 활용하여 객체를 만듭니다.ㅏ
var person1 = new Person();
var person2 = new Person();

// friends 배열에 새로운 엘리먼트를 추가합니다.
person1.friends.push("Amit");

console.log(person1.friends) // 결과: "Jadeja", "Vijay", "Amit"
console.log(person1.friends) // 결과: "Jadeja", "Vijay", "Amit"
```

위의 예시에서, `person1`과 `person2`는 프로토타입 객체의 동일한  `friends` 배열을 가리키고 있습니다. `person1`은 또다른 문자열 'Amit'을 `friends`객체에 추가하여, 프로퍼티를 변경했습니다. 

`friends` 객체가 `person1`이 아니라 `Person.prototype`에 존재하므로, `person1`객체에서 발생한 `friends` 배열에 대한 수정은 `person2.friends`에서도 반영이 되었습니다. `person1.friends`와 `person2.friends`는 모두 같은 객체를 가리키고 있기 때문입니다.

만약 모든 인스턴스들이 하나의 배열을 공유하게 하는 것이 목표라면, 큰 문제가 없을 것입니다. 하지만 각 인스턴스가 각기 다른 배열을 가져야 한다면 어떨까요?

**Combine Constructor/Prototype**

프로토타입과 생성자 함수가 가지는 한계를 해결하기 위해서, 생성자와 함수를 결합해 봅시다.

1. 생성자 함수의 문제: 생성자 함수를 통해 만들어진 모든 객체가, 같은 기능을 하는 함수에 대해서도 개별 인스턴스를 부여한다.
2. 프로토타입의 문제: 한 객체에서 사용하는 프로퍼티를 변경하면, 다른 객체의 프로퍼티 또한 변경이 된다.

이 두 문제를 해결하려면, 특정 객체만이 가지는 프로퍼티는 생성자 내에 정의하고, 모든 인스턴스가 공유하는 프로퍼티와 메소드는 프로토타입에 정의해야 합니다.

```js
// 객체마다 값이 달라야 하는 프로퍼티는 생성자 내에 정의합니다.
function Human(name, age){
  this.name = name,
  this.age = age,
  this.friends = ["Jadeja", "Vijay"]
}
// 공유되는 프로퍼티와 메소드는 프로토타입에 정의합니다.
Human.prototype.sayName = function(){
  console.log(this.name);
}

// Human 생성자 함수를 사용하여 두 객체를 만듭니다.
var person1 = new Human("Virat", 31);
var person2 = new Human("Sachin", 40);

// person1과 person2가 sayName 함수의 같은 인스턴스를 가리키는지 확인해 봅시다.
console.log(person1.sayName === person2.sayName) // true

// friends 프로퍼티를 수정하고 확인해 봅시다.
person1.friends.push("Amit")

console.log(person1.friends) // 결과: "Jadeja", "Vijay", "Amit"
console.log(person1.friends) // 결과: "Jadeja", "Vijay"
```

각 객체가 자신만의 `name`, `age`, `friends` 프로퍼티를 가지도록 하는 것이 우리의 목표였습니다. 따라서 생성자 함수 내에서 `this`키워드를 사용하여 해당 프로퍼티들을 정의해 주었습니다. 반면 `sayName`은 프로토타입 객체 내에 정의하였으므로, 모든 인스턴스들에 공유되었습니다.

위 예시에서, `person1`의 `friends` 배열의 변화에도 불구하고, `person2`의  `friends` 배열은 바뀌지 않았습니다.

![img](https://miro.medium.com/max/2074/1*hu8YzhAHRAt50Vt5eY5BqQ.png)



이번 포스트를 재미있게 읽으셨다면, 미디움과 트위터 계정(@happyrupesh123)을 팔로우하세요.

출처: [Prototypes in Javascript by Rupesh Mishra](https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b)

