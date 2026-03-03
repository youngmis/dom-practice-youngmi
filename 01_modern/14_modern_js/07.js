const personal = { name: "홍길동", age: 25 };
const contact = { email: "hong@example.com", phone: "010-1234-5678" };

const user = { ...personal, ...contact };
console.log(user);
// {
//   name: '홍길동',
//   age: 25,
//   email: 'hong@example.com',
//   phone: '010-1234-5678'
// }
