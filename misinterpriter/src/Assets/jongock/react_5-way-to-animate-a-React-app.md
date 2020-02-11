# React app animate 하는 5가지 방법

![Reactanimate](https://miro.medium.com/max/2456/1*1Z177dpTeAp7uEFc5Zx2xg.png)



ReactJs 앱의 애니메이션은 인기있는 주제이며 다양한 유형의 애니메이션을 만드는 여러 가지 방법이 있다. 많은 개발자들이 css를 사용하고 HTML tag에 클래스들을 추가하여 독점적으로 애니메이션을 만든다.  이것은 좋은 방법이고 이것을 사용해야 한다. 복잡한 애니메이션을 만든기를 원한다면 GreenSock을 주목해라. GreenSock은 가장 인기 있는 애니메이션 플랫폼이다. React에서 애니메이션을 만들기 위한 컴포넌트와 많은 라이브러리들이 있다. 
이것들에 대해서 이야기 해보자😎

1. **Css method**
2. **React-transition-group** : 이것은 기본 CSS 애니메이션과 트랜지션을 간단하게 실행시키기 위한 컴포넌트 부가 기능 이다. 
3. **react-anmations** : React-animations은 animate.css의 모든 애니메이션을 구현한다. 간단하다!
4. **React reveal** : React 애니메이션 프레임워크이다. 
5. **TweenOne** : antd에 애니메이션에 사용하는 라이브러리

> **................................** 👇
>
> repo를 보려면 click  [here](https://github.com/NozhenkoD/react-animation-2019)*.* 👈
>
> **................................** 👆

물론 오픈 소스는 더 많은 애니메이션 라이브러리와 컴포넌트를 가지고 있다. 나는 탐색하는 것을 좋아한다. 하지만 이 글은 라이브러리들은 포함하지 않을 것이다. 또한 이 글의 마지막에서 당신이 주목할 만한 라이브러리들의 형태 보너스를 받을 것이다.

👨🏻‍💻 시작해 보자!



## 1. CSS method

이 method는 간단한 애니메이션에 가장 적합하다. 이것을 자바스크립트 라이브러리를 import하는 대신 사용하면 번들의 크기가 작아진다. 그리고 브라우저는 가장 최소한의 resouce를 소비한다. 이 두가지 요점은 app 생산에 큰 타격을 준다. 만약 간단한 애니메이션과 작은 번들크기를 가져야 한다면 이 애니메이션을 주목해라. 

css를 사용하여 애니메이션을 보여주려고 한다. 

햄버거 메뉴의 예를 보자 :👇

![hamburger](https://miro.medium.com/max/1200/1*cosKxTRdOfM3YrNc_2Ah3g.gif)



이 메뉴는 css 프로퍼티로 사용하기 쉽고  HTML 테그에 대해 `clasName="is-nav-open"` 을 트리거 한다. 이 예제를 구현하는 방법에는 여러가지가 있다. 이 예제를 구현하는 방법에는 여러가지가 있다. 그것을 만드는 방법 중 하나는 네비게이션 위에 [wrapper](https://opentutorials.org/course/53/50)를 작성하고 margin의 변화에 트리거하는 것이다. 네비게이션은 일정한 ` 250px` 의 너비를 가진다. 그리고 wrapper는 같은 너비의 `margin-left` 또는 `translateX` 속성을 가진다. 네비게이션을 보여줘야 할 때 우리는 wrapper와 wrapper의 동작를 위해 `className="is-nav-open" wrapper의 움직인을 위해 ` `margin-left/translateX: 0 ` 추가해야 한다. 

![nav](https://miro.medium.com/max/3096/1*08y12Sp1d9cLSKE9nz1EaA.png)



### And css styles: 

![Css](https://miro.medium.com/max/1712/1*nZ6Mq1wmqu8JSF-DfebeVw.png)



대부분의 상황에서 이 방법을 사용할 것이다. 큰 라이브러리를 가져 와서 프로젝트에서 구현하는 것보다 여러 CSS 행을 작성하고 className을 트리거하는 것이 좋다. 브라우저가 앱을 빠르게 실행하는 것에 대해 사용자들은 감사할 것이다. 

하지만 때떄로 다른 method 들을 사용해야 한다. 다른 방법은 무엇이 있을까? 다음 method를 살펴보자. 



## 2. ReactTransitionGroup

ReactJs 커뮤니티 사람들에 의해서 개발된 컴포넌트 부가 기능이다. [ReactTransitionGroup](https://github.com/reactjs/react-transition-group) 은 기본 CSS 애니메이션 및 전환을 쉽게 구현할 수 있다. 

개발자들은 이 라이브러리를 이렇게 설명한다:

> "시간이 지남에 따라 구성 요소 상태 (마운팅 및 마운트 해제 포함)를 관리하기위한 구성 요소 집합으로, 특히 애니메이션을 염두에두고 설계되었습니다."

어쨋든 이 컴포넌트 부가 기능에 대해서 알아야 할 것은 3가지 이다:

- 컴포넌트 라이프 사이클이 변경되면 React Transition Group이 클래스를 변경합니다. 차례로 CSS 스타일로 애니메이션 스타일을 설명해야합니다.
- ReactTransitionGroup의 크기가 작습니다. React 애플리케이션을 위해 패키지로 설치해야하며 번들을 크게 늘리지 않습니다. 그러나 CDN을 사용할 수 있습니다.
- ReactTransitionGroup에는 3 가지 구성 요소 (Transition, CSSTransition 및 TransitionGroup)가 있습니다. 애니메이션을 얻으려면 컴포넌트를 wrapping해야합니다.

비슷한 애니메이션을 만드는 방법을 살펴 보자. 👀👇

![reacttransition](https://miro.medium.com/max/1200/1*AwFrD7KVn0gibJX5iVT5BA.gif)



먼저 `react-transition-group`로 부터 `CSSTransitionGroup` 를 import해야 한다. 그리고 목록을 wrap 하고 `transitionName` props를 세팅해야 한다. `CSSTransitionGroup` 의 자식이 추가/삭제 될 때마다 애니메이션 스타일이 나타날 것이다. 

![Css](https://miro.medium.com/max/1476/1*ltbYH9Yv8WPH5Jzs3koYKQ.png)



`transitionName="example"` 을 설정 한다면 스타일 시트의 클래스는 example 이름으로 시작해야한다.

![CSS](https://miro.medium.com/max/1848/1*qM3rFr4M1awe5m4G92CPbg.png)



`ReactTransitionGroup` 의 기본적인 사용법을 볼 수 있다. 👀

그리고 필요한 것은 이것이 끝이다. 물론 몇가지 로직을 추가할 필요는 있다. 연락처 목록 예를 실현하기 위해 두 가지 방법을 설명해야 한다:

`handleAdd` : 새 연락처를 추가하면 임의의 이름을 가져 와서 배열 state.items로 푸시한다. 

`handleRemove` : `state.items` 배열에서 인덱스별로 연락처를 제거한다.

![contact](https://miro.medium.com/max/2692/1*q9k9_wlw109fXtC3458mbQ.png)



## 3. React-animations

[React-animations ](https://github.com/FormidableLabs/react-animations) 라이브러리는 [animate.css](https://daneden.github.io/animate.css/) 가 있는 모든 애니메이션에 구축된다. 사용하기 쉽고 많은 애니메이션 콜렉션을 가지고 있다. React-animation은 Radium, Aprodite 또는 styled-components와 같은 키 프레인 애니메이션을 정의하는 객체의 사용을 지원하기 위해서 inline style 라이브러리와 함께 작동한다. 나는 styled-component의 사용을 선호한다. 

gif에서 애니메이션을 볼 수 있다 : 👀👇

![gif](https://miro.medium.com/max/1200/1*2SJH2tItiljweyRgivf9JQ.gif)

네가 어떻게 생각하는지 알아😁

![smile](https://miro.medium.com/max/940/1*1VZUa3mn3569l3ePzq3piA.gif)

이 애니메이션을 보자 마자 사용할 수있는 곳을 깨달았다. 
이것이 어떻게 작동하는지 보자. 예를 들어 — **바운스 애니메이션**.

![bounce](https://miro.medium.com/max/1200/1*bkPR-nhoZ5aTw_et9Mt7Ow.gif)



`react-animations` 에서 애니메이션을 선택하는것이 처음 해야하는 일이다. 

앞에서 언급했듯이 애니메이션 스타일과 기본 키 프레임으로 wrap 된 구성 요소를 만든 후 스타일 구성 요소를 사용한다.

![stylebounce](https://miro.medium.com/max/3096/1*SHl61xR75pQ5V5nVohu7Tg.png)



component가 작성되면 애니메이션을 위해 HTML 또는 구성 요소를 마무리해야합니다.

![cssBounce](https://miro.medium.com/max/2220/1*K79gjVVrNwV-XS23dZYywA.png)

예시:

![bounceEx](https://miro.medium.com/max/3096/1*WHA_BeFNgOK2FfzV2SGo_A.png)

애니메이션이 작동한다. 이 애니메이션은 기본적이고 너무 쉽다.

이 애니메이션을 스크롤에 사용할 수있는 좋은 방법이 있습니다. [react-animate-on-scroll](https://dbramwell.github.io/react-animate-on-scroll/#home).



## 4. React-reveal

[React Reveal](https://www.react-reveal.com/) 은 React를 위한 애니메이션 프레임워크이다. fade, flip, zoom, rotate 과 같은 기본적인 애니메이션 그리고 더 많은 발전된 애니메이션을 가지고 있다. 모든 애니메이션을 props로 조정할 수 있도록 해준다(position, delay, distance, cascade 그리고 다른 많은 것들). [여기서](https://www.react-reveal.com/docs/props/) 볼 수 있다.  css effects 를 커스텀해서도 사용할 수 있다. 또한 server side rendering 과 high order components을 가지고 있다. 스크롤 할 때 애니메이션을 사용하려면 이 프레임워크를 사용해라. 어떻게 동작하는지 확인해 보자. 

![scroll](https://miro.medium.com/max/1848/1*zlan6j1-GWgv4RMSgQP92w.png)



스크롤 이벤트를 보자 *👀👇*

![scrollevent](https://miro.medium.com/max/1200/1*Xk4c0gzjEu8RCsCyVRPlYg.gif)

5 개의 블록이 있으며 각 블록에는 전체 화면 페이지와 제목이 있다. 

![scrollCode](https://miro.medium.com/max/2656/1*GzSUQvXa8nJrlgGnqT6eRQ.png)

일정한 `animateList` 를 만들 수 있다. 이 Array는 5가지 요소를 포함한다. `map` method 를 사용한 후에 `Fade` component 속의 각각의 요소를 렌더하고 항목에 제목을 삽입할 수 있다. Const 스타일에는 블록과 제목에 대한 짧은 CSS 스타일을 가지고 있다. 상단에 `Fade` 애니메이션이 있는 5 개의 블록이 있다. 



## 5. TweenOne 과 Ant 디자인 애니메이션

[Ant Design](http://ant.design/) 은  사용하기 쉬운 수많은 컴포넌트가 있는 React UI 라이브러리이다. 우아한 사용자 인터페이스를 구축하는 데 유용한 component이다. Ant Design은 중국의 대기업 Alibaba에 의해서 만들어 졌고 잘알려진 많은 기업들에서 사용되고 있다: 알리바바, 텐센트, 바이두 그리고 다른 많은 곳에서. 

Ant 디자인에 대해 들어 보셨을 것이므로 방문 페이지에서 애니메이션을 고려해 보겠다 .👇

![Ant](https://miro.medium.com/max/1200/1*_6S4VTzzGwRtebx-ys4htA.gif)

보다시피 많은 애니메이션 요소가 있다. 대부분의 요소가 비슷한 애니메이션을 가지고 있기 때문에 짧은 버전을 보여주려고 한다. 나는 배경에 녹색 공과 하나의 요소 (예 : 빨간색 사각형)가있는 지구본을 선택했다. 우리의 애니메이션은 다음과 같다.

![earth](https://miro.medium.com/max/1200/1*awI1UedVjvAwINK3lwCsyA.gif)

`TweenOne` component를 사용했지만 애니메이션에서 경로를 사용하려면 `PathPlugin` 이 필요하다. `PathPlugin` 을 `TweenOne.plugins` 로 푸시하면 작동 한다,

![TweenOne](https://miro.medium.com/max/1748/1*Tf876Sktjm4nCtGIpHOWwQ.png)

다음 단계에서는 기본 애니메이션 매개 변수를 설명하겠다. 

- **duration(지속)** — ms로 시간 애니메이션,
- **ease(용이함)** — 애니메이션 용이성
- **yoyo** — 반복 마다 앞/뒤를 교대한다. 
- **repeat(반복)** — 애니메이션 반복. 한가지 무기한 프로세스를 사용해야 한다. 
-  **p** — 애니메이션의 좌표 경로
- **easePath** — 애니메이션의 easeParh 경로

마지막 두 매개 변수가 svg에 무엇이 더 구체적 일지 걱정할 필요가 없다.

![svg](https://miro.medium.com/max/4096/1*4saA8U2k7uFNtiH4gX5qUg.png)

다음 애니메이션 객체를 만들 것 이다. 이 객체는 3가지 타입의 애니메이션을 가진다:

- **redSquare** — 아래에 설명 된 루프 매개 변수와 Y 좌표, 지속 시간 및 지연이 있다.

- **greenBall** — 객체 매개 변수 `x`가 있는 경로가 있으며 `y`는 값 `p`이다. `TweenOne.easing.path` — 지속 기간, 반복 및 완화 기능은 다음과 같은 두 가지 매개 변수로 구성된다.
- **path** — easePath 좌표
- **lengthPixel** — 400 개의 섹션으로 분할 된 곡선
- **track** — 루프 스타일과 회전 매개 변수를 가진 축이있는 타원.



![css](https://miro.medium.com/max/2724/1*F5wl-UcUTTgezbJZEZCbVA.png)

이 코드에 대해서 걱정할 필요가 없다. `TweenOne` component에 주목해야한다. 간단히 상기 시켜 주면 `rc-tween-one` 으로 부터 import 되는 component이다. 기본 props 및 애니메이션 props 함께 기본 component로 사용됩니다. 우리의 애니메이션이다! `TweenOne`마다 `redSquare`, `track`, `greenBall`과 같은 자체 애니메이션 규칙이 있습니다.

![Csscode](https://miro.medium.com/max/4096/1*ZcVb5saeoTkdTWJRrQ2cAQ.png)

![wow](https://miro.medium.com/max/960/1*lIUAJ_Cu6PgTrL6MLj1uvA.gif)

😄 두렵지만 실제로 이러한 라인에 주의를 기울여야 한다.

![component](https://miro.medium.com/max/2488/1*3dRieGpfKGgRPQfPeu9L5Q.png)

알다시피 이 메소드로 애니메이션을 만드는 것은 간단하다. `TweenOne` component를 trensfer하고 애니메이션 규칙을 설명하기 위해 필요 한 모든것이다. 

### **🏁** 결론

애니메이션을 사용하는 많은 방법이 있다. 다른 접근법들이 요구 된다. 당신의 프로젝트에서 사용할 수 있는 몇가지 방법을 검토 하였다 . 당신에게 적합한 방법을 선택하라!👨‍💻

🙂 이 글을 읽기전의 사이트 :

![beforearticle](https://miro.medium.com/max/2264/1*mOtJ8bBGfStPvdrEClqYhQ.png)

🤪 이 글을 읽은 후의 사이트:

![afterarticle](https://miro.medium.com/max/1200/1*emR9fk9Kt80Dugw5VSNkQA.gif)



😄 애니메이션을 현명하게 사용하세요!!!



## 👇 읽어야 할 다음 글: 👇

1. [**Tracking Errors In React App With Sentry**](https://medium.com/hackernoon/tracking-errors-in-react-app-with-sentry-d6091a84b64e)
2. [**9 Ways To Implement CSS in React JS**](https://medium.com/@dmitrynozhenko/9-ways-to-implement-css-in-react-js-ccea4d543aa3?source=friends_link&sk=0497aa32141ac0a444bc088efadc4cad)



## 이글은 [Dmitry Nozhenko](https://medium.com/@dmitrynozhenko?source=post_page-----56eb9af6e3bf----------------------)의 "5 Ways to animate a React app."의 글을 번역 하였습니다.

<출처: https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf>

