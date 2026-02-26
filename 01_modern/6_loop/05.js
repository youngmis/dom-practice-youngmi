// do ~ while

let i = 10;
do {
  console.log(i);
  i++;
} while (i <= 5);
// 1, 2, 3, 4, 5

// while과의 차이
let x = 10;

while (x < 5) {
  console.log("while:", x);
}
// 실행 안 됨

do {
  console.log("do-while:", x);
} while (x < 5);
// do-while: 10 (한 번은 실행됨)
