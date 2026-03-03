// 기본 예제
function createGreeting(greeting) {
  return function (name) {
    return greeting + ", " + name + "!";
  };
}

// step 1
const sayHello = createGreeting("Hello");

// step2
// const sayHello = function (name) {
//   return greeting + ", " + name + "!";
// };

// step3
// const sayHello = function (name) {
//   return "Hello" + ", " + name + "!";
// };

const sayHi = createGreeting("안녕하세요");

console.log(sayHello("John")); // Hello, John!
console.log(sayHi("Jane")); // Hi, Jane!

// 설정 함수 만들기
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);
// const double = function (number) {
//   return number * 2;
// };
// const triple = function (number) {
//   return number * 3;
// };
// const quadruple = function (number) {
//   return number * 4;
// };

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(quadruple(5)); // 20

// 조건부 함수 반환
function getOperator(operator) {
  if (operator === "+") {
    return function (a, b) {
      return a + b;
    };
  } else if (operator === "-") {
    return function (a, b) {
      return a - b;
    };
  } else if (operator === "*") {
    return function (a, b) {
      return a * b;
    };
  } else if (operator === "/") {
    return function (a, b) {
      return a / b;
    };
  }
}

// const add = getOperator("+");
const add = function (a, b) {
  return a + b;
};
// const multiply = getOperator("*");
const multiply = function (a, b) {
  return a * b;
};

console.log(add(10, 5)); // 15
console.log(multiply(10, 5)); // 50
