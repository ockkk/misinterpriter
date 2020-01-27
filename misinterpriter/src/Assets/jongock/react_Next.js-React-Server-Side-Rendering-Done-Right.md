# Next.js - React Server-Side Rendering에 대한 올바른 대응

![iphone](https://miro.medium.com/max/12000/1*Tp1sCE9Palf9L1Kq2ABeoQ.jpeg)       Photo by [Pathum Danthanarayana](https://unsplash.com/@pathum_danthanarayana?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/apps?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

### Next.js 는 리엑트의 서버 사이드 렌더링을 위한 최소한의 프레임워크이다. 

## 배경

[*Next.js는 2016년 10.25일에 오픈된 소스이다.*](http://bit.ly/2icjPnC)*. *Nest.js의 회사는 [ZEIT](https://github.com/zeit) 이다.*

**[Next.js](https://github.com/zeit/next.js/) 는 오픈 소스 세계에서 매우 활발하고 안정된 조직의 지원을 받고 있다. Next는 몇달안에 사라지지 않고 계속 남아 있을 것이다. ** 

![Next](https://miro.medium.com/max/2336/1*cvtvf9Bx3OJlVFqISyhXOg.png)



우리는 공식적으로 server-side로 렌더된 react  앱 시대에 있다. 이는 다음과 같은 많은 질문을 제시한다. 

- **왜 신경써야 하는가?** 이미 좋은 React앱을 만드는 방법을 알고 있다. 

좋은 질문이다. 이에 대한 답은 우리는 항상 새로운 것을 배우고 새로운 개념에 대해서 열려 있어야 한다. **개발자란 평생 학생이 된다는 것**임을 기억해야 한다. Next는 개발자로서의 삶을 향상 시킬 수 있다.

새로운 기술이 나올 때마다 "내가 왜 신경써야하나요?"라고 물으면 90년대 개발 tool을 고집하며 사용하고 있을 것이다. 

사용의 편의성으로 혁명이 일어났던 jQuery가 나왔을 때 "왜 신경을 쓰지?"라고 물을수 있었고 바닐라 자바스크립트만 사용할 수도 있었다. 그러나 거의 모든 코드 기반을 개선하고 우리 모두에게 좀 더 쉬운 삶을 제공 했다는 것을 인정해야 한다. 

결국 혁신이 이길 것 이다. 왜 얼리어답터가 되지 않는가?

## Next가 당신의 삶을 향상시키는 방법

- **사용의 용의성**. 웹팩 설정, react router, react and react dom을 잊어버려라. 모두 상자에 포함되어 있다. 
- **코드 분할**
- 첫페이지 로딩 **성능**
- 향상된 **SEO**
- **자바스크립트의 모든것** (Mongo DB와 Meteor에서 이것을 들었다.).
- Meteor는 훌륭하다. Meteor 및 Mongo DB와 함께 프로덕션 프로젝트를 진행하고 있지만 Next는 다은의 진화 단계이다. Next는 많은 것들이 옳다. (가장 중요한것은 단순성이다.)

[이점이 궁금한가? 다음은 자세한 내용을 설명하는 전체 기사이다.](https://www.codementor.io/tgreco/5-of-the-many-things-to-love-about-zeit-s-next-js-bpszu99g1)

![img](https://miro.medium.com/max/640/1*-dHA-_9igRBQA1fpCmcb6Q.gif)



## Client-Side Rendering 과 Server-Side Renderingd의 차이는 무엇인가? 

**Client-side rendering.** 일반적으로 React를 사용할 때 브라우저는 최소 HTML 페이지를 다운로드하고 컨텐츠는 JavaScript로 채워진다. 

 **Server-side rendering** 에서는 서버에서 초기 컨텐츠가 생성되므로 브라우저는 HTML 컨텐츠가있는 페이지를 다운로드 할 수 있다. 컨텐츠 업데이트는 여전히 브라우저에서 처리된다.

### sever-side rendering의 단점

- Server0side rendering은 많은 상황에서 성능을 향상시킬 수 있지만 다른 상황에서는 성능을 저하시킬 수 있다. 
- SSR은 서버에서 더 많은 작업을 수행하므로 HTTP응답을 반환하는 데 시간이 조금 더 걸린다. 서버 로드가 많은 경우 월씬 더 오래 걸린다. 
- HTML 크기가 커지고 다운로드하는 데 시간이 더 걸린다. 대부분의 앱의 경우 이는 무시해도 되지만 React components 에 긴 목록이나 테이블이 포함되어 있으면 요인이 될수도 있다. SSR은 일반적으로 앱 성능을 향상 시키지만 항상 그런것은 아니다. 
- SSR을 사용하면 응용 프로그램의 복잡성이 증가하여 다른 기능 및 개선작업에 소요되는 시간이 줄어든다. 



## Server-Side Rendering의 대안은 무엇인가?

1. **보통의 clinet-side 렌더.** SEO를 위한 Googlebot의 자바스크립트 크롤링 기능을 활용하고 성능 향상을 위해 앱의 다른 영역에 집중하라. 당신의 SEO는 Baidu, Bing 및 Yahoo에서 어려움을 겪을 것이다. 
2. [prerender](https://prerender.io/) 는 캐시된 버전의 페이지를 저장하는 서비스이다. 니는 코드를 단순하게 유지하면서 SEO와 성능을 모두 도와준다. 개인적으로 이 서비스를 시도하지 않았으므로 품질을 보증할 순 없다. [이 미니멀리스트 pre-render 가이드가 유용할 것이다.](https://codeburst.io/concise-and-improved-approach-to-server-side-rendering-ssr-with-create-react-app-53a7be101e65)



## Next 및 Server-Side Rendering에 기회를 줄 준비가 되었나요? 많은 사람들이 이미 사용하고 있습니다!

![깃헙](https://miro.medium.com/max/3464/1*lxRQDWukZ6A_QR5_wZR1Ew.png)



## Next 시작하기 

다른 Node 프로젝트와 마찬가지로 Next.js 프로젝트를 시작한다. Next를 npm 모듈로 설치하기만 하면 된다. 이 명력 TK를 터미널에 붙여넣어라.

```javascript
npm install --save next react react-dom
```

Node 프로젝트를 성공적으로 시작한 후 **react, react-dom** 와 **next** 을 설치하고 텍스트 편집기 / IDE로 프로젝트를 연다. 다음 스크립트를 추가하라.

![script](https://miro.medium.com/max/2400/1*j2-5csy2IR9JHGT8VPhB7A.png)



## dev 스크립트를 실행 하라

![scriptrun](https://miro.medium.com/max/2596/1*qKb54zJqqF-cCpZ913JPdQ.png)

그리고 이게 끝이다! Next를 성공적으로 설치하였다. 시작하는 것이 얼마나 쉬운지 보았지? 

우리는 React, web pack, 핫 모듈 로딩, routing, server-side rendering, pre-fetching 및 그리고 더 많은 것들을 설치하는데 어려움을 겪고 있다. 

당신은 돼 Next가 404페이지를 보여주는지 물을 것이다.

아직 페이지를 만들지 않았기 때문이다. 

`Pages / index.js` 안에 첫 번째 컴포넌트를 만들어 보자.

![pages](https://miro.medium.com/max/2272/1*OibZgL7L3LDzoXZ4WOIMog.png)

React를 import할 필요가 없는 방법과 어떻게 Next가 라우팅을 선택하는지 주목하라. 다른 단락을 추가해보라 우리는 핫 모듈을 다시 로드할 수 있다.

#### *Beautiful*

앱의 소스를 본다면 다음과 같이 표시된다. 

![source](https://miro.medium.com/max/5120/1*CwvW7NVWIEoG3XDpCA2FgQ.png)

Next는 마술을 하고 있다. 우리의 React앱은 server-side render가 가능하다. 

Cool! 이 글은 **Server-side rendering**, **유용한 이유** 그리고 **Next로 ball을 굴리는 방법**에 대한 소개이다. 

[*강력한 Next 자습서를 통하여 강력한 기능들을 모두 활용하시오*](http://bit.ly/2zUesEh)

JavaScript 기능을 한 단계 끌어 올리려면“[*You Don’t Know JS*](https://amzn.to/2LSDpG6?source=post_page---------------------------)”책 시리즈를 읽는 것이 좋다.

읽어 주셔서 감사합니다. 여러분이 저만큼 배웠기를 바랍니다. ❤





## 이글은 [Indrek Lasn](https://medium.com/@indreklasn?source=post_page-----f9700078a3b6----------------------)의 "Next.js — React Server-Side Rendering Done Right"의 글을 번역 하였습니다.

출처: <"https://medium.com/better-programming/next-js-react-server-side-rendering-done-right-f9700078a3b6">