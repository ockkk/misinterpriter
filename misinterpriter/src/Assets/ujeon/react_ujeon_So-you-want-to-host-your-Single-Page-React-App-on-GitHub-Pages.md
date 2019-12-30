# GitHub Pages에서 Single Page React 앱을 호스팅 하시려구요?

*본 기사는 [Brendan McIlhenny](https://itnext.io/@bmcilhen?source=post_page-----a826ab01e48----------------------)의 [So you want to host your Single Page React App on GitHub Pages?](https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48)을 번역한 기사입니다.*

![](https://miro.medium.com/max/3072/1*KqebL8rM9kFuW2w-vshOyQ.png)

[*이 기사를 링크드인에 공유하려면 여기를 클릭하세요 »*](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fitnext.io%2Fso-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48)

**다시 생각 해봐! 아냐.. 그냥 해야겠어. 호스팅하는게 가능은 하지만, 올바른 컴포넌트를 렌더링하기 위해서는 약간의 설정을 해야합니다.**

GitHub에는 버튼 클릭 몇 번으로 GitHub 레파지토리를 살아 숨쉬는 웹 사이트로 변환하는 [GitHub Pages](https://pages.github.com/)라는 기능이 존재합니다. **a)** 프론트 엔드 코드 (JavaScript, CSS 및 HTML)으로만 작성되어야 하며, **b)** 리액트으로 작성되어서는 안되죠. 만일 저처럼 최근에 리액트 싱글 페이지 어플리케이션을 완성하셨고, 사용자가 특정 URL들을 탐색할 때 어떠한 컴포넌트를 보여주기 위해 React-Router-Dom 라이브러리를 사용하셨다면, 이 가이드가 도움이 되실 겁니다.

잠시 다른 이야기를 하자면 (바로 당장 답을 알고싶다면, "**화가 나서 지금 당장 답을 봐야만 하는 사람들을 위한 퀵 가이드!**"로 넘어가시면 됩니다): 며칠간의 어질어질한 세션을 마치고 저는 마침내 Heroku에 백엔드를 호스팅했습니다. 상황이 호전되고 있었죠! 아니면 그렇게 생각만 했던가요😠. 제가 과거에 호스팅을 몇 번 성공했던 GitHub Pages에 사이트를 호스팅하려고 했을 때 ([이곳](https://bmcilhenny.github.io/chylingo/html/)에서 도널드 트럼프로부터 영감을 얻어서 만든 듀오링고 앱을 참조하시거나, Strathmere의 모바일 친화 [사이트](https://bmcilhenny.github.io/projectstrathmere2/#)로 알려진 Jersey Shore의 best dang city를 위한 파도 예측 사이트를 참조하세요), 하지만 저는 리액트를 사용해서 이 앱들을 만들었기 때문에 사용자들이 사이트에서 한 동작에 따라 GitHub이 컴포넌트를 인식하도록 만들기 위해서 몇 줄의 코드를 추가할 필요가 있었습니다.

![](https://miro.medium.com/max/1313/1*-ogTQomswG7Y2qnhwdeqqw.gif)

Chylingo는 이 모든 영광을 누린 앱입니다. FYI: 애니메이션을 만드는데 수세기가 걸린 것 같습니다. (근데 GIF에서는 이상하게 보이네요. 아오...)

## 화가 나서 지금 당장 답을 봐야만 하는 사람들을 위한 퀵 가이드!

그러니깐 여러분은 지금 React로 앱을 만드시고 로컬 컴퓨터에서는 멋지게 보이는 상황이군요. 대박입니다! 이제 온라인으로 연결해보겠습니다.

1. 원격 GitHub 레파지토리가 로컬 프로젝트에 연결되어 있는지 확인하세요. 자세한 지침은 [해당 문서](https://help.github.com/en/github/using-git/adding-a-remote)를 참조하세요.
2. npm install을 실행합니다. 

```
$ npm install
```

이는 최신 버전의 npm 및 node.js가 설치되어 있는지 확인합니다. 저는 Rails로 백엔드를 실행하고 있음에도 이 명령어 없이는 이상한 오류가 뜨더라구요.

3. npm run build를 실행합니다.

```
$ npm run build
```

위의 명령어는 GitHub이 프로젝트를 GitHub Page가 다룰 수 있는 파일 구조로 변경하는데 사용될 JavaScript, HTML 그리고 CSS 뭉치를 생성합니다. 

![](https://miro.medium.com/max/465/1*Ssk1NFJIo6D-QZZ9xbyVsA.png)

위 이미지는 개발을 배우는데 좋은 자료가 많은 [FreeCodeCamp](https://medium.freecodecamp.org/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089)에서 가져왔습니다. 팟캐스트도 운영중이니 한 번 확인해보세요.

여러분은 ^ 같은 것을 보게 될 겁니다.

4. 위의 이미지에서 "homepage" 줄을 복사해서 package.json에 추가하세요.

```
“homepage” : “http://yourgithubname.github.io/yourreponame"
```

이 줄은 여러분이 생성하고 있는 브랜치와 살아있게 만드려는 레포를 연결시켜 줍니다.

5. npm run build를 다시 한 번 실행해줍니다.

```
$ npm run build
```

그러면 이전 실행과는 조금 변경된 코드가 콘솔에 출력될 겁니다. 다음과 같죠:

```
블라 블라 블라

"scripts": {
//..
“deploy”: “gh-pages -d build”
}
```

위의 "deploy" 부분을 복사해서 package.json의 "scripts"에 복사하시면 됩니다.

```
“scripts”: {
 “start”: “react-scripts start”,
 “build”: “react-scripts build”,
 “test”: “react-scripts test — env=jsdom”,
 “eject”: “react-scripts eject”,
 “predeploy”: “npm run build”,
 “deploy”: “gh-pages -d build”
 }
//bold means I added this line. Do it.
```

6. npm run deploy를 실행합니다.

```
$ npm run deploy
```

이렇게 하면 GitHub gh-pages 플러그인으로 이름이 'gh-pages'인 새로운 브랜치의 원격 레포의 새 브랜치로 현재 레포를 자동으로 푸쉬할 뿐만 아니라 (또는 이전에 이 명령을 실행한 적이 있는 경우 기존 브랜치의 파일을 업데이트합니다), 자동으로 레포 설정을 전환해서 GitHub Pages를 켜고 어플리케이션을 'gh-page' 브랜치로 렌더링하는 데 사용할 레포 GitHub 페이지를 설정합니다. 이는 모든 React 자바스크립트를 읽을 수 있는 코드로 변환합니다. 

이제 재밌는 부분입니다. 여러분이 GitHub Pages 사이트로 이동하면 (npm run deploy 명령을 실행하면 성공적으로 배포 된 사이트를 볼 수 있는 주소를 알려줍니다), 무엇이 보이시나요? 저처럼 루트 경로를 설정하지 않으면 404에러가 발생합니다.

![](https://miro.medium.com/max/646/1*1W78WOKiOMdN2FWhnC5WkA.png)

7. 루트 경로를 작성하고 basename={process.env.PUBLIC_URL}을 BrowserRouter 컴포넌트의 prop으로 설정하세요.

여기서 제가 공황상태에 빠졌는데, 왜냐하면 이 컴포넌트를 BrowserRouter에 추가하고, 루트 경로를 재설정하기 전에 제가 GitHub Pages에 들어갔을 때 아무것도 나타나지 않았기 때문이죠. 콘솔을 샅샅이 살펴본 결과 404 에러가 'Home' 컴포넌트를 렌더하지 못한다고 알려주고 있음을 알게 되었습니다. 제 앱이 로컬에서는 멀쩡하게 작동했는데 서버에서는 작동하지 않는 이유가 무엇이었을까요? 신비하고도 미묘한 **process.env.PUBLIC_URL**을 입력해보세요.

만일 console.log(“Your process.env.PUBLIC_URL”, process.env.PUBLIC_URL)을 입력한 다음, 올바른 GitHub Pages URL로 이동하면, 콘솔에 "/여러분의레포이름"이 표시 될겁니다. 단서를 찾았습니다!

따라서 저는 index.js 파일에 있는 Router (BrowserRouter을 Router로 이름지었습니다) 에 basename prop을 추가했습니다.

``` react
import React from ‘react’;
import ReactDOM from ‘react-dom’;
import ‘./index.css’;
import App from ‘./App’;
import GameOver from ‘./components/GameOver’;
import StartGame from ‘./components/Home’;
import ‘semantic-ui-css/semantic.min.css’;
import { BrowserRouter as Router } from ‘react-router-dom’;
ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById(‘root’));
```

그런 다음 App.js 파일을 탐색해서 루트 경로를 변경했습니다. 기존 파일은 다음과 같이 생겼습니다:

```react
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));
// I added the code basename={process.env.PUBLIC_URL} so that in my App.js file I could map my components to certain routes in my App render() function like so:
render() {
    console.log(this.state);
    console.log("This is the process.env", process.env.PUBLIC_URL)
    // debugger
    return (
      <div>
        <Route exact path={`/gameover`} component={GameOver} />
        <Route exact path={`/new`} render={ (routerProps) => < NewUser routerProps={routerProps} />} />
        <Route exact path={`/edit`} render={ (routerProps) => < EditUser routerProps={routerProps} />} />
        <Route exact path={`/home`} render={ (routerProps) => < Home routerProps={routerProps} setUpGame={this.setUpGame} />} /> // 볼드처리 되어 있습니다
        <Route exact path={`/gametime`} render={ (routerProps) => < QuestionContainer user1Id={this.state.user1Id} user2Id={this.state.user2Id} gameId={this.state.gameId} routerProps={routerProps}/>} />
      </div>
    );
  }
```

위의 볼드처리 된 부분이 보이시나요? 이 부분이 저의 랜딩 페이지였고 사용자가 링크로 이동했을 때 보여주고 싶었던 부분입니다. 저는 이 부분을 path={'/home'}에서 path={'/'}로 변경했습니다. 이는 라우트의 경로가 'process.env.PUBLIC_URL'(레포이름 + '/')와 일치할 때 Home 컴포넌트를 렌더링하게 됩니다. 제가 이 부분을 변경했을 때 비로소 랜딩 페이지가 나타났죠!

``` react
<Route exact path={`/`} render={ (routerProps) => < Home routerProps={routerProps} setUpGame={this.setUpGame} />} />
```

멋집니다! 제 경로는 정확하게 설정되었습니다. 다시 **process.env.PUBLIC_URL**로 돌아가죠. 스택 오버플로우에서는 process.env.PUBLIC_URL가 node.js 라이브러리의 일부분이고, 현재 어떤 개발 모드에 있는지, 로컬에서 앱을 작업하는지 (이 경우에는 process.env.PUBLIC_URL은 http://localhost:3000/ 혹은 그 효과에 따른 무언가일 경우가 높습니다), 혹은 GitHub Pages (http://bmcilhenny.github.io/trivia-front-end)와 같이 실제 프로덕션 서버에 존재하는지에 따라 변경되어 동적으로 생성되는 URL입니다.

다음 장에서 좀 더 자세히 다루어 보겠습니다:

## GitHub Pages와의 피비린내나는 난투극에서 얻은 것

1. GitHub Pages는 React의 Route 컴포넌트를 상자 밖에 꺼내서 사용할 만큼 똑똑하지 않습니다. 몇몇 사소한 구성 작업과 다양한 포럼과 [문서](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages)를 살펴보면서 저는 마침내 라우트가 제대로 작동해서 컴포넌트를 렌더링하게 되었습니다. 비록 수동으로 “https://bmcilhenny.github.io/trivia-front-end/edit” 와 같은 특정 URL으로 이동할 때 404 오류가 발생했지만 말이죠. 저는 홈페이지의 Nav 바를 통해서 이 경로에 도달할 수 있었지만, 새로고침을 하면 GitHub는 여전히 404 에러를 뱉어내고 있었죠. 이것이 저의 문제가 아니라 GitHub의 문제라는 것을 깨달은 것은 한시간 뒤였죠. GitHub이 React 앱을 GitHub 같은 레포로 변경하는 방식때문에  GitHub는 렌더링 할 index.html 파일을 계속해서 찾게 됩니다. 그래서 편법으로 index.html 파일에서 정확한 컴포넌트로 리디렉션하기 위해서는 index.html 파일에 스크립트를 추가할 필요가 있는 것이죠.
2. 만일 여러분이 react-router-dom 라이브러의 Link 컴포넌트를 사용하고 랜딩 페이지로 다시 연결하려고 하는 경우 (아마도 "홈으로가기" 버튼 같은 것들이죠), 저는 아래 경우를 해보았지만 성공하지 못했습니다:

```
//1. I tried: <Menu.Item as={Link} to={process.env.PUBLIC_URL} >
//2. and this: <Menu.Item as ={Link} to=”/” > to no avail.
```

제가 Link to=""를 하고 나서야 올바른 컴포넌트를 렌더링했는데, 저에게는 이치에 맞지 않지만, 뭐 프로그래밍이 그렇죠.

벽돌의 가장 거치고 딱딱한 부분에 머리를 맞은 느낌을 오랫동안 느낀 뒤에야 저는 마침내 GitHub Pages에 호스트 된 프론트엔드 React 앱을 가질 수 있었습니다. 라고 생각했죠.

### 루트 라우트가 아닌 라우트에서 강제 새로고침 처리 

삶에서 대부분의 일이 돌아가는 방식처럼, 리액트 앱에 구워진 파일들의 일부 중 README.md 파일에 다음과 같이 적혀있는 것을 문제를 해결하고 나서야 발견했습니다:

```
#### Notes on client-side routing

GitHub Pages doesn’t support routers that use the HTML5 `pushState` history API under the hood (for example, React Router using `browserHistory`). This is because when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:

* You could switch from using HTML5 history API to routing with hashes. If you use React Router, you can switch to `hashHistory` for this effect, but the URL will be longer and more verbose (for example, `http://user.github.io/todomvc/#/todos/42?_k=yknaj`). [Read more](https://reacttraining.com/react-router/web/api/Router) about different history implementations in React Router.
* Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `404.html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique [in this guide](https://github.com/rafrex/spa-github-pages).
```

browserHistory를 로컬에서 "/"와 같은 경로로 푸쉬할 수 있지만, GitHub에서는 browserHistory를 잃게 됩니다. 만일 앱 내에서 browserHistoty.push를 사용하는 경우, 여러분은 그것을 제거하고 Redirect to="route" 또는 Link to="route"로 변경하기를 바라실겁니다.

정보: "/newuser"와 같은 특정한 Router Route에서 새로 고침을 하면 404 에러가 발생할 겁니다. 왜냐하면 GitHub Pages는 index.htm이라는 싱글 페이지만을 읽을 수 있기 때문에 "/**newuser**"가 존재하는지 모르기 때문입니다. React Router가 실제로 하는 일은 클라이언트의 url 위치를 바꾸는 것이 아니라 url 내부의 텍스트를 변경할 때 브라우저가 실제로 새 주소에 있다고 생각하도록 속이는 역할입니다. GitHub이 [**hashHistory**](https://stackoverflow.com/questions/36289683/what-is-the-difference-between-hashhistory-and-browserhistory-in-react-router) 사용을 권장하는 이유가 여기에 있죠.

8.5시간이라는 진행 상황과 라우트를 다시 바꾸는 것은 꽤나 큰 작업인 것 같아서 [임시방편 라우트](https://github.com/rafrex/spa-github-pages)로 해결하기로 하였습니다. 천사같으신 분이 이 하드한 리프레쉬를 다루는 두 개의 스크립트를 작성해서 만일 브라우저가 404 에러를 만나게되면 하드 리프레쉬라고 불리는 올바른 "/route"로 이동하도록 브라우저가 자동으로 index.html 파일 (루트 경로)로 되돌려집니다. (?)

저의 완성된 프로젝트를 [여기](https://bmcilhenny.github.io/trivia-front-end/)서 확인하세요. [Josh Stillman](https://www.linkedin.com/in/josh-stillman/) 에게 논리적인 닌자 파트너가 되라고 해서 저와 팀을 이뤄서 이 산을 4일만에 정복하라고 말씀해주세요.

*마지막 메세지: 이 방법은 React 앱을 호스팅하는 최선의 방법이 아닙니다. 그 방법은 기껏해야 임시방편일 뿐이고, 시도해본적은 없지만 GitHub Pages가 사용자 인증을 처리할 수 있을지도 의심스럽습니다. 하지만, 세상은 요지경이잖아요?* 

![](https://miro.medium.com/max/1313/1*V34MX4LRqMzsr-Zz8Nlczw.gif)

*여기까지 오셨나요? 읽어주셔서 감사합니다! 저는 항상 저의 블로그와 프로젝트에 대한 피드백을 찾고 있습니다. 댓글로 남기거나 메세지 보내는 것을 겁내지마세요. 그리고 소프트웨어 개발로 커리어를 바꾸고 싶으시다면? 링크드인으로 연락주세요.*

