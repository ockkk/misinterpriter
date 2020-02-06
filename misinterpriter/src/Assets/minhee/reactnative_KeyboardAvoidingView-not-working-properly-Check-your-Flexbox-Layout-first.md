## KeyboardAvoidingView가 잘 동작하지 않나요? Flexbox 레이아웃을 확인해 보세요.md

![img](https://miro.medium.com/max/2400/1*y6C4nSvy2Woe0m7bWEn4BA.png)

키보드가 입력창 또는 제출 버튼 위에 겹치는 것은 리액트 네이티브에서 흔히 발생하는 문제입니다. 바로 아래 그림처럼요.

![img](https://miro.medium.com/max/852/1*K_sJWARSrNgdlTs4CFQjWw.gif)

코드를 보겠습니다.

```jsx
import React, { Component } from 'react';
import { Button, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';



class Welcome extends Component {
  public render(){
    return (
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
               <Text style={styles.header}>
                            Header
               </Text>
               <TextInput
                 placeholder="Username"
                 style={styles.input}
               />
               <TextInput
                 placeholder="Password"
                 style={styles.input}
               />
               <TextInput
                 placeholder="Confrim Password"
                 style={styles.input}
               />
               <View style={styles.btnContainer}>
                 <Button title="Submit" onPress={() => null} />
               </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
 	 );
  }
}
          
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    input: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12,
    },
});

export default Welcome;
```

**KeyboardAvoidingView**라는 내장 컴포넌트가 있군요. 멋집니다! 정확히 우리가 찾던 것 아닌가요? 한 번 추가해 봅시다.

```jsx
<KeyboardAvoidingView
  behavior={Platfrom.OS === 'ios' ? 'padding' : null}
  style={{flex: 1 }}
>
  {/* 위의 코드 */}
</KeyboardAvoidingView>
```

흠.. 잠시만요. 왜 우리가 방금 추가한 **KeyboardAvoidingView**는동작하지 않는 건가요?

![img](https://miro.medium.com/max/852/1*Cto__NUmTbYgehjMiIBGZg.gif)

자, 잠깐 시간을 내서, **KeyboardAvoidingView**가 무엇인지 다시 한 번 살펴 봅시다. (https://facebook.github.io/react-native/docs/keyboardavoidingview)

>KeyboardAvoidingView는 키보드의 위치에 따라 자신의 하단 패딩(bottom padding)이나 위치(position)을 자동 조정합니다.  

다시 말해, **KeyboardAvoidingView**는 그저 `paddingBottom`을 가진 평범한 `<View />`입니다. 

현재 우리가 당면한 문제를 더욱 잘 이해할 수 있도록, 리액트 네이티브 화면을 HTML과 CSS로 재현해 보겠습니다. [codesandbox 링크](https://codesandbox.io/s/2523158vr?from-embed) (paddingBottom을 300에서 0으로 조정하면서, 키보드 토글을 재현할 수 있습니다. )

보시다시피, 같은 문제가 일어나고 있죠? 항목들이 컨테이너를 꽉 채우기만 할 뿐, 컨테이너 밖으로 밀려 나가지 않습니다. 왜냐하면 Flexbox의 `justifyContent`가 `flex-start`이기 때문입니다. 즉 항목들이 컨테이너의 상단을 시작(기준)으로 배치되어 있습니다.

따라서, `justifyContent`를 `flex-end`로 설정하면, 하단이 컨테이너의 시작이 될 것이고, 하위 항목들은 위로 밀려날 것입니다.

![img](https://miro.medium.com/max/728/1*qkb1MyfNhmwauDsx0ZPQlw.gif)

문제 하나는 해결이 되었지만, `flex-end`를 추가하니 항목이 컨테이너의 하단에 붙어버리고 말았습니다. 컨테이너가 끝나는 부분에 `<div style={{ flex: 1 }} />을 추가해서, 빈 자리를 만들어 주도록 합시다.

![img](https://miro.medium.com/max/752/1*8LWDcxU4Pfn_WJlzMKcQww.gif)

멋집니다! 이제 리액트 네이티브에도 적용을 할 수 있겠죠? 최종 결과물을 보여드리겠습니다.

```jsx
import React, { Component } from "react";
import { Button, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet,
    Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

class Welcome extends Component {
    public render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={styles.container}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inner}>
                            <Text style={styles.header}>
                                Header
                            </Text>
                            <TextInput
                                placeholder="Username"
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Password"
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Confrim Password"
                                style={styles.input}
                            />
                            <View style={styles.btnContainer}>
                                <Button title="Submit" onPress={() => null} />
                            </View>
                            <View style={{ flex : 1 }} />
                        </View>
                    </TouchableWithoutFeedback>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "flex-end",
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    input: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12,
    },
});

export default Welcome;
```

![img](https://miro.medium.com/max/872/1*gHuPUlyijBHzYNPwfpZ60A.gif)



출처: https://medium.com/@nickyang0501/keyboardavoidingview-not-working-properly-c413c0a200d4