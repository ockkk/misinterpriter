# 웹 개발자가 리액트 네이티브 사용한 후기

(출처: https://dev.to/walaura/i-picked-up-react-native-as-a-web-developer-and-here-s-what-i-ve-learned-59h6)

지난 몇 주 동안 리액트 네이티브 앱을 만드는 [업무](https://www.theguardian.com/international)를 맡았다. 내가 만든 것은 뉴스 앱으로서, 파일시스템 접근, 백그라운드 다운로드, 푸시 알림 등의 기능을 추가적으로 구현해야 했다.

이전에도 리액트를 사용한 적은 있었지만!! 리액트 네이티브는 처음이었다. 그래서 좀 쫄았다. 새로운 것은 늘 두렵기 마련이니까. 하지만 좋은 경험이었다. 무언가 예상치 못한 오류가 일어나서, "앗, 망했다!" 싶은 순간이 오리라 예상했지만, 정말로 재미있게 개발을 했다.

왜 리액트 네이티브를 썼냐고? 원래 우리 팀은 (요즘 한창 유행하는 PWA) 웹앱을 만들 계획이었다. 하지만 세 가지 중요한 이유 때문에, 계획과는 다른 결정을 내리게 되었다.

- 애초부터 앱 스토어가 우리의 주요 시장이었다.
- 우리 앱의 오프라인과 백그라운드 기능이 아주 정교하길 바랐다. 웹앱의 경우 해당 주제에 대한 논의 수준이 아직 초기 단계에 머물러 있지만, 모바일 앱에서는 이미 해결된 문제였다.
- 네이티브다운 사용자 경험을 제공하고 싶었다. 60fps 애니매이션, 다중 스택 뷰 등을 생각해 보자. 이미 앱 분야에서는 해결된 문제이지만, 웹에서는 아직 숙제로 남아있다.
- `react-native-web` 을 사용하여, 모바일 앱을 PWA로 [전환할 수 있는 여지](https://github.com/necolas/react-native-web)가 있었다. 



## 웹과는 다르다

웹에서, 리액트는 결과적으로 HTML을 기반으로 한 웹사이트를 만들어 낸다. 덕분에 CSS를 사용할 수 있고, 여러분 앱의 컴포넌트에 DOM 함수를 바로 호출할 수 있는 것이다.

리액트 네이티브는 좀 다르다. Cordova 같은 라이브러리와는 달리, 리액트 문법을 사용함에도 불구하고 리액트 네이티브는 HTML이나, DOM 요소, CSS를 전혀 제공하지 않는다. 대신 모바일 OS에 네이티브 뷰를 바로 띄워준다. 다시 말해, 리액트 네이티브로 만들어진 UI는 진짜 네이티브라는 강점을 가지고 있다. 물론, 자바스크립트를 통한 재조립 과정을 거치긴 하지만,  여타 네이티브 앱들과 같은 구조를 사용한다.

리액트 네이티브와 리액트는 얼마나 다를까? 솔직히 크게 다르지 않다. 특히 기본적인 부분은 아주 비슷하다!

```js
/*react web*/
const Counter () => (
    <div className='row'>
        <button onClick={setCount(c=>c+1)}>Add number</button>
        <span>{count}</span>
    </div>
)

/*react native*/
const Counter () => (
    <View style={styles.row}>
        <Button onClick={setCount(c=>c+1)}>Add number</Button>
        <Text>{count}</Text>
    </View>
)


```

네이티브 UI를 사용함으로서, 속도도 향상할 수 있다. 만약 웹에서 60fps 애니메이션을 구현하기 위해 고생하고 있는 상황이라면, 리액트 네이티브를 적용하여 신세계를 영접하도록 하자. 공짜인데다, 엄청 오래된 기기에서도 사용할 수 있다! (퍼포먼스에 대해서는 글의 두 번째 파트에서 더 다뤄보도록 하겠다)

![aladdin scene with the carpet and the whole new world song](https://res.cloudinary.com/practicaldev/image/fetch/s--rOdOuQbr--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://media0.giphy.com/media/DjEysmrFX7S8w/giphy.gif%3Fcid%3D790b76115cfba11a516c764845cde8a3%26rid%3Dgiphy.gif)

그나저나, 리액트 네이티브에서는 HTML5가 제공하는 시맨틱한 요소들의 편리함을 누릴 수 없다. 리액트 네이티브의 거의 모든 것은 `View`로 구성되어 있다. 다시 말해 웹 접근성(a11y)을 보장하기 위해서는, 보여지는 화면에 대한 의미를 표시해 두는 작업이 [정말 중요](https://facebook.github.io/react-native/docs/accessibility)하다. 이를 위해 `accessibilityRole`을 사용할 수 있다. Alt를 사용해야 한다면, `accessibilityLabel`로 대체해야 한다.



## 시작하기

나에게 Xcode 사용 경험이라고는, 정말 까마득한 옛날에 프로토타이핑을 해 본 것이 전부였다(그 때 Xcode는 아이튠즈처럼 생겼던 것 같다). 하지만 대충 짐작은 하고 있었다. 웹에 비해 빠른 앱을 만드는 대신, 사용하기에 어려운 개발자 도구와 더 느린 개발 주기가 나를 기다리고 있으리라 예상했던 것이다.

-

하지만

전혀

달랐다

-

만약 네이티브 앱이 어떤지 살짝 맛보기만 해 보고 싶다면, [expo](https://expo.io/)를 사용하여 자바스크립트를 실행시키고, 진짜 앱 다운 작업은 아주 조금만 처리해도 된다. expo를 쓰면 앱에 대한 전반적인 통제력은 조금 부족해지지만, 바닐라 리액트로 코드 전체를 작성할 수 있다. 만약 앱을 통제해야 한다면 언제든 `expo eject` 를 실행하여 가공 전의 Xcode, 또는 안드로이드 스튜디오 프로젝트에 접근할 수 있다.

eject 한 후에도, Xcode나 안드로이드 스튜디오를 사용할 일은 매우 드물다.  `react-native run-ios`를 실행하면 아이폰 X 가상 머신이 실행되어 여러분의 앱을 가동해 준다. `react-native run-android` 를 실행하면 여러분의 스마트폰에 앱을 바로 설치해 준다. 

[안드로이드 스튜디오 설정에 대한 리액트 공식 문서](https://facebook.github.io/react-native/docs/getting-started.html)가 상당히 잘 갖추어져 있다. 반면 iOS에서, 여러분의 앱에 코드를 승인하는 작업은 [꽤 험난하다](When it comes to iOS, code signing your app is a [bit of a pain](https://facebook.github.io/react-native/docs/running-on-device)). iOS 디바이스에서 앱을 돌려 보려면 반드시 거쳐야 할 과정이다. 애플 개발자 프로그램의 유료 회원이 될 필요는 없지만, Xcode에 승인은 되어 있어야 한다. 나는 보통 일단 컴파일을 하고, 빨간색으로 된 항목 모두를 클릭한 다음, 더 이상 문제가 없을 때까지 'Fix issue'를 누르며 이 과정을 헤쳐 나간다.

마지막으로, 앱을 가동할 때 다바이스 또는 가상 머신을 흔들면 멋진 디버깅 메뉴를 사용할 수 있다. 웹에서처럼 코드를 핫 리로딩(hot reload, 저장 시 자동 로딩)하거나, 크롬 개발자도구를 사용해서 버그 사냥을 할 수도 있고, 세상에서 제일 귀여운 인스펙터를 열 수도 있다: 

![inspector screenshot. it's tiny](https://res.cloudinary.com/practicaldev/image/fetch/s--zZlteQEj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/cehwgjjo5v5hebg25igf.png)



## 스타일링

앱에 대한 스타일링도 빠질 수 없다. 간단한 투두 리스트 따위를 만드는 게 아니라면, 당연히 여러분의 앱을 예쁘게 꾸미고 싶을 것이다.

리액트 네이티브에는 스타일링을 담당하는  `StyleSheet`내장 모듈이 있다. 정말 멋진 기능인데, 자바스크립트에 CSS를 어떤 방식으로 적용할지 고민할 필요를 덜어주기 때문이다. 한편으로, `StyleSheet`가 CSS와 너무 비슷하게 생긴 탓에 '내가 CSS를 쓰고 있다'고 오해할 수도 있다는 단점도 있다. 하지만 겉보기에만 비슷할 뿐이다.



```javascript
const styles = StyleSheet.create({
    button: {
        borderRadius: 999,
        backgroundColor: 'tomato',
        padding: 10,
        paddingHorizontal: 10,
    },
    text: {
        textTransform: 'uppercase',
    },
})

const Button = ({ children, ...props }) => {
    return (
        <Touchable {...props}>
            <View style={styles.button}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Touchable>
    )
}
```

 요소들을 어떻게 스타일링 할 것인지에 대한 공식 문서가 [정말 잘 작성되어](https://facebook.github.io/react-native/docs/0.59/flexbox) 있지만, 나는 그 전에 중요한 점 몇 가지를 꼭 짚고 싶다.

### 자바스크립트 코드 안에서 CSS를 사용하는 방법(css-in-js)과 비슷하다

스타일링은 자바스크립트 객체로서, 카멜 케이스 프로퍼티로 이루어져 있다. 만약 `emotion`이나 `styled-components`를 사용한 경험이 있다면, 금방 적응할 수 있을 것이다. 

### '뚱뚱한' 픽셀

대다수 스마트폰의 화면은 매우 밀도가 높고 UI 비율 또한 더 크다. 따라서 스마트폰에서  `1px`은 꽤 큰 단위이며, 테두리 선으로 사용하기에는 두껍다. `StyleSheet.hairlineWidth`를 사용하면 디바이스 종류에 구애받지 않고 1 스크린 픽셀 사이즈를 사용할 수 있다.



### 모든 것이 플렉스 박스니까..

`StyleSheet`는 기기에 내장된 OS에 맞추어 스타일링 설정을 전달하는 역할을 하기 때문에, CSS에 비해 레이아웃이 제한적이다. 어떤 요소에 float을 적용하고 싶다면(예를 들어 텍스트 옆의 이미지를 감싸고자 할 때), 슬프지만 마음을 접는 게 좋다. CSS 그리드 또한 마찬가지다.

대신 `flex`라는 멋진 프로퍼티를 사용하면 된다. `flex`는 `flexGrow`, `flexShrink`, `flexBasis`를 하나의 숫자로 통합한 것이다. 하지만 나는 어떻게 사용해야 하는지 익숙지 않다. [@NikkitaFTW](https://mobile.twitter.com/nikkitaftw)는 "뒤집어진 flex"라고 표현을 했는데, 그 또한 마찬가지로 어떻게 사용해야 하는지 잘 모른다고 한다.



### ...요소를 플로팅 할 수 없다

우리 팀의 앱은 매우 특별한 경우였다. 글자가 빽빽한 기사들을 랜더해야 했기 때문이었다. 레이아웃 문제를 해결하기 위해, 우리는 웹뷰를 통해 기사 본문을 랜더하여 리액트 네이티브 앱에 넣기로 했다. 웹뷰를 사용하니 '어쨌든 자바스크립트를 사용했잖아?'하고 얼렁뚱땅 지나간 느낌이 들었고, 때문에 잘못되고 직관적이지 못한 방법이라는 생각이 들긴 했다. 하지만 어떤 과제에 대해 최선의 도구를 사용하는 것이 늘 중요하고, 아무튼 웹은 문서를 랜더링하기 위해 탄생한 도구니까!



### ...레이아웃 디버깅도 할 수 없다

레이아웃에 문제가 있는지, div를 빨간색으로 색칠해가며 확인한 경험이 있을 것이다. 리액트 네이티브를 사용하면, 이제 그런 경험은 추억이 될 것이다. 리액트 네이티브는 빌트인 인스펙터를 제공하지만, 시뮬레이터(또는 여러분의 스마트폰) 내부에 있으므로, 사용이 번거롭다.



### 게다가, 케스케이드와 셀렉터도 없다

리액트 네이티브에서는 스타일을 컴포넌트에 바로 적용해야 한다. `hover`, `disabled` 상태, `:before / :after` 등을 사용하여 자식 컴포넌트를 스타일링 할 수 없다.

매우 제한적으로 보일 수도 있지만, 실제로는 작은 컴포넌트들로 이루어진 잘 설계되고 모듈화된 앱에서라면, 위와 같은 방식이 큰 문제가 되지는 않는다.

어떤 스타일도 하위 컴포넌트에 내려주지 않음으로써, CSS를 더욱 예측 가능하게 만든다는 장점이 있지만 불편한 부분도 있다.  우리 앱에서는 리액트 컨텍스트를 통해 테마 컬러와 같이 내려주고 싶은 스타일 프로퍼티를 캡슐화하여 이 문제를 해결했다. 컨텍스트를 이용한 것은 정말 좋은 선택이었다. 같은 화면에서, 서로 다른 노드에 대해 여러 개의 컨텍스트를 가질 수 있기 때문에 CSS 변수처럼 이용할 수 있었기 때문이다.

생략된 부분이 많긴 하지만, 아래 코드를 통해 우리 팀이 내어 놓은 해결책에 대한 기본 아이디어를 이해할 수 있을 것이다(우리는 값을 바로 되돌려주는 `useAppearance()`훅을 사용했다).

```js
/*
in your appearance file
*/
export const appearances = {
    dark: {
        backgroundColor:'#000',
        color: '#fff',
    },
    light: {
        backgroundColor:'#fff',
        color: '#000',
    },
}
export const AppearanceContext = createContext('light') // <- that's the default!


/*
in your view
*/
<AppearanceContext.Provider value={'dark'}>
    <Button>I'm dark!</Button>
</AppearanceContext.Provider>
<AppearanceContext.Provider value={'light'}>
    <Button>I'm light!</Button>
</AppearanceContext.Provider>


/*
in your component
*/
(...) => {
    const { backgroundColor, color } = appearances[useContext(AppearanceContext)]
    return (
        <View style={{backgroundColor, color}}>{children}</View>
    )
}

```

context API 덕분에, 캐스케이드를 사용하지 못하는 것은 큰 문제가 되지 않았다. 단 하나, 매우 중요한 경우를 제외하고.



### 텍스트

리액트 네이티브에서 랜더링하고자 하는 모든 텍스트는 `<Text>텍스트 태그로 감싸져야</Text>`하며, 16px 사이즈의 시스템 폰트로 화면에 출력된다.

당연히 여러분이 원하는대로 텍스트의 폰트와 크기를 조정할 수 있지만, 텍스트의 모양과 크기가 워낙 다양한 탓에, 여러가지 경우를 처리할 수 있어야 한다. 우리 팀의 앱에서는 스타일링 된 텍스트 요소들을 한 파일에 모아놓는 식으로 문제를 해결했지만, 이게 과연 최선의 구조였는지는 확신할 수 없다.

아마 여러분은 커스텀 폰트를 적용하고 싶을 것이다. 그도 그럴것이, 요즘 나오는 앱들은 전부 흰 배경에 검은 글씨 여러줄로 엇비슷하게 생겨서, 개성있는 글씨체 말고는 구분할 길이 없기 때문이다. 좋은 소식부터 전하면, 리액트 네이티브에서는 `@font-face`규칙은 전혀 신경쓰지 않아도 된다. 

하지만 슬프게도, 그 외에는 전부 [고통](https://medium.com/@mehran.khan/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4) 뿐이다. 여러분의 폰트는 여러분의 안드로이드와 iOS 프로젝트 내부에 복제되어야 하고, 그 때문에 복잡해진다. 안드로이드에서 폰트를 사용하기 위해서는 폰트 파일명을 참조해야 하고, iOS에서는 Postscript 이름을 참조해야 할 것이다. 무슨 말인지 모르겠다고? 걱정할 필요 없다. 나도 모르니까. 대충 이런 것이다:

![font book on mac referencing the postscript name](https://res.cloudinary.com/practicaldev/image/fetch/s--MmvUB7b2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/torryqbnknreppob1w93.png)

## 이미지와 아이콘

만약 여러분이 현대의 디자인 트렌드를 따르고 있다면, 여러분이 사용할 그림은 대부분 플렛한 백터 이미지로서, 아마 인라인 SVGs일 것이다. 그렇다면 슬픈 소식이 하나 있다. 바로 리액트 네이티브에서는 일반 SGVs를 사용할 수 없다는 것이다. `<Image />`엘리먼트에서 지원되지 않기 때문이다. 아이콘 등을 사용할 때 특히 불편한 점이다. 그렇다면 어떻게 이미지를 불러 올 수 있을까? 몇 가지 전략이 있다.

첫째로 복잡한 모양의 경우, 90년대 스타일처럼 비트맵으로 변환하면 된다. 그렇다면 변환 작업을 하는 파이프라인을 세팅해야 한다. 앱의 모든 에셋들은 기기에 미리 다운받아져 있기 때문에, 파일 크기 문제는 웹앱에서만큼 중요하지는 않다(그래도 절제해야 한다는 점을 명심하자!). 비트맵 이미지가 또렷하게 출력되기 위해서는 디바이스 화면 상에 출력될 이미지보다 `@3x`하여 내보내야 한다.

두 번째로, 다른 곳에서 SVG를 가져오고 싶다면, 조금 어려운 과정을 거치긴 해야 하지만 불가능하지는 않다! [라이브러리들](https://www.npmjs.com/package/react-native-remote-svg)이 이미 있으며, 웹뷰를 적용한다면 반드시 사용해야 할 것이다.

세 번째로, 거의 모든 경우(내 경우가 여기 속한다!) `리액트 네이티브 svg`를 사용하여 SGVs를 여러분의 코드 내에서 적용할 수도 있다. react-native svg는 리액트 네이티브의 모든 요소를 sgv로 내보낸다. 여러분이 이 요소들을 사용하면, 리액트 네이티브 sgv가 적절한 뷰를 그려주게 된다.

props와 애니메이션을 이용하여 리액트에서 SVGs를 주인공으로 만듦으로서, SGVs에 접근하는 내 방식 또한 180도 바뀌었다. 이전에도 SGVs가 마크업이라는 사실은 알고 있었다. 하지만 SGVs를 내가 직접 조정하면서, SGVs를 가지고 구현할 수 있는 멋진 아이디어들을 많이 떠올리게 되었다.

다시 말해, 리액트 네이티브는 매우 정교한 도구이기 때문에, 선, 원 등 다양한 도구를 그리기 위한 로우레벨 라이브러리로서 사용할 수도 있다! 여러분의 상상력을 마음껏 발휘해 보자!

어떤 이미지 로딩 전략이 최선일지 판단하기 위해, 만약 이미지들이 로딩되지 않을 경우 어떤 사태가 발생할지 상상해 보는 것도 좋다. 예를 들어 아이콘은 인라인 SGVs이지만 주요 이미지들은 원격에서 다운로드되길 원한다고 가정해 보자. 뷰 랜더링이 항상 완벽하게 이루어지지 않을 것이라는 사실을 기억하자. 또한 여러분의 앱을 사용하는 사람들 가운데는 컴퓨터 화면 음성 낭독기를 쓰는 사용자, 시각 장애인, 또는 애초부터 이미지의 의미를 이해하지 못하는 경우도 있을 수 있다.

앱 내의 모든 이미지에 대해 접근성 설명이 제대로 제공되고 있는지 항상 확인하도록 하자. 이미지를 로드할 수 없는 경우, 적절한 대응책을 제공해야 한다. 



## 네비게이션

`react-navigation`은 리액트 네이티브의 `react-router`와 비슷한 듯 보인다. 익히 알려진 대로, 모바일 앱의 네비게이션은 웹의 경우보다 더 발달해 있다. 모바일 앱들을 살펴 보면, 화면이 밖에서 안으로, 또 안에서 밖으로 자연스럽게 교체되는 모습을 확인할 수 있을 것이다. `react-navigation`은 [이러한 트랜지션과 밀접하게 연관된 데이터 모델](https://reactnavigation.org/docs/en/modal.html)을 가지고 있다. 

하나의 네비게이터는 여러 화면들로 구성된 플렛 리스트로서, 하나의 엔트리 포인트를 가지고 있다. 또한 각 네비게이터는 화면들 간의 트렌지션을 정의하고 있다. 예를 들어 앱 전체를 통틀어 단 하나의 네비게이터를 사용할 수도 있다. 해당 네비게이터에 속한 모든 화면들은 왼쪽에서 오른쪽으로, 순차적으로 쌓이는 양상을 보일 것이다.

```javascript
export const RootNavigator = createAppContainer(
    createStackNavigator({
        Main: HomeScreen,
        Downloads: DownloadScreen,
        Settings: SettingsScreen,
    })
)
```

하지만 만약 뮤직 플레이어를 만들고 있는데, 앱 내의 어떤 뷰에서든 슬라이드를 하면 지금 재생 중인 음악에 대한 정보를 보여주는 카드를 추가하고 싶다면 어떻게 해야 할까? 최상위 단계의 네비게이터를 만들어서, 원래 네비게이터와 카드 하나를 담으면 된다. 또는 그냥 `{ mode: modal }`을 사용하여, 미리 만들어 둔 애니메이션을 입히기만 해도 된다. 짠, 이제 앱의 어디서든 '지금 재생 중' 화면으로 매끄럽게 이동할 수 있다!

```javascript
export const RootNavigator = createAppContainer(
    createStackNavigator({
        Main:   createStackNavigator({
            Main: HomeScreen,
            Downloads: DownloadScreen,
            Settings: SettingsScreen,
        }),
        NowPlaying: NowPlayingScreen,
    },
    {
        mode: 'modal'
    }
)
```

여러분의 네비게이터가 계층 구조로 이루어져 있더라도 라우트명은 그렇지 않다는 점이 특히 멋진 부분이다. 어떤 라우트에 있던, 최상위 레벨을 거치지 않고도 자유롭게 다른 라우트를 탐색할 수 있다. 그냥, 된다!

접근성과 관련한 이유 때문에, `<Link />`처럼 네비게이션을 사용하고 싶을지도 모르겠다. 만약 `react-native-web`을 사용해서 웹사이트를 만든다면, 이러한 방법을 통해 깔끔한 설계를 할 수도 있을 것이다.

리액트 네비게이션을 통해 앱에 대한 통제력을 크게 얻을 수 있지만, 대신 네이티브 네비게이션 뷰가 여러 차례 반복되는 단점도 있다. 만약 더 간단한 네비게이션을 원한다면, 유연성을 조금 희생한 대신 플렛폼 네이티브 네비게이션 바를 구현한 [`react-native-navigation`](https://github.com/wix/react-native-navigation)의 사용도 고려해보길 추천한다.



## 결론

내가 찾을 수 있는 리액트 네이티브의 유일한 단점은 지나치게 좋다는 사실 뿐인 것 같다. 글의 시작에서 이야기했듯, 이미 돌이키기에는 늦어버린 타이밍에, 초기의 잘못된 설계 탓에 앱 전체가 망가지는 최악의 순간이 혹시 오지는 않을지 기다리고 있을 뿐이다.

사실 내 첫 번째 리액트 (웹) 앱에서 비슷한 경험을 겪은 적이 있었다! 프로젝트 마감 직전, 로우앤드 핸드폰의 삼성 인터넷 브라우저에서 우리 웹앱이 돌아가야 한다는 마지막 요구 사항을 받았다. 리덕스와 웹소켓을 사용한 프로젝트였는데, 당시 우리가 할 수 있던 최선은 스플래시 페이지 대신, 로그인 페이지로 갔을 때에야 앱이 무너지도록 하는 것이었다.

리액트 네이티브는 꽤 괜찮다. 가끔 불공평한 비난을 받는 것 같다는 생각이 들 정도다. 웹 개발자들은 웹이 아니기 때문에, 반대로 앱 개발자들은 쓸모 없는 추상화라 여겨 리액트 네이티브를 기피한다. 하지만 개인적으로 나는 각 플렛폼에 속한 듯 하면서도, 실제로는 멀티 플렛폼인 앱을 사용하는 것이 훌륭한 해결책이라고 생각한다. 앞으로 react-native-web을 적용하여 PWA를 얻을 생각을 하니 벌써 엄청 기대가 된다!

🥳

이번 포스팅을 재미있게 읽었기를 바란다! 개인적으로 책 한 권으로 쓰고 싶을 만큼 흥미로운 부분도 있었다!! 리액트 네이티브에 대한 독자분들의 재미있는 의견도 궁금하고, 이 포스팅을 통해 앱 만들기에 영감을 얻었다면 좋겠다!

이 포스트가 재미있었다면 댓글을 달아주어도 좋다. 애니메이션이나, 퍼포먼스에 대한 이야기도 더 하고 싶지만, 지루한 이야기는 일단 여기까지만 하겠다! 



*잠깐! 트위터 팔로잉도 환영이다 [@freezydorito](https://twitter.com/freezydorito)*





##