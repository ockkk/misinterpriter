# 리액트 job 인터뷰 - 채용자 관점

![지원자](https://miro.medium.com/max/2702/1*MQNFrJwbmP7AmaSU-rxuBg.jpeg)

> **주의** 
> 이 글은 인터뷰에서 예상되는 질문과 완벽한 답변에 대한 목록이 아니다. 이 게시문의 요점은 내가 묻는 질문, 답변에서 찾고있는 내용 및 답변이 없는 이유를 보여주는 것이다. 만약 리스트를 원한다면  [*“best react interview questions 2018”*](https://github.com/sudheerj/reactjs-interview-questions) 확인해라.  

저의 직업 중 일부는 소위 "기술 인터뷰"를 토애 Frontend 개발자에 지원할 수 있는 후보자의 가능성을 평가한다. 

구글에서 "리액트 인터뷰 질문"(또는 "[기술] 인터뷰 질문")에 대해서 검색해 본적이 있다면 아마도 시대에 뒤떨어지거나 "state 와 props의 차이는 무엇인가?" 또는 "가상돔이란 무엇인가?"와 같이 다시 포스팅하는 "리액트 인터뷰 질문 top10"의 셀수 없는 검색 결과를 보았을 것이다. 

이러한 대답에 대한 질문들을 아는 것이 면접관이 채용 여부의 기준이 되어서는  안된다. 이러한 질문들은 지원자가 일상 업무에서 알고 이해하고 구현해야 하는 것이다. 이러한 질문을 받는 지원자라면, 인터뷰 대상자가 기술 배경이 없거나(HR 담당 또는 "linked in 헤드 헌터") 이것을 형식적인 것으로 본다. 

인터뷰는 시간 낭비가 되어서는 안된다. 지원자의 과거 경험, 과거 지식 및 개발 기회에 대한 아이디어를 제공해야 한다. 지원자는 조직의 프로젝트에 대해 배우고(가능한 경우) 자신의 성과와 기대치에 대한 피드백을 받아야 한다. 면접에는 오답이 없다.(질문이 엄격하게 기술되지 않는 한) 답은 사람의 사고 과정에 대한 통찰력을 제공해야 한다. 

#### 이 글은 인터뷰를 수행하는 사람의 관점에서 작성되었습니다. 

## 서로 알아가보자!

대부분의 인터뷰의 경우 Skype 또는 다른 음성(또는 음성+영상) 커뮤니케이션 플랫폼을 통해서 진행될 것이다. 가능성을 보여주는 것은 그들의 마음을 열게하는 좋은 방법이다. 

### 당신이 이전의 직업, 어떻게 팀에 적응 했는지?, 당신의 책임(직책?)은 무었이었는지? 에 대해서 좀 말해 줄수 있습니까?

이전 직장에서 무엇을 했는지에 대해서 아는것은 (만약 그가 허락한다면) 시작 하기에 좋은 방법이다. 이것은 이전의 업무 경험에 대한 몇 가지 기본 아이디어를 제공 한다: soft skills("나는 유일한 개발자였다...", "나는 그리고 나의 동료...", "나는 6명의 개발자로 구성된 팀을 관리했다...") 그리고 hard skills("...우리는 100만명의 사용자가 있는 프로그램을 만들었다.","... 프로그램의 엔더링 시간을 최적화하는데 도움이되었다.","...수십개의 자동 테스트를 생성했다.").

## React의 주요 판매점은 무엇 입니까? 왜 React를 선택 했습니까?

JSX, VDOM 등은 엄급하지 않겠다. 우리는 이미 홈페이지의 "특징"을 읽고 있다. 왜 **당신은** React를 사용하기 시작했습니까?

"학습이 쉽고 마스터하기 어려운"API (다른 솔루션과 비교할 때 상당히 작음) 때문입니까? 좋습니다. 즉, 새로운 것을 배우고 나갈 때 배우는 것을 의미한다.

“직업 기회”때문 이었습니까? 좋습니다 — 시장에 적응할 수있는 사람으로서 5 년 후에는 Next Big Framework가 출시 될 때 아무런 문제가 없을 것이다. 우리는 이미 충분한 jQuery 개발자가 있다. 

이것을“엘리베이터 피치”시나리오와 비슷하게 생각하라. (상사와 함께 엘리베이터에 있고 20 층에 나가기 전에 새로운 기술을 사용하도록 설득해야한다.) 나는 리액트가 고객과 개발자에게 어떤 혜택을 제공할 수 있는지 알고 싶진 않다.

## 좀 더 기술적으로 시작합시다

시작 단락 중 하나에서 언급했듯이 VDOM이 무엇인지 묻지 않겠다. 우리는 그것을 알고 있다. 그러나 나는 당신에게 묻는다...

### JSX 란 무엇이며 JavaScript 코드로 어떻게 작성할 수 있습니까? 브라우저는 어떻게 그것을 인식합니까?

JSX는 Facebook이 대중화 한 표기법일 뿐이다. Babel / TSC와 같은 도구 덕분에 우리는 글을 쓸 수 있다.
`React.createElement`는 좀 더 쾌적한 형태로 호출한다.

왜이 질문을합니까? JSX의 기술적 측면과 그로부터 오는 모든 제한 사항을 이해하고 있는지 알고 싶다:
왜 우리는 파일 상단에 `React`를 사용하지 않을 경우에도 `import React from 'react'`가 필요합니까?; component가 직접 여러 요소를 반환 할 수 없는 이유가 무엇입니까?

#### 보너스 질문 : 왜 JSX의 컴포넌트 이름이 대문자로 시작합니까?

이것이 리액트가 구성요소를 렌더링하는 방법이며 HTML 요소가 아닌 것을 나타내는 방법이라는 답변이다.

보너스 포인트 : 해당 규칙에는 예외가 있다.
 예 : 이 component에 `this.component`를 할당 한 다음 `<this.component />`를 수행하면 작동한다.

### React에서 선언 할 수있는 주요 2 가지 유형의 구성 요소는 무엇이며 언제 다른 구성 요소를 사용합니까?

어떤 사람들은 이것이 presentation 및 container components에 관한 것이라고 생각하지만 이것은 `React.Component` 및 function component에 관한 것이다.

정답은 life cycle method 와 component state를 언급해야한다.

### life c를 ycle언급 한 이후로, stateful component를 mounting하는 cycle을 안내해 줄 수 있습니까? 어떤 기능이 어떤 순서로 호출됩니까? API에서 데이터를 요청하는 위치는 어디입니까? 왜?

긴 질문이다. 자유롭게 2개로 나눠라. 당신은 "life cycle에 대해 묻지 않는다고 말 했어요!"라고 생각할 것이다. 나는 life cycle에 관심 없다. 나는 최근 몇 달 동안 life cycle에서 일어난 변화에 관심이 있다.

답변에 `componentWillMount` 가 포함되어 있으면 이번 버전의 React만 사용하고 있거나 오래된 튜토리얼을 보았다고 가정할 수 있다. 두 경우 모두 우려를 나타내야 한다. `getDerivedStateFromProps`가 찾고있는 답이다.

보너스 포인트 : 프로세스가 서버 측에서 진행되는 방식의 차이점을 언급한다.

data fetching에 대한 질문도 마찬가지이다. `componentDidMount`를 말하거나 듣기를 원하는 것입니다.

#### 보너스 질문 : 왜 `constructor`가 아닌 `componentDidMount`입니까?

듣고 싶은 두 가지 이유는 다음과 같다: 
"렌더가 발생하기 전에 데이터가 없습니다"  주된 이유는 아니지만 구성 요소 처리 방식을 이해하고 있음을 보여준다.
“React Fiber의 새로운 비동기 렌더링으로…” 누군가 그의 답을 대신 해주고 있다.  

### API에서 데이터 가져 오기를 언급했습니다. component를 다시 mount 할 때 데이터를 다시 가져 오지 않도록하려면 어떻게해야 합니까?

"캐시 무효화"는 문제가 아니라고 가정한다. 이것은 엄격하게 React와 관련이 없지만 React에 국한된 답변이라면 이 답변 또한 좋다. 아마도 그들이 GraphQL로 작업한 적이 있을 것이다. 

후보가 응용 프로그램에서 UI와 다른 레이어를 연결하지 않는 아이디어를 이해하는지 확인해라. React 구조 외부의 API를 언급 할 수 있다.

### "state를 올리는" 아이디어에 대해서 설명할 수 있습니까?

좋아, 나는 전형적인 React 질문을한다. 이것은 중요하지만, 후보자에게 호흡 공간을 줄 수 있다.

“형제간에 데이터를 전달할 수 있습니다”에서“보다 재사용이 용이 한보다 pure-presentational components를 가질 수 있습니다”에 이르는 답변이 선호된다. Redux는 여기에 언급 될 수도 있지만, 지원자가 커뮤니티에서 추천하는 모든 것들을 왜필요한지 이해하지 않고 사용하고 있다는 것을 의미할 수 있기 때문에 좋지 못한 답일 수도 있다.

#### 보너스 질문 : component에서 component로 데이터를전달하지 않고 여러 수준의 깊이로 데이터를 전달하는 방법은 무엇입니까?

Context는 React 16.3 이후 주류가 되었다. 그것은 전부터 있었지만 문서는(의도적으로) 부족했다. Context가 작동하는 방식을 설명할 수 있는 동시에(하위 기능 패턴에 대한 지식을 보여주는) 이점도 있다. 

Redux / MobX가 여기에 언급되면, 좋습니다.

## React ecosystem

React 앱 개발은 프로세스의 일부이다. 디버깅, 테스트, 문서화가 훨씬 더 많다.

### React 코드에서 문제를 디버깅하는 방법은 무엇입니까? 어떤 도구를 사용 했습니까? 구성 요소가 다시 렌더링되지 않는 이유를 조사하는 방법은 무엇입니까?

린터 (eslint, jslint) 및 디버거 (React Developer Tools)와 같은 기본 도구에 익숙해야한다.

RDT를 사용하여 component state / props가 올바르게 설정되어 있는지 확인하여 문제를 디버깅하는 것이 좋은 대답이다. 개발자 도구를 사용하여 breakpoints를 설정하는 것도 좋은 방법이다.

### 단위 / E2E 테스트를 작성하기 위해 어떤 테스트 도구를 사용 했습니까? 스냅 샷 테스트 란 무엇이고 그 이점은 무엇입니까?

대부분의 경우, 테스트는“필요한 악”이지만 우리에게 필요한 것이다.

많은 좋은 답변이 있다:karma, mocha, jasmin, jest, cypres, selenium, enzyme, teact-test-library등. 지원자의 최악의 답변은 “우리는 이전 회사에서 단위 테스트를 하지 않고 단지 매뉴얼 테스트만 했습니다”. 이다.

스냅 샷 테스트 파트는 프로젝트에서 사용하는 내용에 따라 다르다. 도움이되지 않으면 물어 보지 마라. 그러나 그렇게하면 UI 계층 (생성 된 HTML + CSS)에 대한 빠르고 쉬운 회귀 테스트가 수행된다.

# Small code challenges

가능한 경우 다음과 같이 작은 코드 문제도 해결해야 한다. 예를 들어 다음과 같이 수정 / 설명하는 데 1 ~ 2 분 정도 소요된다. :

```javascript
/* What is wrong with this example, and how would you go bout fixing or improving the component? 
*/ 
class App extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || 'Anonymous'
    }
  }    
  render() {
    return (
      <p>Hello {this.state.name}</p>
    );  
  }
}
```

여러 가지 방법으로 해결할 수 있다:  state를 제거하고 props를 사용, `getDerivedStateFromProps`를 구현 또는 function component로 변경.

```javascript
/**
 * Can you explain the differences between all those ways 
 * of passing function to a      component?
 * What happens when you click each of the buttons?
 */
class App extends React.Component {
  
  constructor() {
    super(); 
    this.name = 'MyComponent';
    
    this.handleClick2 = this.handleClick1.bind(this);
  }
  
  handleClick1() {
    alert(this.name);
  }
  
  handleClick3 = () => alert(this.name);
render() {
    return (
      <div>
        <button onClick={this.handleClick1()}>click 1</button>
        <button onClick={this.handleClick1}>click 2</button>
        <button onClick={this.handleClick2}>click 3</button>
        <button onClick={this.handleClick3}>click 4</button>
      </div>
    );
  }
}
```

코드가 더 많기 때문에 조금 더 걸린다. 응시자가 정답을 찾으면“왜?”라고 답하라. `click2`가 작동하는 이유는 무엇입니까?

React 질문이 아니다. 누군가“React in React…”로 시작하면 JS 이벤트 루프를 실제로 이해하지 못한다는 의미이다.

```javascript
/**
 * What's the issue with this component. Why?
 * How would you go about fixing it?
 */
class App extends React.Component {
state = { search: '' }
handleChange = event => {
/**
     * This is a simple implementation of a "debounce" function,
     * which will queue an expression to be called in 250ms and
     * cancel any pending queued expressions. This way we can 
     * delay the call 250ms after the user has stoped typing.
     */
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        search: event.target.value
      })
    }, 250);
  }
render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        {this.state.search ? <p>Search for: {this.state.search}</p> : null}
      </div>
    )
  }
}
```



자, 이것에 대한 설명이 필요하다. 디 바운스 기능에는 오류가 없다. 응용 프로그램이 작동하는 방식은 사용자가 입력을 멈춘 후 250ms 상태를 업데이트 한 다음 문자열 "Search for :…"를 렌더링하는 것이다.

여기서 문제는 이벤트가 `React`의 `SyntheticEvent`이며 이벤트와의 상호 작용이 지연되면 (예 : setTimeout을 통해) 지워지고 `.target.value` 참조가 더 이상 유효하지 않다는 것이다.

보너스 포인트 : 지원자는 그 이유를 설명 할 수 있다.



## 기술 질문은 끝났어.

이것은 지원자의 기술 능력에 대한 아이디어를 제공하기에 충분해야한다. 더 개방적인 질문에 대해서는 아직 시간이 남아 있어야한다.

### 과거 프로젝트에서 가장 큰 문제는 무엇 이었습니까? 가장 큰 성과는 무엇입니까?

이것은 첫번째 질문으로 돌아간다. 답변은 개발자마다, 직책마다 다를 수 있다. 주니어 개발자는 자신의 가장 큰문제가 복잡한 과정에서 발생했지만 문제를 극복 할 수 있었다고 말할 것이다. 더 고위 직책을 찾는 사람은 앱 성늘을 최적화하는 방법을 설명하고 팀을 이끌 수 있는 사람은 페어 프로그래밍을 통해 속도를 개선한 방법을 설명한다. 

### 시간 제한이 무제한이고 마지막 프로젝트에서 한 가지를 수정 / 개선 / 변경할 수 있다면 무엇이고 왜 그런가?

그리고 또 다른 개방형 질문에 대한 답은 응시자가 찾고 있는것에 따라 다르 Redux를 Mobx로 교체하려고 합니까? 텍스트 설정을 개선 하시겠습니까? 더 나은 문서를 작성 하시겠습니까?

## 테이블 및 피드백 반전

이제 역활을 바꿀 떄 이다. 지원자의 기술과 성장 가능성에 대한 확실한 생각이 있을 것이다. 질문을 하자. 회사와 제품에 대해 더 많이 알 수 있을 뿐만 아니라 theyask가 성장하려는 방향에 대한 정보를 제공할 수도 있다. 

[Carl Vitullo](https://medium.com/u/ec0b3a253e09?source=post_page-----f1096f54dd16----------------------)는 잠재적 고용주에세 어떤 질문을 할지에 대해 좋은 기사를 썻다. 다음 사항을 참고하시오. 답변을 준비하거나 NDA 요구 사항 등으로 인해 정해진 단계를 밟을 수 없다고 하십시오.

- [onboarding and the workplace](https://medium.com/@vcarl/questions-to-ask-your-interviewer-82a26e67ce6c)
- [development and emergencies](https://medium.com/@vcarl/questions-to-ask-your-interviewer-development-and-emergencies-f7fbc4519e5b)
- [growth](https://medium.com/@vcarl/questions-to-ask-your-interviewer-growth-c88eed119ce2)

### 피드백 제공

응시자가 일부 질문에 대해 성과가 저조하거나 잘못한 경우 (또는 예상했던 것과 다른 경우) 이 시점에서 그것들을 명확히하고 싶을 수도 있다. 상대방을 선심 쓰는 것처럼 들리게하지 말고 눈에 띄는 문제를 설명하시오. 개선에 사용할 수있는 솔루션과 리소스를 제공한다.

나머지 채용 프로세스가 귀하에게 달려 있다면 X 일 내에 다시 돌려받을 것이라고 말하고 그렇지 않은 경우 회사 직원이 그렇게 할 것이라고 말한다. 이 과정이 2 ~ 3 일 이상 소요될 것임을 알고 있다면 알려주어라. 현재 IT는 큰 시장이며, 응시자는 여러 번의 인터뷰를했을 수도 있다. 다른 제안을 수락하기 전에 다시 기다리지 않을 수도 있다.

#### 지원자를 무시하지 마십시오. 말 그대로 사람들이 소셜 미디어에 대해 공유하는 주요 불만이다.

> 이 블로그 게시물에 표시된 의견은 본인의 의견이며 과거 또는 현재 고용주, 고객 또는 협력 업체의 의견은 반영하지 않습니다.



## 이글은 Bartosz Szczeciński의 "A React job interview — recruiter perspective."의 글을 번역 하였습니다.

<출처: https://medium.com/@baphemot/a-react-job-interview-recruiter-perspective-f1096f54dd16>



