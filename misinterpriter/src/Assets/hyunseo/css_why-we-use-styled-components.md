# styled-components 를 사용해야하는 8가지 이유

- **본기사는 [8 reasons to use styled-components (FEBRUARY 28, 2019 Prisma)](https://blog.logrocket.com/8-reasons-to-use-styled-components-cf3788f0bb4d/) 을 번역한 기사입니다.**

![logo](https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*0wLQ0p3qBo1bBt5km_nUXQ.png?zoom=2&resize=324%2C316&ssl=1)

`요약 : 이 기사에서는 styled-components 의 다양한 이점으로 CSS-in-JS 프레임워크로 채택하는 것을 고려해야 하는 이유를 살펴보겠습니다.`

## **styled-components 란 무엇일까요?**

[styled-coponents](https://www.styled-components.com/) 는 자바스크립트의 태그가 지정된 템플릿 리터럴과 CSS 의 기능을
사용하여 구성 요소에 반응하는 스타일을 제공하는 _CSS-in-JS_ 스타일링을 위한 프레임워크입니다.

본질적으로, styled-coponents 는 styled-components 라이브러리를 사용하여 리액트 컴포넌트를 쉽게 만들 수 있으며
Javascript 코드 내에서 일반 CSS로 구성 요소의 스타일을 지정할 수 있습니다. 공식 문서 페이지에서 아래 예제를 볼 수 있습니다.

```js
const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  ${props =>
    props.primary &&
    css`
      background: white;
      color: palevioletred;
    `}
`;

render(
  <div>
    <Button
      href="https://github.com/styled-components/styled-components"
      target="_blank"
      rel="noopener"
      primary
    >
      GitHub
    </Button>

    <Button as={Link} href="/docs" prefetch>
      Documentation
    </Button>
  </div>
);
```

버튼을 JavaScript 변수로 명확하게 볼 수 있으며 백틱에 정의 된 스타일은 일반 CSS 스타일입니다.
또한 중첩 스타일 속성도 일반 CSS 스타일과 함께 표시됩니다. 이 방식이 styled-components 가 JavaScript에서 CSS를 렌더링하는 방법입니다.

CSS-in-JS 의 주제는 프론트 엔드 커뮤니티에서 특히 반응 개발자들 사이에서 큰 논란거리임을 알고 있으므로
개방적인 마음으로 글을 읽어주시길 바랍니다.

## **React Components 스타일링**

React 컴포넌트를 스타일링 하는 방법은 여러가지가 존재합니다.

- 보통 외부 CSS 파일에 CSS 를 사용하여 className 으로 속성을 전달하기.

```js
render() {
 return <span className="menu navigation-menu">Menu</span>
}
```

대규모 애플리케이션 프로젝트에 경우 CSS 파일에 부피가 커지고, 서투르고, 복잡해지기 시작한다는 사실을 증명할 수 있습니다.
이에 대한 한 가지 훌륭한 솔루션은 SASS를 도입하는 것인데, 이는 도움이 되더라도 프로젝트가 가질 수 있는 엄청난 수의 CSS
파일들과 같아지고 그 자체로 복잡해지기 시작합니다.

- Inline CSS 를 react components 안에 넣기.

```js
const divStyle = {
  color: "blue",
  backgroundImage: "url(" + imgUrl + ")"
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```

이는 React 에서 지속성과 확장성이 떨어지므로 권장하지 않습니다. (후에 자세한 설명을 첨부합니다.)

CSS-in-JS 는 JavaScript 를 사용하여 구성 요소의 스타일을 지정하는 기술입니다.
JavaScript 에서 구문 분석되면 CSS가 스타일 요소로 생성되어 DOM 위에 직접 첨부됩니다.
styled-components, emotion, jss, radium, aphrodite 등 다양한 CSS-in-JS 프레임 워크가 있습니다.
[여기](https://michelebertoli.github.io/css-in-js/)에서 비교표를 볼 수 있습니다.
여기서 가장 유망하고 인기가 많은 것은 styled-components 입니다.
지난 달에만 60000회 이상 다운로드 되었고 매우 [빠르게 널리 성장하는 것](https://www.npmtrends.com/jss-vs-aphrodite-vs-radium-vs-styled-components-vs-glamorous-vs-emotion-vs-styletron)은 놀라운 일이 아닙니다.

## 우리는 왜 styled-components 를 사용해야 할까요?

**자유로운 CSS 커스텀 컴포넌트를 만들 수 있습니다.**

styled-components 를 사용하면 사용자 인터페이스 디자인 포커스는 HTML 요소 또는 React 컴포넌트가
className 을 가진 것 처럼 자체 스타일을 포함하고 전체 프로젝트에서 쉽게 재사용 할 수 있는 styled-component 로 전환됩니다.

아래와 같은 스타일 정의에서

```js
<h2 className="subTitle">Gucci Snakes </h2>
```

```CSS
h2.subTitle{
  font-size: 2em;
  color: blue;
}
```

다음과 같이 될 것입니다!

```js
import styled from "styled-components";
const Subtitle = styled.h2`
  font-size: 2em;
  color: blue;
`;
<Subtitle>Gucci Snakes</Subtitle>;
```

여기서 스타일은 구성 요소의 필수 부분이되므로 스타일과 컴포넌트 간의 매핑을 제거하여 CSS 클래스가 처음 수행 한 주요 부분을 제거합니다.
이제 모두 평범한 CSS 로 만들어졌으며 이미 익숙한 것으로 작업 할 때 항상 친숙하게 다가올 것입니다.

**인라인 스타일링**

일반적으로 인라인 스타일은 리액트 팀에 의해 권장되지 않습니다. 인라인 스타일은 의사 및 미디어 쿼리를 사용할 수 없기 때문입니다.
또한 브라우저 호환성, camel-casing 및 automatically appended scalar quantities 에 대한 많은 우려로 인해 인라인 스타일을 사용해서는 안됩니다.

스타일 구성 요소를 사용하면 일종의 인라인 스타일을 볼 수 있지만 앞에서 언급 한 모든 inline styling baggage 이 없으면 vibranium power 라고합니다 .

다음 예시 코드를 보겠습니다.

```js
const paragraphStyles = {
color: red,
backgroundColor: black,
padding: 2px
}
<p style={paragraphStyles}> inline styles applied here </p>
```

**Compile output:**

```js
<p style="color: red; background-color: black;">inline styles applied here </p>
```

하지만 styled-components 는

```js
import styled from 'styled-components';
const Text = styled.div`
color: red,
background: black
`
<Text>Styled with CSS-in-JS </Text>
```

**Compile output:**

```js
<style>
.hash12345tf {
background-color: black;
color: red;
}
</style>
<p class="hash12345tf">Styled with CSS-in-JS</p>
```

우리는 여기서 styled-components 가 DOM 위에 스타일 태그를 부착하고 인라인 스타일은 DOM 노드의 속성과 함께 작동하는 방식을 확인할 수 있습니다.

**모바일 지원**

모바일 개발에도 React Native를 사용하는 React 코드베이스가 있는 팀의 경우 styled-components 는 솔루션 중 하나입니다.
플랫폼 간 일관성이 우선이라면 styled-components 를 React Native에 묶을 수 있어서 기쁩니다!

스타일이 지정된 컴포넌트가 있는 React Native에서 JSX 코드를 쉽게 읽을 수 있도록 주석에 별명을 지정할 수 있습니다.
또한 간단하게 호출하여 모든 구성 요소를 사용자 지정 컴포넌트로 변환하여 styled-components 로 변환 할 수도 있습니다 `.styled()`

**스타일 스코프**

프론트 엔드 툴링 세계에서 Vue 팀은 스타일 범위를 정립 한 최초의 사람이었습니다.
전문가가 아닌 CSS 사용자의 경우 스타일 시트에서 특정 요소 또는 클래스의 스타일을 변경하면 실제로 실망스럽고 관련이 없는
다른 요소에 역으로 영향을 미친다는 사실은 DOM 에서 동작하는 CSS 사용에 대해 매우 성가신 일이 있습니다.
이는 styled-components 를 Vue 와 같이 구성 요소 기반이며 범위가 넓기 때문에 이를 사용하는 좋은 이유입니다.

**No-class policy**

styled-components 는 class 에서 props 를 사용하기를 주장합니다. no-class policy 는
더 많은 개발자가 컴포넌트의 동작을 제어하는 것에 대한 모범으로 이끌고 있습니다.

우리는 먼저 이렇게 작성합니다.

```js
<h2 className="title primary">Hello World</h2>
h2.Subtitle{
  font-size: 2em;
  color: green;

  &.primary{
    color: red;
  }
}
```

하지만 이제는 , 이렇게 작성하는 것이 좋습니다.

```js
const Subtitle = styled.h2`
  font-size: 2em;
  color: ${props => (props.primary ? "red" : "green")};
`;
<Subtitle primary>Hello World</Subtitle>;
```

우리는 컴포넌트에서 HTML 및 CSS 를 관리하고 유지하는 방법을 알았습니다.

또한 `className` 으로 언제든지 바로 돌아가서 동일한 결과를 얻을 수 있습니다.

```js
const Subtitle = styled.h2`
  font-size: 2em;
  color: green;

  &.primary {
    color: red;
  }
`;
<Subtitle className="primary">Hello World</Subtitle>;
```

**서버 사이드 렌더링**

Styled-components 는 서버 사이드 렌더링을 지원합니다.
기본 아이디어는 서버에서 앱을 렌더링 할 때마다 `ServerStyleSheet` 컨텍스트 API를 통해 스타일을 허용하는 공급자를 생성하고 반응 트리에 추가 할 수 있다는 것입니다.

이것은 키 프레임과 같은 전역 스타일을 방해하지 않으며 `createGlobalStyle` React DOM의 다양한 SSR API와 함께 스타일 구성 요소를 사용할 수 있습니다.

**CSS 테스팅**

Styled-components 도 실제 컴포넌트이기 때문에 단위 테스트를 수행할 수 있습니다. 이는 CSS 에서 중요한 부분으로 Styled-components 팀이 이미 지원하고 있습니다.

[Jest Styled Components](https://github.com/styled-components/jest-styled-components) 는 Styled-Components 를 Jest 로 테스팅할 수 있습니다.
이 패키지는 스냅 샷 테스트 경험을 향상시키고 스타일 규칙을 기대할 수있는 새로운 **matcher** 를 제공합니다. 다음과 같이 설치할 수 있습니다.

```
npm install --dev jest-styled-components
```

테스트의 예시입니다.

```js
import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
const Button = styled.button`
  color: red;
`;
test("it works", () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

그리고 스냅 샷의 결과 예시입니다.

```js
exports[`it works 1`] = `
.c0 {
  color: green;
}
<button
  className="c0"
/>
`;
```

**Sass 와 세련된 지원**

만약 당신이 이 기사를 이 지점까지 따라왔다면 , Sass 의 힘을 늘리기 위해 팀이 만든 도구 세트인 중복된 스타일, Sass , 세련된 스타일을 눈치 챘을 것입니다.

```js
const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;
```

Sass를 지원하는 것은 styled component 의 핵심 사명을 공개하며, 이는 Sass의 코드 라인 및 기타 최적화 기능을 축소하는 것을 포함하여 CSS에 대해 우리가 이미 좋아하는 모든 것을 잃지 않고 완벽한 CSS-in-JS 경험을 만드는 것입니다.

**styled component 에 대한 주장**

styled component 를 사용하지 않을 수 있는 아주 많은 이유를 생각해 내기는 어렵지만 (특히 포스트의 제목을 보면), 이 글에서 CSS-in-JS 프레임워크에 대한 (유효한) 우려를 지적하지 않는다면 억울할 것입니다.

**The lock-in**

styled component 는 모든 사용자들을 위해 존재하는 일종의 내포된 잠금장치가 있으며, 당신은 그것을 매우 의식하고 편안해야 한다. 당신은 JavaScript 에 갇혀서 React 라이브러리에 들어갔다가 마지막으로 styled component 들어가게 된다. 만약 그것들 중 하나가 사라지면, 당신은 고통스럽게 당신의 코드베이스를 다시 맞춰야 할 것입니다.

**학습곡선**

몇몇 사람들에게 styled-components 의 학습 곡선과 CSS-in-JS 체제 사이의 학습곡선에 차이가 가파른 것으로 나타났습니다. 이는 styled component 를 사용하고 고수할 것을 강력히 권하고 싶습니다.

**연속성 문제**

styled component 는 약 2년 전에 시작 되었으며 React 개발자는 항상 지원 중단 여부를 묻습니다. 프로덕션 환경에서 사용하기 전에 이를 알고 있어야합니다.

**개인 취향**
사람들은 변화를 좋아하지 않습니다. 사실 이것은 별도의 문서에서 CSS로서 유효한 주장은 여전히 ​​웹 개발에서 가장 오래 지속되는 표준 중 하나입니다.

**커뮤니티 관심사**
어떤 사람들은 styled-components 커뮤니티가 작고 어려운 버그, 사용 사례 또는 오류가 발생할 때 필요한만큼 빨리 지원을 받지 못할 수도 있다고 생각합니다. 이것도 유효하지만 이유를 이해하려면 styled component 의 잠금 특성을 고려해야합니다.

**결론**
GitHub 에는 22,000개가 넘는 ⭐️을 받은 styled-compoenent 와 관련하여 커뮤니티가 엄청나게 커지고 있습니다 . 대부분 React 개발자가 제공하는 것이 장려의 장래성입니다.

또한 매우 정기적으로 유지 관리 되므로 여기에서 릴리스 페이지를 확인할 수 있습니다 . CSS 애호가라면 현재 인터넷을 통해이 CSS 조사 현황 을 확인할 수 있습니다 . 행복한 코딩!!

(마지막 LogRocket 에 관한 내용은 생략했습니다.)[https://logrocket.com/]
