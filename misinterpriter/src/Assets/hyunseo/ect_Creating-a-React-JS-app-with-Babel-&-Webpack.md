# Babel & Webpack으로 React JS 앱 만들기

- **본기사는 [Creating a React JS app with Babel & Webpack](https://medium.com/@dv19196/creating-a-react-js-app-with-babel-webpack-9837033c1e56) 을 번역한 기사입니다.**

출저 : https://medium.com/@dv19196/creating-a-react-js-app-with-babel-webpack-9837033c1e56

![think](https://miro.medium.com/max/1348/1*k20Fiptf3w16BAhNZK72Mw.png)

## 소개

이 장에서는 React를 사용하여 간단한 웹 페이지를 만들고 Babel 과 Webpack을 사용하여 환경을 설정합니다.

### 리액트

React는 사용자 인터페이스를 구축하기위한 JavaScript 라이브러리입니다.
Facebook에서 유지,관리합니다. 우리는 웹 사이트에 React Js를 사용할 것입니다.

> React는 "SPA (Single Page Application)"를 만듭니다.
> 콘텐츠를 동적으로 변경하는 하나의 html 페이지가 있습니다.

### 웹팩

정적 모듈 번들러입니다. React Code를 처리하여 단일 JavaScript로 묶습니다.

### 바벨

Babel은 JavaScript 컴파일러 및 트랜스 필러입니다. ES6 기능을 일반 ES5로 변환합니다.
또한 React JSX를 JS로 변환합니다.

## 설치

1. 웹 프로젝트의 디렉토리를 작성하십시오.
2. 디렉토리 내에서 cmd에서 다음 명령을 실행하십시오.

`npm init`

이 명령어는 패키지 이름, 작성자, 설명 등과 같은 일부 정보를 요청합니다.
그런 다음 package.json 파일을 만듭니다.

```js
{
   "name": "react-app",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
   "author": "Dharmendra",
   "license": "ISC"
}
```

### React 와 React DOM 설치

`npm install --save react react-dom`

### Webpack 설치

`npm install webpack webpack-cli webpack-dev-server --save-dev`

1. webpack-cli는 webpack 실행 및 설정을위한 일련의 명령을 제공합니다
2. Webpack-dev-server는 응용 프로그램을 빠르게 개발하는 데 사용됩니다.
   예 : 라이브 리로딩, cors 구성, 포트 구성

### babel 설치

1. @ babel / core는 core 종속성 부분입니다
2. @ babel / preset-react는 JSXcode에 반응하도록 지원을 추가합니다.
3. @ babel / preset-env는 Javascript ES6 지원을 추가합니다
4. babel-loader는 Babel과 webpack을 사용하여 JS의 리액트 코드를 변환합니다.

### CSS Loaders

`npm install --save-dev css-loader style-loader`

1. css-loader는 모든 파일에서 CSS를 수집하여 문자열로 변환합니다.
2. style-loader는 css-loader로 출력한 문자열을 가져와 html head 아래의 style 태그에 넣습니다.

## 폴더 구조 만들기

다음과 같이 파일 및 폴더 구조를 작성해야합니다.

![폴더구조](https://miro.medium.com/max/352/1*oiuH5eFCCqWY-27dBjtrRQ.png)

**src** 폴더에는 앱의 주요 로직이 포함됩니다. **dist** 폴더에는 단일 HTML 및 번들된 파일이 포함됩니다.
**webpack.config.js** 에는 웹팩 구성이 포함되고 **.bablerc** 에는 babel 구성이 포함됩니다.

## 웹팩 구성

```js
//webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  devServer: {
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dist/index.html"
    })
  ]
};
```

1. "entry ": 읽어질 디렉토리 위치이며 webpack은 여기에서 번들링을 시작합니다.
2. “ output ”: 번들링되는 파일은 “/dist/bundle.js”에 있습니다.
3. “ devServer ”: weback-dev-server 구성을 정의합니다. dev-server의 기본 포트는 8080입니다.

### 모듈 규칙

**— 다음은 트랜스 파일 규칙입니다.**

a) " test " : 로더를 통과할 파일을 알려주는 정규식.
b) “ exclude ”: 로더가 무시해야하는 파일.
c) “ loader ” : 우리가 사용하고있는 로더의 이름.

## babel 구성

```rc
{
    "presets":["@babel/preset-env", "@babel/preset-react"]
}
```

## package.json

2개의 script 명령어를 추가합니다.

```json
"start": "webpack-dev-server --mode development --open --hot",
"build": "webpack --mode production"
```

이제 package.json 파일은 이런 모습일 것입니다!

```json
{
  "name": "react-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Dharmendra",
  "license": "ISC",
  "dependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  },
  "devDependencies": {
    "@babel/core": "^7.7.4",
    "@babel/preset-env": "^7.7.4",
    "@babel/preset-react": "^7.7.4",
    "babel-loader": "^8.0.6",
    "css-loader": "^3.2.0",
    "html-webpack-plugin": "^3.2.0",
    "path": "^0.12.7",
    "style-loader": "^1.0.1",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0"
  }
}
```

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React Web</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

> 여기서 " bundle.js "는 리액트 코드이고 < div id = "root"/> 는 리액트 컴포넌트가 렌더링 될 루트 요소입니다.

## React 코드

마지막으로 React 코딩을 시작할 시점에 도달했습니다.

**main.js**

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
ReactDOM.render(<App />, document.getElementById("root"));
```

> 우리가 사용하는 document.getElementById(‘root’) 는 index.html 에 div 를 말합니다.

**App.js**

```js
import React, { Component } from "react";
import "./index.css";
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello!!</h1>
        <h2>Welcome to your First React App..!</h2>
      </div>
    );
  }
}
export default App;
```

## App 실행하기

이제 우리는 다 했습니다! 궁금합니다!

> 다음 명령을 실행하여 앱을 실행하십시오.

`npm start`

> 웹 사이트는 (“http://localhost:8080/”)[http://localhost:8080/] 에서 열립니다

!(site)[https://miro.medium.com/max/1012/1*82cQG1BtVZuiJArKyGm28w.png]

## 번들 생성

번들을 생성하려면 다음 명령을 실행하십시오.

`npm run build`
