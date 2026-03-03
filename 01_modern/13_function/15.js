// 방법 1
// function greet(name) {
//   name = name || "게스트";
//   console.log("안녕하세요, " + name + "님!");
// }

// greet("홍길동"); // 안녕하세요, 홍길동님!
// greet(); // 안녕하세요, 게스트님!

// 방법 2
// function greet(name = "게스트") {
//   console.log("안녕하세요, " + name + "님!");
// }

// greet("홍길동"); // 안녕하세요, 홍길동님!
// greet(); // 안녕하세요, 게스트님!

// 여러 개 가능
function createUser(name = "익명", age = 0, role = "user") {
  return { name, age, role };
}

console.log(createUser());
// {name: '익명', age: 0, role: 'user'}

console.log(createUser(30, "홍길동", "admin"));
// {name: '홍길동', age: 25, role: 'user'}
