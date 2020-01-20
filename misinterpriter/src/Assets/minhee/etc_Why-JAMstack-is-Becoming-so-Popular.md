## 잼 스택이 각광받는 이유는?

최근 들어 **정적 사이트 생성기**를 사용하는 경우가 꽤 흔해졌는데요. 사용하기에 매우 직관적이고, **최신 기술**과 **Vue.js**, **React** 등의 **자바스크립트 프레임워크**에 기반을 두고 있기 때문에 그렇습니다.

**정적 사이트 생성기, 모던 브라우저,  CDN, API** 덕분에, 웹 개발자들이 **서버 사이드**에서 **클라이언트 사이드**로 대거 이동하는 모습을 볼 수 있었죠. 

이와 더불어 [**Netflify**](https://www.netlify.com/)가 새로운 용어 **잼 스택**과 함께 등장했습니다.

그렇다면 **잼 스택**은 무엇이고, 왜 이렇게 인기를 얻게 되었는지 살펴보도록 합시다.

### 잼스택은 무엇인가요?

잼스택은 어떤 **기술이 아닙니다**. 대신, 잼스택은 **웹사이트와 앱을 설계하는 새로운 방식**입니다. 현대 웹개발 설계 기법으로서, 클라이언트 층에 기반을 두고 있으며 웹서버에 의존하지 않습니다. 

'잼스택은 정적인. HTML 사이트입니다. 컨텐츠를 업데이트 할 때마다 새로 빌드가 다시 되고, CDN을 통해서 바로 배포가 됩니다.'

필자가 블로그에서 읽은 잼스택에 대한 정의인데요. 마음에 쏙 듭니다!

**JAM**은 **Javascript, APIs, Markup**을 뜻합니다. 

**JavaScript**: 요청/응답 주기 동안, 동적인 프로그래밍은 클라이언트에서 자바스크립트가 전부 처리합니다. 프레임워크나 라이브러리를 사용할 수도 있고, 바닐라 자바스크립트로도 가능합니다.

**APIs**: 서버 사이드의 처리 과정이나 데이터베이스 관련 동작은 재사용 가능한 API들로 추상화되며, 이러한 API에는 자바스크립트를 사용하여, HTTPs를 통해 접근합니다. 직접 만들거나, 공신력 있는 제 3자 제공하는 API를 사용할 수 있습니다.

**Markup**: 배포 시에 틀이 완성된 마크업이 이미 완성되어 있어야 합니다. 보통 콘텐트 사이트에는 사이트 생성기를 사용하고, 웹앱에는 빌드 도구를 씁니다.



### 잼스택의 이점

잼스택을 사용할 때 다음과 같은 장점이 있습니다:

**더 빠르고 나은 퍼포먼스**

배포 시에 새로운 페이지를 생성할 수 있고, CDN을 통해 이미 빌드가 된 마크업과 자료를 제공할 수 있습니다.

**저렴한 가격, 간편한 확장성**

개발 과정이 덜 복잡하기 때문에 개발에 소요되는 비용이 줄어듭니다. 또한 정적 파일을 호스팅하는 데에 드는 지출도 더 저렴하거나 공짜입니다.

**높은 안전성**

서버 사이드와 데이터 운영이 생략되면서, 보안 취약성에 대한 걱정을 덜 수 있습니다.

**더 나은 개발 경험**

프론트앤드 개발자들은 프론트앤드와 디버깅에만 신경을 쓰면 됩니다. 사이트 생성기에 대한 CMS 옵션이 확대되면서, 유지보수의 필요성이 사라졌습니다. 더 빠르고, 더 집중력있는 개발을 할 수 있게 되었습니다. 

![img](https://miro.medium.com/max/4374/1*0m8h_Osu4n6iA1ehS6SCgg.png)

<잼스택 작업 흐름>

**워드프레스 웹사이트**를 방문할 때 아주 천천히 로딩되는 경험을 많이들 해 보셨을 겁니다. 데이터베이스에 많은 요청들을 보내기 때문인데요. **잼스택**의 동적 데이터는 **필요할 때**에 가져오면 되고, **HTML이 로딩**될 때마다 단 한번의 **개별적인 API 요청**을 보냅니다. 덕분에 웹사이트가 훨씬 빠르고 효율적으로 작동하지요.

### 현재 잼스택이 인기가 많은 이유는?

세 가지 주된 원인이 있을 것 같습니다.

- 위에서 말한 장점들
- 가장 핫한 **자바스크립트 프레임워크**로 웹사이트를 만들 수 있도록, 개발자들을 도와주는 **정적 사이트 생성기**를 사용할 수 있는 기회
- **헤드 없는(headless) CSM**의 빠른 성장으로, API를 통해 컨텐츠에 접근할 수 있게 됨

### 결론

**잼스택**의 적용 가능성은 무궁무진합니다. 간단한 블로그, 전자상거래를 위한 컨텐츠 관리가 필요한 웹사이트, 또는 훨씬 복잡한 웹앱까지도 가능합니다. 이번 글을 통해 잼스택을 사용할 때의 이점과, 그 인기의 원인을 살펴 보았습니다. 잼스택에 대해 꼭 알아보시길 권하면서 글을 마무리합니다.

**정적 사이트 생성기?**

[Nuxt.js](https://nuxtjs.org/) (Vue.js), [Gridsome](https://gridsome.org/) (Vue.js), [Next.js](https://nextjs.org/) (Next.js), [Gatsby](https://www.gatsbyjs.org/) (React), [Jekyll](https://jekyllrb.com/), [Hugo](https://gohugo.io/) 등이 인기가 있습니다.

**백앤드를 위한 헤드리스 CMS**

[Netlify](https://www.netlifycms.org/), [Contentful](https://www.contentful.com/), [Strapi](https://strapi.io/), [Ghost](https://ghost.org/), [Prismic](https://prismic.io/) 등을 많이 사용합니다.

### 유용한 자료

- [JAMstack community Slack](https://www.jamstack.org/slack)
- [JAMstack Radio](https://www.heavybit.com/library/podcasts/jamstack-radio/)
- [JAMstack book (O’Reilly, 2019)](https://www.netlify.com/oreilly-jamstack/)
- [Content management systems for JAMstack sites](https://headlesscms.org/)
- [Themes and starters for JAMstack sites](https://jamstackthemes.dev/)
- [JAMstack example](https://jamstack.org/examples/)s
- [JAMstack Meetups](https://jamstack.org/community/)

출처: https://medium.com/notonlycss/why-the-jamstack-is-becoming-so-popular-a26133b12a30

