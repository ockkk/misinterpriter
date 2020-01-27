# ReactJS에서 컴포넌트의 라이프 사이클 methods를 이해하는 방법

![lifectcle](https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png)

이 글에서 우리는 ReactJs의 메소드 라이프사이클에 대해서 살펴보겠다. 하지만 React의 다양한 라이프사이클 메소드 넘어가기 전에  우리는 그것들이 무엇인지 이해해야 한다.

우리가 알고 있듯이 이 세상의 모든것은 주기를 따른다(사람이든 나무든) . 우리는 태어나고 자라고 죽는다. 거의 모든 것든은 이러한 삶의 주기를 따르고 React components도 마찬가지이다. Components 생성되고(DOM에서 mount될때), 업데이트하여 성장하고, 죽는다(DOM에서 unmount될 때). 이것은 **a component lifecycle**이라고 부른다. 

React가 component life의 단계마다 제공하는 다양한 라이프사이클 메소드가 있다. React는 component의 단계에 따라 담당 메소드를 자동으로 호출한다. 이러한 메소드를 사용하면 component를 보다 잘 제어할 수 있게해주며 이러한 메소드를 사용하여 조작할 수 있다. 

지금 우리는 라이프사이클 방법이 무엇이며 그것이 왜  중요한지 알고 있다. 그렇다면 방법들은 무엇인가? 그것들에 대해 살펴 보자. 



## Lifecycle Methids

Component의 라이프사이클은 크게 4부분으로 분류된다.

- **initialization**
- **mounting**
- **updating, and**
- **unmounting**.

여러 단계에서 사용할 수 있는 다양한 라이프사이클 메소드에 대해 논의 해보자.



## Initialization

이것은 state(아래 참조)와 props를 성정하여 component가 여행을 시작하는 단계이다. 이것은 보통 constructor 메소드 안에서 일어난다(initialization 단계를 잘 이해하려면 아래를 참고하세요). 

```javascript
class Initialize extends React.Component {
    constructor(props)
    {
    // Calling the constructor of
    // Parent Class React.Component
    super(props);
    // initialization process
    this.state = {
       date : new Date(),
       clickedStatus: false
     };
}
```



## Mounting

설명이 필요 없는 이름이다. Mounting은 React 컴포넌트가 DOM에 mount하는 단계이다 (즉 생성되어 DOM에 삽입된다). 

이 단계는 initialization 단계가 완료된 후 장면에 나타난다. 이 단계에서 conponent가 처음으로 렌더링된다. 
이 단계에서 사용가능한 메소드들은 다음과 같다:

### 1.componentWiiMount()

이 메소드는 DOM 위에 component가 mount되거나 render 메소드가 호출되기 직전에 호출된다. 이 메소드 후에 component가 mount 된다.

Note: 이것을 사용하여 API 호출이나 데이터를 변경해서는 안된다. 이 메소드의 setstate는 render 메소드 전에 호출되기 때문이다. 따라서 DOM이 마운트되지 않았으므로 DOM으로 (즉, API response로 데이터 업데이트) 수행할 수 있는 작업이 없다. 따라서 API 응답으로 상태를 업데이트 할 수 없다.

### 2.componentDidMount()

이 메소드는 DOM에 component가 mount된 후에 호출된다. componentWillMount처럼 라이프사이클에서 한번 호출 된다. 이 메소드가 실행 되기 전에 render 메소드가 호출된다(즉, 우리는 DOM에 접근할 수 있다). 우리는 API를 호출하고 API 응답으로 상태를 업데이트 할 수 있다. 

mounting 메소드를 이해하기 위해 살펴 보자: 

```javascript
class LifeCycle extends React.Component {
  componentWillMount() {
      console.log('Component will mount!')
   }
  componentDidMount() {
      console.log('Component did mount!')
      this.getList();
   }
  getList=()=>{
   //*** method to make api call***
  }
  render() {
      return (
         <div>
            <h3>Hello mounting methods!</h3>
         </div>
      );
   }
}
```



## Updating

