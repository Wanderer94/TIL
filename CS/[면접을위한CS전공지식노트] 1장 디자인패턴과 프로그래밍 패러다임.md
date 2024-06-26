## 1.1 디자인패턴
- 프로그램을 설계할 때 발생했던 문제점들을 객체간의 상호 관계등을 이용하여 해결 할 수 있도록 하나의 규약 형태로 만들어 놓은 것을 의미합니다.

### 1.1.1 싱글톤 패턴
- 하나의 클래스에 오직 하나의 인스턴스만 가지는 패턴
- 하나의 클래스를 기반으로 여러개의 인스턴스를 만들 수 있지만 그렇게 하지 않고,
- 하나의 클래스를 기반으로 단 하나의 인스턴스를 만들어 이를 기반으로 로직을 만드는데 쓰입니다. 주로 데이터베이스 연결 모듈에 많이 사용됩니다.

- 싱글톤 패턴의 단점
    - 싱글톤 패턴은 TDD를 할 때 걸림돌이 됩니다. 
    - TDD는 단위테스트를 주로하는데 단위 테스트는 테스트가 서로 독립적이어야 하며, 테스트를 어떤 순서로든 실행할 수 있어야합니다.
    - 하지만 싱글톤 패턴은 미리 생성된 하나의 인스턴스를 기반으로 구현하는 패턴이므로 각 테스트마다 독립적인 인스턴스를 만들기 어렵습니다.

- 의존성 주입
    - 모듈 간의 결합을 강하게 만들 수 있는 단점이 있습니다.
    - 이때 의존성 주입을 통해 모듈간의 결합을 조금 더 느슨하게 만들어 해결할 수 있습니다.
    - 메인모듈이 직접 다른 하위 모듈에 대한 의존성을 주기 보다, 중간에 의존성 주입자가 이 부분을 가로채 메인 모듈이 간접적으로 의존성을 주입하는 방식입니다.
    - 이를통에 메인모듈은 하위 모듈에 대한 의존성이 떨어지게 됩니다 - 디커플링
    - 모듈을 쉽게 교체할 수 있는 구조가 되어 테스팅하기 쉽고 마이그레이션 하기도 수월합니다.
    - 구현할때 추상화 레이어를 넣고 이를 기반으로 구현체를 넣어 주기 대문에 애플리케이션 의존성 방향이 일관되고, 추론이 쉬워지며, 모듈간의 관계들이 조금 더 명확해집니다.

### 1.1.2 팩토리 패턴
- 객체를 사용하는 코드에서 객체생성 부분을 떼어내 추상화한 패턴이자 상속관계에 있는 두 클래스에서 상위클래스가 중요한 뼈대를 결정하고, 하위클래스에서 객체생성에 관한 구체적인 내용을 결정하는 패턴
- 상위클래스와 하위클래스가 분리되기 때문에 느슨한 겨합을 가지게 됩니다.
- 상위클래스에서는 인스턴스 생성 방식에 대해 전혀 알 필요가 없기 때문에 더 많은 유연성을 갖게 됩니다.
- 객체 생성 로직이 따로 떼어져 있기 때문에 코드를 리팩터링하더라도 한 곳만 고칠 수 있게 되어 유지보수성이 증가 됩니다.

### 1.1.3 전략 패턴
- 객체의 행위를 바꾸고 싶은 경우 직접 수정하지 않고 캡슐화한 알고리즘을 컨텍스트 안에서 바꿔주면서 상호교체가 가능하게 만드는 패턴입니다.
- 전략 패턴을 활용한 라이브러리로는 passport가 있습니다.
- 여러가지 전략을 기반으로 인증할 수 있게 합니다.

### 1.1.4 옵저버 패턴
- 주체가 어떤 객체의 상태 변화를 관찰하다가 상태 변화가 있을 때마다 메서드 등을 통해 옵저버 목록에 있는 옵저버들에게 변화를 알려주는 디자인 패턴입니다.
- 옵저버 패턴은 주로 이벤트 기반 시스템에 사용하며 MVC 패턴에도 사용됩니다.

