// 명확한 값 비교
switch (day) {
  case "mon":
    console.log("월요일");
    break;
  case "tue":
    console.log("화요일");
    break;
}

// 여러 case를 하나로
switch (month) {
  case 1:
  case 3:
  case 5:
    console.log("31일");
    break;
  case 2:
    console.log("28일");
    break;
}