이것은 component가 통과하는 세번째 단계이다. 생선된 component가 mounting 된 후에 업데이트 단계가 진행 된다. 여기에서 component의 상태가 변경이 되어서 다시 render 된다. 

이 단계에서 클릭, 타이핑 등과 같은 사용자 이벤트에 대한 응답으로 component (state & props)의 데이터가 업데이트 된다. 결과적으로 component가 다시 rendering 된다. 
이 단계에서 사용 가능한 방법은 다음과 같다:

### 1.shouldComponentUpdate()

이 메소드는 component의 업데이트 여부를 결정한다. 기본적으로 true를 리턴한다. 하지만 어떤 시점 어떤 조건에서 다시 render하기 원한다면 shouldComponentUpdate 메소드를 사용하는 것이 맞다. 

예를 들어  prop이 변경 되었을때 component를 다시 render하기를 원한다고 가정하고 이 방법의 장점을 활용해라. 그것은 nextProps 와 nextProps 같은 인자를 받아 현재 prop 값과 비교하여 다시 render할지 여부를 결정할수 있다.

### 2.componentWillUpdate

다른 메소드처럼 이것 또한 설명이 필요없다. component를 다시 렌더하기 전에 호출된다. **'shouldComponentUpdate'** 메소드 후에 한번 호출된다. state 와 prop의 업데이트 후 그리고 component를 다시render전에 약간의 계산을 행하기를 원한다면  다음이 가장 좋은 곳이다. 'shouldComponentUpdate' 메소드처럼  **'shouldComponentUpdate'** 또한 nextProps 및 nextState와 같은 인자를 받는다. 

### 3.componentDidUpdate()

이 메소드는 component가 다시 render된 후에 호출된다. DOM에서 (업데이트된) 새로운 component가 업데이트 된 후 ‘**componentDidUpdate**’ 메소드가 실행 된다. 이 메소드는  prevProps 와 prevState 같은 인자들을 받는다.

```javascript
class LifeCycle extends React.Component {
      constructor(props)
      {
        super(props);
         this.state = {
           date : new Date(),
           clickedStatus: false,
           list:[]
         };
      }
      componentWillMount() {
          console.log('Component will mount!')
       }
      componentDidMount() {
          console.log('Component did mount!')
          this.getList();
       }
      getList=()=>{
       //*** method to make api call***
       fetch('https://api.mydomain.com')
          .then(response => response.json())
          .then(data => this.setState({ list:data }));
      }
       shouldComponentUpdate(nextProps, nextState){
         return this.state.list!==nextState.list
        }
       componentWillUpdate(nextProps, nextState) {
          console.log('Component will update!');
       }
       componentDidUpdate(prevProps, prevState) {
          console.log('Component did update!')
       }
      render() {
          return (
             <div>
                <h3>Hello Mounting Lifecycle Methods!</h3>
             </div>
          );
       }
}
```

## Unmounting

component의 라이프 사이클 가장 마지막 단계이다. 이름에서 알 수 있듯이 이 단계에서 component가 DOM에서 unmount된다. 이 단계에서 사용 가능한 방법은 다음과 같다:

### 1.componentWillUnmount()

이 메소드는 component의 unmount가 실행되기 전에 호출된다. DOM에서 component의 제거 전에 ‘**componentWillUnMount’**를  실행한다. 이 메소드는 component의 라이프 사이클 끝에 나타난다. 

![component_Lifecycle](https://cdn-media-1.freecodecamp.org/images/NpWCjYyzfnJkn7rXwDmyWwK2DqInFJu6-g1O)

이것이 React 세계의 중요한 부분인 수명주기 방법에 관한 내용이다. 나는 당신이 이것을 읽고 즐거웠기를 바란다. 

감사합니다!

## 이글은 Anchal Nigam의 "How to understand a component’s lifecycle methods in ReactJS"의 글을 번역 하였습니다.

출처: <https://www.freecodecamp.org/news/how-to-understand-a-components-lifecycle-methods-in-reactjs-e1a609840630/>

























