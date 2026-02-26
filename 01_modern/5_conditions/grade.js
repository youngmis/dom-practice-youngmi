// grade.js

const score = 85;

// TODO: if-else 문으로 학점 계산
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// TODO: switch 문으로도 구현해보기 (도전!)
switch (true) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 70:
    console.log("C");
    break;
  default:
    console.log("F");
}

//
switch (score) {
  case 100:
    console.log(`점수: ${score}`);
    console.log(`학점: A`);
    break;
  case 95:
    console.log(`점수: ${score}`);
    console.log(`학점: A`);
    break;
  case 90:
    console.log(`점수: ${score}`);
    console.log(`학점: A`);
    break;
  case 85:
    console.log(`점수: ${score}`);
    console.log(`학점: B`);
    break;
  case 80:
    console.log(`점수: ${score}`);
    console.log(`학점: B`);
    break;
  case 75:
    console.log(`점수: ${score}`);
    console.log(`학점: C`);
    break;
  case 70:
    console.log(`점수: ${score}`);
    console.log(`학점: C`);
    break;
  case 65:
    console.log(`점수: ${score}`);
    console.log(`학점: D`);
    break;
  case 60:
    console.log(`점수: ${score}`);
    console.log(`학점: D`);
    break;
  default:
    console.log(`점수: ${score}`);
    console.log(`학점: F`);
    break;
}
