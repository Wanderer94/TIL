저는 delete랑 remove 차이는 엔티티를 넣어주냐, 조건을 넣어주냐 차이로 이해했어요.
soft는 논리적 삭제로 실제로 db에는 남아있는데, deleteAt이 채워지면서 삭제된걸로 인식됩니다!
Typeorm은 자체적으로 논리적 삭제를 지원해줘요!!

참고:
https://velog.io/@phw3071/TypeOrm-remove-%EC%99%80-delete-%EC%9D%98-%EC%B0%A8%EC%9D%B4

https://lahezy.tistory.com/96