### 1.1.5 프록시 패턴과 프록시 서버
- 프록시 패턴은 대상 객체에 접근하기 전 그 접근에 대한 흐름을 가로채 앞단의 인터페이스 역할 을 하는 디자인 패턴입니다.
- 이를 통해 객체의 속성, 변환 등을 보완하며 보안, 데이터 검증, 캐싱, 로깅에 사용합니다. 이는 앞서 설명한 프록시객체로 쓰이기도 하지만 프록시 서버로도 활용됩니다.
- 프록시 서버
    - 서버와 클라이언트 사이에서 클라이언트가 자신을 통해 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해주는 컴퓨터 시스템이나 응용 프로그램을 가리킵니다.
- Nginx
    - 비동기 기반의 이벤트 구조와 다수의 연결을 효과적으로 처리 가능한 웹서버이벼 주로 Node.js 서버 앞단의 프록시 서버로 활용됩니다.
    - nginx를 프록시 서버로 둬서 실제포트를 숨길수 있고 정적자원을 압축하거나 메인서버 앞단에서의 로깅을 할 수도 있습니다.
- CloudFlare
    - 분산된 서버를 통해 어떠한 시스템의 콘텐츠 전달을 ㄷ빠르게 할 수 있는 CDN서비스입니다.
    - 웹서버 앞단에 프록시 서버로 두어 DDOS공격 방어나 HTTPS구축에 쓰입니다.
    - 서비스에 과도한 트래픽이 발생할 경우 CAPTCHA등을 기반으로 이를 일부 막아 줍니다.
    - (CDN : 각 사용자가 인터넷에 접속하는 곳과 가까운 곳에서 콘텐츠를 캐싱 또는 배포하는 서버 네트워크를 말한다.)
- CORS

### 1.1.6 이터레이터 패턴
- 이터레이터를 사용하여 컬렉션의 요소들에 접근하는 디자인 패턴입니다. 이를통해 순회할 수 있느 여러가지 자료형의 구조와는 상관없이 이터레이터라는 하나의 인터페이스로 순회가 가능합니다.

### 1.1.7 노출 모듈 패턴
- 이는 즉시 실행 함수를 통해서 Private, Public같은 접근 제어자를 만드는 패턴을 말합니다.

### 1.1.8 MVC 패턴
- 모델, 뷰, 컨트롤러로 이루어진 디자인 패턴입니다.
- 애플리케이션의 구성 요소를 세가지 역할로 구분하여 개발 프로세스에서 각각의 구성 요소에만 집중해서 개발할 수 있습니다.
- 재사용성과 확장성이 용이하다는 장점이 있습니다.
- 애플리케이션이 복잡해질수록 모델과 뷰의 관계가 복잡해지는 단점이 있습니다.
- 모델
    - 모델은 애플리케이션의 데이터인 데이터베이스, 상수, 변수등을 뜻합니다.
    - 뷰에서 데이터를 생성하거나 수정하면 컨트롤러를 통해 모델을 생성하거나 갱신합니다.
- 뷰
    - 사용자 인터페이스 요소를 나타냅니다.
    - 즉 모델을 기반으로 사용자가 볼 수 있는 화면을 뜻합니다.
    - 모델이 가지고 있는 정보를 따로 저장하지 않아야하며 단순히 사각형 모양 등 화면에 표시하는 정보만 가지고 있어야합니다.
- 컨트롤러
    - 하나 이상의 모델과 하나 이상의 뷰를 잇는 다리 역할을 하며 이벤트 등 메인 로직을 담당합니다.
    - 모델과 뷰의 생명주기도 관리하며, 모델이나 뷰의 변경 통지를 받으면 이를 해석하여 각각의 구성요소에 해당 내용에 대해 알려줍니다.
- MVC패턴을 이용한 대표적인 프레임워크는 스프링이 있습니다.

### 1.1.9 MVP패턴
- MVC패턴에서 파생되었으며 컨트롤러가 프레젠터로 교체된 패턴입니다.
- 뷰와 프레젠터는 일대일 관계이기 때문에 MVC패턴보다 더 강한 결합을 지닌 디자인 패턴입니다.

### 1.1.10 MVVM 패턴
- MVC패턴에서 컨트롤러가 뷰모델로 바뀐 패턴입니다.
- 뷰 모델은 뷰를 더 추상화한 계층이며 커맨드와 데이터 바인딩을 가지는 것이 특징입니다.
- 뷰와 뷰모델사이의 양방향 데이터 바인딩을 지원하며, UI를 별도의 코드 수정없이 재사용할 수 있고 단위 테스팅하기 쉽다는 장점이 있습니다.
- 대표적인 예시로는 Veu.js가 있습니다.

