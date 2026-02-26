// 나이가 18세 이상이고, 운전면허가 있으면 '운전 가능합니다'
// 나이가 18세 이상이고, 운전면허가 없으면 '면허가 필요합니다.'
// 나이가 18세보다 미만이면, '나이가 부족합니다.'

const age = 20;
const hasLicense = true;

// 한번 완성해보세요.
// TIP : if문 안에는 if문이 또 들어갈 수 있습니다.
if (age >= 18) {
  // 운전면허 보유 여부 판단
  // if (hasLicense === true) {
  if (!hasLicense) {
    console.log("운전 가능합니다.");
  } else {
    console.log("면허가 필요합니다.");
  }
} else {
  console.log("나이가 부족합니다.");
}
