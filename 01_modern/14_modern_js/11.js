// optional chaning
const user = {
  name: "홍길동",
  address: {
    city: "서울",
  },
};
const user2 = {
  name: "김철수",
  // address 없음
};

// 오류를 회피하기 위해서 많이 사용함
const city = user2.address?.city;
console.log(city);
