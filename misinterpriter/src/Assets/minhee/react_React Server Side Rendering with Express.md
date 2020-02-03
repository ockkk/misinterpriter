# Express를 사용하여 리액트 서버사이드 랜더링 하기

![img](https://miro.medium.com/max/10912/0*tCavbkqznJaoRm23)

리액트 서버 사이드 랜더링(이하 SSR)을 통해, Express.js와 같은 서버를 사용하여 리액트 페이지를 랜더 할 수 있다. 리액트 SSR은 SEO 친화성, 빠른 초기 페이지 로딩 등의 강점을 갖고 있다. 리액트에서도 [리액트 돔 서버](https://reactjs.org/docs/react-dom-server.html)에 대한 훌륭한 문서를 제공하고 있다.



## 준비물

- 코드 에디터 - 필자는 Visual Studio Code를 사용했다.
- 리액트
- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://www.npmjs.com/package/express)
- [ES6](https://www.w3schools.com/js/js_es6.asp)

이번 글에 등장하는 명령어는 주로 터미널 기반이나, 윈도우의 명령 프롬프트 또한 포함하고자 했다.



## 

## 처음부터 다시 시작하기

우리는 리액트 앱을 맨 처음부터 만들 것이다. 이를 통해 우리의 리액트 앱을 커스텀하기에 더욱 용이하게 할 수 있기 때문이다. 이미 리액트 앱을 빠르게 만들기 위한 훌륭한 도구는 페이스북에서 제공하고 있다. [더 보기.](https://github.com/facebook/create-react-app)

> 이 글에서는 [NPM](https://www.npmjs.com/)을 사용하고 있지만, [Yarn](https://yarnpkg.com/)을 더 선호한다면 사용해도 무방하다. Gant Laborde의 [NPM vs Yarn 치트 시트](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc)도 참고해 보길 바란다.

디렉토리를 생성하여, 다음 명령어를 실행하라.

```bash
npm init
```

서버를 구축하기 위해 이 글에서는 Express.js를 사용할 것이다. 따라서 우리 앱의 모듈에 express를 추가하자.

```bash
npm install express
```

우리는 ES6를 사용할 계획이므로, 우리 코드를 트랜스파일 하기 위해서는 [Babel](https://babeljs.io/)이 필요하다. 이 의존성은 개발 시에만 사용된다.

```bash
npm install --save-dev @babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime @babel/polyfill @babel/preset-env
```

그 외에도 다음과 같은 의존성들이 필요하다.

- [@babel/cli ](https://babeljs.io/docs/en/babel-cli)— 커멘드라인에서 컴파일 할 수 있게 도와줌
- [@babel/core](https://babeljs.io/docs/en/next/babel-core.html) — 코어 런타임
- [@babel/node](https://babeljs.io/docs/en/next/babel-core.html) — node 대신 babel을 사용할 수 있게 함
- [@babel/plugin-proposal-class-properties ](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)— 클래스 트랜스파일
- [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime) — babel이 요구하는 파일들의 복제를 막음
- [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill) — 프로미스 사용 시 필요
- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) — 변형을 관리할 필요 없이 최신 자바스크립트를 사용할 수 있게 함



### Server.js

루트 디렉토리의 하위에 'src'라는 이름의 디렉토리를 만들고, 새 파일을 만들어 'server.js'라고 이름을 변경한다.

```bash
mkdir src
touch ./src/server.js #for terminal
echo $null >> /src/server.js #for windows
```



```js
import express from 'express';
import compression from 'compression';
import ssr from "./routes/ssr";
const app = express();

app.use(compression());
app.use(express.static("public"));

app.use("/firstssr", ssr);

const port = process.env.PORT || 3030;

app.listen(port, function listenHandler(){
  console.info(`Running on ${port}...`);
})
```

위의 코드는 기본적인 Express.js 코드다. Express의 [Compression](https://github.com/expressjs/compression) 미들웨어는 정적인 컨텐츠를 압축적으로 제공할 수 있도록 한다. `npm install compression`을 실행하여, 패키지에 설치하도록 하자.



> *app.use(express.static('public')); public 폴더를 통해 정적 컨텐츠를 제공하고 있다는 사실을 Express.js에 알리는 역할*



쉬운 유지 보수를 위해 리액트 SSR 앱이 커질수록, 라우트를 조직화하여 관리해야 한다. 여기서는 ssr을 만들 것이라는 사실을 참조하는 라우트 "/firstssr"을 만들 것이다.



### Routes

"src" 하위에 routes라는 이름의 디렉토리를 만들자.

```bash
mkdir ./src/routes #for terminal
mkdir /src/routes #for windows
```

다음으로, ssr.js라는 이름의 새 파일을 만든다.

```bash
touch ./src/routes/ssr.js
```

앞으로 튜토리얼이 진행되는 동안, SSR과 관련한 로직은 이 파일에 추가할 것이다. 일단은 간단한 내용만 입력한다.

```js
import express from "express";
const router = express.Router();
router.get("/", async (req, res)=>{
  res.status(201).send("Hello World");
})

export default router;
```

위의 코드는 http://localhost:3030/firstssr를 볼 수 있고, "Hello World"라는 텍스트를 반환하는 단순한 역할을 수행한다.



### 앱 작동시키기

처음으로 앱을 작동해 볼 단계다. 그 전에 package.json에 스크립트를 몇 가지 추가해야 한다. 다음을 "scripts"에 추가하라.

```json
"dev": "nodemon --exec babel-node src/server.js"
```

나는 nodemon을 사용했다. 만약 nodemon이 없다면, `npm install -g nodemon`을 입력하여 전역에 설치해도 좋다.

이제 `npm run dev` 를 통해 우리의 애플리케이션을 실행할 수 있다. 

잠깐, 에러가 발생했다.



![img](https://miro.medium.com/max/2134/1*euhh_9J4HD5SZqp5XE-RWw.png)



위와 같은 에러가 발생한 이유는 babel이 import를 인식하지 못하는 탓으로, babel 설정을 깜빡했기 때문이다. [babel configuration file](https://babeljs.io/docs/en/configuration)을 추가해야 한다. 이를 해결하기 위해서는 루트 디렉토리에 .babelrc라는 이름의 파일을 만들고, 다음과 같은 내용을 입력해야 한다.



```json
{
"presets": [["@babel/preset-env", { "targets": { "node": "current" } }]],
"plugins": ["@babel/plugin-proposal-class-properties"]
}
```



시작할 때, 바벨 의존성 몇 가지를 설치했다는 사실을 기억할 것이다. 그 가운데 하나가 @babel/preset-env이었는데, 해당 의존성을 현재 노드 버전에 맞출 것이다. 또한 babel이 클래스를 트랜스파일링 하도록 하는 [플러그인](https://babeljs.io/docs/en/plugins)을 추가했는데, 이 플러그인은 향후 리액트 컴포넌트를 만들 때 필요하다.

`npm run dev`를 실행해 보자. 이번에는 문제 없이 잘 작동할 것이다. 

![img](https://miro.medium.com/max/1624/1*K1g8K-3wqn1X5LPp4-E6VQ.png)

브라우저를 열어  http://localhost:3030/firstssr를 확인하면, 다음과 같은 결과를 확인할 수 있을 것이다.

![img](https://miro.medium.com/max/1592/1*GvTULJjK8ldmCvxzSn1FsQ.png)



### 리액트 페이지 만들기

우리는 이름의 길이를 계산하는 기능을 하는, 버튼이 하나 있는 간단한 리액트 페이지를 만들 것이다. 루트 폴더 또는 'src'의 하위에 'component'라는 이름의 폴더를 만들어, jsx 파일을 생성하자.

```bash
mkdir ./src/components
touch ./src/components/app.jsx
```



```jsx
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      name: "",
      msg: ""
    };
  }

  //Handlers
  handleButtonClick = e => {
    const nameLen = this.state.name.length;
    if (nameLen > 0) {
      this.setState({
        msg: `You name has ${nameLen} characters including space`
      });
    }
  };

  handleTextChange = e => {
    this.setState({ name: e.target.value });
  };

  handleReset = () => {
    this.setState({ name: "", msg: "" });
  };
  //End Handlers

  render() {
    let msg;

    if (this.state.msg !== "") {
      msg = <p>{this.state.msg}</p>;
    } else {
      msg = "";
    }
    return (
      //do something here where there is a button that will replace the text
      <div>
        <label>Your name </label>
        <input
          type="text"
          id="txtName"
          name="txtName"
          value={this.state.name}
          onChange={this.handleTextChange}
        />
        <button id="btnSubmit" onClick={this.handleButtonClick}>
          Calculate Name Length
        </button>
        <button id="btnReset" onClick={this.handleReset}>
          Reset All
        </button>
        <hr />
        {msg}
      </div>
    );
  }
}
export default App;

```





## 리액트 컴포넌트를 서버 측에서 랜더하기

여기서부터 재미있는 부분이다. 이전에 만들어 둔(src/routes/ssr.js) SSR 라우트로 돌아가자.

리액트는 DOM을 만들어, HTML에 첨부하는 역할을 한다. 우리가 할 작업 또한 마찬가지다. 먼저, 리액트의 DOM이 랜더 될 HTML 파일을 만들자.

> 여기서 HTML은 원격 서버 또는 실제 파일이다.



이미 만들어 둔 router.get를 다음 코드로 대체하자.

```js
router.get("/", async (req, res) => {
const theHtml = `
<html>
<head><title>My First SSR</title></head>
<body>
<h1>My First Server Side Render</h1>
<div id="reactele">{{{reactele}}}</div>
<script src="/app.js" charset="utf-8"></script>
<script src="/vendor.js" charset="utf-8"></script>
</body>
</html>
`;
res.send(theHtml);
});
```

위 코드를 설명하도록 하겠다.

- Handlebar를 탬플릿 엔진으로 활용하고 있다. [EJS](https://ejs.co/) 또는 [nunjucks](https://mozilla.github.io/nunjucks/)로 대체 가능하다.
- {{{reactele}}}: 변수 "reactele"에 대한 handlebar의 문법이다. 리액트에 의해 랜더된 DOM이 이것으로 대체된다. 3개의 괄호가 사용된 것은 HTML 값으로부터 빠져나가기 이ㅜ함ㅇ미다.
- script 2개: app.js는 랜더 될 주요한 리액트 자바스크립트이고, vendor.js는 리액트처럼, 우리가 사용할 vendor 스크립트다. 이 부분에 대해서는 추후 웹팩 설정과 함께 다루도록 하겠다. 

`npm run dev`를 통해 우리 앱을 실행하면, 우리가 입력한 HTML을 확인할 수 있다.



![img](https://miro.medium.com/max/2056/1*9w4fBWgXIf7UfAxtjTZGvw.png)



다음으로 우리의 React DOM을 랜더할 차례다. 이를 위해 3개의 의존성이 추가적으로 필요하다

```bash
npm install react react-dom handlebars
```



```js
import express from "express";
import App from "../components/app";
import React from "react";
import { renderToString } from "react-dom/server";
import hbs from "handlebars";

const router = express.Router();

router.get("/", async (req, res) => {
  const theHtml = `
  <html>
  <head><title>My First SSR</title></head>
  <body>
  <h1>My First Server Side Render</h1>
  <div id="reactele">{{{reactele}}}</div>
  <script src="/app.js" charset="utf-8"></script>
  <script src="/vendor.js" charset="utf-8"></script>
  </body>
  </html>
  `;

  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(<App />);
  const htmlToSend = hbsTemplate({ reactele: reactComp });
  res.send(htmlToSend);
});

export default router;

```



`const hbsTemplate= hbs.compile(theHTML);`은 핸들바 템플릿에 생성한 HTML을 컴파일한다.

`const reactComp = renderToString(<App />);`은 리액트 SSR이 작동하는 곳이다. "reactComp"를 로깅하면 여러 줄의 HTML이 생성되는 것을 확인할 수 있을 것이다. 

`const htmlToSend=hbsTemplate({reactele: reactComp});`는 랜더된 리액트 돔을 핸들바 변수 {{{reactele}}}로 대체한다.

위의 코드를 입력하면 “Unexpected token at (23:35)” 에러가 발생할 것이므로, ".babelrc" 파일의 프리셋 설정에 `@babel/preset-react`를 추가해야 한다. [더 알아보기.](https://babeljs.io/docs/en/babel-preset-react) 해당 모듈이 우리의 개발 의존성에 추가되어 있는지 꼭 확인해보자.

```bash
npm install --save-dev @babel/preset-react
```

위 명령어를 실행 후, 애플리케이션을 실행하면 다음과 같은 결과를 확인할 수 있다.

![img](https://miro.medium.com/max/2080/1*2h2rxAcbz_XZ0Whlb79Fag.png)

그러나 버튼을 눌러도 아무 일도 일어나지 않는다는 사실을 눈치챌 것이다. 만약 리액트 개발자 도구가 설치되어 있다면, 버튼을 눌렀을 때 "이 페이지는 리액트를 사용하고 있지 않다"는 메시지가 출력될 것이다. 우리는 리액트 컴포넌트를 랜더링하고 있는데, 왜 그런 것일까? 다음 섹션에서 설명하도록 하겠다.



### 우리의 리액트 컴포넌트를 hydrate시키자

리액트는 클라이언트 사이드 자바스크립트다. DOM을 랜더하고, 컴포넌트가 hydrate되도록 한다. 우리는 리액트 컴포넌트를 HTML 문자열로서 랜더하기 때문에, 현재 우리 애플리케이션은  플레인한 HTML로 이루어져 있는 상태다.

통상적인 클라이언트 사이드 리액트 앱에서는, 보통 앤트리 포인트에 대한 코드가 다음과 같이 명시되어 있다.



```js
ReactDOM.render(<yourreactcomponent />, document.getElementByID('root');

```

컴포넌트를 [hydrate](https://reactjs.org/docs/react-dom.html#hydrate) 시키기 위해, components 폴더에 새 파일을 만들어 index.js라고 이름 짓도록 하자.

```js
import React from "react";
import { hydrate } from "react-dom";
import App from "./app";
hydrate(<App />, document.getElementById("reactele"));

```

HTML 파일을 생성할 때, "reactele"라는 이름의 div가 있었다는 사실을 기억하는가? reactele에서 우리의 리액트 컴포넌트를 hydrate할 것이다.

마지막으로 웹팩을 설정하는 단계가 남았다. 웹팩을 통해 앤트리 포인트를 만들고, public 폴더로 배포할 수 있다.



## 웹팩 설정

 우리 앱의 루트 폴더에 "webpack.config.js"라는 이름의 파일을 만들자.

```js
const path = require("path");

const config = {
  entry: {
    vendor: ["@babel/polyfill", "react"],
    app: ["./src/components/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
  }
};

module.exports = config;
```

여기에는 두 가지 앤트리 포인트가 있다.

1. Vendor: 리액트와 같은 제 3자로부터 비롯된 스크립트로, 거의 변경되지 않는다.
2. App: 지난 섹션에서 우리가 만든 리액트 앤트리 포인트다.

[babel-loader](https://github.com/babel/babel-loader)를 포함하여, 우리의 자바스크립트를 웹팩과 함께 트랜스파일 하도록 했다.

더욱 복잡한 앱을 만들수록, 여러 개의 앤트리 포인트가 있는 라우트들을 여러 개 추가해야 할 것이다. 이를 통해 app.js의 크기를 줄이고 필요한 때에 필요한 리액트 컴포넌트만을 로딩할 수 있다. 또한, 웹팩을 통해 작성한 자바스크립트 코드를 버전화하고 [chunk](https://webpack.js.org/plugins/split-chunks-plugin/)화 할 수 있다.

설정이 완료되면, 웹팩을 통해 자바스크립트를 번들링 해야 한다. 아래의 새 스크립트(웹팩)을 package.json에 추가하자.

```json
"scripts": {
"dev": "nodemon --exec babel-node src/server.js",
"webpack": "webpack -wd"
},

```

애플리케이션을 실행하기 전에, `npm install --save-dev webpack webpack-cli babel-loader` 를 실행하여 웹팩과 babel-loader 의존성을 설치하도록 하자. Webpack-cli는 터미널/커맨드라인에서 사용된다.



## 앱 실행시키기

드디어 우리의 앱을 실행시켜 보도록 하자. `npm run webpack`과 `npm run dev`커맨드를 입력하면 된다. 이 명령어는 각각 다른 터미널 또는 명령 프롬프트 창에서 실행하도록 하자. 준비가 되면, http://localhost:3030/firstssr 를 확인해 보자. 다음과 같은 결과를 볼 수 있다.

![img](https://miro.medium.com/max/1036/1*5_6Wo-LUoOPvSBqcjlzbEw.gif)

첫 번째 리액트 서버사이드 랜더링에 성공한 것을 축하한다!



전체 소스 코드를 보려면 필자의 [깃허브](https://github.com/danleegion/React-SSR)를 확인하면 된다. 질문 혹은 피드백이 있다면 [linkedIn](https://www.linkedin.com/in/danielleecherchen/)을 통하면 된다.



(출처: https://medium.com/@danlegion/react-server-side-rendering-with-express-b6faf56ce22)

#