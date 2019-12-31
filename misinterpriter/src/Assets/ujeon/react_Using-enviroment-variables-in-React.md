# 리액트에서 환경변수 사용하기

_본 기사는 [Sam Pakvis](https://medium.com/@trekinbami)의 [Using enviroment variables in React](https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5)을 번역한 기사입니다._

여러분께서 서버-사이드 프로그래밍 경험이 없으시다면, 환경 변수가 마치 마술처럼 보일겁니다. 배경 지식이 없으시다면, 마치 todo 어플리케이션을 localhost에서 완성하고 처음으로 프로덕션 빌드를 생성하는 것 처럼 x같은 상황을 만나시게 될지도 몰라요.

## 해결해야 할 문제:

> **로컬 개발 빌드**와 **프로덕션 빌드**에 따라 **API url**을 다르게 선언하는 방법

## 한마디로 말해서: 환경 변수

리액트로 작업할 때 환경 변수는 전역 변수인 process.env 객체를 통해서 사용 가능한 변수입니다. 그 전역 객체는 Node.js를 통한 환경에서 제공됩니다. 물론 브라우저에는 Node.js가 없기 때문에, 웹팩이 필요하죠.

## 환경변수를 셋팅하고 사용해보기

저는 여러분에게 웹팩을 사용해서 리액트 프로젝트에 환경 변수를 설정하고 사용하는 두 가지 방법을 보여드리려고 합니다: 바로 **npm scripts**와 **.env 파일**을 사용하는 방법입니다. 여러분이 리액트 패키지들을 정리했다고 위험한(?) 가정을 하겠습니다.

## 방법 1: npm scripts를 사용해서 환경 변수 설정하기

먼저, \$ npm install --save-dev webpack webpack-cli을 입력해서 [webpack](https://www.npmjs.com/package/webpack) 과 [webpack-cli](https://www.npmjs.com/package/webpack-cli) 를 설치합니다.

이제 package.json 파일을 연 다음 scripts 키에서 webpack을 실행하는 명령을 찾으세요. 아마도 다음과 비슷한 것들이 있을겁니다:

```json
{
  // package.json의 나머지 부분들
  "scripts": {
    "dev": "webpack --config webpack.config.dev.js",
    "build": "webpack --config webpack.config.build.js"
  }
}
// 더블 대쉬 명령은 webpack cli 명령입니다.
```

스크립트에 --env 플래그와 함께 환경 변수를 추가해봅시다.

```json
{
  // package.json의 나머지 부분들
  "scripts": {
    "dev": "webpack --env.API_URL=http://localhost:8000 --config webpack.config.dev.js",
    "build": "webpack --env.API_URL=https://www.myapi.com --config webpack.config.build.js"
  }
}
// 두 스크립트 모두 --env 플래그가 붙여져 있는 것을 확인하세요.
```

두 스크립트 모두 --env.API_URL= 를 붙였습니다. 이제, npm run dev 명령을 실행하고, 리액트 컴포넌트로 가서 process.env.API_URL을 사용해보세요:

```react
const App = () => <h1>{process.env.API_URL}</h1>;
```

그으으으리고... 제가 여러분의 프로젝트를 망쳐버렸네요ㅎ. 죄송합니다.

— 왜 망쳐버렸냐고 이야기 했냐면, 프론트엔드 코드에서 환경 변수를 사용하게 되면, **실제로는 단지 코드를 컴파일 할 때 대체 될 placeholder 역할만을 하기 때문입니다.** 문제는, 웹팩한테 이 변수들을 실제 변수로 컴파일하라고 명령하지 않았다는 점 입니다. 웹팩 구성 파일 중 DefinePlugin 웹팩 플러그인을 사용해서 이 문제를 해결해봅시다:

```javascript
const webpack = require('webpack'); // DefinePlugin가 웹팩 플러그인이기 때문에 필요합니다.

// config 파일에서 함수를 반환합니다.
// `env` 변수는 단순한 객체입니다: { API_URL: 'http://localhost:8000' }
// 그리고 'env'변수는 모든 환경 변수를 (package.json에서 설정한 변수들) key/value 쌍으로 포함하고 있습니다.
module.exports = (env) => {
  // 이 객체가 실질적인 웹팩 config 입니다.
  return {
    plugins: [
      // 플러그인을 플러그인 배열에 추가하세요.
      new webpack.DefinePlugin({ `process.env.API_URL`: JSON.stringify(${env.API_URL}) })
    ]
  };
};
//DefinePlugin은 말 그대로 hard한 키를 설정하여 "환경 변수"를 정의해야 합니다.
```

reduce를 사용하여 객체로 줄일 수 있으므로, 플러그인을 수동으로 정의할 필요가 없습니다.

```javascript
module.exports = env => {
  // 변수 env에서 객체를 생성합니다.
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    plugins: [new webpack.DefinePlugin(envKeys)]
  };
};
```

이제 명령을 실행하면, 모든 것들이 컴파일되고 process.env.API_URL 역시 적절한 url로 컴파일 될 것입니다. 여러분이 설정한 환경 변수에 맞게 말이죠.

축하드립니다! 어, 잠시만요. 아직 하나 남았군요?

## 방법 2: .env 파일을 사용해서 환경 변수 설정하기

여기서의 아이디어는 환경 변수로 채워진 파일(.env라고 하겠습니다.)을 만드는 것입니다.

_여러분의 로컬 데이터베이스 비밀번호를 알아내는 것을 막기 위한 방법은 여러분이 인터넷에서 여러분의 모든 계정에 하는 것과 같습니다. 저는 .env 파일을 .gitignore에 추가 할 것을 권장합니다._

여러분의 프론트엔드 코드는 두 환경 (개발/프로덕션) 모두에서 동일한 환경 변수 (process.env.API_URL)를 참조하지만, .env 파일에 다른 값을 정의하였기 때문에 컴파일 된 값은 달라집니다.

## .env 파일을 만들어 봅시다.

.env 파일은 여러분의 프로젝트에서 최상위에 위치해야 합니다. 이제 변수를 추가해봅시다:

```
API_URL=http://localhost:8000
```

이게 맞을까요? 네, 이게 맞습니다..

## .env 파일 다루기

이제 .env 파일과 그 안에 담긴 내용을 다루기 위한 방법이 필요합니다. 이를 위해서 유명한 npm 패키지인 [dotenv](https://github.com/motdotla/dotenv)를 사용하겠습니다. Dotenv는 흔히 사용되고 (create-react-app이 dotenv를 사용합니다.) .env 파일에서 변수를 추출한 후 전역 객체인 process.env에 추가합니다.

\$ npm install --save-dev dotenv

## 리액트 프로젝트에 변수 추가하기

멋지지 않나요? 그런데 한 가지 문제가 있습니다. Dotenv는 서버사이드에서만 동작합니다. 그리고 우리는 백엔드 작업을 하고 있지 않죠.

![잠깐, 뭐라고?](https://media.giphy.com/media/9xvf5zQoL15HKmhGeU/giphy.gif)

지금까지 우리는 클라이언트사이드 개발에 대해 살펴보고 있었죠. 그리고 dotenv는 실제로 변수를 저장하기 위해서 일종의 환경이 필요합니다. 이제 웹팩이 활약할 차례입니다!

웹팩 DefinePlugin 기능이 잘 작동하는 것을 앞서 살펴보셨을 겁니다. 그러니, 웹팩 설정에 다시 사용하겠습니다:

```javascript
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  // dotenv를 호출하면 파싱된 키를 가진 객체를 반환합니다.
  const env = dotenv.config().parsed;

  // 이전에 했던 것처럼 reduce를 사용해서 객체로 줄여줍니다.
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
  };
```

.config()의 구성 옵션은 [dotenv github](https://github.com/motdotla/dotenv) 에서 찾아보세요.

Dotenv의 .config()를 호출하면 parsed라고 불리는 키 아래에 .env 파일에 설정한 모든 환경 변수가 담긴 객체를 반환합니다. 이제, 리액트 코드를 확인해보겠습니다:

```react
const App = () => <h1>{process.env.API_URL}</h1>;
```

어휴, 이제 작동하네요. .env 파일에 정의한 API_URL 환경 변수의 값을 보여줍니다.

단 하나의 문제: 프로덕션과 개발 환경에 따라 다른 API_URL를 정의해야 한다는 점 입니다.

## 환경에 따라 다른 환경 변수

이 아이디어는 환경에 따라 다른 .env 파일을 생성하는 것입니다. 그런 다음 웹팩이 활성화 된 환경에 따라 적절한 .env 파일을 선택하게끔 만들면 됩니다. 그러니 두 개의 파일을 프로젝트 최상위에 만들어 봅시다:

- .env _(**프로덕션** 환경을 위한 모든 환경 변수가 담겨 있는 파일)_

- .env.development _(**개발** 환경을 위한 모든 환경 변수가 담겨 있는 파일)_

짚고 넘어가야 할 점: 환경 이름에 .env 파일 이름을 접두어로 붙입니다. 프로덕션 빌드에 원본 .env 파일을 사용하는 것이 일반적이므로 해당 파일에는 접미사를 사용하지 않습니다.

##NPM 스크립트를 사용해서 활성 환경 설정하기

방법 1에서 했던 것처럼 NPM 스크립트를 사용해서 package.json에 현재 환경을 설정해보겠습니다:

```json
{
  "scripts": {
    "dev": "webpack --env.ENVIRONMENT=development --config webpack.config.dev.js",
    "build": "webpack --env.ENVIRONMENT=production --config webpack.config.build.js"
  }
}
```

Package.json에 환경을 정의했기 때문에, 이제 웹팩 구성에서 환경을 사용할 수 있습니다!

다음 단계는 웹팩 구성으로 이동하여 활성화 된 환경에 속하는 .env 파일을 사용하도록하는 것입니다. 이전과 마찬가지로, dotenv를 사용하고 있지만, 매개 변수에 커스텀한 path를 지정하고 있다는 차이가 있습니다.

```javascript
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs'); // 파일이 존재하는지 확인하기 위해 사용합니다.
const path = require('path'); // 현재 경로를 얻기 위해 사용합니다.

module.exports = (env) => {
  // 루트 경로를 얻습니다. (웹팩 config가 루트 경로에 있다는 가정하에!)
  const currentPath = path.join(__dirname);

  // 대체 경로를 생성합니다. (프로덕션 .env)
  const basePath = currentPath + '/.env';

  // 올바른 env 파일을 지정하기 위해서 환경 이름을 파일이름에 연결합니다.!
  const envPath = basePath + '.' + env.ENVIRONMENT;

  // 파일이 존재하는지 확인하고, 그렇지 않으면 프로덕션 .env로 돌아갑니다.
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  // dotenv config에 경로 변수를 설정합니다.
  const fileEnv = dotenv.config({ path: finalPath }).parsed;

  // 이전과 마찬가지로 reduce를 사용해서 객체로 줄입니다. (파일 변수와 함께)
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
  };
```

이게 전부지만, 여러분은 더 많은 환경을 위해서 (예를 들면 .env.staging과 같은) .env 파일을 생성할 수도 있습니다. Package.json에 환경을 설정하고, 그에 해당하는 .env 파일을 프로젝트 최상위에 생성함으로써 말이죠.

마지막 부분은 이해해야할 것들이 많죠? 한 줄 씩 살펴보시고 궁금한 점이 있으시면 트위터로 코멘트를 주시면 됩니다.

이제 마무리 하겠습니다! 여러분께서 해내셨습니다!

잘 하셨어요.

XOXO.
