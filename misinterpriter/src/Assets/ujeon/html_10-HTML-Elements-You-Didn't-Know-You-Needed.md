# 당신에게 필요한 줄 미처 몰랐던 10가지 HTML 엘리먼트

*본 기사는 [Emma Bostioan](https://dev.to/emmabostian)의 [10 HTML Elements You Didn't Know You Needed](https://dev.to/emmabostian/10-html-element-you-didnt-know-you-needed-3jo4?ref=jonas.io)을 번역한 기사입니다.*

![](https://res.cloudinary.com/practicaldev/image/fetch/s--Wy0m3EhT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://cdn-images-1.medium.com/max/1600/1%2A8yz3hkO3ynHV2qYGARynJg.jpeg)

저는 "HTML은 쉽다"는 말을 수도 없이 들었습니다. 물론 HTML이 다른 프로그래밍 언어와 달리 배우기 쉽다는 것에는 동의하지만, 당연하게 생각하시면 안됩니다.

HTML은 웹 어플리케이션 구조를 제공하고 강력한 접근성 이점을 제공하는 강력한 마크업 언어입니다. 하지만 적절하게 사용하는 경우에만 이러한 이점을 얻을 수 있죠.

그러므로, 좀 더 접근 가능하며, 구조적으로 건실한 웹 어플리케이션을 만들 수 있다는 희망으로 오늘은 여러분이 존재하는지 몰랐던 10가지 HTML 엘리먼트를 살펴보겠습니다.

*HTML에 대해서 좀 더 알아보고 싶으시면, [W3Schools](https://www.w3schools.com/tags/) 에서 더 많은 HTML 엘리먼트를 살펴보세요.*

## Audio

`<audio>` 태그는 음악이나 기타 다른 오디오 스트림과 같은 소리를 정의하는 태그입니다. 현재 지원하는 파일 포맷은: MP3, WAV, OGG 입니다.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--nGjFmT50--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1600/1%2AGhqkT6tNG8M5bCYDyZUKEg.png)

## Blockquote

`<blockquote>` 태그는 다른 출처에서 인용된 섹션을 명시합니다.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--H3ODM9Kv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1600/1%2AKzvqrVvveN8IrdylL8tAQg.png)

## Output

`<output>` 태그는 계산의 결과를 표시하는데 사용하는 태그입니다. 더하기 부호와 등호 기호를 사용해서 첫 번째와 두 번째 입력 값이 output 태그에 "출력"되어야 함을 나타낼 수 있으며, 결합할 두 요소의 id를 포함하는 속성으로 이를 나타낼 수 있습니다.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--ZkJb36in--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1600/1%2AA3MyPtKoCy7KiQfeMCTr_w.png)

## Picture

`<picture>` 태그는 이미지 소스를 구체화하는 것을 허용합니다. 뷰포트 너비에 따라 이미지를 확대 / 축소하는 대신 브라우저 뷰포트를 채우도록 여러 이미지를 설계할 수 있습니다.

Picture 태그는 두가지 다른 태그를 포함하고 있습니다: 하나 이상의 `<source>` 엘리먼트와 하나의 `<image>` 엘리먼트

Source 엘리먼트는 다음 속성을 가지고 있습니다:

- `srcset` (필수): 표시할 이미지의 URL을 정의합니다.
- `media`: CSS 내에 정의한 유효한 미디어 쿼리를 받아들입니다.
- `sizes`:  단일 너비 값, 너비 값이 있는 단일 미디어 쿼리 또는 쉼표로 구분 된 너비 값이 있는 미디어 쿼리 목록을 정의합니다.
- `type`: MIME 타입을 정의합니다.

브라우저는 이들 속성 값을 사용하여 가장 적합한 이미지를 로드합니다. 브라우저는 일치하는 히트를 가진 첫 번째 `<source>` 엘리먼트를 사용하고 나머지 source 엘리먼트들은 무시합니다.

`<img>` 태그는 브라우저가 엘리먼트를 지원하지 않거나 `<source>` 태그가 일치하지 않는 경우 역 호환성을 제공하기 위해서 사용됩니다.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--xcgO38wD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1600/1%2A7khhupYDoVE0cNaiykBoQg.png)

## Progress

`<progress>` 태그는 작업의 진행을 표시하는 태그입니다.

`<progress>` 태그는 `<meter>` 태그를 대체하는 태그가 아닙니다. 그러므로 디스크 공간 사용 또는 쿼리 결과 관련성을 나타내는 컴포넌트는 `<meter>` 태그를 사용해야 합니다.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--Oe8ETABf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1600/1%2AnQhZIYv1VDdUHvx_mZvy0g.png)

## Meter

`<meter>` 태그는 정의 된 범위 내에서의 스칼라 측정 값이나 분수 값을 정의합니다. 그리고 이 태그를 "gauge"라는 이름으로 참조할 수도 있습니다.

`<meter>` 태그를 사용해서 디스크 사용량 통계를 표시하거나 검색 결과의 관련성을 나타낼 수 있습니다.

작업의 진행을 표시하는 데에는 `<meter>` 태그를 사용해서는 안됩니다. 이러한 유형의 컴포넌트는 `<progress>` 엘리먼트로 정의해야 합니다.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--sZGZPtqV--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1600/1%2Acsl2_IT6gtFQkCMhC09zRg.png)

## Template

`<template>` 태그는 사용자에게 숨겨진 컨텐츠가 포함되어 있지만, HTML 코드를 반복적으로 인스턴스화하는 데 사용됩니다.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--MCPbgQVf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1600/1%2AkXZen0gUvApkjtqNFKIF-A.png)

자바스크립트를 사용하면 cloneNode() 메서드로 이 내용을 렌더링할 수 있습니다.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--zcduNpgA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1600/1%2Ah7xi-8gq0SKvxKpW4L1MYg.png)

## Time

`<time>` 태그는 사람이 읽을 수 있는 날짜나 시간을 정의합니다. 이는 유저 에이전트가 사용자의 일정에 생일 알림 또는 예약된 이벤트를 추가할 수 있도록 날짜와 시간을 기계가 읽을 수 있는 방식으로 인코딩하는 데 사용될 수 있습니다. 또한, 검색 엔진이 "더 똑똑한" 검색 결과를 생성할 수 있습니다.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--xk6Zu7f---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2400/1%2ARMr76nCXN_a9U-7zrPnD3Q.png)

## Video

`<video>` 태그는 영화 클립이나 비디오 스트림을 지정합니다. 지원하는 형식에는 MP4, WebM, Ogg를 포함합니다.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--PVmk_JXk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1600/1%2AhJCtx4hIBAzEGY7HRwwUmg.png)

## Word Break Opportunity

긴 텍스트 블록이나 긴 단어가 있는 경우 `<wbr>` 태그를 사용하여 텍스트 본문 중 어디에 있는 것이 가장 이상적일지를 지정할 수 있습니다. 이는 브라우저 창이 조절될 때 브라우저가 여러분의 텍스트를 이상한 지점에서 깨트리지 않도록 하는 방법 중 하나입니다.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--n-GVosrw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1600/1%2AwtEUeRTqYR0DvU-OkZ7tHQ.png)

---

이 10가지 HTML 엘리먼트가 멋진 어플리케이션을 구축할 수 있는 새로운 도구를 제공했으면 좋겠습니다!