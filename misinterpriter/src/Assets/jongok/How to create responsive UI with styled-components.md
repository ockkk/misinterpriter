# 스타일드 컴포넌트를 사용하여 반응형 UI를 만즈는 방법

ReactJS로 반응 형 웹 앱을 만드는 방법에는 여러 가지 접근법이 있다. Bootstrap과 같은 프레임 워크를 사용하는 것 외에도 나는 아주 쉽게 스타일 컴포넌트로 반응형 grid 뷰를 만들고 싶었다. 

![화면](https://miro.medium.com/max/6528/1*kl8Vpj5-QUrzAVbzvSih3Q.jpeg)

현제 나는 ReactJS와 스타일드 컴포넌트를 사용하여 실제 웹 앱(아주 작은 응용 프로그램)을 만들었기 때문에 좀 더 반응성이 좋은 것을 만드는 것이 얼마나 쉬울까 하는 생각이 들었다. 더 정확하게는 부트스트랩으로 쉡게 하는것 처럼 반응형 페이지 레이아웃을 만드는 방법이 궁금했다. 그리고 그것이 우리가 이 글을 따라 만들려고 하는 것인데, 이것은 우리가 웹사이트를 휴대폰이나 태블릿에서 열자마자 쌓일 수 있는 단순한 그리드 보기이다. 
<br>

이 시점까지 내가 반응형 웹 페이지 레이아웃을 만들때 마다 ReactJS로 작업을 할때는 react-bootstrap 또는 Bootstrap에 항상 의존해 왔다. 왜? 왜냐하면 그것은 사용하기가 쉬웠고 개발 속도도 좀 더 빨랐기 때문이다. 
<br>

하지만 지금은 아니다. 그래서 나는 멋진 라이브러리들의 커튼 뒤에서 일어나는 일을 찾기 위해  [w3schools 반응형 그리드 뷰 작성에 대한 tutorial](https://www.w3schools.com/css/css_rwd_grid.asp)을 살펴 보았다.

## 반응형 그리드 뷰는 어떻게 동작합니까?
우선 반응형 그리드 뷰의 작동 방식에 대해 간략하게 소개하고자 한다. 이미 알고 있다면 건너뛰십시오.
<br>

보통 각각의 그리드는 너비 100%의 12열을 가진다. 웹 사이트의 레이아웃에 따라 일부가 필요하지 않을 수 있으므로 더 큰 열을 얻기 위해 일부 열을 병합할 수 있어야 한다. 실제로 백그라운드에서 발생하는 일은 같은 폭의 div 태그가 왼쪽으로 떠다니면서 일렬로 나타난다는 것이다.
<br>

```javascrit
.column {
  width: 8.33%;
  float: left;
}
```

Mauro Lionel Ocorso와 Jean Duthon이 언급했듯이 float : left; 대신 flexbox를 사용할 수도 있다. 그러나 이전 브라우저도 지원하려는 경우 일부 호환성 문제가있을 수 있다. 이것을 지적 해 주셔서 감사합니다!

![column](https://miro.medium.com/max/1736/1*6Pld5ZuXMOylEXP_1bSPjA.png)

전체 그리드의 너비가 100%이므로 각 열의 너비는 정확하게 8.33%이다. 이제 그리드의 시작 부분에 3개의 열 또는 25%의 크기로 더 큰 열을 원한다고 가정하겠다.

![column](https://miro.medium.com/max/1744/1*LHlTLJZuNcrgOGg0ernv5A.png)

위 그림에서 첫 번째 열이 세 개의 열에 걸쳐 있으며 두 번째 및 세 번째 열이 사라지는 것을 볼 수 있다. 실제로 발생한 것은 실제 column의 span이 아니다. 첫 번째 열의 너비는 25%이며 두번째 열과 세번째열은 더 이상 필요하지 않으므로 삭제 되었다. 
<br>

이를 위해서는 몇 가지 사항을 변경해야 합니다. 각 열에 대해 하나의 CSS 클래스를 가지는 대신에 각 열은 span이 있다. 이것은 내가 사용한 클래스 이름에도 반영된다. col-1은 한 열에 걸쳐 있지만 col-3은 3에 걸쳐 있고 col-12는 너비가 100 %이다.

```javascript
[class*="col-"] {
  float: left;
}
.col-1{
  width: 8.33%;
}
.col-2 {...}
.col-3{
  width: 25%;
}
[...]
```

유일하게 누락 된 것은 작은 기기에서 페이지를 보자 마자 열을 쌓는 방법입니다. 미디어 쿼리를 사용하여 이 작업을 수핸 가능하다.(자세한 내용은 [여기](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) 참조)

![column](https://miro.medium.com/max/762/1*ONwpRoHIJA7FRnIErifF9A.png)

너비가 768px보다 작을 경우 바로 열을 쌓고 싶다고 가정해 보자.

```javascript
[class*="col-"] {
  /*Mobile first: set the width to 100% by default*/
  width: 100%;
}

@media only screen and (min-width: 768px) {
  /* For everything bigger than 768px */
  .col-1{
    width: 8.33%;
  }
  .col-2 {...}
  .col-3{
    width: 25%;
  }
}
[...]
```

먼저 모든 열의 초기 너비를 100%로 설정했다. 작은 화면에서는 이와 같이 표시되므로 페이지 표시 성능도 향상된다. 너비를 100%로 설정하면 열이 자동으로 세로로 쌓이므로 더 이상 할 일이 없다.
<br>

두 번째로 중요한 것은 내가 추가 한 @media 규칙이다. 너비가 768px를 초과하면 마지막 예제의 전체 너비가 사용된다.
<br>

이제 기본 사항을 다뤘으므로 React 및 스타일 컴포넌트로 어떻게 수행되는지 보자!

##스타일 구성 요소를 사용하여 기본 그리드 뷰 작성

우선, 마지막 섹션에서 다룬 것처럼 똑같은 그리드를 만들 것이다.
 * 가질수 있는 열은 12개이다.
 * 열은 1~12열 너비에 걸쳐 있을 수 있다.
 * 총 너비가 768px보다 작은 경우 모든 열이 세로로 쌓인다.

 다음 스크린샷에서 볼 수 있듯이 나는 column 뒤의 float을 지우기위해서 Row라고 불리는 컴포넌트를 생성했다. 그런 다음 기본적으로 ```javascript float: left ``` 와 너비 100% 속성을 가지는 Column 컴포넌트를 추가했다.(모바일 우선 기억하나요?)
<br>

 직접 아래 코드를 보자
 [Code](https://miro.medium.com/max/1486/1*S_jt8B668fUQBkW4vVOVUA.png)

 이 Column 컴포넌트는 확장할 열의 양을 나타내는 prop span 범위를 사용한다. 만약 이 prop을 사용한다면 우리는 원하는 너비를 설정해야 한다. column 범위가 설정되지 않았다면 우리는 기본적으로 8.33%로 열 범위의 기본너비는 1이다. 
 <br>

## 그리드의 확장: 다른 breakpoints!
부트스트랩을 예로 들면 우리는 뷰포트마다 다른 column span들을 정의 할 수 있기를 원한다. 이렇게 하면 다른 화면 크기 위에 다은 cloumn span의 사용이 가능하다.
<br>

이것을이루기 위해 Coulmn은 더이상 ```javascript span ``` prop을 사용하지 않을 것이다. 대신에 각각의 breackpoint를 가진다.

 * 최대 크기 768px 화면은 **xs**
 * 최대 크기 992px 은 **sm**
 * 최대 크기 1200 은 **md**
 * 저것 보다 큰 모든것은 **lg**

 [Code](https://miro.medium.com/max/1542/1*oQ57567nklR574tNd4o2tA.png)

그래서 우리는 무엇을 하였나? xs보다 큰 column 범위에 대한 대체 너비가 없기 때문에 더 이상 너비 값을 계산하지 않고 전체 텍스트를 계산한다.
<br>

예시: 만약 우리가 column의 범위를 md 6으로 설정했자면 당신은 기기 에서 ```javascript width: 50%;```를 얻을 것이다. 만약 당신이 screen의 너비가 992px를 초과하고 md의 column 범위를 설정하지 않는다면 우리는 너비를 설정하지 않을 것이다. 이 방법으로 column은 항상 다음으로 작은 열 범위의 너비를 가지거나 아무것도 설정 되지 않은 경우 100%가 된다.
<br>

이제 어떻게 작업 했는지 보자
[Code](https://miro.medium.com/max/1082/1*JbcS7nAE-ynTqUGlk9y78Q.png)

위의 예시는 두개의 column의 그리드를 렌더해야한다.
<br>

###Extra smll screens (< 768px)
extra small screen 에서 첫번째 column은 전체 너비를 가진고 두번째 column은 다음 열로 이동한다.
[column](https://miro.medium.com/max/790/1*r6IfYjLc1K8S7hG1NpTfnQ.png)

###Small screens (> 768px)
첫번째 column은 6 열을 차지 해야하고 따라서 50%의 너비를 가진다. 이러한 경우 두번째 column은 작은 화면에 대한 column의 범위가 설정되어 있지 않는다. 그래서 다음으로 더작은 너비의 breack point는 50%로 할당된다.

[column](https://miro.medium.com/max/1558/1*5xjJWyQNYtgeGxWU9kl1Fg.png)

###Medium screens(> 992px)
이것은 쉬워야 한다: 첫번째 column의 번위는 8열(66.66%) 그리고 두번째 column은 4열(33.33%)에 걸쳐있다.

[column](https://miro.medium.com/max/2330/1*GfDfNujlo0p94k9N58gy5A.png)

large screens에서는 열 범위를 설정하지 않았으므로 두 열은 중간 화면에서와 같이 동일하게 보인다.

## 결론
우리가 만든 것은 기본 기능이 있는 스타일드 컴포넌트가 포함된 반응형 그리드의 예시이다. 당신은 몇가지 말하자면 보더, 패딩, 마진과 같은 더많은 스타일을 지원하도록 컴포넌트를 확장하는 것이 가능하다.
<br>

이 글에 서 찾을 수 있는 

이 기사에 대한 연구에서 찾을 수있는 가장 진보적 인 반응 형 그리드 뷰는 브렌트 잭슨의 그리드 스타일이라고 생각합니다. 또한 네가지 다른 breack point와 그 이상에 대해서 각각의 다른 폰트 사이즈를 설정할 수 있다. 하지만 이 글에서 반응형 그리드의 기본 사항 및 빌드 방법을 다루려고 했다. 그리고 내가 정말로 좋아하는 것은 실제 CSS를 사용할 수 있기 때문에 다른 breakpoints를 쉽게 고려할 수 있다는 사실이었습니다. 나는 여러가지 대안이 있는 것을 알고 있고 그중 일부를 이미 살펴 보았다. 그러나 미디어 쿼리 사용과 관련하여 대부분의 블로그 게시물은 반응이 좋지 않거나 react-responsive 또는 react-responsive-mixin과 같은 라이브러리를 사용하는 것이 좋지만 나에게 적합하지는 않다.

<br>

### **이글은 Andreas Reiterer blog의 How to create responsive UI with styled-components의 글을 번역한 글입니다.**
출처: <https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172>
z