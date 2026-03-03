const user = {
  name: "홍길동",
  address: {
    city: "서울",
    zipCode: "12345",
  },
};

console.log(user?.name); // 홍길동
console.log(user?.address?.city); // 서울
console.log(user?.address?.country); // undefined
console.log(user?.contact?.email); // undefined
