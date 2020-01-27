# React.js 웹 사이트를 추적할 수 있도록 Google Analytics를 설정하기

*본 기사는 [Lawrence Tan ](https://medium.com/@lawrey?source=post_page-----f49c2411d398----------------------)의 [Setup Google Analytics to track your React.js website within minutes.](https://medium.com/google-cloud/tracking-site-visits-on-react-app-hosted-in-google-cloud-using-google-analytics-f49c2411d398)을 번역한 기사입니다.*

![](https://miro.medium.com/max/612/1*f4P0drxh_F6EMMzyGOEr3g.png)

이 튜토리얼을 간단하게 하기 위해서, 저는 제가 작성한 [지난 튜토리얼](https://medium.com/google-cloud/hosting-a-react-js-app-on-google-cloud-app-engine-6d1341b75d8c)에서 go-go-cloud라는 React-app을 생성하고 [Google Cloud](https://cloud.google.com/)에 호스팅까지 한 부분을 가져오겠습니다. 이번에는 Github의 오픈 소스 라이브러리인 [React-GA](https://github.com/react-ga/react-ga)를 사용해서 구글 애널리틱스를 통합하는 방법에 대해서 알아보겠습니다.

먼저, [구글 애널리틱스 대시보드](https://analytics.google.com/analytics/web/)에 가서 몇가지 세팅을 하겠습니다. 왼쪽 아래 설정 버튼을 클릭한 후 관리자 탭에서 **계정 생성**을 클릭합니다.

![](https://miro.medium.com/max/308/1*Is44SK4Aye45Y0tACAIRjg.png)

![](https://miro.medium.com/max/790/1*u8tFOl2oMvzCFjd8Rf1A7A.png)

저와 같이 이전 포스팅에서 만든 앱 혹은 여러분이 추적하려는 웹 사이트에 맞춰서 해당 필드를 채우시면 됩니다. 적절한 URL을 붙여 넣으시면 됩니다.

그런 다음 고유한 추적 코드 (UA-123456789-1 처럼 생겼습니다.)를 보여주는 **추적 코드**페이지로 이동해야 합니다. (역주: 추적 코드 페이지는 속성->추적 정보의 하위 카테고리에 있습니다.)

대쉬보드를 설정하는 데 필요하는 것은 전부 끝났습니다!

이제 React-GA와 통합을 시작하겠습니다! 터미널로 이동해서 Github 웹 사이트에 나와 있는 지침에 따라서 패키지를 설치합니다.

``` 
$ npm install react-ga --save
```

bower을 사용하신다면, `npm` 을 `bower` 로 바꾸시기만 하면 됩니다. 이게 전부입니다!

이제 `App.js` 로 가서 아래의 코드를 맨 윗줄에 삽입하세요.

```jsx
import ReactGA from 'react-ga';
```

그런 다음 동일한 파일 내에서 여러분의 트래킹 코드를 이용해서 어느 수집기가 데이터를 어딘가에 넣을지 GA가 알 수 있도록 `ReactGA` 를 초기화하는 함수를 생성합니다:

``` jsx
function initializeReactGA() {
    ReactGA.initialize('UA-123791717-1');
    ReactGA.pageview('/homepage');
}
```

여기서는 첫줄에서 트래킹코드를 사용하여 GA를 초기화 한 다음, 컴포넌트가 처음 로드될 때 뷰 데이터를 `/homepage` 로 명명하여 사용자의 방문을 추적하도록 GA에 요청합니다. GA의 실시간 추적 기술을 통해서 이를 실제로 확인해보겠습니다!

![](https://miro.medium.com/max/2374/1*_DA56reQ-7APjjKeLaZsuw.png)

[대쉬보드](https://analytics.google.com/analytics/web/#/)로 돌아간 다음, 오른쪽 메뉴 패널에서 (역주: 왼쪽 메뉴 패널을 말하는 것 같습니다.) **실시간->개요**를 선택하면 한 명의 사용자가 활동 중임을 나타내는 데이터가 표시됩니다! 바로 여러분이죠!

사용자가 버튼을 누르거나 링크를 클릭 할 때와 같은 다른 추적 방법을 사용할 수도 있습니다. 이를 **이벤트**라고 하며 다음과 같은 방식으로 추적할 수 있습니다.

```jsx
ReactGA.event({
  category: 'User',
  action: 'Create an Account'
});
```

그런 다음 여기에서 추적을 확인할 수 있습니다:

![](https://miro.medium.com/max/394/1*Bvyqg_1DyIGWRPiY-Yjjmw.png)

### 결론

웹 로그 분석은 오늘날 우리가 만든 온라인 서비스에서 매우 중요한 역할을 합니다. 이러한 분석을 통해 더 나은 소프트웨어를 구축하고, 사용자가 실제로 무엇을 사용하는지 이해할 수 있으며, 사용자 흐름을 이해할 수 있기 때문입니다. 저는 이 튜토리얼을 통해서 여러분의 소프트웨어에 멋진 애널리틱스 생태계를 구축하고 앞으로 나아갈 수 있는 초석을 마련하셨기를 바랍니다!