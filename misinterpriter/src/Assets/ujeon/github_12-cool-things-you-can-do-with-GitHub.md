# GitHub로 할 수 있는 12 가지 멋진 일들

*본 기사는 [David Gilbertson](https://medium.com/@david.gilbertson?source=post_page-----f3e0424cf2f0----------------------)의 [12 cool things you can do with GitHub](https://medium.com/hackernoon/12-cool-things-you-can-do-with-github-f3e0424cf2f0)을 번역한 기사입니다.*



저에게 인트로란 없습니다. 그러니깐 바로 시작할게요.

## #1 GitHub.com에서 코드 수정하기

제가 *생각하기에* 대부분의 사람들이 알고 있는 것부터 시작하겠습니다 (비록 저는 지난 주 까지도 몰랐지만요).

여러분이  [GitHub](https://hackernoon.com/tagged/github)에 접속해서 파일을 열어보시면 (모든 text 파일, 모든 레파지토리), 오른쪽 위에 작은 연필 모양 버튼이 있을겁니다. 그 버튼을 누르면 해당 파일을 수정할 수 있습니다. 수정을 완료하고, **파일 변경 제안하기** 버튼을 클릭하면 GitHub는 해당 레포를 포크하고 풀 리퀘스트를 생성하게 됩니다.

멋지지 않나요? 포크를 생성해준다니깐요!

로컬로 포크를 할 필요도, 풀을 할 필요도, 변경할 필요도 없고 푸쉬하고 PR을 생성할 필요도 없습니다.

![진짜 PR이 아닙니다.](https://miro.medium.com/max/2008/1*w3yKOnVwomvK-gc7hlQNow.png)

이 방법은 오타를 수정 하는데에는 정말 좋은 방법이지만, [코드](https://hackernoon.com/tagged/code) 편집하는데에는 다소 좋지못한 방법입니다.

## #2 이미지 붙여넣기

단순히 코멘트를 달거나 이슈를 기술하는 것에 한정되지 않습니다. 클립보드에서 이미지를 직접 붙여넣을 수 있다는 사실을 아셨나요? 이미지를 붙여넣으면 '클라우드'에 업로드되고, 이미지를 보여주는 마크다운이 됩니다.

근사하죠.

## #3 서식 코드

코드 블럭을 작성하고 싶으시면, 세개의 백틱을 사용해서 작성할 수 있습니다. — ['마크다운 마스터하기'](https://guides.github.com/features/mastering-markdown/)  페이지를 읽고 배운 것 처럼요 — 그리고 GitHub는 작성중인 언어를 추측하려고 시도합니다.

하지만 Vue나 TypeScript, 혹은 JSX와 같은 스니펫을 포스팅 중이라면, 강조 표시를 할 수 있도록 명시적으로 지정할 수 있습니다.

아래의 예시에는 첫 번째 줄에 ````jsx`가 있습니다.

![](https://miro.medium.com/max/804/1*xnt83oGWLtJzNzwp-YvSuA.png)   

 ...그 말인 즉슨, 스니펫이 올바르게 렌더링 된다는 것을 의미합니다.

![](https://miro.medium.com/max/862/1*FnOcz-bZi3S9Tn3dDGiIbQ.png)

(이는 gists로 확장됩니다. gist에 `.jsx` 확장자를 부여하면 JSX 구문 강조가 표시됩니다.)

지원되는 모든 구문의 리스트는 [여기](https://github.com/github/linguist/blob/fc1404985abb95d5bc33a0eba518724f1c3c252e/vendor/README.md)에서 확인하실 수 있습니다. 

## #4 PR에서 마법의 단어로 이슈 클로징하기

이슈 #234를 고치기 위한 풀 리퀘스트를 생성한다고 가정해보죠. PR 설명에다가 "fixes #234"라는 문구를 넣습니다 (혹은 PR에 대한 코멘트 어느 곳에서나요).

그러면, 자동으로 PR이 머지되고 이슈가 클로징됩니다. 멋지지않나요?

더 자세히 알고 싶으시면 [이곳을 참조하세요](https://help.github.com/en/github/managing-your-work-on-github/closing-issues-using-keywords).

## #5 코멘트에 연결하기

특정 코멘트에 링크하고 싶었지만 어떻게 하는지 잘 모르셨나요? 그 이유는 여러분이 어떻게 하는지 모르셨기 때문입니다. 몰랐던 시절은 뒤로하고, 코멘트의 이름 옆에 날짜/시간을 클릭하면 코멘트에 링크할 수 있습니다.

![](https://miro.medium.com/max/468/1*rSq4W-utQGga5GOW-w2QGg.png)

## #6 코드에 연결하기

특정 코드 라인에 링크하고 싶으시다구요. 알겠습니다.

그렇다면 파일을 보시면서 해당 코드 옆의 줄 번호를 클릭해보세요.

와우, 보셨나요? URL이 줄 번호로 바뀌었습니다! Shift 키를 누른 상태에서 다른 줄 번호를 클릭하면 URL이 다시 바뀌고 선택한 줄들이 강조표시 됩니다.

이제 이 URL을 공유하면 해당 파일의 해당 코드줄들을 링크할 수 있습니다. 잠시만요, 그 URL은 현재 브랜치를 가리키고 있습니다. 만약 파일이 변경되면 어떻게 될까요? 아마도 현재 상태에서 파일에 대한 영구적인 링크가 여러분이 바라는 것일 겁니다. 

저는 게으르기 때문에 스크린샷 하나에 모든 것을 담겠습니다:

![](https://miro.medium.com/max/925/1*5Qg2GqTkTKuXLARasZN57A.png)

URL 얘기가 나와서 말인데요...

## #7 GitHub URL을 명령줄처럼 사용하기

UI를 사용해서 GitHub를 탐색하는 것은 훌륭한 방법이죠. 하지만 때로는 URL을 입력함으로써 원하는 위치에 가장 빠르게 접근할 수 있습니다. 예를 들어서, 작업중인 지점으로 이동하여 마스터 브랜치와의 차이점을 확인하려면, 레포 이름뒤에 `compare/branch-name` 을 입력하면 됩니다.

그 URL은 해당 브랜치와의 차이점을 나타내는 페이지로 이동시킵니다:

![](https://miro.medium.com/max/1085/1*DqexM1y398gSaozLNllroA.png)

위는 마스터 브랜치와의 차이점을 보여주는 페이지입니다. 만일 통합 브랜치에서 작업하고 있다면, `/compare/integration-branch...my-branch` 을 입력하면 됩니다.

![](https://miro.medium.com/max/1085/1*roOXDuo_-9QKI5NLKmveGQ.png)

조금 더 빠르게 작업하기 위한 키보드 단축키가 존재하는데, `ctrl`+`L` 이나 `cmd` + `L` 을 입력하면 커서가 URL으로 이동하게 됩니다 (적어도 크롬에서는요). 이는 브라우저가 자동 완성 기능을 수행한다는 사실과 함께 브랜치 간에 편리하게 이동할 수 있는 방법입니다.

고급 팁: 크롬의 자동 완성 제안을 통해 이동하기 위해서 화살표 키를 사용하고 히스토리에서 목록을 삭제하기 위해서 `shift` + `delete` 를 입력합니다 (예를 들어 브랜치가 머지되면). 

(저는 `shift + delete` 가 더 읽기 쉬울지 정말 궁금합니다. 하지만 기술적으로 '+' 그 단축키의 일부가 아니기 때문에 저는 저렇게 쓰는 것이 더 불편한 것 같아요. 이 문제 덕분에 저는 밤을 지샜죠, Rhonda.)

## #8 이슈에서 리스트 생성하기

이슈 페이지에서 체크 박스 리스트를 만들고 싶나요?

![](https://miro.medium.com/max/511/1*QIe-XOKOXTB3hXaLesr0zw.png)

또 이슈 목록에서 이슈를 확인할 때 "2/5" 막대가 표시되는 것을 원하시나요?

![](https://miro.medium.com/max/491/1*06WdEpxuasda2-lavjjvNw.png)

잘됐네요! 그럼 다음 구문으로 대화형 체크 박스를 만들 수 있습니다:

```
 - [ ] Screen width (integer)
 - [x] Service worker support
 - [x] Fetch support
 - [ ] CSS flexbox support
 - [ ] Custom elements
```

공백 다음 대쉬, 그리고 다시 공백과 왼쪽 대괄호 그리고 공백 (혹은 x) 그리고 닫는 대괄호를 입력한 다음 다시 공백을 입력하고 적고 싶은 단어들을 입력하면 됩니다.

그러면 실제로 해당 박스들을 체크하거나/체크를 해제할 수 있습니다! 어떤 이유에서인지 저에게는 이 방법이 기술적인 마법처럼 보입니다. 여러분은 상자를 *체크*할 수 있습니다! 그리고 이를 통해서 기본 텍스트를 업데이트 할 수 있죠!

그럼 다음은 뭘까요.

아 그리고 프로젝트 게시판에 이슈가 있으면 진행 상황을 보여줍니다.

![](https://miro.medium.com/max/557/1*x_MzgCJXFp-ygsqFQB5qHA.png)

제가 언급한 "프로젝트 게시판에서"의 의미가 무엇인지 모르시겠다면, 페이지 아래쪽으로 좀 더 내려가보세요.

2cm 더 내려가시면 됩니다.

## #9 GitHub의 프로젝트 게시판

전 큰 프로젝트에는 늘 Jira를 사용했습니다. 그리고 솔로 프로젝트에는 Trello를 사용했죠. 전 둘 다 사용을 중지했습니다.

몇 주 전에 레포의 **프로젝트** 탭에 GitHub 자체 프로젝트 관리 기능이 있다는 것을 알게되었을 때, 저는 Trello에 작성했던 것들을 이곳에 복사해야겠다고 생각했습니다.

![](https://miro.medium.com/max/1368/1*NF7ZnHndZQ2SFUc5PK-Cqw.png)

GitHub 프로젝트에도 위와 동일한 내용을 만들었습니다:

![](https://miro.medium.com/max/1350/1*CHsofapb4JtEDmveOvTYVQ.png)

속도를 높이기 위해서 위의 내용을 모두 'notes'로 추가했는데, 이 말은 실제 GitHub 이슈가 아님을 의미합니다. 

그러나 GitHub에서 작업을 관리하는 것의 진정한 힘은 레파지토리의 다른 부분과 통합되어 있다는 점입니다. 그래서 레포에서 기존에 존재하는 이슈를 게시판으로 추가하고자 하실겁니다.

오른쪽 위 **Add Cards** 버튼을 클릭해서 추가하고자 하는 것들을 찾을 수 있습니다. 여기에는 특수한 [검색 구문](https://help.github.com/en/github/searching-for-information-on-github/searching-issues-and-pull-requests)을 사용하는 것이 유용합니다. 예를 들어서, `is:pr` `is:open` 을 입력해서 열려있는 PR들을 게시판으로 끌어다 놓거나, 버그를 잡고싶다면 `label:bug` 을 검색하는 식입니다.

![](https://miro.medium.com/max/1343/1*rTVCR92HhIPhrVnOnXRZkQ.png)

혹은 기존 노트를 이슈로 변환할 수도 있습니다.

![](https://miro.medium.com/max/332/1*pTm7dygsyLxsOUDkM7CTcg.png)

또는 마지막으로, 기존 이슈 화면에서 해당 이슈를 오른쪽 창의 project 카테고리를 통해 프로젝트에 추가할 수 있습니다.

![](https://miro.medium.com/max/578/1*Czs0cSc91tXv411uneEM9A.png)

해당 작업을 구현하는 코드와 동일한 레파지토리에서 '작업'정의를 사용하면 큰 (어어어엄청 큰) 장점이 있습니다. 그 장점이라 하면 몇 년 동안 코드 라인에서 git blame을 할 수 있고, Jira/Trello/혹은 그 외에서 코드를 추적 할 필요 없이 해당 코드를 생성한 원본(original rationale)을 찾아 되돌아갈 수 있다는 것을 의미합니다.

### 단점

저는 지난 3주 동안 (kinda-sorta Kanban 스타일의 작은 프로젝트) Jira 대신에 GitHub에서 모든 작업을 진행하고 있었는데, 지금까지는 만족하고 있습니다.

하지만 적절한 예측과 속도 계산 그리고 그 밖의 모든 좋은 것들을 하고 싶은 스크럼 프로젝트에서 GitHub 프로젝트를 사용하는 일은 상상할 수 없을 것 같아요.

좋은 소식은, GitHub 프로젝트의 '기능'이 너무 적어서 충분히 전환이 가능한지 평가해보는데 오랜 시간이 걸리지는 않는다는 점입니다. 그러니 한 번 해보시고 어떤지 살펴보는 것도 좋을 것 같네요.

제 생각에는, 저는 [ZenHub](https://www.zenhub.com/)에 대해서 들어봤고 또 10분 전에 처음 열어보았습니다. ZenHub는 효과적으로 GitHub를 확장하여 이슈를 추정하고 에픽과 디펜던시를 생성할 수 있습니다. ZenHub에는 속도와 번다운(burndown) 차트도 존재하는데, 지구 상에서 가장 큰 것 같습니다.

더 읽고 싶으시다면: [GitHub 프로젝트 도움말](https://help.github.com/en/github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards)

## #10 GitHub 위키

위키피디아처럼 구조화되지 않은 페이지들의 경우 GitHub Wiki 기능 (이하 Gwiki)은 좋은 선택입니다.

구조화 된 페이지들은 (ex: 설명서) 그다지 중요하지 않습니다. Gwiki에는 "이 페이지는 그 페이지의 하위 페이지입니다."를 표현할 방법이 없고, '다음 섹션' 및 '이전 섹션'과 같은 버튼이 없습니다. 빵 부스러기가 없기 때문에 헨젤과 그레텔은 망할지도 모르겠네요.

(헨젤과 그레텔 이야기가 나와서 말인데, 혹시 그 이야기를 읽어보셨나요? 두 어리석은 아이들이 오븐을 이용해서 배고프고 늙은 여자를 살해하죠. 그리고 틀림없이 그 여자가 그 난장판을 치우도록 내버려두죠. 요즘 청소년들이 너무 민감하게 반응하는 이유가 여기에 있습니다. — 요즘 취침 전에 읽어주는 이야기에는 충분한 폭력성이 없거든요.)

다시 돌아와서, Gwiki를 한 바퀴 돌기 위해, NodeJS 문서에서 위키 페이지로 몇 페이지를 입력한 다음, 실제 구조를 모방할 수 있도록 사용자 정의 사이드바를 만들었습니다. 사이드바는 항상 있지만, 현재 페이지를 강조하지는 않습니다.

링크는 수동으로 유지해야 하지만, 무엇보다도 제대로 작동한다고 생각합니다. 필요하다고 생각되시면 [좀 더 살펴보세요](https://github.com/davidgilbertson/about-github/wiki).

![](https://miro.medium.com/max/1004/1*BSKQpkLmVQpUML0Je9WsLQ.png)

Gwiki는 GitBook ([Redux 문서](https://redux.js.org/)가 사용합니다.)이나 맞춤형 웹사이트같은 것들과 경쟁하지 않습니다. 하지만 80% 정도는 견고하며 여러분의 레포에서는 괜찮습니다.

저는 팬이에요.

저의 제안입니다: 단일 `README.md` 파일을 넘어서 사용자 안내서나 세부 문서를 위한 몇 가지 다른 페이지를 원한다면 다음 단계는 Gwiki입니다.

 구조/네비게이션이 부족하다는 느낌이 들기 시작한다면 다른 것으로 넘어가세요.

## #11 GitHub 페이지 (Jekyll)

아마 정적인 사이트를 호스트하기 위해서 GitHub Pages를 사용할 수 있다는 것을 알고 계실겁니다. 그렇지 않으셨더라도 이제 알게 되셨군요. 그러나 이번 섹션은 특히 Jekyll를 사용해서 사이트를 만드는 것에 관한 것입니다.

가장 간단한 방법으로 GitHub Pages + Jekyll는 `README.md` 을 멋진 테마로 렌더링합니다. 예를 들어, 제 [about-github](https://github.com/davidgilbertson/about-github)에서 리드미 페이지를 살펴보세요.

![](https://miro.medium.com/max/1353/1*nU-vZfChZ0mZw9zO-6iJow.png)

GitHub의 제 사이트의 'settings' 탭을 클릭하고, GitHub Pages를 켜고, Jekyll 테마를 선택하면...

![](https://miro.medium.com/max/759/1*tT9AS7tNfEjbAcT3mkzgdw.png)

[Jekyll 테마 페이지](https://davidgilbertson.github.io/about-github/)를 갖게 됩니다:

![](https://miro.medium.com/max/1353/1*pIE2FMyWih7nFAdP-yGXtQ.png)

이제부터 쉽게 편집할 수 있는 마크다운 파일을 기반으로 정적인 사이트를 구축할 수 있으며, 기본적으로 GitHub를 CMS로 만들 수 있습니다.

실제로 사용해보지는 않았지만 이 방법이 React 및 Bootstrap 사이트가 만들어지는 방식이므로 나쁘지는 않습니다.

참고로, 로컬로 실행하려면 Ruby가 필요합니다. (윈도우 사용자들은 정보를 교환하고 다른 방향으로 걸어 갈 것이고,  맥OS 사용자들은 "무슨일이야? 어디가? Ruby는 범용 플랫폼이야! GEMS!"라고 말할 것 같네요)

(GitHub Pages에서는 "폭력적이거나 위협적인 내용이나 활동"이 허용되지 않기 때문에 헨젤과 그레텔 리부팅을 호스트할 수 없다는 것도 여기에 포함할 가치가 있겠네요. )

### 저의 의견입니다.

GitHub Pages + Jekyll (이 포스트를 위해서)을 들여다보면 볼수록 전체적으로 이상한 점이 있는 것 같았습니다.

'자신만의 웹사이트를 갖는데 필요한 복잡한 것들을 없애는 것'이라는 아이디어는 훌륭합니다만 로컬에서 작업하려면 여전히 많은 빌드 설정이 필요합니다. 그리고 '간단한' 무언가를 하기위해서 끔찍하게 많은 CLI 명령을 알아야 하구요.

[Getting Started 섹션](https://jekyllrb.com/docs/)에 있는 일곱 페이지를 대충 훑어보았는데, 거기서 제가 제일 간단한 것 같더군요. 그리고 심지어 저는 간단한 "Front Matter" 구문이나 간단한 "Liquid templateing engine"의 내막도 아직 배우지 못했습니다.

차라리 웹사이트를 만드는게 낫겠어요.

솔직하게 말해서 Facebook이 React로 React 도움말 문서를 만들고 하루 안에 [정적 HTML 파일에 사전 렌더링](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md) 할 수 있을 때 Jekyll을 사용했다는 것에 놀랐습니다.

Facebook이 필요로 하는 것은 CMS에서 오는 것처럼 그들의 기존 마크다운 파일을 소비하는 어떤 방법이었던 것 같네요.

저는 만약에...

## #12 GitHub를 CMS로 사용하기

웹사이트에  텍스트가 있지만, 실제 HTML 마크업에 해당 텍스트를 저장하고 싶지 않다고 가정해보겠습니다.

대신에 개발자가 아닌 사람이 손쉽게 편집할 수 있도록 텍스트 조각을 어딘가에 저장하려고 합니다. 아마도 어떤 형태의 버전 관리가 될 것 같네요. 검토 과정일수도 있구요.

저의 제안은 이렇습니다: 레파지토리에 저장된 마크다운 파일을 사용하여 텍스트를 보관하세요. 그런 다음 프론트엔드에 해당 텍스트 조각을 가져와서 해당 페이지에 렌더링하는 컴포넌트를 만드세요.

저는 React를 사용자기 때문에, 여기에 마크다운 경로가 있으면 마크다운을 가져와서 HTML로 파싱하고 렌더링하는 `<Markdown>` 컴포넌트 예시가 있습니다.

```react
class Markdown extends React.Component {
    constructor(props) {
      super(props);
      
      // replace with your URL, obviously
      this.baseUrl = 'https://raw.githubusercontent.com/davidgilbertson/about-github/master/text-snippets';
      
      this.state = {
        markdown: '',
      };
    }

    componentDidMount() {
      fetch(`${this.baseUrl}/${this.props.url}`)
        .then(response => response.text())
        .then((markdown) => {
          this.setState({markdown});
        });
    }

    render() {
      return (
        <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} />
      );
    }
}
```

이 코드는 [`/text-snippets`](https://github.com/davidgilbertson/about-github/tree/master/text-snippets)에 마크다운 파일이 있는 예제 레파지토리를 가리키고 있습니다.

(또한 컨텐츠를 가져오기 위해서 GitHub API를 사용할 수 있지만 그 이유를 잘 모르겠습니다.)

다음과 같은 컴포넌트를 사용하세요:

```react
const Page = () => (
  <div className="page">
    <div className="about-us">
      <Markdown url="about-us.md" />
    </div>
    
    <div className="disclaimer">
      <p>A very important disclaimer:</p>
      
      <Markdown url="disclaimers/home-page-disclaimer.md" />
    </div>
  </div>
);
```

이제 GitHub는 원하는 텍스트 조각에 대한 일종의 CMS가 되었습니다.

위의 예제는 컴포넌트가 브라우저에 마운트 된 이후에 마크다운을 가져옵니다. 정적인 사이트를 원하시면 서버-렌더를 해야합니다.

좋은 소식이 있습니다! 서버에 있는 모든 마크다운 파일을 가져오는 것을 막을 방법은 없습니다 (어떠한 캐싱 전략과도 잘 어울립니다). 여러분이 길을 따라 내려가면, 아마도 디렉토리에 존재하는 모든 마크다운 파일 목록을 얻기위해서 GitHub API를 보고 싶으실 겁니다.

## 보너스 라운드 - GitHub 툴즈!

저는 한동안 [Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc?hl=en-US)라는 크롬 확장 도구를 사용해왔는데, 추천할만한 프로그램인 것 같습니다. 진심으로 하는말은 아니지만, 그래도 추천은 해요.

보고있는 레파지토리에 대한 트리 뷰를 담고있는 패널을 제공합니다.

![](https://miro.medium.com/max/1057/1*-MgFq3TEjdys1coiF5-dCw.png)

저는 이 [비디오 클립](https://www.youtube.com/watch?v=NhlzMcSyQek&index=2&list=PLNYkxOF6rcIB3ci6nwNyLYNU6RDOU3YyL)에서 octobox에 대한 것을 배웠습니다. 그리고 지금까지는 꽤 괜찮은 것 같네요. octobox는 Github 이슈에 대한 편지함 기능을 합니다. 제가 말씀드릴 건 그게 다에요.

테마 색에 관해서는, 저는 여러분을 놀래키기 싫어서 모든 스크린 샷을 밝은 테마로 가져왔습니다. 그러나 실제로 제가 보는 테마는 어두운 테마입니다. 왜 제가 퍼렇게 질린 GitHub를 봐야만하죠?

![](https://miro.medium.com/max/1829/1*SUdLeoaq8AtVQyE-dCw-Tg.png)

위 테마는 [Stylish](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe/related?hl=en) 크롬 확장기능과 (어느 웹사이트든지 테마를 적용할 수 있습니다) [GitHub Dark](https://userstyles.org/styles/37035/github-dark) 스타일의 조합입니다. 그리고 최종적인  룩을 완성하기 위해서 크롬 DevTools의 어두운 테마(내장 테마입니다. settings에서 킬 수 있어요)와 크롬을 위한 [Atom One Dark Theme](https://chrome.google.com/webstore/detail/atom-one-dark-theme/obfjhhknlilnfgfakanjeimidgocmkim?hl=en)을 사용했습니다.

## Bitbucket

지금부터 말할 내용은 이 게시물 어느 것과도 맞지 않지만, 제가 Bitbucket에 대해서 언급하지 않는다면 옳지 않을 것 같다는 생각에 적습니다. 

2년 전, 저는 어느 프로젝트를 시작하고 반나절 동안 어떤 git 호스트가 가장 좋은지 비교했는데, Bitbucket이 상당한 차이로 이겼습니다. Bitbucket의 코드 검토 플로우는 훨씬 앞서 있었습니다 (이는 GitHub가 검토하는 사람을 할당하는 개념을 갖추기 훨씬 전 이었죠).

이후 GitHub도 리뷰 게임에 참여하게 되었고, 대단한 성과를 만들어냈습니다. 하지만 애석하게도 저는 작년 한해 동안 Bitbucket을 사용할 기회가 없었습니다. 아마도 Bitbucket은 GitHub과는 다르게 앞서 나갔을지도 모르겠네요. 그래서 저는 어떤 서비스로 git 호스트를 할지를 결정할 수 있는 자리의 사람이라면 Bitbucket도 한 번 고려해보라고 적극 권하고 싶습니다.

## 끝맺음

지금까지 말씀드린게 전부입니다! 저는 본문을 통해서 적어도 3가지 이상은 새롭게 배워가셨으면 좋겠어요. 그리고 언제나 그렇듯 좋은 하루를 보내시기 바랍니다.

수정: 댓글에 더 많은 팁이 있습니다. 여러분도 여러분들이 좋아하는 것들을 남겨주세요. 그리고 다시 한 번 진지하게 말씀드리지만, 정말로 좋은 하루를 보내셨으면 좋겠습니다. 