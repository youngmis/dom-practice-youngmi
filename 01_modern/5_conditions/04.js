// if => 조건에 대한 판단
// switch => 조건에 대한 판단

// const 값 = "100000";

// switch (값) {
//   case 값1:
//     // 값이 값1일 때
//     break;
//   case 값2:
//     // 값이 값2일 때
//     break;
//   default:
//   // 모든 case에 해당하지 않을 때
// }

switch (day) {
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  case 7:
    console.log("일요일");
    break;
  default:
    console.log("잘못된 요일");
}
// 수요일
let day = "토";

switch (day) {
  case "토":
  case "일":
    console.log("주말!"); // 토, 일 둘 다 여기로
    break;
  default:
    console.log("평일");
}
