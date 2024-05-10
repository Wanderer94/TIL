// BAD 더러운 코드 😣
// Hint❕ : 불필요하게 반복하지 마세요.

const Car = {
    carMake: "Honda",
    carModel: "Accord",
    carColor: "Blue"
  };
  
  function paintCar(car, color) {
    car.carColor = color;
  }
  
  // GOOD 😎
  // 위 코드를 깨끗하게 다시 작성해 주세요.
  
  class Car {
  constructor(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
  }
  
  paint(color) {
  this.color = color;
  }
  }
  
  // 어떻게 고쳤는지, 사례에서 무엇을 배워야 하는지 설명해주세요.
  /*
  객체를 클래스로 정의하여 코드를 더 구조화하고 재사용 가능하도록 만들었습니다.
  paint 메서드를 클래스 내부로 이동하여 paintCar 함수를 없애고 객체 내부에서 색상을 변경할 수 있도록 했습니다.
  코드를 더 객체지향적으로 만들었고, 불필요한 함수 호출을 제거하여 코드를 더 간결하게 만들었습니다.
  */
  