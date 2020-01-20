# Using ESLint with TypeScript (and the React Hooks Rule plugin)

- **본기사는 [Using ESLint with TypeScript (and the React Hooks Rule plugin)](https://medium.com/@oliver.grack/using-eslint-with-typescript-and-react-hooks-and-vscode-c583a18f0c75) 을 번역한 기사입니다.**

출저 : https://medium.com/@oliver.grack/using-eslint-with-typescript-and-react-hooks-and-vscode-c583a18f0c75

![ts+eslint](https://miro.medium.com/max/1120/1*CPNhrTwMvxQ5hlUJaocH1g.png)

TSlint 는 현재 타입스크립트 린팅에 표준입니다. 그러나 이제 바뀔 것입니다.
[TypeScript 로드맵에 적혀있는 것처럼](https://eslint.org/blog/2019/01/future-typescript-eslint) ESLint가 TSLint를 대체하고 TSLint는 더 이상 사용되지 않습니다.

우리는 이미 타입스크립트와 함께 ESLint를 사용할 수 있으며 모든 타입스크립트 규칙이 typescript-eslint 프로젝트에 적용되어 더 잘 지원됩니다 . 타입스크립트와 함께 ESLint를 사용하면 TSLint 에서는 전혀 사용할 수 없었던 ESLint 규칙을 사용할 수 있습니다. (React hook lint 룰과 같은 것들을요!)

### 기존 TypeScript 프로젝트에 ESLint 추가하기

우리는 npm 으로 모든 의존성 모듈을 설치할 수 있습니다.

```
npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
```

이제 이제 프로젝트 루트 폴더에 우리는 `.eslintrc.json` 파일을 만들고 ESLint에 타입스크립트를 처리하는 방법을 알려줘야 합니다.

아래처럼 우리의 `.eslintrc.json` 파일을 넣어야 합니다! 👇 :

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "jsx": true,
    "useJSXTextNode": true
  },
  "extends": ["plugin:@typescript-eslint/recommended"],
  "plugins": ["@typescript-eslint"]
}
```

첫 줄 `parser` 는 린트에게 TypeScript parser 를 사용한다고 알려주고 ,
`parserOptions` 에는 TypeScript parser 에게 JSX 구문을 사용하고 싶다고 알려주고, (React 와 같은 것을 사용하지 않으면 제거 할 수 있습니다.)
`extends` 에는 타입스크립트 플러그인에서 제공하는 권장 규칙을 사용한다는 의미입니다.
`@typescript-eslint` 플러그인은 타입스크립트의 특정 규칙이 포함되어 있습니다.
모든 규칙은 [여기](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)에서 볼 수 있습니다.

### Prettier 사용하기

Prettier 를 사용할 때 우리는 local 에 Prettier 을 설치함으로써 eslint 에게 Prettier 가 이미 다루고 있는 포맷 규칙에 대해 신경 쓸 필요가 없다고 말할 수 있습니다.

```
npm install prettier eslint-config-prettier --save-dev
```

우리는 eslint config 를 prettier config 로 부터 확장할 수 있습니다.
이 설정은 기본적으로 모든 규칙을 준수하고 더 예쁘게 처리합니다. `eslintrc.json` 파일을 다음과 같이 변경하세요! :

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "jsx": true,
    "useJSXTextNode": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  "plugins": ["@typescript-eslint"]
}
```

### ESLint 가 타입스크립트를 확인한다고 VSCode 에 알리기

**VS Code** 에 ESLint 를 편집기에 통합 할 수 있는 놀라운 기능을 가진 익스텐션이 있습니다!
이는 **ESLint** 라는 이름에 익스텐션으로 Dirk Baeumer 가 출판했습니다.

이 익스텐션을 설치하고 VScode 셋팅을 변경해야합니다.
`File > Preferences > Settings` 로 이동해서 여기 오른쪽 상단 모서리에 있는 설정을 JSON 으로 보기 버튼{} 을 눌러 이동합니다.

그리고 여기에 이 설정을 추가해야 합니다! 👇:

```json
"eslint.validate": [
  "javascript",
  "javascriptreact",
  {
    "language": "typescript",
    "autoFix": true
  },
  {
    "language": "typescriptreact",
    "autoFix": true
  }
]
```

여기서 **esconfig** 에 **React Hooks** 룰을 추가하지 않는 이상 👍 입니다.

### React Hooks 규칙 더하기

플러그인을 설치합니다.

```
npm install eslint-plugin-react-hooks --save-dev
```

그리고 `.eslintrc.json` 파일에 추가합니다. :

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "jsx": true,
    "useJSXTextNode": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  "plugins": ["@typescript-eslint", "react-hooks"]
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

용감한 시도였습니다!
이제 진짜 다 했습니다! 🌈

---

> 출저와 별개로 👇

> - [Prettier 간단하게 알아보기](https://analogcoding.tistory.com/164)
> - [ESlint 간단하게 알아보기](https://analogcoding.tistory.com/163?category=833520)
