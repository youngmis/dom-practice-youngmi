const user = { name: "홍길동", age: 25, role: "user" };

// role만 변경
const admin = { ...user, role: "admin" };
console.log(admin);
// {name: '홍길동', age: 25, role: 'admin'}

// 순서 중요! 뒤에 오는 것이 덮어씀
const test1 = { ...user, age: 30 };
console.log(test1.age); // 30

const test2 = { age: 30, ...user };
console.log(test2.age); // 25 (user의 age가 덮어씀)
