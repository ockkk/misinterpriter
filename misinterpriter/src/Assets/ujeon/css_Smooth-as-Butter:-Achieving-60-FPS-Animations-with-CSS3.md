# 버터같은 부드러움: CSS3로 60 FPS 애니메이션 만들기

*본 기사는 [José Rosário](https://medium.com/@jose.rosario?source=post_page-----db7b98610108----------------------) 의 [Smooth as Butter: Achieving 60 FPS Animations with CSS3](https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108) 를 번역한 기사입니다.*

![](https://thumbs.gfycat.com/ThankfulContentCoypu-mobile.mp4)

모바일 어플리케이션에서 엘리먼트에 움직임을 주는 것은 쉽습니다.

모바일 어플리케이션에서 엘리먼트에 **적절하게** 움직임을 주는 것도 마찬가지로 쉽습니다... 여기있는 팁을 따라하면 말이죠.

많은 사람들이 모바일에서 CSS3 애니메이션을 사용하지만, 대부분 적절하게 사용하지 못하고 있습니다. 지속적으로, 그리고 상당히 무시되는 모범 사례가 있습니다. 이러한 현상이 발생하는 이유는, 이런 모범 사례가 존재하고 강력한 지지층이 있는 진짜 이유를 아직도 제대로 이해하지 못하는 사람들이 있기 때문입니다.

오늘날에는 디바이스 사양의 범위가 매우 넓기 때문에 이를 고려하도록 코드를 최적화하지 않으면, 버터처럼 매끄러운 애니메이션 대신, 높은 점유율에 수준 낮은 경험을 제공하게 될 것입니다.

기억하세요: 계속해서 봉투를 밀어넣는 최고급 플래그십 디바이스가 있기는 하지만, 여전히 세상의 대부분은 이러한 괴물같은 기기들에 비하면 그저 LCD 달린 주판일 뿐인 기기를 사용하고 있죠.

CSS3의 기능을 **올바르게** 활용하는 데 도움을 드리고자합니다. 그러기 위해서는 몇가지 사항을 이해해야합니다.

## 타임라인 이해하기

엘리먼트를 렌더링하고 플레이하는 동안 브라우저는 무엇을 하고 있을까요? 매우 간단한 이 타임라인을 **Critical Rendering Path**라고 합니다.

![](https://miro.medium.com/max/900/0*gMqY9IVJXuBbE8DF.)



부드러운 애니메이션을 위해 이전 레이어에 이러한 스트레스를 부과하는 대신 Composite 단계에 영향을 미치는 속성을 변경하는 데 집중해야 합니다.

### 1. Styles

![](https://miro.medium.com/max/900/0*LDiyh_mOgH1n21wF.)

브라우저는 엘리먼트에 적용할 스타일 계산을 시작합니다 — **Style** 재계산

### 2. Layout

![](https://miro.medium.com/max/900/0*X_6VTAJuRQCt1qXM.)

다음 레이어에서 브라우저는 이들 각 요소에 대한 모양과 위치를 생성하기 시작합니다 — **Layout**. 이 단계에서 브라우저가 **width** 와 **height**, 그리고 **margins** 혹은 **left/top/right/bottom** 와 같은 페이지 속성을 설정합니다.

### 3. Paint

![](https://miro.medium.com/max/900/0*wJKTvKHyYi13kPoI.)

브라우저는 이제 각 요소의 픽셀을 레이어로 채우기 시작합니다. 사용하는 속성은 **box-shadow, border-radius, color, background-color** 등과 같은 속성입니다. 

### 4. Composite

이 단계 여러분이 마법을 부리고자 하는 단계입니다. 왜냐하면 브라우저가 모든 레이어를 스크린에 그리는 단계이기 때문이죠.

![](https://miro.medium.com/max/900/0*JHTvclhMvkYYEBEY.)

모던 브라우저는 **transform** 과 **opacity** 속성을 사용해서 네가지 스타일을 정말 정말 잘 애니메이션화 할 수 있습니다.

- **Position** — transform: translateX(*n*) translateY(*n*) translateZ*(n*);
- **Scale** — transform: scale(*n*);
- **Rotation** — transform: rotate(*n*deg);
- **Opacity** — opacity: *n*;

## 초당 60 프레임을 달성하는 방법

이를 염두하시고, 소매를 걷고 작업을 시작해보죠.

HTML 부터 시작하겠습니다. 매우 간단한 구조를 만들고 앱 메뉴를 레이아웃 믈래스에 넣겠습니다.

```html
<div class="layout">
	<div class="app-menu"></div>
	<div class="header">
		<div class="menu-icon"></div>
	</div>
</div>
```

![](https://miro.medium.com/max/480/0*rXGvLKSlZGRmz4Jd.)

## 잘못된 길로 가고 있어요

```css
.app-menu {
	left: -300px;
	transition: left 300ms linear;
}

.app-menu-open .app-menu {
	left: 0px;
	transition: left 300ms linear;
}
```

변경한 속성을 살펴볼까요? **left**/**top**/**right**/**bottom** 속성과 **transition** 을 함께 사용하지 않아야 합니다. 이는 유동적인 애니메이션을 생성하지 않습니다. 매번 브라우저가 레이아웃을 생성하므로 모든 children에 영향을 미칩니다.

결과는 다음과 같습니다:

![](https://miro.medium.com/max/270/0*ZWyuzfeBSbFbQjOy.)

저 애니메이션은 전혀 부드럽지 않습니다. 후드 아래에서 무슨 일이 일어나는지 확인하기 위해 [DevTools Timeline](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool?hl=en) 을 확인해 보았는데, 결과는 다음과 같았습니다: 

![](https://miro.medium.com/max/509/0*y6jExBTCikGX2hVC.)

이는 FPS가 불규칙하고 성능이 상당히 느리다는 것을 분명하게 보여줍니다.

>*"초록색 바는 FPS를 나타냅니다. 높은 바는 애니메이션이 60 FPS로 렌더링 되고 있음을 나타냅니다. 낮은 바는 60 FPS 이하를 나타내죠. 그러니 타임 라인에서 초록색 바가 일관되게 높은 것이 이상적입니다. 또 빨간색 바는 jank를 나타내므로, 이러한 빨간색 막대를 제거하는 것이 진행 상황을 측정하는 또 다른 방법입니다."*
>
>*감사합니다,  [Kayce Basques](https://medium.com/u/c8187519a8ef?source=post_page-----db7b98610108----------------------)!*

## Transform 사용하기

```css
.app-menu {
	-webkit-transform: translateX(-100%);
			transform: translateX(-100%);
	transition: transform 300ms linear;
}
.app-menu-open .app-menu {
	-webkit-transform: none;
			transform: none;
	transition: transform 300ms linear;
}
```

**transform** 속성은 **Composite** 에 영향을 줍니다. 여기서는 애니메이션이 시작되면 레이어가 페인트되고 시작될 것이라고 브라우저에 알려주어 애니메이션을 렌더링 할 때 끊김이 줄어듭니다.

![](https://miro.medium.com/max/270/0*D9YAp9EQwbKunIZ-.)

타임라인에서 확인해보겠습니다:

![](https://miro.medium.com/max/313/0*qc1qxqFudZPYpIUE.)

결과가 좋아지기 시작하고 FPS가 더 규칙적이므로 애니메이션이 매끄럽습니다.

## GPU에서 애니메이션 렌더링하기

그럼 한 단계 더 끌어올려 볼까요? 실제로 버터처럼 부드럽게 작동하게 만들기 위해 GPU를 사용하여 애니메이션을 렌더링할 예정입니다.

```css
.app-menu {
	-webkit-transform: translateX(-100%);
			transform: translateX(-100%);
	transition: transform 300ms linear;
	will-change: transform;
}
```

여전히 일부 브라우저에서는 **translateZ()** 또는 **translate3d()**가 여전히 Fallback으로 필요하지만, **will-change** 속성은 미래입니다. 이 속성이 하는 일은 엘리먼트를 또다른 레이어로 승격하는 작업을 합니다. 그래서 브라우저는 페인팅이나 레이아웃 렌더를 고려할 필요가 없습니다.

![](https://miro.medium.com/max/270/0*ZeuG8kachde9iCnR.)

얼마나 부드러워졌는지 느껴지시나요? 타임라인이 증명합니다:

![](https://miro.medium.com/max/117/0*ekofIUN-X7br1bIH.)

애니메이션의 FPS는 훨씬 일정하며 애니메이션는 훨씬 빨리 렌더됩니다. 하지만 여전히 긴 프레임 러닝이 남아있습니다. 처음에 여전히 약간의 병목 현상이 남아있죠.

처음에 생성한 HTML 구조를 기억하시나요? 자바스크립트를 사용하여 해당 구조에서 **app-menu** div를 제어해보겠습니다:

```javascript
function toggleClassMenu() {
	var layout = document.querySelector(".layout");
	if(!layout.classList.contains("app-menu-open")) {
		layout.classList.add("app-menu-open");
	} else {
		layout.classList.remove("app-menu-open");
	}
}
var oppMenu = document.querySelector(".menu-icon");
oppMenu.addEventListener("click", toggleClassMenu, false);
```

여기서 문제는 이 클래스를 레이아웃 div에 추가함으로써 브라우저가 스타일을 다시 계산하도록 만들었고, 이는 렌더링 성능에 영향을 미칩니다.

## 버터 솔루션처럼 부드러운 60 FPS

대신 뷰포트 영역 외부에 메뉴를 만들면 어떻게 될까요? 격리된 영역에 이 메뉴를 두면 실제로 애니메이션화 하려는 요소에만 영향을 미칩니다.

따라서 다음과 같은 HTML 구조를 제안합니다: 

```html

<div class="menu">
	<div class="app-menu"></div>
</div>
<div class="layout">
	<div class="header">
		<div class="menu-icon"></div>
	</div>
</div>
```

이제 메뉴 상태를 약간 다르게 제어 할 수 있습니다. 자바스크립트에서 **transitionend** 함수를 사용하여 전환 시간이 끝나면 제거되는 클래스의 애니메이션을 조작할 것입니다.

```javascript
function toggleClassMenu() {
	myMenu.classList.add("menu--animatable");	
	if(!myMenu.classList.contains("menu--visible")) {		
		myMenu.classList.add("menu--visible");
	} else {
		myMenu.classList.remove('menu--visible');		
	}	
}

function OnTransitionEnd() {
	myMenu.classList.remove("menu--animatable");
}

var myMenu = document.querySelector(".menu");
var oppMenu = document.querySelector(".menu-icon");
myMenu.addEventListener("transitionend", OnTransitionEnd, false);
oppMenu.addEventListener("click", toggleClassMenu, false);
myMenu.addEventListener("click", toggleClassMenu, false);
```

이제 모두 모아서 결과를 확인해보겠습니다.

다음은 모든 것이 제자리에 있는 완벽한 CSS3 예제입니다:

```css
.menu {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 150;
}

.menu--visible {
    pointer-events: auto;
}

.app-menu {
    background-color: #fff;
    color: #fff;
    position: relative;
    max-width: 400px;
    width: 90%;
    height: 100%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    -webkit-transform: translateX(-103%);
            transform: translateX(-103%);
    display: flex;
    flex-direction: column;
    will-change: transform;
    z-index: 160;
    pointer-events: auto;            
}

.menu--visible .app-menu {
    -webkit-transform: none;
            transform: none;
}

.menu--animatable .app-menu {
    transition: all 130ms ease-in;
}

.menu--visible.menu--animatable  .app-menu {
    transition: all 330ms ease-out;
}

.menu:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    opacity: 0;
    will-change: opacity;
    pointer-events: none;
    transition: opacity 0.3s cubic-bezier(0,0,0.3,1);
}

.menu--visible.menu:after {
    opacity: 1;
    pointer-events: auto;
}
```

![](https://miro.medium.com/max/480/0*EFkarCSe2mQEYK0e.)

Timeline에서도 확인해볼까요?

![](https://miro.medium.com/max/535/0*mDp5_LD08xtZKQyS.)

보세요, 버터같이 부드럽지 않나요?

**수정*(8월 1일)*:** 많은 요청으로, 실제 사례를 추가하였습니다:

(역주: 원문 기사를 참고하셔서 사례를 확인해주시기 바랍니다.)

**수정*(2017년 2월 23일)*:** 두 번째 기사가 오픈하였습니다!  [**FLIP Your 60 FPS Animations, FLIP’em Good**](https://medium.com/outsystems-experts/flip-your-60-fps-animations-flip-em-good-372281598865)