## 1.2 프로그래밍 패러다임
- 프로그래밍 패러다임은 프로그래머에게 프로그래밍의 관점을 갖게 해주는 역할을 하는 개발 방법론입니다.
- 프로그래밍 패러다임은 크게 선언형, 명령형으로 나누며
- 선언형은 함수형이라는 하위집합을 가집니다.
- 명령형은 다시 객체지향, 절차지향으로 나눕니다.

### 1.2.1 선언형과 함수형 프로그래밍
- 선연형 프로그래밍이란 무엇을 풀어내는가에 집중하는 패러다임이며, 프로그램은 함수로 이루어진 것이다. 라는 명제가 담겨있는 패러다임이기도 합니다.
- 함수형 프로그래밍은 선언형 패러다임의 일종입니다.
- 함수형 프로그래밍은 작은 순수함수들을 블록처럼 쌓아 로직을 구현하고 고차함수를 통해 재사용성을 높인 프로그래밍 패러다임입니다.
- 자바스크립트는 단순하고 유연하여 함수가 일급 객체이기 때문에 객체지향 프로그래밍 보다는 함수형 프로그래밍 방식이 선호됩니다.
- 순수함수란, 출력이 입력에만 의존하는 것을 의미합니다.
- 고차함수란 함수가 함수를 값처럼 매개변수로 받아 로직을 생성할 수 있는 것을 말합니다. 이때 고차함수를 쓰기 위해서는 해당 언어가 일급객체라는 특징을 가져야합니다.
- 일급 객체(First-class Object 또는 First-class Citizen)란 프로그래밍 언어가 해당 객체를 일반 값과 유사하게 다루는 것을 의미합니다. 여기서 "일급"이란 말은 특별한 권한이나 제약이 없음을 의미합니다. 자바스크립트에서 함수가 일급 객체이기 때문에 함수를 변수에 할당하고, 함수를 다른 함수의 인자로 전달하거나, 함수를 다른 함수의 반환값으로 사용할 수 있습니다. 이러한 특성은 함수형 프로그래밍에서 매우 중요합니다.
- 자바스크립트에서 함수가 일급 객체인 이유는 다음과 같습니다:
    1. 변수에 할당 가능: 함수를 변수에 할당할 수 있습니다.
    2. 인자로 전달 가능: 함수를 다른 함수의 인자로 전달할 수 있습니다.
    3. 반환값으로 사용 가능: 함수가 다른 함수의 반환값으로 사용될 수 있습니다.
    4. 프로퍼티 값으로 사용 가능: 함수를 객체의 프로퍼티 값으로 사용할 수 있습니다.
- 함수가 일급 객체로 취급되는 것은 자바스크립트에서 함수형 프로그래밍을 효과적으로 할 수 있도록 해주는 중요한 특성 중 하나입니다. 함수형 프로그래밍에서는 함수를 값처럼 다루고, 함수를 조합하여 더 복잡한 동작을 만들어내는 것이 중요합니다. 이는 코드의 재사용성을 높이고, 프로그램을 더 효율적이고 읽기 쉽게 만들어줍니다.

### 1.2.2 객체지향 프로그래밍
- 객체들의 집합으로 프로그램의 상호작용을 표현하며 데이터를 객체로 취급하여 객체 내부에 선언된 메서드를 활용하는 방식을 의미합니다.
- 설계에 많은 시간이 소요되며 처리속도가 다른 프로그래밍 패러다임에 비해 상대적으로 느립니다.
#### 객체지향 프로그래밍의 특징
- 객체지향 프로그래밍의 특징으로 추상화, 캡슐화, 다형성이라는 특징이 있습니다.
- 추상화
    - 복잡한 시스템으로부터 핵심적인 개념 또는 기능을 간추려내는 것을 의미합니다.
- 캡슐화
    - 객체의 속성과 메서드를 하나로 묶고 일부를 외부에 감추어 은닉하는 것을 말합니다.
- 상속성
    - 상위 클래스의 특성을 하위 클래스에서 이어받아서 재사용하거나 추가, 확장하는 것을 의미합니다.
    - 코드의 재사용 측면, 계층적인 관계 생성, 유지 보수성 측면에서 중요합니다.
- 다형성
    - 하나의 메서드나 클래스가 다양한 방법으로 동작하는 것을 말합니다.
    - 대표적으로 오버로딩, 오버라이딩이 있습니다.
