# Create React App V2 에서 Sass 사용

최근 업데이트 된 [Create React App](https://scotch.io/tutorials/whats-new-in-create-react-app-2) 이 공개가 되고, 우리는 많은 새로운도구를 가지고 있다. [Sass](https://sass-lang.com/) 는 폴더 구조에서 .scss 파일을 컴파일 하고 .css 파일에 작성해야 했기 때문에 내장되어 있는것은 나를 기쁘게 한다. **동일한 스차일의 stlye.css 와 style.scss 가 있는 것은 어지러운 파일이 된다.**

###Create React App 2 를 생성하면 Sass를 1줄로 사용할 수 있다.

React에서 Sass 사용을 우려할 수 있다. styled-components 또는 aphrodite와 같은 CSS-in-JS 라이브러리로 스타일을 작성하는 것이 더 똑똑하지 않습니까? 나는 Create React App 에 Sass를 지원 하는 것이 React 초심자가 더 많은 도움을 받을 것이라고 믿는다. React에서 Sass를 사용하는 방법은 React를 시작하는 사람들로부터 항상 듣는 질문 중 하나이다. [React 16.6 additions](https://scotch.io/bar-talk/whats-new-in-react-166) 에서 추가된 [React.memo()](https://scotch.io/tutorials/react-166-reactmemo-for-functional-components-rendering-control) 와 React 16.7 의 [hooks](https://scotch.io/tutorials/getting-started-with-react-hooks) 와 같은 기능 추가를 통해서 React로 시작는 것이 어느 때 보다 쉬워질 것이다.

## Quick Start
React 앱 생성에서 Sass를 사용하는 단계는 다음과 같다:

1. [node-sass](https://www.npmjs.com/package/node-sass)를 설치: ``` npm install node-sass ```
2. ``` .css``` 을 ``` .scss``` 파일로 변경
3. ``` .scss``` 를 사용하기 위해 import 변경

``` npm install node-sass -S```

파일이름을 ``` .css``` 에서 ```.scss``` 로 변경하면 Sass를 가져올 수 있다:

``` javascript
    //replace
    import "./style.css";

    //with
    import "./styles/scss";
```

끝! React 앱 만들기는 .scss 파일을 구문 분석하고 스타일을 프로젝트에 추가하는 것으로 알고 있다.

## Sass 변수 사용 및 공유
파일간에 변수를 어떻게 공유합니까? 다른 Sass 파일에서 Sass 파일을 가져올 수 있다. 변수 파일을 생성한다고 가정 해 보자:

### varialbes.scss
``` css
  $promaryColor: #BADA55;
```

우리는 Sass에서 일반적으로하는 것 처럼 다른 파일 안에 이것을 가져올 수 있다:

### styles.scss
```javascript 
// src/ 폴더에서 가져 오기
  @import "variables.scss";


  // 이제 $ primaryColor 변수를 사용할 수 있습니다
  h1, h2 {
    color: $primaryColor;
  }
```
![code](https://scotch-res.cloudinary.com/image/upload/dpr_2,w_800,q_auto:good,f_auto/v1541437135/gs3gvh1flym0m1yb9rxm.png)

## 3rd Party Packages의 Sass 파일
만약 우리가 [Bulma](https://bulma.io/) 또는 [Bootstrap](https://getbootstrap.com/) ([Bulma 는 내가 제일 선호한다.](https://scotch.io/bar-talk/get-to-know-bulma-my-current-favorite-css-framework))3rd party 라이브러리들은 사용하길 원한다면 우리는 더이상 CSS 라이브러리 전체를 import할 필요가 없다. 

React에서 Sass로 우리는 우리가 필요한 파일만 가져올 수 있다. 먼저 우리는 Bulma를 설치 해야한다.
``` javascript 
  npm install bulma -S
```

우리가  ```sass.```폴더 에서 [Bulma's GitHub](https://github.com/jgthms/bulma)을 보면 우리는 그들이 .sass 파일을 어디에 두었는지 볼 수 있다. 이들이 .sass를 사용하고 있으며 .scss 변형을 사용하고 있다. 아무런 문제가 없다. node-sass는 전부 ```@import```해서 읽을 수 있다. 

### Import files from node_modules using ~

```~```는 웹팩과 React Ceate App 이 ```node_modules/``` 폴더에서 필요한 파일을 찾도록 알려준다. 앱에 필요한 몇 가지 파일을 앱에 추가해 보겠다.

### styles.scss

```javascript 
 // import using~
 @import "~bulma/sass/utilities/_all.sass";
 @import "~bulma/sass/_all.sass";
 @import "~bulma/sass/elements/button.sass";
 @import "~bulma/sass/layout/section.sass";
```

지금 우리는 Bulmas's의 [button](https://bulma.io/documentation/elements/button/)과 [section](https://bulma.io/documentation/layout/section/)을 사용할 수 있다.

### App.js

``` javascript 
  function App() {
    return (
      <div className="App section">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>

        <button className="button is-danger is-outlined">
          Hello
        </button>
      </div>
    );
  }
```

![web](https://scotch-res.cloudinary.com/image/upload/dpr_2,w_700,q_auto:good,f_auto/v1541437120/qikmryvs0h16wsbdrsns.png)

### 이 방법을 사용하면 필요한 것을 가져 오기만하면 CSS 번들 크기를 가능한 작게 유지할 수 있습니다.

## 결론 및 Demo

React에서 Sass를 사용하면앱에서 스타일을 빠르게 얻을 수 있다. 또한 컴포넌트 기반 React 앱에서 더 많은 모듈 식 CSS를 만들 수 있도록 CSS-in-JS 솔루션을 살펴 보는것이 좋다.

### 이 글은 Chris on Code의 Sass in Create React App V2 글을 번역 하였습니다. 
출처: <https://scotch.io/tutorials/using-sass-in-create-react-app-v2#toc-conclusion-and-demo>