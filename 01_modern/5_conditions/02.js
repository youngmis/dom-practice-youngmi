// 0-9 => 10살 미만입니다.
// 10-19 => 10대입니다.
// 20 ~ => 20대 이상입니다.

const age = 20;
if (age < 10) {
  console.log("10살 미만입니다.");
} else if (age < 20) {
  console.log("10대입니다.");
} else {
  console.log("20대 이상입니다.");
}

// if (age가 10보다 크거나 같고, 20보다 작으면) {
//     console.log(~~~)
// }
