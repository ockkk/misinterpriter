# 리액트 hooks 에서 Redux 사용하기

(출저 : https://blog.bitsrc.io/using-react-redux-hooks-97654aff01e4 )

**함수형 컴포넌트에서 연결한 Hook스와 리덕스 스토어를 어떻게 연결해서 사용할까요?**

![img](https://miro.medium.com/max/1280/1*11b3352KI_21ZuLC37qtJg.jpeg)

React는 Hooks 가 추가 된 16.8 버전을 새로 추가했습니다.
Hooks 는 함수형 컴포넌트가 state 및 라이프 사이클 메소드에 액세스 할 수 있게하는 JavaScript 함수입니다.
그 이후로 개발의 초점은 함수형 컴포넌트로 옮겨졌습니다.

React-Redux 생태계에서 일반적으로 Higher-Order Components 는 추가 데이터, 함수, props 또는state 를 주입하는 데 사용됩니다. 이러한 컴포넌트는 래퍼 역할을합니다.
이는 컴포넌트를 가져다가 향상된 컴포넌트를 반환합니다.
Higher-Order Components 가 단일 컴포넌트를 렌더링하는 경우 Hooks API 로 대신하여 랩퍼가 필요하지 않습니다.
Higher-Order Components 를 자주 사용하고 때로는 다중 계층 랩퍼를 사용하면 번거롭고 유지 보수하기 어려운 코드가 생성됩니다.
Hooks API를 사용하면 컴포넌트가 작게 유지되고 코드가 깨끗하게 유지됩니다.
React Hooks 가 릴리스 된 후 Redux는 기존 React-Redux API에 대한 Hooks 를 지원하는 버전 7.1.0도 릴리스했습니다. React-Redux에 대한 Hooks 의 추가는 React 응용 프로그램의 성능을 향상시키기 위해 많이 필요했던 것입니다.

리액트 Hooks 가 출시된 후, 리듀스는 기존의 리액트-리눅스 API에 대한 Hooks 를 지원하는 버전 7.1.0도 출시했습니다.
리액트-리눅스용 Hooks 를 추가하면 리액트 애플리케이션의 성능이 향상되기 때문에 훨씬 더 필요했습니다.
팁: 프로젝트 전반에서 컴포넌트를 쉽게 공유하고 재사용하려면 [Bit](https://bit.dev/)[(Github)](https://github.com/teambit/bit)를 사용하십시오. 팀으로서 업데이트 제안, 변경 내용 동기화 및 구축 시간 단축이 가능합니다. ⚡️

![gif](https://miro.medium.com/max/800/1*RZP_jNEEilVtmjGH4O4UHQ.gif)

## Redux Hooks 이전의 Redux 애플리케이션 수명 :

컨테이너 컴포넌트 패턴을 사용하는 Redux 응용 프로그램은 Higher-Order Component 인 “connect ()” 함수를 사용하여 해당 컴포넌트를 Redux 저장소에 연결합니다.
“connect ()”는 전역 상태 state props 와 디스패치 메소드를 사용하여 설정되어 컴포넌트의 전역 state 를 변경합니다.

```js
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps);
```

## React-Redux 용 Hooks :

Redux Hook API는 higher-order-component, “connect ()” , “useSelector” 및 “useDispatch” 를 대신할 수 있습니다.
현재 React-Redux는 3 가지 Hooks 를 제공합니다.

1. useSelector () : useSelector Hooks 는 mapStateToProps를 대체합니다. 함수 컴포넌트가 렌더링 될 때마다 실행됩니다. 그 목적은 Redux 저장소 상태에서 데이터를 추출하는 것입니다.

2. useDispatch () : mapDispatchToProps를 대체합니다. 디스패치 오브젝트에 대한 참조로 리턴합니다.

3. useStore () : <provider>에 래핑 된 Redux 저장소의 참조를 반환합니다. 자주 사용하는 것은 좋지 않지만 리듀서 교체와 같은 시나리오에서 사용할 수 있습니다.

샘플 애플리케이션은 이러한 개념을 더 잘 이해하는 데 도움이됩니다.

## 리액트 - 리덕스 훅스를 사용한 예제 :

이 글에서 우리는 React-redux Hooks 에 “useSelector” 와 “useDispatch” 를 이용해서 작은 리액트 앱을 만들어 볼 것입니다.

### 설치

리덕스는 npm 패키지로 설치가 가능합니다.

`npm install --save redux`

다음으로 my-app 폴더에 React 응용 프로그램을 만들고 npm 패키지 관리자를 사용하여 React 응용 프로그램을 만듭니다.
npm@5.2.0 이상 버전에서 제공되는 npx 패키지를 사용할 수도 있습니다.

`npx create-react-app my-appfolder`

npx 가 없다면 npm 으로 만들어도 괜찮습니다.

`npm init create-react-app my-app`

### 폴더 구조

my-app 폴더는 아래 주어진 구조에 따라 생성됩니다. 이 폴더에서 프로젝트를 초기화하고 패키지 종속성을 설치할 수 있습니다.

![folder](https://miro.medium.com/max/214/1*PnC7SJBEt-4JTtNkOketFA.png)

이제 디렉토리를 "my-app" 으로 변경합니다.

`cd my-app`

다음으로 React 와 Redux-React 라이브러리를 설치합니다.

`npm i redux react-redux`

이제 파일을 열고 vehicle.js 를 src 폴더 안에 생성합니다.

```js
import React from "react";

function reducer(state = { vehicle: "" }, action) {
  switch (action.type) {
    case "Car":
      return {
        vehicle: "It is a Car"
      };
    case "Bike":
      return {
        vehicle: "It is a Bike"
      };
    default:
      return "No";
  }
}

export default reducer;
```

위 코드에는 "Car"와 "Bike"라는 두 가지 유형의 동작이 있는 "reducer ()"가 있습니다.
이 함수는 이러한 동작에 대해 설정된 적절한 값을 반환합니다.
다음으로 index.js 파일을 열고 아래에 주어진 코드를 추가하십시오.

```js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./vehicle.js";
import App from "./app";

const vehicle = createStore(reducer);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={vehicle}>
    <App />
  </Provider>,
  rootElement
);
```

이제 Redux 설정이 완료되었으므로 React Hooks 를 사용하여 함수형 컴포넌트에서 vehicles 에 액세스합니다.
App.js 파일에서 이제 useSelector 및 useDispatch 의 Hooks 를 추가합니다.
useSelector Hooks 는 연결의 mapStatetoprops와 유사하게 작동합니다. 이를 통해 전체 Redux 스토어 state 에 액세스 할 수 있습니다. 또한 Redux 저장소 상태를 구독합니다.
사용하기 전에“React-Redux”라이브러리에서“useSelector”를 가져와야 합니다.
이 useSelector ()는 상태를 인수로 사용하여 Redux 저장소 state 를 반환합니다.

```js
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch({
            type: "Car"
          })
        }
      >
        Car
      </button>{" "}
      &nbsp;&nbsp;&nbsp;
      <h1>{counter.vehicle}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "Bike"
          })
        }
      >
        Bike
      </button>
    </div>
  );
}

export default App;
```

useDispatch는 액션을 디스패치 하는데도 사용되므로“mapDispatchToProps”와 유사하게 작동합니다.
버튼을 클릭하면 적절한 조치가 전달됩니다.
개발 모드에서이 앱을 실행하면
http://localhost:3000 이 열리고 브라우저에서 볼 수 있습니다.

### 결과:

아래의 샘플 애플리케이션 결과를 볼 수 있습니다. 버튼을 클릭하면 발송 된 작업의 결과가 표시됩니다.

![result](https://miro.medium.com/max/363/0*YznC50nvULWRyZl_)

## Redux Hooks 에 대한 기존 애플리케이션 리팩토링 :

기존 Redux 애플리케이션에서 React-Redux Hooks 를 사용하려는 경우 다음 수정 사항을 고려해야합니다.

### 해당 컴포넌트의 액션을 구독 :

이제 컴포넌트가 해당 액션을 전달하도록 할 수 있습니다.
예를 들어 MenuItemToggleComponent는 toggleItem 작업을 전달하고 ButtonComponent는 saveItem 및 deleteItem 작업을 전달합니다.

### 통합 Hooks

"connect ()"를 Hooks "useSelector ()"및 "useDispatch ()"로 교체합니다.
계층 구조의 모든 컴포넌트를 store 에 연결할 필요는 없습니다.

Hooks 와 통합 :

1. state 를 관리하는 것이 더 쉽습니다.
2. 코드를 단순화하고 더 읽기 쉽습니다.
3. 상태를 유지하고 공유하기가 더 쉽습니다.
4. 계층 구조에 필요한 추가적인 컴포넌트가 줄어 듭니다.

## 결론

React는 함수형 컴포넌트를 작성하는 기능으로 유명합니다.
React-Redux 릴리스에서는 Hook API를 사용하여 higher-order-component 를 사용하지 않고 상태를 관리 할 수 ​​있습니다.
따라서 더 이상 컴포넌트 트리에 컴포넌트를 추가할 필요가 없습니다.
다음 샘플 애플리케이션은 Redux Hooks, useSelector 및 useDispatch를 사용하여 상위 주문 컴포넌트 인 "connect ()"의 사용을 완전히 대체했습니다.
