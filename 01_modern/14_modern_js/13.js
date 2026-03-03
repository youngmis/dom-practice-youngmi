const person = {
  name: "홍길동",
  age: 25,
  city: "서울",
};

// const name = person.name;
// const age = person.age;
// const city = person.city;
const { name, age, city } = person;

console.log(name); // 홍길동
console.log(age); // 25
console.log(city); // 서울
