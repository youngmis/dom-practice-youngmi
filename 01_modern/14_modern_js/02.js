const original = [1, 2, 3];
const copy = [...original];
// const copy = original;

copy[0] = 100;

console.log(original); // [1, 2, 3] (원본 유지)
console.log(copy); // [100, 2, 3]
