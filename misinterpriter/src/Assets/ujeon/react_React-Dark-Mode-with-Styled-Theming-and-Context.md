# Styled Theming 과 Context 로 리액트 어두운 모드 만들기

*본 기사는 [Ross Bulat](https://medium.com/@rossbulat?source=post_page-----57557de6400----------------------) 의 [React Dark Mode with Styled Theming and Context](https://medium.com/@rossbulat/react-dark-mode-with-styled-theming-and-context-57557de6400) 을 번역한 기사입니다.*

![](https://miro.medium.com/max/1200/1*3V-dbBJM3lOu3li6JRfphQ.jpeg)

### 리액트 앱에 어두운 모드 가져오기

어두운 모드는 웹과 네이티브 모두에서 일반적으로 지원하는 기능이 되어가고 있습니다. 리액트는 주변 생태계에서 쉽게 사용할 수 있는 프레임워크의 기능과 패키지를 활용하여 이러한 기능을 지원할 수 있는 좋은 위치에 있죠. 어두운 모드와 밝은 모드 간의 전환은 여기에서 설명하는 것처럼 우아하며 모듈화 된 방식으로 구현할 수 있습니다.

본 기사에서는 앱에 어두운 모드를 설정하는 전체 프로세스와 `light` 테마와 `dark` 테마를 전환하기 위한 방법을 설명합니다. 그리고 본 기사에서 사용한 데모는 여러분의 이해를 도울 목적으로 [깃헙에서 무료](https://github.com/rossbulat/react-theming-dark-mode)로 받으실 수 있도록 해두었습니다.

어두운 모드와 토글 함수를 구현하기 위해서는 다음 도구들이 필요합니다:

- 리액트 Context API. 테마 토글링을 관리하기 위해서 컨텍스트를 구체적으로 정의할 예정입니다. 앱 어디에서든 접근 가능하도록 말이죠.
- 특히 `useContext` hook은 컨텍스트에서 테마 `toggle()` 함수를 만드는 데 사용될 예정입니다.[`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext) hook은 컴포넌트 트리에서 제공받은 컨텍스트의 값을 가져옵니다.
- 앱이 현재 설정되어 있는 `mode` 를 유지하는 데 사용하는 `setState` hook : `light` 혹은 `dark` 
- [`styled-components`](https://www.npmjs.com/package/styled-components) 과 [`styled-theming`](https://www.npmjs.com/package/styled-theming) 패키지. Styled components를 사용하여 컴포넌트 내에 CSS 코드를 직접 작성할 수 있고, 이를 통해 앱 전반에 걸쳐 스타일을 관리할 수 있는 이점을 가지고 있습니다. 다음 패키지인 Styled Theming은 Styled Components의 ThemProvider 컨텍스트를 기반으로 하며 확장 가능한 테마를 관리하기 위한 몇 가지 유용한 도구를 제공합니다.

**Note:** *여러분이 아직 이 패키지에 대해 자세히 알지 못하신다면, 제 동료들을 위해 작성한 [introduction article](https://medium.com/@rossbulat/creating-themes-in-react-with-styled-components-6fce744b4e54)을 참고하세요.*

## 프로젝트 세팅하기

여러분의 컴퓨터에 프로젝트를 셋팅하기 위해서, [깃헙 레파지토리](https://github.com/rossbulat/react-theming-dark-mode)를 클론하거나 Creat React App 로 새로운 프로젝트를 만드세요:

```
// clone github repository
git clone https://github.com/rossbulat/react-theming-dark-mode.git
cd react-theming-dark-mode
yarn 
yarn start
// or create a project from scratch
npx create-react-app react-theming-dark-mode
cd react-theming-dark-mode
yarn
yarn add styled-components, styled-theming
yarn start
```

프로젝트가 준비되면 테마 솔루션을 탐구 할 준비가 되었습니다.

## <ThemeProvider/> 다시 불러오기

우아한 테마 솔루션은 확장 가능하고 애플리케이션 전체에서 접근할 수 있어야 합니다. 여기서 [리액트의 Context API](https://reactjs.org/docs/context.html)가 역할을 할 차례인데요,  Context API는 컴포넌트 트리 어느곳에서든 컨텍스트 값에 접근할 수 있습니다. 따라서 리액트 테마 솔루션은 *Context*에 많이 의존합니다.

`styled-components`는 실제로 `<ThemeProvider>` 형태로 [특히 테마](https://styled-components.com/docs/advanced#theming)를 위한 컨텍스트 provider를 제공합니다. 이 컴포넌트를 사용하기 위해서는 `<App>` 컴포넌트 혹은 루트 컴포넌트를 감싸기만 하면 됩니다:

```react
// giving our App theming context
import { ThemeProvider } from 'styled-components';
...
<ThemeProvider theme={{ mode: 'light' }}>
   <App />
</ThemeProvider>
```

`styled-components` 에서는 `backgroundColor` 나 `textColor` 와 같은 `theme` prop으로 속성을 전달하는 대신에, 작업 중인 테마를 정의합니다. 이 경우에는 `mode` 테마가 있지만, 제 [이전 기사](https://medium.com/@rossbulat/creating-themes-in-react-with-styled-components-6fce744b4e54)에서 자세히 설명하였듯 1차원 테마에만 국한되지 않습니다. 

이제 `<ThemeProvider>` 안의 어느 컴포넌트든지 컨텍스트의 `theme` prop에 접근할 수 있습니다. `styled-theming` 은 `theme()` 유틸리티 함수로 이를 정말 간단하게 만들어 줍니다. 이 기능을 사용하면 `mode` 에 따라 각 컴포넌트의 스타일을 정의할 수 있습니다.

다음은 컴포넌트에서 이것이 어떻게 생겼는지 보여줍니다:

```react
// SomeComponent.js
import styled from 'styled-components';
import theme from 'styled-theming';
function SomeComponent() {
  // defining theme properties based on `mode`
  const textColor = theme('mode', {
     light: 'black',
     dark: 'white'
  });
  // using those properties in our component
  const Wrapper = styled.div`
     color: ${textColor}
  `;
  return (
    <Wrapper>
        Text will be black in light mode, or white in dark mode.
    </Wrapper>
  );
}
```

`theme()` 유틸리티 뿐만 아니라,  `styled-components` 의 `withTheme()` 와 같은 고차원 컴포넌트를 사용하여 컨텍스트 값을 얻을 수 있습니다. `withTheme()` 은 컨텍스트에 정의한 값인 테마 prop을 가진 래핑된 컴포넌트를 제공합니다:

``` react
import { withTheme } from 'styled-components';
function App(props) {
   // this will output { mode: 'light' }
   console.log(props.theme);
   return (
      ...
   );
}
export default withTheme(App);
```

스타일 속성 이외에 다른 자산들은 대부분 아트워크나 텍스트 레이블과 같은 테마를 기반으로 할 수 있습니다. 예를 들어, 테마 토글 버튼은 `light` 모드에서 "어두운 모드로 전환" 및 `dark` 모드에서 "밝은 모드로 전환"을 표시할 수 있습니다. 그러므로 험수 내에서 prop으로 테마 구성을 얻는 것도 중요합니다. `withTheme()` 메서드로 정확히 이를 수행할 수 있습니다.

이제 `ThemeProvider` 에 대해 간략한 리프레쉬를 통해 이 개념을 확장하고 주제를 전환하기 위한 다른 컨텍스트를 추가하는 방법을 살펴보겠습니다. 

## 테마 컨텍스트 정의하기

`<ThemeProvider>` 은 멋집니다; `<ThemeProvider>` 는 컨텍스트에 대한 고민 없이 전체 앱에 테마 구성을 제공하는 솔루션을 제공합니다. 하지만, 여전히 `light` 에서 `dark` 으로, 그리고 그 반대로도 전환 할 수 있는 방법이 필요합니다.

### 테마 토글 기능은 컨텍스트가 필요합니다

앱의 어느 곳에서나 테마를 토글하는 기능을 구현하면 유용할 것입니다. 아마도 앱 설정, 홈 페이지 상단 또는 모달 심지어는 앱이 무엇을 할 수 있는 보여주는 자동화된 데모에도 스위치가 존재할 수 있습니다.

결론은 테마의 `toggle()` 함수는 앱 어디서든지 접근이 가능해야 한다는 것입니다. 이것이 가능하려면, 그것만을 위한 컨텍스트를 만들어야 합니다.

### 왜 <ThemeProvider/>를 사용하지 않나요?

이 시점에서 왜 `<ThemeProvider />` 라는 `theme` prop 안에 `toggle()` 함수를 포함하지 않는지 궁금하실 것입니다. 결국 이 기능은 모든 하위 컴포넌트가 `toggle()` 함수를 접근할 수 있게 만들어 주는데 말이죠.

그렇게하면 문자열이 `theme()` 유틸리티 함수로 전달 될 것으로 예상되는 `styled-theme` 규칙이 깨지게 됩니다. 또한 다른 개발자들이 테마 구성 주위에 기능을 내장하는 것도 혼란스러워 질 것입니다. 이러한 이유로 기능과 테마 구성을 별도의 컨텍스트로 유지하기로 결정했습니다.

이것이 앱에 어떤 영향을 미칠까요? `toggle()` 함수를 위한 또다른 컨텍스트를 만들면 됩니다:

```react
// wrapping ThemeProvider in another context
<ThemeToggleContext.Provider value={...}>
   ^
   new context to handle theme toggling
   
   <ThemeProvider theme={...}>
      <App />
   </ThemeProvider>
</ThemeToggleContext.Provider>
```

이제 `<ThemeToggleContext />` 라는 또다른 컨텍스트를 만들었습니다. 이 컨텍스트는 `<ThemeProvider />` 를 감싸고 있습니다. 

실제로는 약간 지저분 해 보입니다. — 이 두 컨텍스트를 컨텍스트 로직을 처리하는 통합된 하나의 컨텍스트로 합칠 수 있다면 훨씬 정돈되어 보일 것입니다. — 그리고 `<App />` 주위에 해당 컴포넌트를 감싸고 있습니다. 이것이 바로 저희가 해야 할 일입니다.

구체적으로, *이 두 컨텍스트를 다른 컴포넌트에 결합하고, **그** 컴포넌트를 `<App />` 주위에 래핑할 수 있습니다.*

이는 코드 가독성을 높여주고, 컨텍스트를 수정하거나 확장 할 때 다루기 쉽게 만들어 줍니다. `ThemeContext.js` 라는 새 파일을 만들고 테마 구성 및 테마 전환 기능에 대한 컨텍스트를 처리하는 `MyThemeProvider` 컴포넌트를 내보냅니다. 

***Note:*** *[깃헙](https://github.com/rossbulat/react-theming-dark-mode/blob/master/src/ThemeContext.js)에서 `ThemeContext.js`를 살펴볼 수 있습니다.*

### 글로벌 스타일 속성 정의하기

`ThemeContext.js` 를 구현하기 전에, `light` 나 `dark` 라는 `mode` 에 기초하여 어떤 글로벌 스타일 속성을 정의합니다. 별도의 파일로 이 작업을 하는 것이 좋습니다.

저는 이 작업을 위해 `theme.js` 파일을 만들었습니다:

```react
// src/theme.js
import theme from 'styled-theming';
export const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222'
});
export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});
```

이제 테마 컨텍스트에 있는 모든 구성 요소로 가져올 수 있는 `backgroundColor` 와 `textColor` 이라는 두 가지 속성이 있으며, 테마 값에 따라 올바른 색상이 제공됩니다.

앱에 적합한 방식으로 이 파일을 확장하시면 됩니다.

## ThemeContext.js 구현하기

테마 컨텍스트를 쉽게 복제할 수 있는 과정을 살펴보겠습니다. 최종 목표는 다음과 같습니다:

- `toggle()` 함수를 저장하는 `ThemeToggleContext` 정의하기
- 내보낼 수 있는 `useContext` 객체를 정의합니다. 이 객체를 가져오는 것만으로도 다른 컴포넌트에서 `ThemeToggleContext` 값을 얻을 수 있습니다. 

***Note:*** *`useContext` 는 컨텍스트의 값을 얻을 수 있는 리액트 내장 hook 입니다. `useContext`는 다음과 같은 구문으로 사용합니다:* 

```react
const contextValue = () => React.useContext(MyContext);
```

*저희는 본질적으로 이 hook를 `ThemeToggleContext` 에 사용하게 될 것이며, 컨텍스트 값, 즉 `toggle()` 함수를 얻기 위한 빠른 수단으로 어떤 컴포넌트 내에서든 사용할 수 있게 될 것입니다.*

- `<App />` 을 감싸는 두 컨텍스트를 모두 포함 할 수 있는 내보낼 수 있는 컴포넌트인 `MyThemeProvider` 를 정의합니다.

## 토글 컨텍스트 정의하기

그 즉시, 필요한 컴포넌트를 `ThemeContext.js` 로 가져오고, `toggle()` 에 대한 두 번째 컨텍스트를 정의할 수 있습니다. 이 컨텍스트는 `ThemeToggleContext` 로 정의됩니다:

```react
// ThemeContext.js
import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { backgroundColor, textColor } from './theme';

