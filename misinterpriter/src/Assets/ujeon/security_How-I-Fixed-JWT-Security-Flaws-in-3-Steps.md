# JWT의 보안 결함을 3단계로 고치기

*본 기사는 [Renato Burro](https://dev.to/byrro)의 [How I Fixed JWT Security Flaws in 3 Steps](https://dev.to/dashbird/how-i-fixed-jwt-security-flaws-in-3-steps-264k)을 번역한 기사입니다.*

![호랑이](https://res.cloudinary.com/practicaldev/image/fetch/s--gDDoBo6T--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/yekmwrkd11shvfqquvy6.jpg)

### JWT을 잘못 사용하는 방법은 너무 많아요 😢

그리고 저는 그 몇몇 잘못된 방법을 사용하고 있었죠... 근데 저만 그런게 아니라 여러분도 마찬가지일걸요?!

JWT를 사용하는데 있어서 자주 간과하는 3가지 보안 이슈를 살펴볼게요. 몇 분 밖에 안걸립니다.



## 1. 잘못된 라이브러리들

npm에는 1600개가 넘는 ["jwt"관련 라이브러리](https://www.npmjs.com/search?q=jwt)가 있어요. 😳

![npm에서 jwt 검색 결과 캡쳐사진](https://res.cloudinary.com/practicaldev/image/fetch/s--GYrx1Yxf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/6rj1v12f7myg36pt6fu9.PNG)

그리고 Pypi에는 [300개가 넘는 라이브러리](https://pypi.org/search/?q=jwt)가 있죠.

![Pypi에서 jwt 검색 결과 캡쳐 사진](https://res.cloudinary.com/practicaldev/image/fetch/s--_OYfZmte--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/2nijzxuld30pejlvu5st.png)

이 라이브러리들이 전부 필요할까요? 물론 아니죠. 그리고 이 라이브러리들이 전부 안전할까요? 저는 그렇게 생각하지 않아요. 😖

여러분이 선택한 JWT 라이브러리가 훼손되어 있을 수 있어요. 이에 대해서 조금 더 자세히 알고 싶으면 [이 글](https://auth0.com/blog/critical-vulnerabilities-in-json-web-token-libraries/)을 참고하세요.

### 간단한 방법으로 해결이 가능한거에요?

네, 저도 보안이 지루 ㅎ ㅏ.. 💤

이 [자료](https://jwt.io/#libraries)를 참고하셔서 안전하다고 입증된 방법을 사용하는 라이브러리를 확인해보세요. 아마 지금 대부분은 입증된 방법을 사용할거에요.그렇지만 후회하는 것보다야 안전한게 낫죠.

---

## 2. 안전하지 않은 방법으로 생성된 토큰 그리고 배포

우리가 즐겨 사용하는 방법이 있죠: 🍀

> a. 프론트엔드가 사용자 인증을 요청합니다.
>
> b. 그러면 백엔드는 사용자를 인증하고 JWT를 생성합니다.
>
> c. 생성된 JWT는 response의 바디 페이로드를 통해 전달하죠.
>
> d. 프론트엔드는 전달받은 JWT를 localStorage에 저장합니다.

어.. 네.. 좋아요... [나쁜 놈](https://hackernoon.com/can-timing-attack-be-a-practical-security-threat-on-jwt-signature-ba3c8340dea9)들이 없고, [나쁜 일](https://medium.com/101-writeups/hacking-json-web-token-jwt-233fe6c862e6)들이 [일어나지 않는다면](https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2019/january/jwt-attack-walk-through/) 세상은 더 아름다워질거에요. 😇 

![컵케이크 사진](https://res.cloudinary.com/practicaldev/image/fetch/s--Xkaqo9Au--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ulqxllccxbtqk6ah6wdf.jpg)

네, 말도 안되죠. 😎

그러니 위의 방법을 따라해서는 안됩니다.

(a) 와 (b)단계를 보완하기 위해서, 최선의 방법을 사용하는 JWT 라이브러리를 선택하셔야 합니다. 아니면 직접 만드셔도 좋구요. 그렇게 어렵지는 않으니 한 번 고민해보세요.

또 모든 인증과 관련된 모든 시도(성공과 실패)와 여러분이 얻을 수 있는 상황 데이터(contextual data)를  로그로 남기는 방법도 [좋은 방법](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html#which-events-to-log)이에요.

JWT는 서버리스 환경에서 주로 사용됩니다. (왜냐하면 둘 다 stateless이기 때문이죠!)

만일 여러분이 그런 경우라면, 로그를 모니터링하고 여러분에게 미리 경고해줄 수 있는 전문가를 두는 것이 좋습니다. 그런 경우가 아니라면? 그래도 그렇게 하시는게 좋아요. 😉

이제 (c) 와 (d)를 살펴보죠:

>**절대로!** JWT를 response 바디 페이로드로 **전달하면 안됩니다.**
>
>**절대로!** JWT를 **localStorage**에 저장하지 마세요.

왜 그렇냐면요: 프론트엔드의 모든 자바스크립트 코드는 JWT에 접근할 수 있고, 그걸로 무엇이든지 할 수 있기 때문이죠.

## 그리고 [위험해요](https://developer.okta.com/blog/2018/06/20/what-happens-if-your-jwt-is-stolen).

![보라색 모래 위에 있는 에매랄드 전갈](https://res.cloudinary.com/practicaldev/image/fetch/s--549hK48O--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/6urds06z62day9urqo5i.jpg)

누군가 여러분의 프론트엔드에 악의적인 코드를 삽입하고 사용자들의 JWT를 훔친다면 어떤 일이 발생할까요... 음... 상상만해도 끔찍하네요.

서버는 사용자의 브라우저에 JWT를 쿠키로 설정해야돼요. 그리고 그 쿠키를 [Secure 및 httpOnly](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#Secure_and_HttpOnly_cookies) 그리고 [sameSite](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#SameSite_cookies) 쿠키로 플래그를 지정해야 합니다. 여러 맛이 나는 쿠키가 되는거죠.

이런 방식으로 JWT는 뒤이은 모든 요청에서도 백엔드에서 사용할 수 있게 됩니다. 지저분한 JS 손아귀에서 벗어난 채 말이죠.

reponse 바디 페이로드에는 프론트엔드에서 사용자에게 전달 할 기능을 제공하는데에 필요한 것들만 담아야합니다. 혹시 바디 페이로드에 민감한 정보를 담으면 안된다고 제가 말한 적이 있나요? 없나요? 물론, 담으시면 안됩니다.

압니다. 쿠키보다는 localStorage가 멋진 기능이죠. 그렇지만 자, 봐요. 쿠키는 여러 맛으로 만들 수 있어요. 그리고 색상도 다양하게 할 수 있죠!  게다가 **안전**하기까지 합니다. 쿠키는 저와 여러분의 친구에요. 그러니 잘 다뤄주도록 해요. 괜찮죠? 🙌 🍪

![여러가지 쿠키들](https://res.cloudinary.com/practicaldev/image/fetch/s--YphJsN5n--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/shhl4a23fvu12hmc4l6c.jpg)

---

## 3. 비밀 키를 안전하게 다루지 않아요.

모든 JWT구현에는 일종의 비밀 키를 포함하고 있어요. 토큰에 서명하는 데 있어서 대칭(하나의 비밀 키) 방법이든 비대칭(공개 / 개인 키) 방법이든 상관없이요.

>개인적으로, 저는 HMAC을 사용해서 대칭적으로 구현하는 것을 선호해요. 단순하기 때문이죠. 또 때때로 비대칭 RSA도 사용하곤 해요. 최근들어서는 후자를 사용합니다. 글쎄요, 사람들은 제가 실제로 무엇을 사용하는지 절대로 모를거에요. 😜

여러분도 마찬가지로 여러분이 JWT를 어떻게 구현하는지 다른 사람들은 절대로 알아서는 안돼요. 비밀 키나 개인 키는 말할 것도 없죠.

개인 키 및 비밀 키로 가능한 하지 말아야 할 것들입니다:

- 💻 config 파일을 저장하고 Git 레포에 커밋하는 행위
- 📣 여러분의 팀원에게 여러분의 드라이브, 드롭박스 혹은 슬랙이든 무엇이든 공유하는 행위
- ♻️ 동일한 키를 로컬, 테스트, 프로덕션 환경에서 사용하는 행위

대신 이렇게 하세요:

- ✌️ 로컬과 테스트 환경에서만 사용할 수 있도록 개발팀에게 키를 전달하세요.
- 👍 프로덕션 키를 안전한 곳에 저장하세요. 프로덕션 앱에서만 사용할 수 있게 말이죠.
- 🔐 프로덕션 키를 눈에 띄지 않게 하고, 환경 변수로 온디맨드 방식으로 로드하여, 의도하지 않은 액세스로부터 보호하세요.