- 오버로딩
    - 오버로딩은 같은 이름을 가진 메서드를 여러개 두는 것을 말합니다.
    - 메서드의 타입, 매게변수의 유형, 개수등으로 여러개를 둘 수 있습니다.
    - 이는 컴파일 중에 발생하는 정적 다형성입니다.
- 오버라이딩
    - 오버라이딩은 주로 메서드 오버라이딩을 말하며 상위 클래스로부터 상속받은 메서드를 하위 클래스가 재정의 하는 것을 의미합니다.
    - 이는 런타임 중에 발생하는 동적 다형성입니다.
#### 설계원칙
- 객체지향 프로그래밍을 설게할 대는 SOLID원칙을 지켜주어야합니다.
    - 단일 책임 원칙 (SRP, Single Responsibility Principle)은 모든 클래스는 각각 하나의 책임만 가져야하는 원칙입니다.
    - 개방-폐쇄 원칙 (OCP, Open Closed Principle)은 유지 보수 사항이 생긴다면 코드를 쉽게 확장할 수 ㄷ있도록 하고 수정할 때는 닫혀 있어야하는 원칙입니다. 즉, 기존의 코드는 잘 변경하지 않으면서도 확장은 쉽게 할 수 있어야합니다.
    - 리스코프 치환 원칙 (LSP, Liskov Substitution Principle)은 프로그램의 객체는 프로그램의 정확성을 깨뜨리지 않으면서 하위 타입의 인스턴스로 바꿀 수 있어야 하는 것을 의미합니다.
    - 인터페이스 분리 원칙 (ISP, Interface Segregation Principle)은 하나의 일반적인 인터페이스보다 구체적인 여러개의 인터페이스를 만들어야 하는 원칙을 말합니다.
    - 의존 역전 원칙 (DIP, Dependency Inversion Principle)은 자신보다 변하기 쉬운 것에 의존하던 것을 추상화된 인터페이스나 상위 클래스를 두어 변하기 쉬운 것의 변화에 영향 받지 않게 하는 원칙을 말합니다.

#### 1.2.3 절차형 프로그래밍
- 로직이 수행되어야할 연속적인 계산 과정으로 이루어져 있습니다.
- 일이 진행되는 방식으로 코드를 구현하면 되기때문에 코드의 가독성이 좋으며 실행속도가 빠른 편입니다.

## 예상질문
#### Q. 옵저버 패턴을 어떻게 구현하나요?
A. 프록시 객체를 써서 하곤 합니다. 프록시 객체를 통해 객체의 속성이나 메서드 변화 등을 감지하고 이를 미리 설정해 놓은 옵저버들에게 전달하는 방법으로 구현합니다.
#### Q. 프록시서버를 설명하고 사용사례에 대해서 설명해보세요.
A. 프록시서버란 클라이언트가 자신을 통해서 다른 네트워크 서비스에 간접적으로 접속할 수 있도록 해주는 서버를 말합니다. 주로 서버 앞단에 둬서 캐싱, 로깅, 데이터 분석을 서버보다 먼저하는 서버로 사용됩니다. 이를 통해 포트번호를 변경해 사용자가 실제 서버의 포트에 접근하지 못하게 하고 공격자의 DDOS공격을 차단, CDN을 프록시 서버로 캐싱할 수 있으며, nginx를 이용해 Node.js로 이루어진 서버의 앞앋넹 둬서 버퍼 오버플로우를 해결할 수도 있습니다.
#### Q. MVC패턴을 설명해 보세요
A. MVC패턴은 모델, 뷰, 컨트롤러로 이루어진 디자인 패턴입니다. 앱의 구성요소를 세가지 역할로 구분하여 개발 프로세스에서 각각의 구성요소에만 집중해서 개발할 수 있다는 점과 재사용성과 확장성이 용이하다는 장접이 있고, 애플리케이션이 복잡해질수록 모델과 뷰의 관계가 복잡해지는 단점이 있습니다.
#### Q. 그러면 MVVM패턴과의 차이는 무엇인가요?
A. MVVM패턴은 컨트롤러가 뷰모델로 바뀐 패턴으로 뷰모데[ㄹ은 뷰를 더 추상화한 계층입니다. 커맨드과 데이터 바인딩을 가지는 것이 특징으로, 뷰와 뷰모델 사이의 양방향 데이터 바인딩을 지원하며 UI를 별도의 코드 수정 없이 재사용할 수 있고 단위 테스팅하기 쉽다는 장점이 있습니다.