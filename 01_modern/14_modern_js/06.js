const original = { name: "홍길동", age: 25 };
const copy = { ...original };

copy.age = 30;

console.log(original.age); // 25 (원본 유지)
console.log(copy.age); // 30
