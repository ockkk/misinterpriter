# 더 좋은 이름을 짓는 20가지 방법

모든 코드에는 이름이 있다. 개발자로서 우리는 클래스, 변수, 함수, arguments 그리고 우리의 namesapaces 등등을 명명한다. 우리가 명명하는 것을 자주 하는 것을 보면 우리는 그것을 잘할 수 있도록 시간을 소비해야 한다. 여기에는 당신을 개선하는데 도움을 줄 20가지 TIp들이 있다.

<br>

## 1. 의도가 드러나는 이름을 사용해라

이름은 그것이 무엇을 하는지 왜 존재하는지 그리고 어떻게 사용되는지 당신에게 말해줘야 한다. 의도를 드러내는 이름을 선택한다면 그 이름을 변경하고 이해하는 것이 더욱 쉬울 것이다.

```Python
int d;  #elapsed time in days

int elapsedTimeInDays;
int daysSinceCreation;
int daysSinceModification;
int fileAgeInDays;
```
위의 snnipet(단편) 속에서 우리는 단지 d 변수의 주석으로부터 무엇을 말하는지 알 수 있을 뿐이다. 이 변수를 읽는 사람은 의미에 대한 힌트를 얻기 위해 그것이 instantiation(인스턴스화)에 대해서 검색해야 한다. 반대로 변수명을 다른 이름들 중 하나로 사용한다면 이 변수명을 보고 무엇을 의미하는지 즉시 알 수 있어야 한다.

<br>

## 2. 이름을 선택하는데 시간을 소비하는 것을 두려워하지 마라

적절하다고 느끼는 이름을 찾을 때까지 시간을 가지고 여러 가지 다름 이름은 시도하는 것에 대해 죄책감을 느끼지 말아야 한다. 나중에 (당신을 포함한) 당신의 코드를 읽게 되는 사람들은 이 초기 시간의 지출로부터 이익을 얻을 것이다. 게다가 설명적인 이름을 생각해 내는 것은 당신이 생각한 모듈의 디자인을 명확히 하는데 도움이 될 것입니다.

<br>

## 3. Refactoring 가능한 이름

나중에 개발 과정에서 더 좋은 이름이 떠오른다면 주저하지말고 변경 해야 한다. 최신 IDE's(통합 개발 환경)는 Refactoring 이름은 믿을수 없을 정도로 쉽다. 단지 코드를 유리하게 재구성하기 위해 이름을 변경하는 것은 빈번하다.

<br>

## 4. 이름에 noise words 는 피해라

**Noise woeds** 란 *Manager, Procsssor, Data, Info* 같은 "나는 이것을 뭐라고 불러야 할지 모르겟어요!!" 의 동의어를 말한다. 
만약 당신이 스스로 이러한 단어들 중 한가지를 사용하기를 원하고 있다면 그것은 당신이 이름 짓고자 하는 것이 너무 많은 것을 하고 있다는 것일 수도 있다.

<br>

## 5. classes/funcionts 명을 지정하기 어려운 점을 주의하라

이름 짓기 어려운 class 나 function은 *code smell일 가능성이 있다. 만약 당신이 clss 나 function을 이름으로 표현하는데 어려움을 발견한다면 다음과 같은 이유일 수 있다.

* 불쾌한 코드가 너무 많다. (the offending code is doing too much)

* 불쾌한 코드가 적다. (the offending code is not doing enough.)

* 당신은 도메인을 이해하지 못하고 있으며 계속해서 더 많은 정보를 모을 필요가 있다.

*code smell : <br>
"any symptom in the source code of a program that possibly indicates a deeper problem" <br>
더 큰 문제들이 있음을 가리키고 있을만한, 소스 코드 상의 증상들이다.(버그와는 다르다. 디자인 패턴과 관련이 있다.)

<br>

## 6. Class 명
Class 이름은 *Customer, WikiPage, Account, AddressParser* 등과 같이 명사 또는 명사구여야 한다. 상속 superClass를 사용할 때는 짧고 효과적인 이름이어야 한다. Subclass는 이 class가 superclass와 어떤 차이가 있는지 설명하는 형용사를 포함하는 긴 이름을 가져야 한다. 
ex) SavingAccount 는 Account에서 파생한다.

<br>

## 7. 변수명
변수는 종종 class의 인스턴스를 보유하기 때문에 명사가 되어야 한다. 그들은 종종 그들이 인용하는 클래스 명에서 파생 된다. Boolean 명사들은 서술형으로 쓰여져야 한다. <br>
ex) isEmpty 또는 isTerminated 

<br>

## 8. Method 명
Method는 *postPayment(), deletePage(), save()*와 같이 동사 또는 동사구여야 한다. Accessors 와 mutators는 각기 set과 get 접두사가 붙어야 한다. boolean 값을 돌려주는 Method는 if문임을 잘 나타내기 위해서 *isPostable*과 같은 "is" 접두사를 붙여야한다.

<br>

## 9. 변수명의 길이와 범위
변수명은 범위의 크기에 따라 길이가 일치해야 한다. 만약 변수가 매우 짧은 범위에서 사용된다면 면수명은 매우 짧아야 한다. 반대로 만약 변수가 장기간 범위 내에 있는 경우 변수명은 더 자세하고 더 길어야 한다.

<br>

## 10. method/class 명의 길이와 범위
method와 class의 경우 이름의 길이는 범위의 크기와 반비례해야 한다. *Public method의 경우 자주 호출되기 때문에 일반적으로 짧은 이름이 좋다. *Private method class의 범위 내에서 호출되기 때문에 긴 이름을 사용하는 것이 좋다. 하지만 *파생 class명은 이 규칙에서 제외된다. 파생 class가 많을수록 기본 class명에 형용사가 많이 적용 된고 길어질 것이다.

*Public/Private method: <https://webclub.tistory.com/312> <br>
*파생 class: 기초 클래스의 모든 특성을 물려받아 새롭게 작성된 클래스 <br>
 (참조: <http://tcpschool.com/cpp/cpp_inheritance_derivedClass>)

<br>

### 이 글은 Ben smith의 20 Tips For Better Naming 글을 번역 하였습니다. 
출처: <http://bensmith.io/20-tips-for-better-naming>