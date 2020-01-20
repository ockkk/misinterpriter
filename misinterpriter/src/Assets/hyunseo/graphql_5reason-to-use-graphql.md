# 우리가 GraphQL 을 사용해야 하는 5가지 이유.

- **본기사는 [Top 5 Reasons to Use GraphQL (MARCH 20, 2018 Prisma)](https://www.prisma.io/blog/top-5-reasons-to-use-graphql-b60cfa683511) 을 번역한 기사입니다.**

출저 : https://www.prisma.io/blog/top-5-reasons-to-use-graphql-b60cfa683511

GraphQL은 API 개발의 새로운 표준이 되어가고 있습니다. 이 기사에서 그 이유를 알아보겠습니다.

![노트북](https://d33wubrfki0l68.cloudfront.net/c0fb631da36f84e02a5088411fcb527894b7fe52/adf58/blog/posts/top-5-reasons-to-use-graphql.png)

불과 2년 6개월 만에 그래프QL은 API 개발의 선두로 올라왔습니다.
이 글에서는 개발자가 GraphQL을 좋아하는 이유를 설명하고 빠르게 채택된 주된 이유를 공개합니다.

## **1. graphQL API 는 강력한 스키마 타입을 가지고 있습니다.**

대부분의 API 에 가장 큰 문제 중 하나는 운영 방식에 대한 강한 약속이 없다는 것입니다.
많은 개발자들은 API가 지원하는 작업과 사용 방법을 알 수있는 적절한 방법이 부족해서
더 이상 사용되지 않는 API 문서로 작업해야하는 상황에 처했습니다.
[GrqphQL 에 스키마](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e) 는
모든 GraphQL API 의 중추입니다.
입력 인수 및 가능한 응답을 포함하여 API가 지원 하는 작업 ( 쿼리 , 돌연변이 및 구독 )을 명확하게 정의합니다 .

#### 스키마는 API의 기능을 지정하는 확실한 계약입니다.

GraphQL 스키마는 강력한 형식이며 단순하게 표현될 수 있는 **SDL** (GraphQL 스키마 정의 언어) 로 작성 될 수 있습니다 . 강력한 유형 시스템 덕분에 개발자는 스키마가 없는 API로는 상상할 수없는 많은 이점을 얻고 있습니다. 예를 들어, 빌드 툴링을 활용하여 API 요청을 확인하고 컴파일 타임에 API와 통신 할 때 발생할 수있는 오류를 확인할 수 있습니다. 또한 편집기에서 API 작업을 자동 완성 할 수도 있습니다!

스키마의 또 다른 이점은 개발자가 더 이상 수동으로 API 설명서를 작성할 필요가 없으며 대신 API를 정의하는 스키마를 기반으로 자동 생성 될 수 있다는 것 입니다. 이는 API 개발에 판도을 바꿔 놓았습니다!

### [GraphQL Server Basics: The Schema - Structure and implementation of GraphQL servers (Part I)](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e)

## **2. 더 이상 overfetching 과 underfetching 은 없습니다.**

개발자는 종종 클라이언트가 API에서 필요한 데이터를 정확하게 검색 할 수 있다는 사실과 함께 GraphQL의 주요 이점을 설명합니다. 사전에 정의되고 고정 된 데이터 구조를 리턴하는 REST 엔드 포인트에 의존 할 필요가 없습니다. 대신 클라이언트는 API가 반환 한 응답 객체의 형태를 지시 할 수 있습니다.

이는 REST API에서 일반적으로 발생하는 두 가지 문제인 overfetching 과 underfetching 를 해결 합니다.

overfetching 은 클라이언트가 실제로 페치 할 때 필요하지 않은 데이터를 검색 하는 것을 의미합니다.(더 많은 데이터를 다운로드하고 parsing 하는 데 더 오래 걸리게 됩니다.)
따라서 앱의 성능이 떨어지고 사용자의 데이터 소비 계획도 망가집니다.

overfetching 의 간단한 예는 다음과 같습니다. 앱은 사용자의 "이름" 과 "생일" 을 표시하는 사용자의 프로필 화면 을 렌더링합니다 . 특정 사용자에 대한 정보를 제공하는 해당 API 엔드 포인트 (`/users/<id>`) 는 각 사용자에 대한 "주소" 및 "청구 정보" 도 반환하도록 설계되었습니다 . 둘 다 프로필 화면에 쓸모가 없으므로 가져올 필요가 없습니다.

underfetching 는 오버 페치와 반대이며 API 응답에 충분한 데이터가 포함되어 있지 않음을 의미합니다. 이는 클라이언트가 현재 데이터 요구 사항을 충족시키기 위해 추가 API 요청을해야 합니다.

최악의 경우, 이로 인해 악명 높은 N + 1 요청 문제가 발생합니다. 이것은 클라이언트가 필요로 하는 정보에 대해 n 개의 요청을 필요로 하는 상황입니다. 그러나 자체적으로 데이터 요구 사항을 충족시키는 엔드 포인트는 없습니다. 대신, 클라이언트는 필요한 정보를 받아오기 위해 요소 당 하나의 요청을 해야합니다.

예를 들어, 사용자가 기사를 게시 할 수있는 블로그 애플리케이션이 있다고 가정합시다. 이제 앱에 사용자 "목록"이 표시되며 각 사용자 요소에는 해당 사용자가 게시 한 "마지막 기사 의 제목" 도 표시되어야 합니다. 그러나 `/usersendpoint` 를 눌러 목록 데이터를 가져올 때 해당 정보는 포함되지 않습니다. 최신 기사 의 제목 을 가져 오기 위해 엔드 포인트에 대해 사용자 당 하나의 추가 요청을 (`/users/<id>/articles`) 해야 합니다.

#### 참고 : REST API를 사용하면 API 엔드 포인트의 페이로드를 클라이언트 요구에 맞게 조정하여 언더 페치 문제를 해결하는 경우가 많습니다. 이 예에서 이는 각 사용자의 마지막 기사 제목이 이제 / users 엔드 포인트 에서도 반환됨을 의미 합니다. 이 방법은 처음에는 좋은 솔루션처럼 보이지만 앱을 다시 디자인 할 때 백엔드를 변경해야하는 경우가 많기 때문에 빠른 제품 개발 및 반복주기를 방해합니다. 다음 섹션에서 자세히 알아보십시오.

[How to wrap a REST API with GraphQL - 3-step tutorial how to easily turn a REST API into a GraphQL API](https://www.prisma.io/blog/how-to-wrap-a-rest-api-with-graphql-8bf3fb17547d)

## **3. graphQL 은 빠르게 프로덕트를 개발할 수 있게 합니다.**

GraphQL은 프론트 엔드 개발자의 삶을 편하게 만듭니다. 프론트 엔드 개발자는 GraphQL 클라이언트 라이브러리 (예 : Apollo , Relay 또는 Urql ) 덕분에 기본적으로 chaching , realtime 또는 optimistic UI updates 를 자유롭게 (그래프가 아닌 경우 전체 팀이 작업 해야하는 영역입니다.) 이용할 수 있습니다.

프론트 엔드 개발자의 생산성 향상은 제품 개발 속도를 향상시킵니다. GraphQL을 사용하면 백엔드를 터치하지 않고도 앱의 UI를 완전히 다시 디자인 할 수 있습니다.

#### "우리는 제품 사용자입니다. 우리는 제품 구축에 사용하고자하는 API를 설계했습니다." 이는 4년 동안 GraphQL에서 얻은 교훈입니다. [Lee Byron](https://twitter.com/leeb)

[![Video Label](http://img.youtube.com/vi/zVNrqo9XGOs/0.jpg)](https://youtu.be/zVNrqo9XGOs)
[click to play]

GraphQL API 빌드 프로세스는 GraphQL 스키마를 중심으로 이루어집니다. 따라서 GraphQL의 맥락에서 스키마 중심 개발 이라는 용어를 자주들을 수 있습니다 . 단순히 스키마에서 기능을 정의하고 리졸버 함수로 구현되는 프로세스를 가리킵니다.

이 프로세스와 [GraphQL Faker](https://github.com/APIs-guru/graphql-faker) 와 같은 도구 덕분에 프론트 엔드 개발자는 스키마가 정의되면 생산성을 높일 수 있습니다. GraphQL Faker는 스키마 정의를 기반으로 전체 GraphQL API를 모방하므로 프론트 엔드 및 백엔드 팀이 완전히 독립적으로 작업 할 수 있습니다.

#### 스키마 정의 와 스키마 구현 의 차이점에 대해 자세히 알아 보려면 이 [기사](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e) 를 확인 하세요.

## **4. graphQL API 의 구성 방식.**

[스키마 스티칭](https://www.prisma.io/blog/graphql-schema-stitching-explained-schema-delegation-4c6caf468405) 아이디어 는 GraphQL 공간에서 가장 새로운 아이디어 중 하나입니다. 즉, 스키마 스티칭을 사용하면 여러 GraphQL API 를 결합하고 연결 하여 단일 API 로 병합 할 수 있습니다. React 컴포넌트를 기존 컴포넌트로 구성하는 방법과 유사하게 GraphQL API를 기존 GraphQL API로 구성 할 수도 있습니다!

#### React 컴포넌트를 기존 컴포넌트로 구성하는 방법과 유사하게 GraphQL API를 기존 GraphQL API로 구성 할 수도 있습니다!

이는 여러 GraphQL 엔드 포인트와 통신해야하는 클라이언트 애플리케이션 (마이크로 서비스 아키텍처에서 발생하거나 GitHub, Yelp 또는 Shopify와 같은 타사 API와 통합 할 때)에 매우 유용합니다. 스키마 스티칭 덕분에 클라이언트는 단일 API 엔드 포인트 만 처리하며 다양한 서비스와의 통신을 조정하는 모든 복잡성은 클라이언트에서 숨겨집니다.

GraphQL 바인딩 은 GraphQL API를 재사용하고 공유하는 간단한 접근 방식을 통해 스키마 스티칭 아이디어를 한 단계 끌어 올립니다.

#### GraphQL 바인딩을 통해 GraphQL API 재사용 및 구성-GraphQL 바인딩하면 기존 GraphQL API를 GraphQL 서버에 내장 할 수 있습니다.

## **5. 많은 오픈소스 생태계와 놀라운 커뮤니티.**

GraphQL이 공식적으로 Facebook에 의해 출시된 지 불과 2년 반 정도 밖에 되지 않았지만 , GraphQL 생태계는 믿을 수 없을만큼 성장했습니다.

GraphQL 이 처음 나왔을 때 , 개발자가 GraphQL을 사용할 수있는 유일한 툴은 [graphql-js](https://github.com/graphql/graphql-js) reference , Express.js 용 미들웨어 및 GraphQL 클라이언트 realy(Classic) 정도 뿐이였습니다.

하지만 오늘 날, GraphQL은 많은 큰 기술 회사의 생산에 사용됩니다.
GraphQL 로 구현 할 수있는 [다양한 언어](https://graphql.org/code/#server-libraries) 가 존재하고 많은 [클라이언트](https://medium.com/open-graphql/exploring-different-graphql-clients-d1bc69de305f) 또한 제공합니다. 또한 [Prisma](https://www.prisma.io/) , [GraphQL Faker](https://github.com/APIs-guru/graphql-faker) , [GraphQL Playground](https://github.com/prisma-labs/graphql-playground) , [graphql-config](https://github.com/kamilkisiela/graphql-config) 등과 같은 많은 툴들을 통해서 원활한 워크 플로우를 제공하고 GraphQL API를 빌드 할 때 놀라운 개발자 경험을 제공합니다.

![많은 기업에서 사용되는 GraphQL](https://cdn-images-1.medium.com/max/2814/1*OPs5D2XrAcFI1hDay-_nEQ.png)

GraphQL 커뮤니티 역시 빠르게 성장하고 있습니다. [많은 중소 기업](https://graphql.org/users/)이 프로덕션 환경에서 사용하기 시작 했으며 점점 더 많은 [GraphQL Meetup](https://graphql.org/community/upcoming-events/#meetups) 이 전 세계에 설립되고 있으며 , GraphQL 전용 컨퍼런스도 있습니다.

- [GraphQL Europe](https://www.graphql-europe.org/) (베를린)
- [GraphQL Day](https://www.graphqlday.org/) (changing locations, first edition in Amsterdam)
- [GraphQL Summit](https://summit.graphql.com/) (San Francisco)

**오늘 바로 GraphQL 시작하기**

이 기사에서는 GraphQL이 미래의 API 기술인 이유를 배웠습니다. GraphQL 이 테이블에 가져다 주는 장점들과 워크플로우를 개선하는 방법들은 개발자들에게 이득이 되고 API를 구축하고 소비하는 방법에 대한 Game Changer 입니다.

GraphQL을 시작하려면 다음을 참고하십시오.

- 오늘 바로 GraphQL 서버를 구축하는 방법 : [graphql-yoga](https://blog.graph.cool/tutorial-how-to-build-a-graphql-server-with-graphql-yoga-6da86f346e68)
- GraphQL 사용 방법 : [풀 스택 GraphQL 튜토리얼](https://www.howtographql.com/)
- GraphQL boilerplates : [Node, TypeScript, React, Vue 등을 포함한 GraphQL 프로젝트 용 스타터 키트](https://github.com/graphql-boilerplates)
