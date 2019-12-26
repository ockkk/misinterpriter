# React hooks 를 사용해야하는 이유.

- **본기사는 [Why We Switched to React Hooks](https://blog.bitsrc.io/why-we-switched-to-react-hooks-48798c42c7f) 을 번역한 기사입니다.**

출저 : https://blog.bitsrc.io/why-we-switched-to-react-hooks-48798c42c7f

GraphQL은 API 개발의 새로운 표준이 되어가고 있습니다. 이 기사에서 그 이유를 알아보겠습니다.

![hook](https://miro.medium.com/max/5120/1*DnlEHzmQmJMaSvJcd9kLYg.jpeg)

당신은 분기할 부분이 많은 큰 컴포넌트를 확장하고 컴포넌트가 새로운 기능을 위해 어떤 상태를 필요로 한다는 것을 깨달은 적이 있나요?
당신은 단지 어떤 css 를 변환하여 텍스트를 기본 색상에서 빨간색으로 바꾸는 것만으로 컴포넌트를 stateless 한 컴포넌트에서 class 로 변환해야하는 UI 에서 고통을 느껴본 적이 있나요?
데이터가 뎁스가 깊은 컴포넌트 간에 어떻게 공유되어야 하는지에 대해 정말로 생각해 본 적이 있나요?

만약 당신이 리액트 개발자라면 , 이것은 마치 여러분의 삶처럼 들릴 수도 있습니다. 그리고 지금 쯤이면 [hooks](https://reactjs.org/docs/hooks-intro.html) 에 대해 들어봤고 적어도 현재 프로젝트에서 함께 어울렸으면 좋겠습니다.

## Hooks 란 ?

> “Hooks는 16.8 버전에서 React에 새로 추가된 것으로, class 를 작성하지 않고도 state 와 라이프사이클 방법과 같은 React 기능을 사용할 수 있습니다.”

[Dan Abramov](https://twitter.com/dan_abramov) 는 API에 대한 포괄적인 소개와 많은 사람들이 사용하는 프레임 워크가 현재 위치까지 어떻게, 왜 진화했는지를 설명했습니다. 이를 읽고 [여기서](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889) Hooks 를 소개하는 그의 **ReactConf 2018** 기조 연설을 볼 수 있습니다 .

여기서 주제로 알아야할 것은 아마도 아래 내용입니다.

> 리액트 커뮤니티가 [Hooks] 를 수용하는 경우, 당신이 리액트 어플리케이션을 쓸 때 필요한 개념의 수를 줄일 것이다. 후크는 function , class , higher-order-components , render-props 사이에서 끊임없는 전환할 필요 없이 항상 기능을 사용할 수 있게 해준다.

자바스크립트에서의 Class 는 전반적으로 복잡성과 오류 가능성을 빠르게 증가시키는 여러 단계의 상속을 장려하게 됩니다.
즉 기본 함수로 구성할수 있다는 것은 무엇이든 이점이 있다고 볼 수 있습니다.
[OddBird](https://www.oddbird.net/birds/)에서 우리는 최근 그린필드 프로젝트에서 클래스 컴포넌트를 뒤로 하고 상태를 관리하기 위한 간단하고 일관된 패턴을 가지고 있는 새로운 Hook API를 수용함으로써 컴포넌트들 간에 상태성 로직을 공유함으로써 큰 이익을 얻었습니다.

## 애플리케이션 상태 관리

추론하기 쉬운 코드 는 기본적으로 [머릿 속에서 생각할 수있는 코드입니다](https://softwareengineering.stackexchange.com/questions/351244/easy-to-reason-about-what-does-that-mean). Hooks 를 사용하면 여전히 UI 상태에 대한 데이터를 관리하기 위해 로컬 상태를 사용할 수 있습니다.
class 대신 stateless functional 컴포넌트를 선택함으로써 [constructor initialization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Constructor) , [binding function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Constructor) 과 같은 관용적 JavaScript 클래스와 함께 제공되는 장단점이 제거됩니다.

Hooks 와 함께라면 고유 상태 데이터를 유지하는 이 컴포넌트는 코드 라인의 절반으로 단순화하여 동일한 결과를 달성할 수 있습니다.

이 코드를

```js
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Timer />
    </div>
  );
};

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick = () => {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

이렇게 말이죠!

```js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Timer />
    </div>
  );
};

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);
  return <div>Seconds: {seconds}</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

첫 번째 예시에서 초를 기준으로 UI에 표시된 카운트를 동기화 상태로 유지하는 하나의 일을 하기 위한 세 가지의 분리된 메소드(componentDidUpdate, componentDidMount, and tick) 를 확인할 수 있습니다.

React 의 가장 큰 점 중 하나는 선언적인 성질입니다. 이는 대부분 사실이지만, 명령형 setState (와 가능한 라이프사이클 메소드) 는 실제로 핵심 특성과 편차가 있습니다. Hooks 를 사용하면 분기없이 거의 선언적으로 코드를 작성할 수 있으므로 쉽게 따라갈 수 있습니다.

## Context 를 통한 state 공유

이것은 대중의 의견일 수도 있고 아닐 수도 있지만, React 는 자체 상태 관리 라이브러리 라고 생각합니다. 그러나 내가 작업한 대부분의 프로젝트는 상태관리에 대한 솔루션을 위해 Redux 와 같은 예측 가능한 상태 컨테이너로 전환했습니다.

[Context API](https://reactjs.org/docs/context.html)의 도입으로 각 컴포넌트간 상태를 공유 할 수있는 더 간단한 인터페이스가 제공되었습니다.
프론트엔드 아키텍처에서 [Redux 의 필요성](https://www.youtube.com/watch?v=52W__dKdNnU)을 대체 할 수는 있지만 모든 React 컴포넌트 트리에 대해 글로벌로 간주되는 모든 데이터에 사용됩니다.

_Create a Context object:_
`const CountContext = React.createContext({})`

**UseContext**

[useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) Hooks 는 컨텍스트 제공자의 값을 설정하기 위해 제공되며 , 데이터를 컴포넌트에 수동으로 전달하지 않아도 되며, 이를 알아야 하는 구성요소에만 상태를 전달할 수 있는 기능도 동일한 이점을 제공합니다.
중첩된 컴포넌트에서 컨텍스트 개체를 사용하세요.

```js
import React, { createContext, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const CountContext = createContext({});

const Counter = () => {
  const count = useContext(CountContext);
  return <div>seconds: {count}</div>;
};

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <CountContext.Provider value={seconds}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Timer />, rootElement);
```

이이는 렌더링 프로펠러 패턴을 사용하여 컨텍스트 값을 읽는 기존의 방식과는 상당히 개선된 것으로, 비록 이것이 특별한 것으로 보이지는 않을 수 있고, 복수의 컨텍스트에서 구성요소를 읽어야 한다면 읽기가 어려울 수 있습니다.

## Hooks 와 Redux 함께 사용하기

우리는 action/reducer 패턴 때문에 상태를 관리하기 위해 Redux 를 사용합니다.
[React Redux](https://react-redux.js.org/)는 Redux에 대한 공식 반응 바인딩을 제공하고 연결 HOC(High Order Component)를 사용하여 Redux 스토어의 데이터를 구독하고 변경할 수 있는 대안으로 Hooks 를 제공합니다.
이것은 장점이 있지만, react-react hooks 는 선택자를 메모하고 불필요한 리렌더를 피하는데 좀 더 까다로워집니다. 우리는 모든 올바른 장소에서 올바른 방법으로 _useMemo_ 와 _useCallback_ 을 사용하고 있을 수도 있고 사용하지 않을 수도 있습니다.

**useReducer**

React docc 아래 hooks 부분에 추가로 나열되어 있지만, useReducer는 useState 를 대체하는 방법이며, 애플리케이션 데이터가 더 복잡하고, 여러 하위 값이 있는 개체를 포함하거나, 다음 상태가 이전 상태에 따라 달라졌을 때 컴포넌트의 상태를 관리하는 권장 방법이라는 점에 유의해야 합니다.

```js
import React, { useReducer, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const initialState = { seconds: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "startCount":
      return { seconds: action.payload };
    default:
      return state;
  }
};

const Timer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "startCount", payload: state.seconds + 1 });
    }, 1000);
    return () => clearInterval(interval);
  });

  return <div className="App">seconds: {state.seconds}</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Timer />, rootElement);
```

## 비 시각적 로직 공유

Hooks 이전에, 리액트는 비시각적 논리를 추출하고 공유하는 기본적인 방법이 없었고, 그 한계로부터 일반적인 문제를 해결하기 위해 HOCs나 Render 소품 같은 다른 패턴이 나왔습니다.
단순한 자바스크립트 함수에 상태 저장 논리를 추출할 수 있기 때문에 맞춤형 Hooks 를 만들 수 있는 능력은 가장 큰 이점입니다.

여기서 타이머 컴포넌트의 상태 저장 논리를 활용하여 맞춤형 Hooks 를 생성합니다.

```js
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  return seconds;
};

const Timer = () => {
  const seconds = useTimer();
  return (
    <div className="App">
      <div>Seconds: {seconds} </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Timer />, rootElement);
```

사용자 지정 후크는 "use"로 시작하는 JavaScript 함수에 캡슐화된 useState 및 useEffect와 같은 기본 Hooks 의 구성입니다.
여러분이 입력 데이터를 처리하거나 구성 요소의 가시성을 전환하는 것과 같은 무언가를 자주 하는 것을 발견한다면, 그것에 대한 맞춤형 Hooks 를 만들어 보는 것은 어떨까요?

```js
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useForm = () => {
  const [values, setValues] = useState({});
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return {
    values,
    handleChange
  };
};
const Form = () => {
  const { values, handleChange } = useForm();
  return (
    <div className="App">
      <input
        name="firstName"
        onChange={handleChange}
        value={values.firstName}
      />
      <input name="lastName" onChange={handleChange} value={values.lasName} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Form />, rootElement);
```

## 마치며..

Hooks를 수용하는 것은 다음과 같은 방법으로 우리에게 이점을 가져다 주었습니다.

> ✔️ 상태 관리 방법을 더 쉽게 설명할 수 있습니다.

> ✔️ 우리의 코드는 상당히 단순화되었으며, 더 읽기 쉽습니다.

> ✔️ 앱에서 상태 저장 논리를 추출하고 공유하기가 더 쉽습니다.

이 동기들이 당신을 움직이는데 부족하다면 , [공식 문서](https://reactjs.org/docs/hooks-intro.html#motivation)에는 고려할 만한 충분한 논거가 있습니다.
현재, 우리는 Redux 가 우리의 Hooks 사용에 적합한지 확신할 수 없습니다.
우리는 useReducer를 이용하지 않아도 확실히 할 수 있지만 아직 배심원은 여전히 그것에 대해 논의 중입니다.

(비즈니스에 어필하고 구매를 하지 않는 한) Hooks 를 사용하기 위해 모든 상태 저장 컴포넌트를 리팩터링할 필요는 없다는 점을 기억하십시오. 하지만 만약 너희 팀이 그들에게 도전하기로 결정한다면, 나는 우리의 경험이 그 결정을 하는데 도움이 되기를 바랍니다.

안녕하세요, 나는 [에리카 미첼(Duggie)](https://twitter.com/DuggieMitchell)이고, 고객이 확장 가능하고 인간 중심적인 디자인을 가진 웹 애플리케이션을 만들 수 있도록 도와주는 개발자 및 디자이너의 작은 에이전시인 Oddbird의 선임 프런트엔드 개발자입니다.

내 스타일이 마음에 든다면, 어서 가서 박수를 보내세요. 그리고 인생과 코드에 대한 나의 생각을 더 읽어보시려면 여기로 오세요! ❤️
