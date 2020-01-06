# 더 빠르고 더욱 최적화된 자바스크립트 코드를 작성하기 위한 13가지 팁

(출처: https://medium.com/@bretcameron/13-tips-to-write-faster-better-optimized-javascript-dc1f9ab063d8)

### 코드의 속도를 높일 수 있는 실천가능한 팁들

![A cheetah from Cheetah Outreach near Cape Town, South Africa.](https://miro.medium.com/max/10574/1*PS8IX1JSAVV62RMgOHb97A.jpeg)

10년 전, 아마존은 지연 시간이 100ms 발생할 때마다 매출이 1% 씩 감소한다는 사실을 밝혔다. 즉, 1년 동안 1초 동안의 지연 시간이 더해지면 16억 달러의 추가 비용이 발생한다는 것이다. 또한 구글에서는 검색 페이지 생성 시간에 500ms가 더 걸리면, 트래픽이 20% 감소하여 잠재적인 광고 수입의 5분의 1이 줄어든다는 사실을 발견했다.

아마존이나 구글처럼 극적인 증감폭을 직접 경험하기는 어렵겠지만, '더 빠른 코드가 더 나은 사용자 경험을 만들고, 비즈니스 면에서도 더 낫다'는 원칙은 훨씬 작은 규모의 서비스에서도 그대로 적용된다. 특히 웹 개발에서 속도는 당신의 서비스가 경쟁자들에 대해 비교 우위를 갖게 하는 중요한 요소다. 빠른 네트워크에서 헤프게 쓰이는 몇 초는, 느린 네트워크 환경에서는 훨씬 더 큰 낭비다.

이 포스트에서는 자바스크립트 코드의 속도를 높일 수 있는 13가지 실용적인 팁을 살펴보도록 하겠다. Node.js를 통해 서버 사이드 코드를 쓰거나 클라이언트 사이드 코드를 쓰더라도 공통적으로 적용할 수 있다. https://jsperf.com을 통해 만든 벤치마스크 테스트 링크도 첨부한다. 포스팅에 등장한 팁을 직접 테스트 해 보려면, 위 링크를 따라가면 된다.

![A man walking up some steps.](https://miro.medium.com/max/11792/1*zcsVWcSLy3OPvN2KHLUlIw.png)

## 간결하게

### "가장 빠른 코드는 절대 동작하지 않는 코드다"

1. **필요 없는 기능을 제거하라**

이미 작성한 코드를 최적화 하는 것은 쉽다. 그러나 가장 효과적으로 성능 향상을 하기 위해서는, 한 걸음 물러서서 애초에 기존에 작성된 코드가 필요한지 고민해 볼 필요가 있다.

최적화를 하기 전에, 현재 프로그램이 정말로 필요한 작업들을 하고 있는지 자문을 해 보자. 이 기능, 저 컴포넌트, 그 함수가 정말로 필요할까? 아니라면 과감하게 삭제하자. 필요 없는 기능을 삭제함으로서 코드 속도를 정말 크게 향상시킬 수 있지만, 정말 자주 간과되는 작업이기도 하다.

2. **불필요한 단계는 피하자**

 *벤치마크:* *https://jsperf.com/unnecessary-steps*](https://jsperf.com/unnecessary-steps)

더 작은 규모, 즉 함수 단계로 포커스를 맞추어서 생각해 보자. 최종 결과에 도달하기 위해서 함수가 거쳐야 하는 모든 단계가 정말로 필요한지 고민을 해 보아야 한다. 예를 들어, 최종적인 결과를 반환하기까지, 데이터가 불필요한 단계를 거쳐 가지는 않는가? 다음의 사례를 보자. 너무 단순한 사례가 아닐지 의문이 들 수도 있지만, 더 큰 규모의 코드베이스에서는 비슷한 사례를 짚어내기조차 어려울 것이다. 

```js
'incorrect'.split('').slice(2).join('');
// 배열로 변환되는 과정을 거침
'incorrect'.slice(2);
// 문자열인 상태
```

단순한 예제에서도 성능 차이는 극적으로 드라난다. 어떤 코드를 실행하는 것은, 코드를 아예 실행하지 않는 것보다 훨씬 느리다! 위와 같은 실수를 하는 사람은 매우 드물겠지만, 더 복잡하고 더 긴 코드를 작성할수록 쓸데 없는 과정을 추가할 가능성이 높다. 그런 실수는 반드시 피하도록 하자!

![A loop at the top of a rollercoaster.](https://miro.medium.com/max/11792/1*Xc66RSxk6pqfG0d0KJxYKw.png)

## 최대한 덜 쓰자

코드를 지워 버릴 수 없다면, 덜 쓸 수 있지는 않을지 자문을 해 보자. 코드가 강력한 이유 중 하나는 매우 쉽게 어떤 작업을 반복적으로 수행할 수 있게 해 준다는 것이다. 하지만 반대로, 필요 이상으로 작업을 자주 반복하게 만들기도 한다. 이와 관련해서 주의해야 할 사례를 짚어 보자.

3. **가능한 빠르게 반복문에서 벗어나자**

*Benchmark:https://jsperf.com/break-loops/1*

모든 작업을 반복적으로 할 필요가 없는 경우를 주의해야 한다. 예를 들어, 특정 값을 검색해야 할 때, 그 값을 찾았다면 나머지 반복 작업은 수행할 필요가 없다. Break 문을 사용해서 반복문의 실행을 중단해야 한다.

```js
for (let i = 0; i < haystack.length; i++) {
  if (haystack[i] === needle) break;
}
```

만약 반복문 내의 특정 요소에만 어떤 작업을 수행해야 하는 경우, continune문을 사용하여 다른 요소에 대한 작업은 건너뛸 수 있다. continue 키워드를 통해 어떤 선언이 실행되는 것을 종료하고, 다음 반복으로 넘어가게 할 수 있다.

```js
for (let i = 0; i < haystack.length; i++) {
  if (!haystack[i] === needle) continue;
  doSomething();
}
```

또한 라벨을 사용하여 중첩된 반복문을 중단시키는 것 또한 가능하다. 라벨 덕분에, 특정 반복을 중단하거나 계속 이어 갈 수 있다.

```js
loop1: for (let i = 0; i < haystacks.length; i++) {
  loop2: for (let j = 0; j < haystacks[i].length; j++) {
    if (haystacks[i][j] === needle) {
      break loop1;
    }
  }
}
```

4. **가능하다면 선(先)연산을**

   *Benchmark: https://jsperf.com/pre-compute-once-only*

다음 함수를 보자. 이 함수를 어떤 앱에서 여러 번 호출하고자 한다고 가정한다.

```js
function whichSideOfTheForce(name) {
  const light = ['Luke', 'Obi-Wan', 'Yoda']; 
  const dark = ['Vader', 'Palpatine'];
  
  return light.includes(name) ? 'light' : 
    dark.includes(name) ? 'dark' : 'unknown';
};
whichSideOfTheForce('Yoda');   // returns "light"
whichSideOfTheForce('Anakin'); // returns "unknown"
```

`whichSideOfTheForce`함수의 문제는 매번 호출될 때마다 새로운 객체를 만든다는 것이다. 함수 호출이 있을 때마다, `light`와 `dark` 배열에 불필요한 메모리가 재할당이 된다.

`light`와 `dark`의 값이 정적이라면, 이 변수들을 한 번 선언한 후 `whichSideOfTheForce`가 호출될 때마다 해당 변수를 선언하는 편이 더 효율적이다. 이 때 글로벌 스코프에 변수를 선언할 수도 있지만, 함수 밖에 있으므로 의도치않게 변경될 위험도 있다. 따라서 클로저를 사용하여 함수를 반환하도록 하는 것이 최선의 방법이 될 것이다.

```js
function whichSideOfTheForce2(name) {
  const light = ['Luke', 'Obi-Wan', 'Yoda'];
  const dark = ['Vader', 'Palpatine'];
  return name => light.includes(name) ? 'light' :
    dark.includes(name) ? 'dark' : 'unknown';
};
```

이제, `light`와 `dark` 배열은 항상 한 번만 생성될 것이다. 중첩 함수에서도 비슷한 사례가 발생할 수 있다. 다음 사례를 보자.

```js
function doSomething(arg1, arg2) {
  function doSomethingElse(arg) {
    return process(arg);
  };
  return doSomethingElse(arg1) + doSomethingElse(arg2);
}
```

`doSomething` 함수를 실행할 때마다, 중첩 함수 `doSomethingElse`가 생성이 된다. 여기서도 클로저를 통해 해결할 수 있다. 만약 `doSomething`이 함수를 반환하게 되면, `doSomethingElse`는 프라이빗한 성질을 유지함과 동시에, 단 한 번만 생성될 것이다.

```js
function doSomething(arg1, arg2) {
  function doSomethingElse(arg) {
    return process(arg);
  };
  return (arg1, arg2) => doSomethingElse(arg1) + doSomethingElse(arg2);
}
```

5. **작업의 수를 최소화하기 위해 코드에 순서를 매기자**

*벤치마크: https://jsperf.com/choosing-the-best-order/1*

함수가 작동하는 순서를 신중하게 고려한다면 코드 속도를 개선할 수 있다. 여러 상품의 가격을 센트로 저장하는 배열이 하나 있다고 가정해 보자. 배열에 속한 전체 상품의 가격을 합산하여, 달러로 환산하여 돌려주는 함수를 만들고자 한다.

```js
const cents = [2305, 4150, 5725, 2544, 1900];
```

이 함수는 두 가지 작업을 수행해야 한다. 하나는 센트를 달러로 환산하고, 또 하나는 전체 요소를 합산하는 일이다. 이 때, 어떤 작업을 먼저 수행할지 결정하는 것은 매우 중요한 일이다. 만약 달러로 변환하는 작업을 먼저 한다면, 다음과 같은 함수를 쓸 수 있다.

```js
function sumCents(array) {
  return '$' + array.map(el => el / 100).reduce((x, y) => x + y);
}

```

그러나 이 방식에서는 배열의 모든 항목에 대해 나누기 연산을 수행해야 한다. 하지만 합산 작업부터 먼저 한다면, 나누기는 단 한 번만 해도 된다.

```js
function sumCents(array) {
  return '$' + array.reduce((x, y) => x + y) / 100;
}
```

모든 작업이 효율적인 순서대로 이루어지고 있는지 꼭 확인하도록 하자. 

6. **Big O 표기법에 대해 배우자**

Big O 표기법을 배우면, 왜 어떤 함수가 더 빠르고, 메모리를 덜 차지하는지 잘 이해할 수 있다. 예를 들어 Big O 표기법을 통해 왜 이진 검색(Binary search)이 가장 효율적인 검색 알고리즘 가운데 하나인지, 퀵 정렬(Quick sort)이 왜 데이터 정렬에 가장 효과적인 방법인지를 한 번에 배울 수 있다.

Big O 표기법은 지금까지 이 포스트에서 다룬 최적화 방법에 대해 더 잘 이해하고 적용할 수 있는 방법을 제시한다. Big O는 더욱 심층적으로 다룰 수 있는 주제다. 만약 관심이 있다면 필자의 포스트 가운데 [Big O 표기법에 대해 다룬 글](https://medium.com/@bretcameron/ace-your-coding-interview-by-understanding-big-o-notation-and-write-faster-code-6b60bd498040) 또는, [시간, 공간 복잡도를 주제로 한 구글의 면접 문제와 4가지 해법에 대해 다룬 글](https://medium.com/@bretcameron/4-ways-to-solve-a-google-interview-question-in-javascript-12e6eec87576)을 읽어 보기를 권한다.

![A Formula 1 racing car.](https://miro.medium.com/max/11792/1*fn_mcH764gZ5tXP1fKyZGg.png)

## 더 빠르게

코드 속도가 빠를 때 얻을 수 있는 이점은, 앞서 언급한 '간결하게'와 '최대한 덜 쓰자'는 교훈을 실천할 때 얻을 수 있는 효과와 비슷하다. 이번 섹션에서는 코드 분량을 짧게 하거나 실행 횟수를 줄이는 것보다, 코드를 최적화하여 속도를 높이는 방법에 좀 더 초점을 맞추어 보도록 하겠다.

물론 실제로 최적화 작업에는 코드 자체의 용량을 줄이거나, 코드를 컴파일러에 더 적합하도록 하여 컴파일러 코드의 용량을 줄이는 작업이 포함되어 있다. 하지만 표면적으로는 코드를 삭제하는 대신 **바꾸는 것**이며, 때문에 최적화 작업을 '더 빠르게'섹션에서 살펴보는 것이다!

7. **빌트인 메서드를 사용하자**

*벤치마크*: [*https://jsperf.com/prefer-built-in-methods/1*](https://jsperf.com/prefer-built-in-methods/1)

자바스크립트에 빌트인 메서드가 마련되어 있다면, 꼭 사용하도록 하자. 만약 컴파일러 또는 로우 레벨 프로그래밍 언어를 사용한 경험이 있는 사람이라면, 이 부분은 너무 당연하게 느껴질 수도 있겠다.

컴파일러 코드는 메서드나 객체 타입에 특화된 성능 최적화를 기반으로  설계되어 있다. 게다가 그 기저에는 C++가 사용되어 있다. 만약 사용 사례가 매우 독특한 경우가 아니라면, 기존 빌트인 메서드보다 더 나은 성능을 가진 자바스크립트 메서드를 스스로 구현하기는 정말 어렵다!

이 부분을 테스트하기 위해, `Array.prototype.map` 메서드를 자체적으로 구현해 보도록 하자.

```js
function map(arr, func) {
  const mapArr = [];
  for(let i = 0; i < arr.length; i++) {
    const result = func(arr[i], i, arr);
    mapArr.push(result);
  }
  return mapArr;
}
```

1과 100 사이의 랜덤한 숫자 100개로 이루어진 배열을 하나 만들어 보자.

```js
const arr = [...Array(100)].map(e=>~~(Math.random()*100));
```

만약 배열 안의 숫자에 2를 곱하는 간단한 연산을 실행한다면, 빌트인 메서드와 우리가 만든 메서드의 성능 차이가 어떻게 되는지 살펴 보자.

```js
map(arr, el => el * 2);  // Our JavaScript implementation
arr.map(el => el * 2);   // The built-in map method
```

이번 실험에서, 우리가 만든 새로운 자바스크립트 `map` 함수는 `Array.prototype.map` 에 비해 약 65%정도 느렸다. V8의 `Array.prototype.map`이 어떻게 구현되었는지 소스코드를 확인해 보고 싶다면, [여기](https://github.com/v8/v8/blob/master/src/builtins/array-map.tq)를 확인해 보라. 이번 글에서 다른 실험을 직접 실행해 보고 싶다면, [벤치마크](https://jsperf.com/prefer-built-in-methods/1)를 확인해 보면 된다.

8. **목적에 가장 적합한 객체를 사용하자**

*벤치마크1*: [세트에 값을 추가하기 vs 배열에 추가하기](https://jsperf.com/adding-to-a-set-vs-pushing-to-an-array)

*벤치마크2*: [엔트리를 맵에 추가하기 vs 엔트리를 일반 객체에 추가하기](https://jsperf.com/adding-map-vs-adding-object)

앞서 다룬 이야기와 비슷한 맥락인데, 하고자 하는 작업에 가장 적합한 빌트인 객체를 사용함으로서 가능한 한 최고의 성능을 끌어낼 수 있다. 자바스크립트의 빌트인 객체는 숫자, 문자열, 함수, 객체 등의 기본적인 타입보다 능률 면에서 더욱 뛰어나다. 올바른 맥락에서 사용되기만 하면 꽤 많은, 덜 일반적인 객체들도 성능 면에서 상당한 이점을 준다.

다른 글에서, [세트를 사용하는 것이 배열을 사용하는 것보다 왜 더 빠를 수 있는지](https://medium.com/@bretcameron/how-to-make-your-code-faster-using-javascript-sets-b432457a4a77), [맵을 사용하는 것이 일반 객체를 사용하는 것보다 왜 더 빠를 수 있는지](https://medium.com/@bretcameron/how-javascript-maps-can-make-your-code-faster-90f56bf61d9d) 다룬 적이 있다. `Sets`와 `Maps`는 키를 가진 컬렉션으로서, 엔트리를 추가하거나 삭제할 때 상당한 성능적인 이점을 준다. 

빌트인 객체의 유형에 대해 알아보고, 목적에 맞는 최적의 객체를 사용하자. 이를 통해 더욱 빠른 코드를 작성할 수 있을 것이다.

9. **메모리를 간과하지 말자**

하이 레벨 프로그래밍 언어로서, 자바스크립트는 사용자를 위해 수많은 로우 레벨적 세부 사항을 대신 처리한다. 그러한 세부 사항 가운데 하나가 바로 메모리 관리다. 자바스크립트는 가비지 컬렉션(garbage collection) 시스템을 사용하여 개발자의 지시 없이도, 더 이상 필요하지 않은 메모리를 확보하는 작업을 한다.

자바스크립트에서 메모리 관리가 자동화되어 있기는 하지만, 완벽하다고는 할 수 없다. 메모리를 관리하고 메모리 누수를 줄일 수 있는 추가적인 과정이 있다.

예를 들어, `Sets`와 `Maps`에는 '취약한(weak)' 변종이 있는데, 이를 '취약한 세트'와 '취약한 맵'이라고 부른다. 취약한 세트와 취약한 맵은 객체를 느슨하게 참조한다. 참조되지 않은 값들은 [가비지 컬렉션에 의해 처리](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management#Garbage_collection)되며 메모리 누수를 방지한다.

 또한 ES2017에 소개된 자바스크립트의 `TypedArray` 객체를 사용하여, 메모리 할당을 더욱 효과적으로 제어할 수 있다. 예를 들어 `Int8Array`는 `-128`과 `127` 사이의 값을 가질 수 있으며, 크기가 오직 1바이트에 불과하다. 그러나 `TypedArray`를 사용함으로서 얻을 수 있는 성능 개선은 아주 미미할 수도 있다. 기존 배열과 `Uint32Array`를 비교했을 때, [쓰기 성능은 약간 향상](https://jsperf.com/uint32array-write-performance)되었지만 [읽기 성능은 거의 개선되지 않았다](https://jsperf.com/uint32array-read-performance)는 실험 결과도 있었다(Chris Khoo가 진행했다.). 

로우 레벨 프로그래밍 언어에 대한 기본적인 이해를 얻는다면, 더 좋고 빠른 자바스크립트 코드를 작성할 수 있다. 관련 내용은 [자바스크립트 개발자들이 C++로부터 배울 수 있는 것](https://medium.com/@bretcameron/what-javascript-developers-can-learn-from-c-3cdb93ab8658)이라는 글에서 다룬 바 있다.

10. 가능하다면 단일한 형식(Monomorphic form)을 사용하자

*벤치마크 1*: [단형 vs 다형](https://jsperf.com/monomorphic-forms)

*벤치마크 1*: [한 개의 함수 인자 vs 두개](https://jsperf.com/impact-of-function-arguments)

만약 `const a = 2`를 설정하면, 변수 `a` 는 다형성을 띤다(변할 수 있다)고 볼 수 있다. 반면, 만약 `2`를 바로 사용하면, 단형성(값이 고정되어 있다)이다. 

당연히, 어떤 값을 여러 번 사용해야 할 때에는 변수를 설정하는 것이 엄청나게 유용할 것이다. 그러나 변수를 단 한 번 사용해야 한다면 변수를 설정하는 것을 피하는 것이 속도 향상에 조금이나마 도움이 된다. 간단한 곱하기 함수를 보자.

```js
function multiply(x, y) {
  return x * y;
};
```

`multiply(2, 3)`를 실행하면, 다음 코드를 실행하는 것보다 약 1% 더 빠르다.

```js
let x = 2, y = 3;
multiply(x, y);
```

 아주 작은 차이라고 볼 수도 있겠다. 그러나 코드의 규모가 커진다면, 작은 차이가 모여 큰 차이를 만들어 낼 것이다.

마찬가지로 함수에서 인자(argument)를 사용하면 유연성을 얻는 대신, 성능을 희생하게 된다. 다시 강조하지만 인자는 프로그래밍에서 필수적인 부분이다. 하지만, 필요하지 않다면 사용하지 않고 성능상의 이점을 얻을 수 있다. 위에서 다룬 곱하기 함수를 더 빠르게 만들면 다음과 같은 형태가 될 것이다:

```js
function multiplyBy3(x) {
  return x * 3;
}
```

앞에서 언급했듯, 성능 향상은 미미하다(필자의 테스트에서는 약 2%). 하지만 이런 종류의 개선이 규모가 큰 코드에서 여러 번 이루어 질 수 있다면 채택하는 것이 좋다. 원칙적으로, 값이 동적이여야 할 때에는 인자를 사용하고, 값을 두 번 이상 사용될 때에만 변수를 사용하자.

11. **'Delete' 키워드는 피하자**

*벤치마크 1*: [객체로부터 키를 지우기 vs undefined로 설정하기](https://jsperf.com/removing-variables-from-an-object/1)

*벤치마크 1*: [delete 문 vs Map.prototype.delete](https://jsperf.com/delete-vs-map-prototype-delete)

`delete` 키워드는 키-벨류 쌍을 객체로부터 제거할 때 사용한다. 필요하다 느낄 수도 있지만, 피할 수 있다면 사용을 최대한 자제하도록 하자. `delete`를 사용하면, V8 엔진의 숨겨진 클래스 패턴의 장점을 없애고 일반적으로 느린 객체를 만들고, 더욱 느리게 작동한다!

필요 없는 프로퍼티를 undefined로 설정하기만 해도 충분하다.

```js
const obj = { a: 1, b: 2, c: 3 };
obj.a = undefined;
```

인터넷에서, 다음과 같은 함수를 통해 특정 프로퍼티를 제외하여 원본 객체의 복사본을 만드는 것이 더 빠를 수도 있다는 주장을 본 적이 있다.

```js
const obj = { a: 1, b: 2, c: 3 };
const omit = (prop, { [prop]: _, ...rest }) => rest;
const newObj = omit('a', obj);
```

그러나 실험을 직접 해 본 결과에 따르면, 위와 같은 함수는 `delete` 키워드를 사용할 때보다 더 느렸다. 게다가, 이러한 함수는 `delete obj.a` 또는 `obj.a = undefined`보다 가독성도 떨어진다.

대안으로서, 객체 대신 `Map`을 사용할 수 있다면, `Map.prototype.delete`를 사용하는 것이 [delete 문을 사용하는 것보다 훨씬 빠르다](https://jsperf.com/delete-vs-map-prototype-delete)는 점을 기억하자.

![An old clock with Roman numerals, attached to the outside of a shop.](https://miro.medium.com/max/11792/1*NOHuUW6UpNCNJ1Xx_N83Mg.png)

## 나중에 하자

코드를 간결하게 하거나, 최대한 덜 쓰거나, 빠르게 할 수 없다면, 네 번째 유형의 최적화를 통해 코드가 더 빨라졌다고 *느낄* 수 있는 방법이 있다. 비록 실제 작동 시간은 같지만 말이다. 이는 덜 필요하거나, 더 까다로운 작업이 가장 중요한 작업의 실행을 방해하지 않도록 코드를 재구성함으로서 실천할 수 있다.

12. **스레드 블로킹을 막기 위해 비동기 코드를 사용하자**

기본적으로 자바스크립트는 싱글 스레드이고 동기적으로, 하나 하나 코드를 작동시킨다. (실제 작동 양식을 들여다 보면, 브라우저 코드는 이벤트를 파악하고 핸들러를 실행시키기 위해 여러 개의 스레드를 동시에 실행시키기도 한다. 그러나 자바스크립트 코드 자체는 싱글 스레드이다.)

싱글 스레드는 대부분의 자바스크립트 코드에서 문제 없이 잘 작동한다. 그러나 만약 코드에 시간이 오래 걸릴 가능성이 있는 이벤트가 포함되어 있다면, 그러한 이벤트 탓에 중요한 코드의 실행이 미뤄지거나 막히면 안 될 것이다.

이에 대한 해법은 비동기 코드를 사용하는 것이다. 이는 `fetch()`나 `XMLHttpRequest()`등의 특정 빌트인 메서드에서는 필수다. 또한, 동기 함수를 비동기로 만들 때에도 진가를 발휘한다. 만약 시간이 오래 걸리는 비동기 동작, 예를 들면 큰 배열의 개별 항목에 연산을 수행하는 부분이 코드에 포함되어 있다면, 해당 부분은 비동기로 하여, 다른 코드의 실행을 막지 않도록 설정할 수 있다. 비동기 자바스크립트 개념을 처음 접했다면, 필자의 [자바스크립트 프로미스에 대한 소개글](https://medium.com/javascript-in-plain-english/a-guide-to-javascript-promises-da50eff327d7?)을 확인해 보라.

게다가, Node.js filesystem의 `fs.writeFile()과`fs.writeFileSync()` 처럼, 비동기와 동기 메서드를 각각 마련해 둔 모듈들이 많다. 일반적으로는, 기본 비동기 메서드를 사용하면 된다.

13. **코드를 쪼개라**

클라이언트 측에서 자바스크립트를 사용할 때, 가장 우선적으로 이뤄져야 하는 작업은 시각적인 자료를 최대한 빨리 나타내 주는 것이다. 핵심적인 밴치마크는 '첫 번째로 그려지는 컨텐츠'로서, 사용자가 페이지로 이동한 시점부터 브라우저가 DOM에 첫 번째 컨텐츠를 랜더링하는 시점까지의 시간을 측정하는 것이다.

이는 자바스크립트 코드 분할을 통해 개선할 수 있다. 자바스크립트 코드를 하나의 큰 번들로 처리하는 대신, 필요한 자바스크립트 코드가 먼저 실행되도록 작은 청크로 쪼개도록 하자. 리액트, 앵귤러, 뷰, 또는 바닐라 자비스크립트를 사용하는지 여부에 따라 코드 분할 방법은 각기 달라질 수 있다.

이와 관련된 전략이 바로 트리 쉐이킹(tree-shaking)이다. 트리 쉐이킹이란 코드 베이스에서 사용되지 않거나, 불필요한 디펜던시를 제거하는 데 초점을 맞춘, 쓸모 없는 코드(dead code) 제거 방식이다. 이에 대해 자세히 알아보려면 [구글의 이 글](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/)을 추천한다. (프로덕션을 위해 코드를 최소할 것 또한 명심하라!)

![img](https://miro.medium.com/max/11792/1*_-kw_FGzyTVBwsdQ7U6SWQ.png)

## 결론

정말 유용한 코드 최적화에 성공했는지 파악하는 방법은 테스트를 해 보는 것이다. 이번 글에서 필자는 https://jsperf.com을 사용하여 코드 벤치마크들을 소개했지만, 코드의 더 작은 단위를 확인할 수 있는 방법이 있다.

- http://jsben.ch/
- https://jsbench.me/
- 각자의 콘솔을 활용. `console.time()`과 `console.timeEnd()`.

전체 웹 애플리케이션의 성능을 확인하는데 있어 최고의 출발점은 크롬 개발자 도구의 네트워크와 퍼포먼스 탭을 확인하는 것이다. 또한 구글의 [Lighthouse extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)도 추천한다.

마지막으로 가장 중요한 부분인데, 좋은 코드를 작성하는데 있어 속도가 전부는 아니다. 가독성과 유지보수 또한 매우 중요하다. 작은 속도 개선을 위해, 차후에 이해하기 어려운 코드를 작성한다면, 버그를 찾고 고치느라 더 오랜 시간을 쓸 수도 있다.

당신이 신입 개발자라면, 이번 글을 통해 성능을 향상하는 기술에 대한 안목을 키웠다면 좋겠다. 경력자라면, 이 글을 읽으며 지식을 곱씹을 기회를 가졌기를 바란다.

이번 글에서 빠트린 성능 팁이 있다면 댓글로 알려주길 바란다. 