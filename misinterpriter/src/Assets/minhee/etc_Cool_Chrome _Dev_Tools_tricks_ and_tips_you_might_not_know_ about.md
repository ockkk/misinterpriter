# 당신이 미처 알지 못한 크롬 개발자도구 팁

구글 크롬 브라우저는 내가 가장 좋아하는 개발용 브라우저다. 개발자 도구 기능 덕이다.

이 포스트는 일년 전 개인 블로그에 쓴 [포스트](https://nikitahl.com/cool-chrome-dev-tools-tricks-you-might-not-know-about/)를 리포스팅한 것이다.

아래는 지난 몇 년간 크롬 개발자 도구를 사용하면서 내가 찾은 멋진 기능들이다.

1. 개발자 도구 테마
2. 개발자 도구 패널 레이아웃
3. 개발자 도구 패널 간 이동
4. CSS 프로퍼티 간 이동
5. 토글로 엘리먼트 보여주고 숨기기
6. 엘리먼트 애트리뷰트 수정
7. DOM 트리 검색
8. 디바이스 추가
9. 새 스타일 단축 설정
10. 페이지의 텍스트 콘텐트 수정
11. 콘솔의 전역 변수로 값 저장하기
12. CSS 값 증가시키기
13. 전역 변수로 DOM 엘리먼트 사용
14. 컬러 포멧 변경
15. 콘솔에서 사용한 마지막 표현식 반환

보너스: 콘솔에 기록된 객체의 모든 서브 브로퍼티 확장



## 1. 개발자 도구 테마

개발자 도구 테마를 라이트, 다크로 변경할 수 있는 방법이 있다. *Settings* 하위의 *Apperance* 메뉴에서 라이트/다크 테마를 선택할 수 있다.

![Dev Tools theme](https://res.cloudinary.com/practicaldev/image/fetch/s--kqVVxPTJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://nikitahl.com/images/dev-tools/dev-tools-theme.png)

## 2. 개발자 도구 패널 레이아웃

특정 타입의 패널 레이아웃에서 작업을 하는 것이 더 편할 때가 가끔 있다. 다음 세 가지 레이아웃 종류 가운데 선택할 수 있다.

- 세로
- 가로
- 자동

*Settings*의 *Apperance* 메뉴에서 선택 가능하다.

![Dev Tools panel layout](https://res.cloudinary.com/practicaldev/image/fetch/s--DhS-Nw0i--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://nikitahl.com/images/dev-tools/dev-tools-layout.png)

## 3. 개발자 도구 패널 간 이동

키보드를 사용하여 개발자 도구 패널 이동을 할 수 있는 쉬운 방법이 있다.

- `cmd `+ `]` / `[` for MAC;
- `ctrl` +` ]`/`[` for Windows and Linux.

![Dev Tools panel switch](https://res.cloudinary.com/practicaldev/image/fetch/s--xwZa3qR6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://nikitahl.com/images/dev-tools/dev-tools-panels.gif)

## 4. CSS 프로퍼티 간 이동

*Styles* 패널에서 CSS 프로퍼티를 클릭하고 다음 키를 눌러 보자:

- `tab`을 통해 다음 프로퍼티로 이동할 수 있다.
- `tab`+`shift`를 누르면 이전 프로퍼티로 이동할 수 있다.

![Switching between CSS properties](https://res.cloudinary.com/practicaldev/image/fetch/s--GonWVJQe--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://nikitahl.com/images/dev-tools/switch-css-props.gif)

## 5. 토글로 엘리먼트 보여주고 숨기기

`h` 키를 눌러서, DOM 트리의 선택한 엘리먼트를 보여주거나 숨길 수 있다.

![Toggle element visibility](https://res.cloudinary.com/practicaldev/image/fetch/s--hQguxd_e--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://nikitahl.com/images/dev-tools/hide-element.gif)

## 6. 엘리먼트 애트리뷰트 수정

엘리먼트 DOM 트리 내부에서 엘리먼트를 선택한 후 `enter`키를 누르면 애트리뷰트를 수정할 수 있다. `tab`을 누르면 다음 엘리먼트로 넘어가고, `tab`+`shift`를 누르면 이전 애트리뷰트를 수정할 수 있다.

![Edit element attributes](https://res.cloudinary.com/practicaldev/image/fetch/s--7DvKIagh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://nikitahl.com/images/dev-tools/edit-element-attrs.gif)

## 7. DOM 트리 검색

애트리뷰트, 엘리먼트, 컨텐트, 혹은 DOM 트리 내의 다른 문자열을 찾으려면 다음을 입력하자:

- 맥: `cmd` + `f` 
- 윈도우 및 리눅스: `ctrl` + `f` 

![Search DOM tree](https://res.cloudinary.com/practicaldev/image/fetch/s--1VWMZKmo--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://nikitahl.com/images/dev-tools/dom-tree-search.png)

## 8. 디바이스 추가

`Device toolbar`에서 등록된 디바이스를 활성화/비활성화하거나 커스텀 디바이스를 추가할 수 있다.

`Devices`탭에서  `Settings`를 클릭하자. 활성화/비활성화 할 수 있는 등록된 디바이스 목록을 확인할 수 있다. 또는 `Add custom device...`버튼을 클릭하여 새로운 디바이스를 추가할 수 있다.

![Add devices](https://res.cloudinary.com/practicaldev/image/fetch/s--V7HBS6YL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://nikitahl.com/images/dev-tools/add-custom-device.png)

## 9. 새 스타일 단축 설정

Color, Background color, Text-shadow, Box-shadow등과 같은 새로운 스타일을 추가하려면, 왼쪽하단의 작은 아이콘(**⋮**)에 마우스 호버를 하자. 그럼 아래 그림과 같은 옵션들이 나타날 것이다.

새로운 스타일 규칙을 삽입하려면 + 버튼을 클릭하면 된다.

![Add new styles shortcut](https://res.cloudinary.com/practicaldev/image/fetch/s--t25riHhi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://nikitahl.com/images/dev-tools/add-styles-shortcut.gif)

## 10. 페이지의 텍스트 콘텐트 수정

콘솔에서 `document.designMode = "on"`을 입력하면 페이지 내부의 텍스트 콘텐트를 수정할 수 있다.

![Document Design Mode](https://res.cloudinary.com/practicaldev/image/fetch/s--udvJOfpT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://nikitahl.com/images/dev-tools/document-design-mode.png)

##11. 콘솔의 전역 변수로 값 저장하기

*object* 또는 *function* 타입의 반환된 데이터는 콘솔에서 전역 변수로 저장 가능하다. 예를 들어, `console.log(['a', 'b'])`는 배열을 반환한다. 반환된 배열을 오른쪽 클릭한 뒤, **Store as a global variable**을 선택하자. 콘솔에서 `temp1`키워드를 통해 해당 값에 접근할 수 있다.

**참고**: 해당 변수는 일시적이며, 저장 당시 세션에서만 유효하다. 즉 페이지 새로고침을 하면 사라진다.

![Store value as a global variable](https://res.cloudinary.com/practicaldev/image/fetch/s--BapunTTc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://nikitahl.com/images/dev-tools/store-as-a-global-variable.gif)

##12. CSS 값 증가시키기

특정한 단축키를 활용하여, 숫자 형태의 CSS 값을 쉽게 더하고 뺄 수 있다. 

- `↑`: 1 증가
- `↑`: 1 증감
- `alt` + `↑`: 0.1 증가
- `alt` + `↓`: 0.1 증감
- `shift` + `↑`: 10 증가
- `shift` + `↓`: 10 증감
- `cmd` + `↑` (MAC), `ctrl` + `↑` (Windows and Linux): 100 증가
- `cmd` + `↓` (MAC), `ctrl` + `↓` (Windows and Linux): 100 증감

![Increment CSS values](https://res.cloudinary.com/practicaldev/image/fetch/s--7c6ndUNc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://nikitahl.com/images/dev-tools/increment-value.gif)

##13. 전역 변수로 DOM 엘리먼트 사용

콘솔에서 DOM 엘리먼트를 저장하여 전역 변수로서 접근할 수 있다. DOM 트리의 엘리먼트 태그에서 오른쪽 클릭을 하고 **Store as a global variable**을 선택하자.

**참고**: 해당 변수는 일시적이며, 저장 당시 세션에서만 유효하다. 즉 페이지 새로고침을 하면 사라진다.

![DOM elements as global variables](https://res.cloudinary.com/practicaldev/image/fetch/s--NG0mVHys--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://nikitahl.com/images/dev-tools/store-element-as-global-variable.png)

##14. 컬러 포멧 변경

`shift`키를 누른 채로, 값 옆의 **Color Preview**박스를 클릭하면 컬러 포멧을 쉽게 변경할 수 있다.

![Switch between color formats](https://res.cloudinary.com/practicaldev/image/fetch/s--PfvFjRbe--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://nikitahl.com/images/dev-tools/switch-color-formats.gif)

##15.  콘솔에서 사용한 마지막 표현식 값 반환

콘솔에서 `$_`을 입력하면 콘솔에서 사용한 마지막 표현식의 값을 반환한다.

![Return last evaluated expression](https://res.cloudinary.com/practicaldev/image/fetch/s--UqvgMOJw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://nikitahl.com/images/dev-tools/last-evaluated-expression.png) 

##보너스: 콘솔에 기록된 객체의 모든 서브 브로퍼티 확장

어떤 객체가 기록되고 난 뒤, `alt`키를 누른 채로 expand(**▸**)아이콘을 클릭하면 된다.

![Expand all sub-properties](https://res.cloudinary.com/practicaldev/image/fetch/s--uxyDFArH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://nikitahl.com/images/dev-tools/expand-props.gif)



(출처: https://dev.to/nikitahl/cool-chrome-dev-tools-tricks-and-tips-you-might-not-know-about-56oe#1-dev-tools-theme)

#
