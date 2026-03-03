// asis - 구식
// function showArguments() {
//   console.log(arguments);
//   console.log(arguments.length);
//   console.log(arguments[0]);
//   console.log(arguments[1]);
// }

// showArguments("a", "b", "c");

function showArgements(firstVal, secondVal, ...alphas) {
  console.log("hello");
  console.log(firstVal);
  console.log(alphas);
}

showArgements("a", "b", "c");

// // 짧은 복습
// const arr1 = [1, 2, 3];
// // const arr2 = arr1;
// const arr2 = [...arr1];

// arr2[1] = 10;
// console.log(arr1);
// console.log(arr2);
