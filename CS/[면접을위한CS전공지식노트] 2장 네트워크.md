#### Q. OSI 7계층과 TCP/IP 4계층의 차이점은 무엇인가요?
A. TCP/IP계층과 달리 OSI계층은 애플리케이션 계층을 세개로 쪼개고 링ㅇ크계층을 데이터링크 계층, 물리계층으로 나눠서 설명하는 것이 다르며, 인터넷계층을 네트워크 계층으로 부른다는 점이 다릅니다.

#### Q. HTTP/2를 설명하고 장점을 설명하세요.
A. HTTP/2는 HTTP/1.x보다 지연시간을 줄이고 응답시간을 더 빠르게 할 수 있으며 멀티플렉싱, 헤더 압축, 서버푸시, 요청의 우선순위 처리를 지원하는 프로토콜입니다.
장점으로는 멀티플렉싱과 서버푸시를 들 수 있습니다.
멀티플렉싱이란 여러 개의 스트림을 사용하여 송수신 한다는 것입니다. 이를 통해 특정 스트림의 패킷이 손실되었다고 하더라도 해당 스트림에만 영향을 미치고 나머지 스트림은 멀쩡하게 동작할 수 있습니다.
서버푸시란 HTTP/1.1에서는 클라이언트가 서버에 요청을 해야 파일을 다운로드 받을 수 있었다면, HTTP/2는 클라이언트의 요청없이 서버가 바로 리소스를 푸시하는 것을 말합니다. html에는 css나 js파일이 포함되기 마련인데 html을 읽으면서 그안에 들어있던 css파일을 서버에서 푸시하여 클라이언트에 먼저 줄 수 있습니다.

#### Q. www.naver.com을 주소창에 입력하면 어떻게 될까요
큰돌의 터전 확인