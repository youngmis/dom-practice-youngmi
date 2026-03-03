const person = {
  name: "홍길동",
  greet: function () {
    console.log("안녕하세요, " + this.name);
  },
};

person.greet(); // 안녕하세요, 홍길동 (정상)

// const greet123 = person.greet;
const greet123 = function () {
  console.log("안녕하세요, " + this.name);
};
greet123();
