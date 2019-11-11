# jihoon-park 배포 계획

1. 서버,db 없이 push 된 md 파일들을 불러와서 화면에 렌더 시켜준다.
2. 번역한 md 파일들을 카테고리화?!해서 폴더로 모아놓고 import 해서 리스트 뷰로 제목 가져오고 누르면 포스팅 확인할 수 있게 구현?
3. 졸업생 공간처럼 영문개발문서에 관심있는 수강생들이 많아진다면 퍼블릭 레포처럼 활성화된다면 더 확장할 수도 있지 않을까?

- MD 형식 파일을 react 에서 렌더링하기.

example

```js
import React from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";

const content = require("./content/thinstyle.md");

ReactDOM.render(
  <ReactMarkdown source={content} />,
  document.getElementById("root")
);
```

https://github.com/rexxars/react-markdown

- Github 배포로 react 프로젝트 배포하기.

https://eblee-repo.tistory.com/41
https://leejungdo.com/blog/2018/12/24/React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-github-pages%EC%97%90-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0.html