// define our toggle context, with a default empty toggle function
const ThemeToggleContext = React.createContext({
  toggle: () => {}
});
// define exportable useContext hook object
export const useTheme = 
   () => React.useContext(ThemeToggleContext);

// define MyThemeProvider
export const MyThemeProvider = ({ children }) => {
   ...
}
```

`MyThemeProvider` 구현에 알아보기 전에, 여기에 정의된 것을 살펴보세요.

`ThemeToggleContext` 가 정의되어 있습니다. — 테마 관리 함수를 처리하는 컨텍스트 객체입니다. 빈 `toggle()` 함수의 기본 값이 주어졌습니다.

### 기본 컨텍스트 값에 대한 참고 사항

`toggle()` 함수를 기본값으로 정의하지 않은 것이 문제가 되나요? 아닙니다 — 왜냐하면 `ThemeToggleContext` 는 컴포넌트 트리에서 최상위에 있기 때문입니다. 그러므로 기본값이 필요한 상위 컴포넌트가 없습니다. 

[리액트 문서](https://reactjs.org/docs/context.html#reactcreatecontext)는 기본값 동작을 한 문장으로 요약합니다: *`defaultValue`  인수는 컴포넌트 트리에서 일치하는 [context] 공급자가 없는 경우에만 사용됩니다.*

게다가, 저희는 이 기본값을 사용할 계획이 없습니다. 이 기능은 시그니처 함수와 더 유사하게 취급될 수 있으므로, 개발자는 이 컨텍스트가 무엇으로 구성되어야 하는지를 이해합니다.

또는, `React.createContext();` 로 정의되어 비워 둘 수 있습니다. 컨텍스트 값은 실제로 `myThemeProvider` 의  JSX에 정의되며, 다음에 살펴볼 내용입니다.

### useContext 객체 내보내기

`ThemeContext.js`의 두번째 정의는 `useTheme` 입니다. `useTheme`은 `useContext` hook 이며, 주어진 컨텍스트의 값을 얻기 위해 모든 컴포넌트로 가져올 수 있습니다.

이제, 컨텍스트 제공자로 감싸진 모든 컴포넌트 내에서, `useTheme` 를 가져와서 컨텍스트 값을 가져올 수 있습니다:

```react
// DeepNestedComponent.js

