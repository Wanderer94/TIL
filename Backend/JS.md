# JavaScript 함수 선언 방식: `function` vs `const`

## 1. `function` 키워드
전통적인 함수 선언 방식입니다.

```javascript
function myFunction() {
  console.log("This is a traditional function.");
}
```

### 주요 특징:
- **호이스팅(Hoisting)**: 함수 선언은 호이스팅되므로 함수가 선언되기 전에 호출할 수 있습니다.
  ```javascript
  myFunction(); // This is a traditional function.
  
  function myFunction() {
    console.log("This is a traditional function.");
  }
  ```
- **함수 이름**: 함수 선언은 이름을 가지며, 그 이름을 사용하여 호출할 수 있습니다.
- **스코프**: 함수는 해당 함수가 선언된 스코프에서 전역적으로 사용할 수 있습니다.

## 2. `const`를 사용한 함수 표현식
변수에 익명 함수를 할당하는 방식입니다.

```javascript
const myFunction = function() {
  console.log("This is a function expression.");
};
```

### 주요 특징:
- **호이스팅(Hoisting)**: 함수 표현식은 호이스팅되지 않습니다. 따라서 함수 선언 이후에만 호출할 수 있습니다.
  ```javascript
  myFunction(); // ReferenceError: Cannot access 'myFunction' before initialization
  
  const myFunction = function() {
    console.log("This is a function expression.");
  };
  ```
- **익명 함수**: 변수에 익명 함수를 할당하지만, 함수 이름을 줄 수도 있습니다.
  ```javascript
  const myFunction = function namedFunction() {
    console.log("This is a function expression.");
  };
  ```
- **스코프**: 함수 표현식은 블록 스코프를 가지며, 선언된 블록 내에서만 사용할 수 있습니다.

## 요약
- **호이스팅**: 함수 선언은 호이스팅되지만, 함수 표현식은 그렇지 않습니다.
- **스코프**: 함수 표현식은 블록 스코프를 가지며, 함수 선언은 전역 또는 함수 스코프를 가집니다.
- **가독성**: 함수 표현식은 변수 할당처럼 보일 수 있어 코드의 가독성 측면에서 차이가 있을 수 있습니다.

## 예시 코드
호출 가능성의 차이를 보여주는 예시입니다.

```javascript
// 함수 선언
function declaredFunction() {
  console.log("Declared function called.");
}

// 함수 표현식
const expressedFunction = function() {
  console.log("Expressed function called.");
};

// 함수 호출
declaredFunction(); // "Declared function called."
expressedFunction(); // "Expressed function called."

// 함수 선언 이전 호출 (가능)
hoistedFunction(); // "Hoisted function called."

function hoistedFunction() {
  console.log("Hoisted function called.");
}

// 함수 표현식 이전 호출 (불가능)
try {
  unhoistedFunction(); // ReferenceError: Cannot access 'unhoistedFunction' before initialization
} catch (e) {
  console.log(e);
}

const unhoistedFunction = function() {
  console.log("Unhoisted function called.");
};
```

위의 예시에서는 `function` 키워드로 선언된 함수가 호이스팅되지만, `const`를 사용한 함수 표현식은 호이스팅되지 않음을 보여줍니다.