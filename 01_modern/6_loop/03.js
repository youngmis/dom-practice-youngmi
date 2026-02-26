// 1부터 10까지의 숫자 중,
// 짝수만 더한 총 값
// 단, if문 쓸 수 없음
let sum = 0;
// for (let i = 2; i <= 10; i = i + 2) {
// for (let i = 2; i < 11; i = i + 2) {
//   sum = sum + i;
// }
for (let i = 1; i <= 5; i++) {
  sum = sum + i * 2;
}
console.log(sum);
