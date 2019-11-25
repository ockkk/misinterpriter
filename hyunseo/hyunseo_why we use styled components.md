# styled-components 를 사용해야하는 8가지 이유

<br/>

- **본기사는 [8 reasons to use styled-components (FEBRUARY 28, 2019 Prisma)](https://blog.logrocket.com/8-reasons-to-use-styled-components-cf3788f0bb4d/) 을 번역한 기사입니다.**

<br/>

![logo](https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*0wLQ0p3qBo1bBt5km_nUXQ.png?zoom=2&resize=324%2C316&ssl=1)

`요약 : 이 기사에서는 styled-components 의 다양한 이점으로 CSS-in-JS 프레임워크로 채택하는 것을 고려해야 하는 이유를 살펴보겠습니다.`

<br/>

## **styled-components 란 무엇일까요?**

[styled-coponents](https://www.styled-components.com/) 는 자바스크립트의 태그가 지정된 템플릿 리터럴과 CSS 의 기능을
사용하여 구성 요소에 반응하는 스타일을 제공하는 _CSS-in-JS_ 스타일링을 위한 프레임워크입니다.

본질적으로, styled-coponents 는 styled-components 라이브러리를 사용하여 리액트 컴포넌트를 쉽게 만들 수 있으며
Javascript 코드 내에서 일반 CSS로 구성 요소의 스타일을 지정할 수 있습니다. 공식 문서 페이지에서 아래 예제를 볼 수 있습니다.

<br/>

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

<br/>

## **React Components 스타일링**

React 컴포넌트를 스타일링 하는 방법은 여러가지가 존재합니다.

- 보통 외부 CSS 파일에 CSS 를 사용하여 className 으로 속성을 전달하기.

```js
render() {
 return <span className="menu navigation-menu">Menu</span>
}
```

대규모 애플리케이션 프로젝트에 경우 CSS 파일에 부피가 커지고, 서투르고, 복잡해지기 시작한다는 사실을 증명할 수 있습니다.
이에 대한 한 가지 훌륭한 솔루션은 SASS를 도입하는 것인데, 이는 도움이 되더라도 프로젝트가 가질 수 있는 엄청난 수의 SCSS
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

<br/>

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

스타일이 지정된 컴포넌트가 있는 React Native에서 JSX 코드를 쉽게 읽을 수 있도록 주석에 별명을 지정할 수 있습니다. 또한 간단하게 호출하여 모든 구성 요소를 사용자 지정 컴포넌트로 변환하여 styled-components 로 변환 할 수도 있습니다 `.styled()`

**Scope Style**

프론트 엔드 툴링 세계에서 Vue 팀은 스타일 범위를 정립 한 최초의 사람이었습니다.
CSS 사용에 대해 매우 성가신 일이 있습니다. 전문가가 아닌 CSS 사용자의 경우 스타일 시트에서 특정 요소 또는 클래스의 스타일을 변경하면 실제로 실망스럽고 관련이없는 다른 요소에 역으로 영향을 미친다는 사실입니다.
DOM에서의 동작. 이는 styled-components 를 Vue 와 같이 구성 요소 기반이며 범위가 넓기 때문에 이를 사용하는 좋은 이유입니다.

<!-- **No-class 정책**

Styled-components -->
