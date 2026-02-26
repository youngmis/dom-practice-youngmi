// while (조건) {
//   // 조건이 true일 때 동안 무한반복
// }

// for문을 이용해서 1부터 5까지 출력
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

let i = 1;
while (i <= 5) {
  console.log(i);
  //   i = i + 1;
  i++;
}

// 합계 계산
let sum = 0;
let num = 1;
while (num <= 10) {
  sum += num;
  num++;
}
console.log(sum); // 55