import { useTheme } from './ThemeContext';

function DeepNestedComponent () {
  
   // get the context value
   const themeToggle = useTheme();
  
   // we now have access to toggle()
   return (
     <a onClick={() => themeToggle.toggle()}>
        Toggle Mode!
     </a>
   );
}
```

그러나 `useTheme `이 작동하려면, `MyThemeProvider` 컴포넌트를 구현해야 합니다.

### MyThemeProvider의 두 컨텍스트 결합하기

앞서 언급한 것처럼, `MyThemeProvider`는 전체 테마 솔루션을 작동하기 위해서 두 컨텍스트를 결합할 필요가 있습니다. 이뿐만 아니라,  `Wrapper` styled component를 통한 초기 페이지 스타일링도 포함될 수 있습니다.

구현은 다음과 같습니다:

```react
// ThemeContext.js
...
export const MyThemeProvider = ({ children }) => {
   // Wrapper providing some page styling based on theme
   const Wrapper = styled.div`
      background-color: ${backgroundColor};
      color: ${textColor};
   `;
   // define toggle function
   const toggle = () => {
      console.log('toggle coming next');
   };
   // render both contexts, then Wrapper, then children
   return (
      <ThemeToggleContext.Provider
        value={{ toggle: toggle }}
      >
        <ThemeProvider
          theme={{
            mode: 'light'
          }}
        >
           <Wrapper>
             {children}
           </Wrapper>
        </ThemeProvider>
      </ThemeToggleContext.Provider>
   );
};
export default ThemeProvider;
```

이제 함수의 주요부분은 개발이되었습니다. 그러나, 여전히 `toggle()` 함수 구현이 누락되어 있고, `<ThemeProvider>` `mode` 가 여전히 `light`로 하드코딩 되어 업데이트가 되지 않습니다.

이 병목 현상을 해소하기 위한 마지막 퍼즐은 **state** 입니다.

### 테마 모드를 관리하기 위한 state 도입

State는 실제 테마 `mode`(`light` 혹은 `dark`)를 관리하기 위해 도입되었습니다.  `mode` 에서는 값이 변경될 때 다시 렌더링 됩니다. [`useState`](https://reactjs.org/docs/hooks-state.html) hook 이 이 작업에 사용될 수 있습니다.

이 hook은 기본 `light` `mode` 로 `toggle()` 위에 추가될 수 있습니다. 게다가, `toggle()` 을 오나전히 구현할 수 있습니다:

```react
...
// default mode is set to `light`
const [themeState, setThemeState] = React.useState({
   mode: 'light'
});
// toggle() now switches `mode` between light and dark, and updates themeState
const toggle = () => {
    const mode = (themeState.mode === 'light' 
                   ? `dark` 
                   : `light`);
    
   setThemeState({ mode: mode });
};
```



이제 `<ThemeProvider />` 값을 다음과 같이 `themeState` 값이 설정된 값으로 대체할 수 있습니다:

```
...
 <ThemeProvider
   theme={{
     mode: themeState.mode
   }}
   >
      ...
   </ThemeProvider>
