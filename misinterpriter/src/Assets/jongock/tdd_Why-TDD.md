# 테스트 주도 개발 - 테스트 주도 개발은 무엇이며 그것을 왜 사용해야 하는가? 

소프트웨어 개발의 세게 속에서 테스트 주도 개발은 (줄여서 TDD) 은
소프트웨어 코드가 생성 될 때만 테스트가 생성이 되어 새로 생성된 테스트를 통과하는 것을 목표로 흔히 사용되는 개발 방법론으로 잘 알려져 있다.

오늘 날 우리는 테스트 주도 개발의 기본적인 테스트 주도 개발의 라이프 사이클, 몇몇 좋은 예제 그리고 자신의 프로젝트에서 테스트 중심 개발을 구현할 때의 장단점을 포함하는 기본 구성 요소를 살펴볼 것이다. 

## 테스트 주도 개발이란?
테스트 주도 개발의 핵심은 소프트웨어 개발 생명 주기에 걸쳐 반복 되는 5가지 간단한 단계를 중심으로 진행 된다. 이러한 단계의 목표는 (그리고 일반적으로 테스트 주도 개발의 전체는) 모든 기능적인 비즈니스 요구 사항을 충족 하면서 간단하고 효과적인 코드를 보장하는 것이다. 

![TDD](https://images.xenonstack.com/blog/test-driven-development-process-cycle.png)

### 1. 테스트 작성
개발은 테스트에 의해 주도되기 떄문에 첫 단계는 새로운 테스트를 만드느 것이다. 테스트는 가능한한 간결하고 간단해야 하고 큰 부분의 매우 구체적인 측면 또는 구성요소를 테스트 해야한다. 예를 들어 만약 당신이 사용자 등록 기능을 만든 다면 테이터 모델 등 등록의 모든 측면을 포함하는 단일 테스트를 만들수 있다. 하지만 처음부터 이러한 모든 측먄을 포함하는 효율적이고 효과적인 테스트를 만드는것은 아주 어려울 것이다.

대신에, 테스트 주도 개발은 개발 된 기능의 요구를 충족 시키는데 필요한 가능한한 작은 테스트를 작성할 것을 권장 한다. 시간이 지남에 따라 더욱 큰 기능의 모든 측면을 덮을 수 있는 충분한 테스트가 만들어 질때까지 많은 테스트가 작성 된다.

그러므로 사용자 등록 기능과 관련된 단일 테스트는 "email 입력란이 비어 있습니다." 처럼 간단한 것일지도 모른다. 테스트 주도 개발에서 생성된 대부분의 테스트는 언어별 프레임워크를 사용하여  테스트에 동작을 정의하는 간단한 문구를 작성하여  "제목" 또는 "이름"을 지정할 수 있다.(일반적으로 user story라고 한다.) 따라서 첫 번째 테스트 제목은 "email 입력란이 비어 있습니다."가 제목이고 테스트의 목적은 단순히 이메일 입력란이 비어 있지 않은지 테스트 하는 것이다.

## 2. 테스트 실패 확인
테스트가 작성되면 테스트 실패를 확인하는 것이 다음 단계이다. 
테스트 주도 개발 방법론의 전체 목적은 기능이 최종적으로 예싱대로 동작을 하는지 확인할 뿐만 아니라 기능을 구현하기 전에 해당 테스트가 실패할 것이다는 기능의 또는 code section의 요구 사항에 대해 생각하게 하는 것이다.

(테스트는 기능의 동작을 예상하는 것과 그리고 기능을 구현하기 전에 그 기능이 이 테스트를 통과 못할 것이라는 생각을 가지게 하여 요구사항에 대해 다시 한번 생각하도록 만든다는 것 같습니다. )

새로운 테스트가 실패했음을 확인함으로써 테스트가 쓸만하다고 자신할 수 있고 테스트를 통과하는 데 필요한 코드 작성에 도움이 된다.

## 3. 테스트를 통과하는 코드 작성
테스트 실패를 확인한 후 이제 테스트에 통과 할 수있는 코드를 작성해야 한다. 이 단계의 핵심은 테스트의 범위를 넘어서는 어떤 추가적인 또는 관계없는 코드를 작성하지 말아야 한다는 것이다.
1 단계에서 가능한 가장 간단한 테스트를 만드는데 초점을 둔 것 처럼 이 단계에서 우리는 테스트를 통과하는 가장 간단한 코드를 작성하려고 한다.

이 단계에서 작성된 코드는 아마도 거칠고 깔끔하지 않을 것이지만 괜찮다. 테스트 주도 개발 전체 과정에서 지속적인 리팩토링을 장려한다. 이것은 현재 코드가 앞으로 여러번 변경 될것을 의미한다.

## 4. 테스트 통과 확인 
새로운 코드를 작성 한 후 테스트가 통과하는지 확인해야 한다. 이 예제에서 우리는 이메일 입력란을 비운채로 등록 양식을 제출하면 실패하지만 이메일 입력란에 텍스트를 입력하면 테스트를 통과할 수 있음을 확인 했다. 믿거나 말거나 테스트 주도 개발의 기본 프로세스는 이게 전부이다. 

## 5. Refactor
다섯번째 단계에서는 당신의 테스트가 통과한다 하여도 해당 테스트를 통과하는 데 필요한 코드를 작성하는 과정에서 일부 중복 또는 불일치가 발생할 수 있다. 
이는 정상적이고 예상되는 일이지만 리팩토링 단계에서 중요한 것은 이러한 문제 영역을 찾기 위해 시간을 가지고 코드베이스 단순화에 집중하는 것이다.


이 프로세스는 당신이 실수로 버그를 추가하지 않았는지 또는 이전에 통과한 테스트가 실패하는 원인이 되도록 변경했는지 확인하기위해서 이전에 작성한 모든 테스트를 계속해서 다시 실행해보는 과정 또한 포함 해야한다. 대부분의 개발자들은 이 프로세스를 회귀 테스트(regression testing)로 알고 있으며 새로운 변화로 인해 코드의 기능이 중단되지 않음을 확인한다.

## 6. 모든 단계를 반복하라
테스트 주도 개발 프로세스의 다섯 단계에서 6번째 단계는 반복이다. 만약 모든것이 작게 유지 된다면 *(작은 사용 사례, 작은 테스트, 작은 코드 변경, 작은 확인 등)* 실패한 테스트 작성에서 합격 테스트 확인 및 리팩토링에 이르기 까지 전체 프로세스는 몇 분 밖에 걸리지 않는다. 그러므로 이 프로세스는 계속해서 반복되며 각각의 새로운 테스트는 전체 코드베이스를 천천히 증가시키고 완전히 실현되고 완성 된 기능에 점점 더 가까워 진다.

red-green-refactor는 간간히 들리는 테스트 주도 개발의 단축 버전이며 위에서 설명한 기본 단계를 참조하는 또 다른 방법이다. 
red test는 실패한 테스트 이고, green test는 통과하는 테스트 이므로 red-green-refactor의 프로세스는 실패한 테스트를 작성하여 통과한 다음 리팩토링 하는 것이다.

## 테스트 주도 개발의 장점

- 디버깅에 대한 의존도 감소: 테스트 주도 개발은 우선 테스트를 작성하고 해당 테스트를 통과하기 위한 코드를 작성하는데 중접을 두기 때문에 많은 개발자들은 테스트 주도 개발의 lifecycle이 디버깅 필요성을 크게 줄일 수 있음을 알게 되었다.
테스트 주도 개발은 테스트 작성 및 코딩 중에 논리 및 기능적인 요구사항에 대한 깊은 이해를 요구하므로 실패한 테스트의 원인을 빠르게 파악하고 해결할 수 있다.

- 사용자 경험을 고려: 처음 테스트에 대해서 생각하고 작성하는 과정은 근본적으로 뇌가 거꾸로 일하도록 강요합니다. 먼저 함수가 어떻게 사용되는지, 어떻게 구현되는지, 그리고 테스트를 작성하는 방법을 고려해야합니다. 이를 통해 사용자 경험 측면에서의 기능을 고려할 수 있다.

- 전체 개발 시간을 줄일 수 있다.: 일부에 따르면, 테스트 주도 개발은 기존의 테스트 주도 개발이 아닌 모델과 비교할 때 프로젝트의 총 개발 시간을 단축시키는 것으로 나타났다. 테스트의 추가 라인으로 인해 전체 코드 줄이 증가하지만 빈번한 테스트는 종종 버그를 방지하고 프로세스 초기에 기존 버그를 확인하여 나중에 문제가되는 것을 방지한다.

## 테스트 주도 개발의 단점

- 큰그림의 디자인을 방해한다.: 테스트 주도 개발은 개발자가 가능한 가장 간단한 테스트를 작성한 다음 가능한한 가장 간단한 코드로 테스트를 해결하도록 권장하기 때문에 기능의 전체 디자인 또는 전체 프로젝트에 대한 범위가 부족할 수 있다. 테스드 주도 개발을 사용할 떄는 당면한 문제에 초점이 맞춰줘 있기 떄문에 나무등의 숲 전체를 놓치기가 쉽다. 분단위로 개발을 진행하는 동안에 뒤로 물러서서 큰 그림을 보지 않고 나무만을 계속해서 본다면 너무 특정한 디자인으로 이어 지기도합니다.
(TDD가 작은 부분들을 하나하나 테스트 하는 방식이라서 전체를 되돌아 보면서 작업을 하지 않으면 잘못된 방향으로 빠진다는 말인 것 같습니다.)

- 모든 경우에 대한 적용의 어려움: 테스트 주도 개발은 소규모 또는 대규모 프로젝트의 작은 구성 요소 및 기능을 처리하는데 탁월하다. 하지만 엄청나게 규모가 크거나 복잡한 프로젝트에 적용을 할때 흔들릴 수 있다. 
아직 이해하지 못한 복잡한 코드에 대한 테스트를 작성하는 것은 불가능한 일은 아니지만 어려울 수 있다. 작문 테스트는 좋지만 새로운 테스트가 기능의 요구사항을 정확하게 나타내지 못하면 목적을 달성하지 못하거나 개방에 방해가 될수도 있다. 
또한 일부 프로젝트 --특히 legacy code 또는 타사 시스템을 다루는 프로젝트-- 는 해당 시스템이나 legacy code와 제대로 통합되는 테스트를 만드는 것이 거의 불가능하기 때문에 이러한 경우는 테스트 주도 개발이 적합하지 않다. 

- 추가 시간 투자가 필요 : 개발 초기 단계에서 테스트를 작하는 데 소요되는 시간은 나중에 절약되지만 (위의 장점 참조) 테스트 중심 개발에는 상당한 시간과 에너지가 필요하다. 많은 개발자에게 새로운 코드를 작성하거나 기존 코드를 리팩토링하는 데 더 많은 시간이 소요될 수 있다.



**작성자: Andrew Powell-Morse**
**출처:https://airbrake.io/blog/sdlc/test-driven-development**