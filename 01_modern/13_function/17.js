// arrow function (화살표 함수)
// ES6(2015)
// 함수를 만드는 방법 = 함수선언문, 함수표현식(변수), 화살표함수
const add = function (a, b) {
  return a + b;
};

// 함수 = 소괄호(매개변수) + 중괄호(로직)
const add1 = (a, b) => {
  return a + b;
};

// 만약 return 부분이 한줄인 경우
// 중괄호 + return문을 생략 가능
const add2 = (a, b) => a + b;

// 매개변수가 하나인 경우
const returningDouble = function (a) {
  return a * 2;
};

// function 지우기
// 화살표로 소괄호 - 중괄호 잇기
const returningDouble2 = (a) => {
  return a * 2;
};

const returningDouble3 = (a) => a * 2;
const returningDouble4 = (a) => a * 2;

// 매개변수가 없는 경우
const noParamFunction = function () {
  return 1;
};

const noParamFunction1 = () => 1;