...
```



`toggle()` 을 통해 `themeState` 를 업데이트하면 `<ThemeProvider />` 가 업데이트 되고, 앱 전체를 해당 테마로 변경합니다.

마지막으로, `index.js` 안에서 `MyThemeProvider` 를 가져와서 `<App />`를 감쌀 수 있습니다:

```react
// wrapping both contexts from one component, in index.js
...
import { MyThemeProvider } from "./ThemeContext";
ReactDOM.render(
  <MyThemeProvider>
    <App />
  </MyThemeProvider>
,document.getElementById('root'));
```

이제 테마 설정을 마치겠습니다! 이제 컨텍스트가 연결되고 state가 `<ThemeProvider />`의 업데이트를 담당합니다.

## onClick 으로 toggle() 호출하기

이 강의 마지막 세션은 `<App />` 내부의 버튼 클릭으로 `toggle()` 을 호출하는 것 입니다.

`styled-theming`을 더 많이 확장하여 보여주기 위해 버튼 스타일링을 위한 두 가지 속성을 `theme.js` 에 정의하였습니다. `light` 모드에서는 버튼이 흰색 텍스트 및 흰색 배경과 대비되도록 어두운 회색이 됩니다. `dark` 모드에서는 버튼이 매우 밝은 회색이며 검은색 텍스트입니다: 

```react
// theme.js
...
export const buttonBackgroundColor = theme('mode', {
  light: '#222',
  dark: '#eee'
});
export const buttonTextColor = theme('mode', {
  light: 'white',
  dark: 'black'
});
```

이제 `App.js` 내에서 테마를 토글하는 버튼을 정의할 수 있습니다:

```react
...
import { useTheme } from './ThemeContext';
import styled, { withTheme } from 'styled-components';
import { buttonBackgroundColor, buttonTextColor } from './theme';

