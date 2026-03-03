function Person(name) {
  this.name = name;
}

const p1 = new Person("홍길동");
const 원장 = new Person("원장");

console.log(p1.name); // 홍길동
console.log(원장.name); //원장
// this = 새로 만들어진 객체
