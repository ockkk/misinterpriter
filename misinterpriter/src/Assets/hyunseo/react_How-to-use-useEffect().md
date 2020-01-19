# 리액트 Hooks : useEffect() 사용법

- **본기사는 [React Hooks: How to use useEffect()](https://medium.com/javascript-in-plain-english/react-hooks-how-to-use-useeffect-ecea3e90d84f) 을 번역한 기사입니다.**

출저 : https://medium.com/javascript-in-plain-english/react-hooks-how-to-use-useeffect-ecea3e90d84f

![hook](https://miro.medium.com/max/2732/1*gzlu13kKwDzlkV1031c7fg.jpeg)

### useEffect () 정보

ReactJS 공식 문서를 참조하고 Hooks 섹션 첫 번째 팁에서 useEffect를 검색하면 다음과 같습니다.

> React class 라이프 사이클 메소드에 익숙 하다면 useEffect Hook를 componentDidMount, componentDidUpdate 및 componentWillUnmount 결합으로 생각할 수 있습니다.

클래스 기반 컴포넌트의 라이프사이클 방법은 매우 중요합니다. 컴포넌트를 렌더링 할 때 API에서 일부 데이터를 가져 오거나 업데이트 할 때 특정 작업을 수행하려는 경우가 있습니다. 가장 중요한 방법은 componentDidMount 와 componentDidUpdate 입니다.

> hooks 는 함수형 컴포넌트를 작성하고 클래스 기반 기능에 계속 연결하여 사용할 수 있게하는 것입니다.

UseState를 사용하여 state 를 함수형 컴포넌트로 가져올 수 있습니다.
state 와 라이프사이클은 클래스 기반 컴포넌트의 기능입니다. UseEffect를 사용하여 라이프사이클 로직을 처리 할 수 ​​있습니다.
useEffect 라는 이름에서 무언가 컴포넌트에 영향을 줄 때마다 useEffect 가 호출 될 것을 유추할 수 있습니다.
대박이죠?! useEffect 가 componentDidMount 와 componentDidUpdate 의 정의라는 것이 명백해졌습니다!

![mac](https://miro.medium.com/max/5492/0*Sht4ASpcZlfNf3Ch)

### useEffect() 의 다른 용도

좋습니다! 이제 우리는 useEffect() 를 더 알아보기 위해 코드로 직접 적어봅시다!
이 부분에서는 React JS 공식문서의 예제를 사용하여 몇 가지 중요한 변경 사항을 사용해보면서 useState() 및 useEffect() 사용법을 명확하게 연습해보겠습니다.

Assume we want to declare a property in state what is an object.
And has 2 properties: name and familyName.
Initial state would be “name” and “family” and after rendering the component it should be changed to something else.
state 에서 객체를 선언한다고 가정합니다. 그리고 name 과 familyName 이라는 두 가지 속성이 있습니다.
초기 상태는 “name” 과 “family” 이며 컴포넌트를 렌더링 한 후에는 다른 것으로 변경해야 합니다.

> 참고 : Firefox 또는 Chrome에서 React dev 도구 확장을 통해 state 를 확인 할 수 있습니다.

**첫번 째 : state 선언하기**

```js
import React, {useState} from 'react';

export const EffectDemo = () => {
    //State
    const [fullName, setFullName] = useState({name: 'name', familyName: 'family'});
    const [title,setTitle] = useState('useEffect() in Hooks');


    return(
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: {fullName.name}</h3>
            <h3>Family Name: {fullName.familyName}</h3>
        </div>
    );
```

**두 번째 : useEffect() 정의**

```js
import React, { useEffect, useState } from "react";

export const EffectDemo = () => {
  //State
  const [fullName, setFullName] = useState({
    name: "name",
    familyName: "family"
  });
  const [title, setTitle] = useState("useEffect() in Hooks");

  //useEffect
  useEffect(() => {
    setFullName({ name: "Marco", familyName: "Shaw" });
  });

  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Name: {fullName.name}</h3>
      <h3>Family Name: {fullName.familyName}</h3>
    </div>
  );
};
```

코드에서 알 수 있듯이 useEffect()의 인자는 컴포넌트에 영향을 줄 때 실행할 함수입니다. 결과를 확인합시다! :

![coderesult](https://miro.medium.com/max/2482/1*Uk7jZQIN2DA0kQ3AH8bIhw.png)

Great! Like me you should see the name and familyName you choose in state.
대단하죠! 선택한 "name" 과 "familyName" 으로 보이게 되었습니다! 하지만 다른 것을 확인해 보죠!
useEffect 가 몇 번이나 호출되는지 확인하기 위해 특수 문장을 기록하고 싶습니다.

```js
import React, { useEffect, useState } from "react";

export const EffectDemo = () => {
  //State
  const [fullName, setFullName] = useState({
    name: "name",
    familyName: "family"
  });
  const [title, setTitle] = useState("useEffect() in Hooks");

  //useEffect
  useEffect(() => {
    console.log("useEffect has been called!");
    setFullName({ name: "Marco", familyName: "Shaw" });
  });

  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Name: {fullName.name}</h3>
      <h3>Family Name: {fullName.familyName}</h3>
    </div>
  );
};
```

![log](https://miro.medium.com/max/1294/1*GvALLBONI3vsNVR9ytutPQ.jpeg)

죄송합니다! 컴포넌트가 변경 될 때마다 useEffect가 호출되었다는 것을 알 수 있습니다. 이것은 우리가 찾고 있는 것이 아닙니다.
우리의 useEffect 메소드는 componentDidUpdate 처럼 작동해야 합니다. componentDidUpdate 에 익숙한 경우 조건에 따라 작동해야하는 시기를 제어 할 수 있습니다. 우리는 여기서 useEffect에서 배열을 두 번째 인수로 전달할 수 있습니다. 이 배열은 필드가 변경되었을 때 useEffect를 호출한다는 반응을 명확하게 알려줍니다.
따라서 배열에 "name"을 넣고 useEffect ()의 두 번째 인수로 전달하면; "name"이 변경 될 때 메소드가 호출됩니다.
아직도 이것은 우리가 원하는 대답이 아닙니다. componentDidMount 를 원합니다!
useEffect에게 componentDidMount 처럼 작동하도록 지시하려면 빈 배열을 전달하면 모든 것이 완벽합니다. 확인해 봅시다! :

```js
import React, { useEffect, useState } from "react";

export const EffectDemo = () => {
  //State
  const [fullName, setFullName] = useState({
    name: "name",
    familyName: "family"
  });
  const [title, setTitle] = useState("useEffect() in Hooks");

  //useEffect
  useEffect(() => {
    console.log("useEffect has been called!");
    setFullName({ name: "Marco", familyName: "Shaw" });
  }, []); //Pass Array as second argument

  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Name: {fullName.name}</h3>
      <h3>Family Name: {fullName.familyName}</h3>
    </div>
  );
};
```

그리고 log 에는 !

![log2](https://miro.medium.com/max/1306/1*uLDds2pHLGLQdXPJ0d_IHg.jpeg)

Great! Now we have used different types of useEffect() and I hope you’ve realized the core concepts of useEffect().
좋아요! 우리는 이제 다른 형태의 useEffect() 를 사용해 보았습니다! useEffect 의 핵심 개념을 깨달았기를 바랍니다!

...

### useEffect() 로 데이터 가져 오기

우리는 더 나아가 React Hooks에 대한 지식을 사용하고 싶습니다.
우리는 실제 프로젝트에서 직면하게 될 실제적이고 유용한 작업을 원합니다. API에서 데이터를 가져 오는 예제를 보도록 하겠습니다.
앞으로 나아 가기 전에 몇 가지 팁을 알아야 합니다.

> 1.  API를 가져 오기 위해 axios를 사용합니다. 너무 깨끗하고 사용하기 쉽습니다. 여기에서 읽을 수 있습니다 : Axios GitHub
> 2.  우리는 나머지 국가의 글로벌 API를 사용합니다. URL은 'https://restcountries.eu/rest/v2/all'입니다.

여기서 우리는 API에서 국가 목록을 가져와 총알 목록으로 표시하는 것입니다.
우리는 state 에 3 개의 변수를 제공해야 합니다. :

1. Countries : 표시 할 국가 목록
2. Load : 가져 오기 프로세스가 완료 될 때까지 로드 텍스트를 표시합니다. ( async/await TypeError 를 피하기 위해 )
3. Error : 국가 목록 대신 가져 오기 메소드의 오류를 표시합니다.

좋구나! 이제 state 를 선언하세요! :

```js
const [countries, setCountries] = useState([]);
const [load, setLoad] = useState(false);
const [error, setError] = useState("");
```

이제 우리는 API 를 axious 를 이용해서 useEffect() 안에서 데이터를 불러옵니다!
componentDidMount 처럼 동작하기 위해 빈 배열을 useEffect 에 두번 째 인자로 주는 것을 잊지마세요!

```js
import React, { useEffect, useState } from "react";

export const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        setCountries(res.data);
        setLoad(true);
      })
      .catch(err => {
        setError(err.message);
        setLoad(true);
      });
  }, []);

  if (load) {
    return (
      <ul>
        {error ? (
          <li>{error.message}</li>
        ) : (
          countries.map((country, index) => <li key={index}>{country.name}</li>)
        )}
      </ul>
    );
  } else {
    return <div>Loading...</div>;
  }
};
```

load 의 초기값 state 는 불리언 타입 false 이고 에러는 정의되지 않습니다. 컴포넌트가 마운트되면 API를 가져옵니다.
API가 상태 코드 200 또는 OK를 반환하면 반환 된 데이터를 기준으로 국가 배열을 설정합니다.
그러나 페치 프로세스가 실패하면 오류를 재조정 된 오류와 동일하게 설정합니다.
두 경우 모두 방문자에게 최종 결과를 표시하기 위해 로드를 " true "로 설정 했습니다. 이제 우리의 마지막 단계로 가봅시다! :

```js
import React, { useEffect, useState } from "react";
import axios from "axios";

export const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        setCountries(res.data);
        setLoad(true);
      })
      .catch(err => {
        setError(err.message);
        setLoad(true);
      });
  }, []);

  if (load) {
    return (
      <ul>
        {error ? (
          <li>{error.message}</li>
        ) : (
          countries.map((country, index) => <li key={index}>{country.name}</li>)
        )}
      </ul>
    );
  } else {
    return <div>Loading...</div>;
  }
};
```

Great! We’re Done! We successfully fetched API in a functional component thanks to useEffect and handled loading and error.
다 했습니다! 우리는 함수형 컴포넌트에서 useEffect 를 사용해서 error 와 loading 을 표시하면서 성공적으로 API 를 가져왔습니다.

![apiresult](https://miro.medium.com/max/2614/1*XKgtj7ME8L0wJYFsieiMig.png)

### 코드를 더 깨끗하게!

코드를 더 깨끗하게 만들 수 있습니다. fetch 메소드를 다른 파일로 옮기고 전체 프로젝트에 대해 get 메소드를 구현해 봅시다.
더 나아 가기 전에 API를 가져 오는 데 시간이 걸리고 TypeErrors를 피하고 싶기 때문에 promise를 사용할 것임을 아는 것이 중요합니다.
[promise 에 대해 읽어보세요!](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

Eric Elliott :

> promise 는 미래에 언젠가 단일 값을 생성 할 수있는 객체입니다.
> 해결 된 값 또는 해결되지 않은 이유 (예 : 네트워크 오류가 발생 함).
> promise 는 가능한 3 가지 상태 중 하나 일 수 있습니다 : fulfilled, rejected, or pending.
> promise 사용자는 이행 값 또는 거부 사유를 처리하기 위해 콜백을 첨부 할 수 있습니다.

그래서 우리는 우리의 행동에 promise 를 사용하겠습니다.
promise 는 조치가 성공적으로 완료되면 일부 답변 또는 데이터를 넘겨주거나 실패하는 경우 어떤 이유로 이를 거부합니다.
이제 다른 파일 (예 : generalMethods.js)에 getItems 메소드를 작성해 보겠습니다.

```js
import axios from "axios";

export const getItem = url => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => reject(err));
  });
};
```

이제 get API를 가져올 때마다 가져 와서 사용할 수 있습니다. URL 만 전달하면됩니다.
이제 로드 상태를 제거하고 무시할 수는 있지만 이를 완전히 무시할 수는 없습니다.
사용자의 인터넷 속도나 서버 때문에 가져 오는데 프로세스에 시간이 걸릴 수 있습니다.

```js
import React, { useEffect, useState } from "react";
import { getItem } from "./generalMethods";
import axios from "axios";

export const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getItem("https://restcountries.eu/rest/v2/all")
      .then(res => {
        setCountries(res);
        setLoad(true);
      })
      .catch(err => {
        setError(err);
        setLoad(true);
      });
  }, []);

  if (load) {
    return (
      <ul>
        {error ? (
          <li>{error.message}</li>
        ) : (
          countries.map((country, index) => <li key={index}>{country.name}</li>)
        )}
      </ul>
    );
  } else {
    return <div>Loading...</div>;
  }
};
```

깔끔하고 좋습니다!

### 마치며

Hooks 에 관한 기사에서 함수형 컴포넌트와 Hokks 의 장점을 보여 주려고 노력했습니다.
약간 혼란스럽고 Hooks 사용에 대한 두려움이 있는지 이해합니다. 정상입니다!
클래스 기반 컴포넌트는 약 5 년 동안 사용하며 습관을 깨는 것은 너무 어렵고 두려운 일입니다. 그러나 목표를 잘 잡아야 합니다.
천천히 움직여 자신에게 도전하십시오. 먼저 다른 프로젝트에 연결하여 class 을 구현하십시오. 습관을 극복하고 Hooks 를 적용해 보세요.
나는 당신이 그것을 즐길 것이라고 확신합니다. 다음 기사에서는 redux를 사용하는 개발자를 위한 useReducer에 대해 설명합니다.
또한 함수형 컴포넌트와 Hooks 만 사용하여 실제 웹 응용 프로그램을 만듭니다. 다음 기사에서 Hooks 의 모듈 성과 아름다움을 명확하게 볼 수 있습니다.
이 기사가 마음에 들었고 유용했던 경우 박수를 보내 거나 이메일로 저에게 연락하는 것을 잊지 마십시오 : hossein.ahmadi98@outlook.com
