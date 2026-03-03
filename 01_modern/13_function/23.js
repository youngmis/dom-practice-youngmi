// const person = {
//   name: "홍길동",
//   greet: function () {
//     setTimeout(function () {
//       console.log("안녕하세요, " + this.name);
//     }, 1000);
//   },
// };

// person.greet();

const person = {
  name: "홍길동",
  friends: ["김철수", "이영희"],
  printFriends: function () {
    // 일반 함수
    // this.friends.forEach(function (friend) {
    ["김철수", "이영희"].forEach((friend) => {
      console.log(this.name + "의 친구: " + friend);
    });
  },
};

person.printFriends();

// 화살표 함수는 this binding을 하지 않는다.
