// 반복문의 중첩
// 100명 고객이 각자 가지고 있는 모든 취미를 출력하세요.

// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
  //   console.log(i);
  let star = "";
  for (let j = 1; j <= i; j++) {
    star = star + "*";
  }
  console.log(star);
}
