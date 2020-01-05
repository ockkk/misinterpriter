# 자바스크립트 리액트 앱을 타입스크립트로 바꾸기

*본 기사는 [Thomas Guibert](https://medium.com/@th.guibert?source=post_page-----631592dc1876----------------------)의 [Convert Your Javascript React App to TypeScript, the Easy Guide](https://medium.com/swlh/convert-your-javascript-react-app-to-typescript-the-easy-guide-631592dc1876)를 번역한 기사입니다.*

저의 모든 프로젝트에 **타입스크립트**를 적용한지도 일년이 넘어가네요. 자바스크립트 코드 베이스로 다시 돌아간다는 것은 중국 가게에 있는 황소처럼 느껴집니다. (역주: bull in china shop, 어수선하다는 의미라네요) 제가 그 프로젝트에 대해서 잘 모르면, 언제라도 프로젝트를 망칠 수 있겠죠. 이 시점에서 제가 동료들에게 프로젝트에 타입스크립트를 사용해야 한다고 말하면, 동료들이 저를 미워하게 될 겁니다.

대부분의 경우, 저는 사람들이 **타입스크립트로 옮겨가는 생각**에 의구심을 갖게 되는 이유가 타입스크립트에 대한 지식이 없기 때문이라고 생각합니다. 그리고 지식의 부재는 기술적인 부담감과 타입스크립트를 능숙하게 사용하기 위해서 너무나 많은 것들이 필요하다는 두 가지  두려움을 초래하기도 하죠.

그런 사람들을 비난하고 싶지는 않아요! 언젠가 동료가 저에게 와선 '지금부터 타입스크립트를 사용해야 한다.'라고 말한 적이 있습니다.  그때 저는 이렇게 생각했었죠:

> ## 음... 코드 잘 작동하잖아. 왜 굳이 코드에 타입이랑 이것저것 이상한 것들을 붙여서 복잡하게 만들어야 해...?

엄청나게 많은 양의 코드 베이스를 변환하고 **타입스크립트**가 제공하는 모든 기능을 익히는 데 오랜 시간이 걸리고 확실히 끝나지도 않겠지만, 생각만큼 두려워 할 것은 없습니다.

![계단 앞에 서있는 아이](https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80)

이제부터 아마 여러분 자신에게 가지게 될 의문에 대한 대답으로 이어나가겠습니다.

---

## 타입스크립트로 이동하면 레거시 코드가 생성되나요?

정답부터 이야기하면 '아닙니다'. 타입스크립트는 자바스크립트의 상위 집합이며, 모든 유효한 자바스크립트 파일은 유효한 타입스크립트 파일입니다. 즉, 여러분의 자바스크립트 코드는 구식이 되지 않을 겁니다.

하지만 제 대답은... '아마도요...?' 입니다. 타입이 누락된 부분으로 인해서(타입스크립트에서는 의미가 없을 수 있습니다.) 레거시 코드를 작업하기 어려운 코드로 간주한다면, 대답은 yes입니다. 그렇지만 여러분은 그 코드(역주: 아마도 레거시 코드를 의미하는 것 같습니다.)로 일하고 있습니다!

>*코드 베이스에서 변화가 시작될 때, 코드 베이스 혹은 도큐먼트의 다른 부분에서도 조정된 변경 사항을 동시에 적용해야 할 필요가 종종 있습니다. 완료되지 않은 필수 변경 사항은 미래의 어느 시점에는 반드시 처리해야 할 일로 여겨집니다. [Technical Debt - Wikipedia](https://en.wikipedia.org/wiki/Technical_debt)*

일부에서는 technical debt가 발생할 것이라고 이야기할 것입니다. 그 사람들이 완전히 틀린 것은 아니지만, 저는 심각하게 우려할 정도는 아니라고 말하고 싶습니다. 모든 코드에 타입을 지정하는 것은 두말 할 것 없이 시간이 걸리는 작업입니다(자원이든 돈이든 말이죠). 하지만, 이 비용은 여러분이 그 작업에 대해 어떻게 접근하느냐에 달려 있습니다.

코드 베이스가 완전히 변환되어서 실수를 방지할 수 있게 되고, 새로운 개발자가 코드를 더 빠르게 코드를 이해할 수 있게 되고, 자바스크립트가 향후 지원할 기능(코드를 보다 쉽게 작성할 수 있게끔 되어있습니다.)을 포함할 수 있다고 생각해서 타입스크립트를 도입하는 것에 동의한다면, 적절한 곳에 투자하신 겁니다.

다시 한 번 말씀드리지만, 타입이 지정되지 않은 코드가 구식은 아닙니다. 그 코드가 다시 작성될 필요는 없으며, 단지 타입이 아직 지정되지 않은 것 뿐입니다.

---

## 코드 베이스 어디서부터 타입을 지정해야 하나요?

이 질문에 대해서 대답할 만큼 실질적인 경험은 부족하지만, 제 접근 방법은 다음과 같습니다:

- **함수형 컴포넌트와 유틸리티 함수**에서부터 시작하세요. 보통의 경우 이 두 가지는 짧고 이해하기 쉽게 작성되어있는 경우가 많습니다. 이 부분이 가장 쉬운 부분이며, 타입스크립트를 사용하지 않았던 동료에게 해당 부분을 맡기시면 됩니다. 그 부분이 여러분의 동료가 시작하기에 완벽한 부분입니다.

- **스토어**(Actions, Reducers, Thunk /Epics 등) 또한 직관적이어야 합니다. Reducer와 Action는 손쉽게 타입을 지정할 수 있어야 하며, 이는 여러분이 여러분의 앱이 사용하는 첫 번째 모델을 생성할 수 있도록 합니다.(User 타입, Product 타입 등)
-  이전 단계를 완료하면, **Stateful 컴포넌트**를 비교적 쉽게 변환할 수 있을 것입니다.

여러분의 코드 베이스를 한 번에 변경할 필요는 없습니다. 나중에 살펴보겠지만, 동일한 프로젝트 내에 자바스크립트 파일과 타입스크립트 파일가 존재할 수 있습니다. 밝은 미래를 위한 임시적인 해결책입니다! (...)

---

## 제 동료가 타입스크립트에 대해서 아는 것이 전혀 없습니다. 만일 그 분들이 타입스크립트 프로젝트로 코드를 작성해야 한다면 생산성이 0으로 떨어지게 될까요?

**타입스크립트**는 자바스크립트와 동일한 구문(syntax)과 의미(sematic)를 사용합니다. 어떤 개발자들은 실제 코드를 작성하기 전에 타입스크립트에 대한 문서를 읽는 것이 더 좋습니다. 그렇다고해서 그들이 방향을 잃는 것은 아니죠. 타입스크립트는 말그대로 타입을 가진 자바스크립트를 작성하는 것이니깐요.

**타입스크립트**는 대부분 향후 자바스크립트 사양에서 구현 될 기능을 제공합니다. 따라서 보다 앞선 자바스크립트를 배운 개발자가 되는 것이죠.

코드 자체를 입력하는 점에서, 처음에는 약간 혼란스러울 수 있습니다. 리액트 타입과 DOM 이벤트를 다루는 것은 정말로 성가시죠. 그렇지만 솔직하게 며칠만 지나면 괜찮이질 것입니다. 게다가 온라인에는 많인 리소스가 있습니다. [예를 들어 리액트에 사용되는 타입스크립트 치트 시트처럼 말이죠.](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)

**타입스크립트 프로젝트를 처음 파고 들었을 때 느낀 큰 장점들 중 하나는 코드를 쉽게 이해할 수 있다는 것입니다.**

올바르게 완료되면 전부 타입이 지정되어 있습니다.(...) 즉, 앱을 시작하지 않고도 어떤 것이 변수를 포함하는지, 코드의 특정 부분에서 무슨일이 일어나는지 바로 이해하기 위해서 모든 정의를 클릭할 수 있습니다.(...)

---

## 프로젝트에 사용되는 모든 라이브러리가 타입스크립트를 지원할까요?

네, 타입스크립트가 자바스크립트임을 명심하세요. 그리고 **타입스크립트는 자바스크립트를 컴파일할 수 있습니다.** 하지만 프로젝트에 선언 파일을 추가해야 한다는 점은 있습니다.

> *선언 파일은 기본적으로 라이브러리가 사용하는 타입이 포함됩니다.*

몇몇 라이브러리는 타입 선언 파일(.d.ts)을 패키지에 포함하고 있지만, 다른 몇몇 라이브러리는 그렇지 않습니다.

그렇지만 걱정하지마세요. 여러분의 IDE(적어도 VS Code는)는 무언가 필요할 경우 알려줄 겁니다.

![styled-components 라이브러리를 위해 선언 파일을 요청하는 VS Code](https://miro.medium.com/max/2158/1*F8_lLxZtLREmpcwHjWBtQg.png) 

만약 패키지가 선언 파일을 포함하고 있지 않다면, @types/<package>를 설치하여 패키지를 추가할 기회입니다. 이 방법이 IDE가 제안하는 방법이죠.

만일 선언 파일이 존재하지 않는다면, 여러분 스스로 그 파일을 만들어야 할 수도 있겠지만, 솔직하게 말해서 저에게도, 여러분에게도 그런 경우는 없을 겁니다. 타입스크립트는 지금 인기있으니깐요.

---

![계단을 뛰어올라가는 사람](https://miro.medium.com/max/3188/0*X8Pm8gJjvShPXGlW)



## 실제 사례를 통해 타입스크립트 사용하기

제가 **웹팩**으로 간단한 투두 리스트 앱을 만들었습니다.

[이 곳에서 다운받으실 수 있습니다.](https://github.com/thmsgbrt/Javascript-to-TypeScript-guide)

시작 코드 ./js 폴더에 있습니다. 그리고 연습 예제는 ./ts 폴더에 있습니다.

./ts 폴더는 완전하게 **타입스크립트**로 변환되어 있지 않습니다. **타입스크립트** 프로젝트 내에 자바스크립트 파일이 존재할 수 있다는 것을 의미합니다.

![투두 앱 원본](https://miro.medium.com/max/1496/1*a2SLEQtABF17CMTYPgf0Pw.png)

>## 멋진 투두 앱이지만 타입스크를 사용하지 않습니다. 그러니 절반만 멋진게 되겠군요. 🤷‍♂️ 
>
>## 어쨌든 바꿔 봅시다!

### 디펜던시 추가하기

타입스크립트 코드를 컴파일하기 위해서 **웹팩**이 필요합니다.

이를 위해서 새로운 패키지가 필요합니다:

```
$ npm i -D typescript awesome-typescript-loader source-map-loader
```

**Awesome-typescript-loader**는 **타입스크립트**를 자바스크립트로 컴파일하는 **웹팩 플러그인**입니다. **Source-map-loader**는 디버깅을 위한 소스 맵 지원을 추가합니다.

앞서 프로젝트가 사용하는 라이브러리에 대한 선언 파일이 필요하다고 말한 것 기억하시나요? 이 프로젝트는 React, ReactDOM, styled-components를 사용합니다.

```
$ npm i -D @types/react @types/react-dom @types/styled-components
```

---

### 타입스크립트 설정 추가하기

>디렉토리에 tsconfig.json 파일이 있으면 디렉토리가 **타입스크립트 프로젝트**의 루트임을 의미합니다. tsconfig.json 파일은 프로젝트를 컴파일하는 데 필요한 루트 파일 및 컴파일러 옵션을 지정합니다.
>*[tsconfig.json —타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)*

이 중 저희가 하나를 사용할 수 있는 것 같습니다...

시작 설정으로 좋은 예시가 있네요. 이 설정은 분명히 변경될테고, 프로젝트에 맞게 조정될 것입니다. 여러분의 코드 베이스가 변환될 때 까지 strict와 noImplicitAny 속성은 false로 설정하여야 합니다. 그렇지않으면 타입스크립트가 누락된 타입이나 암시적인 유형(implicit any)에 대해서 귀찮게 굴 것입니다.

```json
{
  "compilerOptions": {
    "noImplicitAny": false /* Raise error on expressions and declarations with an implied 'any' type. */,
    "allowSyntheticDefaultImports": true /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */,
    "sourceMap": true /* Generates corresponding '.map' file. */,
    "target": "es2015" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */,
    "jsx": "react" /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */,
    "types": [
      "react"
    ] /* Type declaration files to be included in compilation. */,
    "module": "esNext" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    "moduleResolution": "node" /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */,
    "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */,
    "declaration": false /* Generates corresponding '.d.ts' file. */,
    "removeComments": true /* Do not emit comments to output. */,
    "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
    "noUnusedLocals": false /* Report errors on unused locals. */,
    "strict": true /* Enable all strict type-checking options. */,
    "outDir": "dist" /* Redirect output structure to the directory. */,
    "baseUrl": "src" /* Base directory to resolve non-absolute module names. */,
    "typeRoots": [
      "./types",
      "node_modules/@types"
    ] /* List of folders to include type definitions from. */,
    "strictNullChecks": true /* Enable strict null checks. */,
    "allowJs": true /* Allow javascript files to be compiled. */
  },
  "exclude": ["dist", "node_modules"]
}
```

---

### 웹팩 설정 수정하기

새로운 규칙 두 가지를 추가합니다. (이전 규칙은 디버깅 목적으로 사용됩니다):

```
// ...
{
  test: /\.(t|j)sx?$/,
  use: { loader: ‘awesome-typescript-loader’ } },
{
  enforce: ‘pre’,
  test: /\.js$/,
  loader: ‘source-map-loader’ },
}
//..
```

보시다시피, **웹팩**은 첫 번째 규칙을 통해서 .ts, .tsx, .js 및 .jsx 파일을 검사합니다. 이는 .js 및 .jsx 파일을 검사하는 규칙을 제거할 수 있음을 의미합니다.

```
// This can be deleted
{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    },
  },
//..
```

.babelrc 파일 역시 더이상 필요하지 않으며, 모든 것은 tsconfig.json 파일에서 설정할 수 있습니다. (오역이 있을 수 있습니다.)

마찬가지로 package.json에서도 여러 디펜던시를 삭제할 수 있습니다: **@babel/core**, **@babel/preset-env**, **@babel/preset-react**, **babel-loader** 등등

---

### index.js를 index.tsx로 변경하기

자바스크립트 프로젝트에서는 여러분의 컴포넌트 파일이 .js 나 .jsx를 사용하는 것이 문제가 되지 않지만, 타입스크립트에서는 주의해야 합니다.

**JSX 코드를 포함하고 있는 파일은 반드시 .tsx 확장자이어야 합니다.** .ts파일로 설정하게 되면, **타입스크립트**가 .ts 파일에서 **JSX** 코드를 기대하지 않기 때문에 컴파일에 실패하게 됩니다.

./src/index.js 를 index.tsx로 변경하고 **웹팩** 설정의 entry 키를 업데이트 하세요.

```
{
  // ...
  entry: './src/index.tsx',
  // ...
}
```

시작 및 빌드 스크립트를 실행해보면 잘 작동할 것입니다.

프로젝트에 자바스크립트가 존재하지만 잘 작동합니다. 타입스크립트는 그 자바스크립트를 사용할 수 있게 지원합니다. 그 말인 즉슨, 프로젝트의 모든 파일의 확장자를 변경할 필요는 없다는 말이 되죠. 그렇지만 프로젝트에 1만개가 넘는 파일이 있는게 아니라면, 바꾸는게 좋습니다.

---

### 컴포넌트를 타입스크립트로 변경하기

본 기사에서 가장 만족할만한 부분입니다.

Todo.js가 저희가 가장 먼저 다룰 파일입니다.

```jsx
import React, { useState } from 'react';
import TodoItem from '../todoItem/todoItem';
import StyledTodo from './styled';

const DEFAULT_ITEMS = [
  { id: 1, text: 'Convert my App to TypeScript' },
  { id: 2, text: 'Get a coffee' },
];

const Todo = () => {
  const [items, setItems] = useState(DEFAULT_ITEMS);
  const [inputVal, setInputVal] = useState('');

  const deleteItem = id => setItems([...items.filter(i => i.id !== id)]);

  return (
    <StyledTodo>
      <div className="todo__add">
        <input
          type="text"
          value={inputVal}
          onChange={e => setInputVal(e.currentTarget.value)}
        />
        <button
          onClick={e =>
            setItems([...items, { id: items.length + 1, text: inputVal }])
          }
        >
          Add stuff
        </button>
      </div>
      <div className="todo__items">
        {items.map(t => (
          <TodoItem key={t.id} id={t.id} text={t.text} onDelete={deleteItem} />
        ))}
      </div>
    </StyledTodo>
  );
};

export default Todo;
```

파일 확장자를 .tsx로 변경하세요.

>*⚠️ todo 컴포넌트를 import하는 곳에서 확장자를 .tsx로 변경해주세요. 실제로 app.js는 자바스크립트 파일이므로 todo.tsx가 아니라 todo.js 파일을 찾고 있을 겁니다.*

```tsx
import Todo from ‘./components/todo/todo.tsx’;
```

일단 프로젝트가 완전히 타입스크립트로 변환되면, 더는 파일 확장자를 추가할 필요가 없습니다. 다시 한 번 말씀드리면, IDE가 더이상 필요없는 부분을 알려 줄 겁니다. 그러니 걱정하지마세요. 

 타입이 지정된 todo.tsx 파일은 다음과 같습니다. 할 일이 그리 많지는 않습니다.

```tsx
import React, { useState } from 'react';
import StyledTodo from './styled';
import TodoItem from '../todoItem/todoItem';

interface Item {
  id: number;
  text: string;
}

const DEFAULT_ITEMS: Item[] = [
  { id: 1, text: 'Convert my App to TypeScript' },
  { id: 2, text: 'Get a coffee' },
];

const Todo = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>(DEFAULT_ITEMS);
  const [inputVal, setInputVal] = useState<string>('');

  const deleteItem = (id: number): void =>
    setItems([...items.filter(i => i.id !== id)]);

  return (
    <StyledTodo>
      <div className="todo__add">
        <input
          type="text"
          value={inputVal}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setInputVal(e.currentTarget.value)
          }
        />
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setItems([...items, { id: items.length + 1, text: inputVal }])
          }
        >
          Add stuff
        </button>
      </div>
      <div className="todo__items">
        {items.map((t: Item) => (
          <TodoItem key={t.id} id={t.id} text={t.text} onDelete={deleteItem} />
        ))}
      </div>
    </StyledTodo>
  );
};

export default Todo;
```

다음은 todoItem.js를 타입스크립트로 변환하기 전, 후 코드입니다.

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import StyledTodoItem from './styled';

const TodoItem = ({ id, text, onDelete }) => (
  <StyledTodoItem>
    <span>{text}</span>
    <button onClick={() => onDelete(id)}>X</button>
  </StyledTodoItem>
);

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
```

```tsx
import React from 'react';
import StyledTodoItem from './styled';

interface Props {
  id: number;
  text: string;
  onDelete: Function;
}

const TodoItem = ({ id, text, onDelete }: Props): JSX.Element => (
  <StyledTodoItem>
    <span>{text}</span>
    <button onClick={() => onDelete(id)}>X</button>
  </StyledTodoItem>
);

export default TodoItem;
```

이 컴포넌트는 정말 간단합니다. 간단하게 컴포넌트가 기대한는 props에 대한 interface를 만들기만 하면 됩니다.

파일을 열면 바로 확인이 가능하도록 파일 상단에 Props interface를 작성하는 것을 좋아합니다. 이렇게 코드를 수정함으로써, **PropsTypes** 코드를 제거할 수 있게 되었습니다. (솔직히 말씀드려서 읽기 어려운 부분입니다. )

---

지금까지 말씀 드린 것들이 이 가이드의 전부입니다! 이제 여러분은 **타입스크립트 프로젝트를** 갖게 되셨습니다. 자바스크립트 파일이 공존하겠지만, 언제든지 타입스크립트로 바꾸시면 됩니다. 

아래 코멘트로 무언가를 타입스크립트로 바꾸셔야 한다면 주저하지말고 남겨주세요. 기쁜 마음으로 읽도록 하겠습니다!

**리액트에서의 타입스크립트**에 대해서 조금 더 알고 싶으시다면, [이 페이지](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)를 참고하세요!