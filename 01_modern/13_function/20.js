// 메서드 호출
const person = {
  name: "홍길동",
  greet: function () {
    console.log("안녕하세요, " + this.name);
  },
};

person.greet(); // 안녕하세요, 홍길동
