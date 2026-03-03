// 삼항연산자
let message;
if (age >= 18) {
  message = "성인";
} else {
  message = "미성년자";
}

// 조건 ? 참일 때 값 : 거짓일 때 값
let message2 = age >= 18 ? "성인" : "미성년자";

let age = 20;

// status : age가 18보다 크거나 같으면 '성인', 그게 아니면 '미성년자'
let status = age >= 18 ? "성인" : "미성년자";

// const getDiscount = function (isMember) {
//   // 멤버일 때는 0.1를 리턴
//   // 멤버가 아닐 때는 0을 리턴
//   if (isMember === true) {
//     return 0.1;
//   } else {
//     return 0;
//   }
// };

const getDiscount = (isMember) => (isMember ? 0.1 : 0);

console.log(getDiscount(true)); // 0.1
console.log(getDiscount(false)); // 0

// NOTE: 중첩삼항연산자
let score = 85;

// 90보다 크거나 같으면 A
// 80 ~ B
// 70 ~ C
// 60 ~ D
// F
let grade =
  score >= 90
    ? "A"
    : score >= 80
      ? "B"
      : score >= 70
        ? "C"
        : score >= 60
          ? "D"
          : "F";

//
let result;
if (a > b) {
  if (c > d) {
    result = e > f ? "x" : "y";
  } else {
    result = "z";
  }
} else {
  result = "w";
}