function App (props) {
   // get toggle context with `useTheme`
   const themeToggle = useTheme();

   // style a button with theme properties
   const Button = styled.button`
     background: ${buttonBackgroundColor};
     color: ${buttonTextColor};
     /* rest of properties snipped */
  `;

   // `Button` onClick calls themeState.toggle()
   return (
    <header className="App-header">
      <img 
        src={logo} 
        className="App-logo" 
        alt="logo" 
      />
     <p>
        <Button 
          onClick={() => themeState.toggle()}
         >
          { props.theme.mode === 'dark' 
            ? "Switch to Light Mode" 
            : "Switch to Dark Mode"
          }
        </Button>
      </p>
    </header>
  );
}
export default withTheme(App);
```

여기서 `styled-components` 가 제공하는 `withTheme()` HOC도 테마 prop을 얻기 위해서 활용되고 있습니다. 그런 다음 현재 테마 `mode`에 따라 버튼 텍스트를 표시하는 데 사용됩니다.

이 버튼(혹은 여러 버튼)은 앱의 어느 곳에나 내장 할 수 있습니다. 컨텍스트 제공자로부터 `toggle()` 함수를 가져오기 위해서 `useTheme`을 가져오기만 하면 됩니다.

## 요약

최종 결과는 다음과 비슷합니다:

![](https://miro.medium.com/max/582/1*6kv8-gEN3bLck0KWrZ_BkQ.gif) 

이 강의에서는 앱에 대한 다중 컨텍스트 설정과 컨텍스트를 통해 앱을 조작하는 방법을 안내하였습니다. 요약하자면 다음과 같습니다:

- 앱에 `dark` 와 `light` 모드를 사용하도록 `styled-components`와 `styled-theming` 을 수정하였습니다.
- `useState` 및 `useContext` hooks 는  테마 `mode` 를 유지하고 토글 컨텍스트 값을 각각 가져오는 데 사용되었습니다.
- 글로벌 테마 속성은 별도의 파일로 정의되어 다른 컴포넌트로 가져올 수 있습니다.
- `withTheme`과 `useContext` hooks 는 테마 관리 함수를 가져오기 위해 모든 컴포넌트에 불러올 수 있습니다.

### 추가 과제: localStorage

추가 과제로, 페이지 리프레쉬에도 테마 변경 사항을 유지할 수 있게 `localStorage`를 통합해보세요. `localStorage`는 데이터를 무기한으로 캐시하며, 이 데이터는 사용자가 웹 사이트 데이터를 삭제하거나, `localStorage` 의 항목을 프로그래밍 방식으로 제거하는 경우에만 삭제됩니다. `localStorage` 항목은 세션 데이터와는 다르게 시간 제한이 없으므로, 보안 문제로 인해 자주 변경되거나 만료될 필요가 없는 테마 모드와 같은 데이터를 저장하는 것이 좋습니다.

`localStorage` 가 작동하도록 다음 방법을 통합하세요:

- `localStorage.getItem('mode')`: 현재 테마 `mode`를 얻습니다.
- `localStorage.setItem('mode', value)`: 테마 `mode` 를 유지합니다.
- `localStorage.removeItem('mode')`: 로컬 스토리지에서 `mode`를 제거합니다.

다시 한 번 말씀드리면, 이 강의의 코드는 [이곳](https://github.com/rossbulat/react-theming-dark-mode)에서 이용가능합니다.

### 타입스크립트 구현 또한 가능합니다

또한 [깃헙](https://github.com/rossbulat/ts-react-theming-dark-mode)에 타입스크립트 구현을 업로드하였고, [유튜브](https://www.youtube.com/watch?v=QdUEeUCQRyA&feature=youtu.be)에 짧은 해설 비디오를 업로드 하였습니다. 

