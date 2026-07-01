// BAD 더러운 코드 😣
// Hint❕ : 검색하기 쉬운 이름을 사용하세요.
// blastOFF는 로켓 발사를 의미. 86400000은 하루의 밀리초 (milliseconds) 의미. 

// What the heck is 86400000 for?
setTimeout(blastOff, 86400000);

// GOOD 😎
// 위 코드를 깨끗하게 다시 작성해 주세요.
const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000; // 하루의 밀리초

setTimeout(blastOff, ONE_DAY_IN_MILLISECONDS);



// 어떻게 고쳤는지, 사례에서 무엇을 배워야 하는지 설명해주세요.
/*
86400000은 하루의 밀리초(milliseconds) 의미를 의미한다.
86400000을 ONE_DAY_IN_MILLISECONDS로 바꾸면 코드의 의미를 더욱 명확하게 해준다.
이렇게 함으로써 코드를 이해하고 유지보수하기 쉬워졌습니다.
*/






