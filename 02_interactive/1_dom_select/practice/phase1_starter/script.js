// =============================================
// Phase 1: DOM 선택 + 내용 변경
// =============================================

// 미션 ① app-title 텍스트 바꾸기
// 힌트: document.getElementById('app-title')로 선택 후 .textContent 사용
// 여기에 코드를 작성하세요 ↓
const apptitle = document.getElementById("app-title");
apptitle.textContent = "나만의 Todo 앱";
// 미션 ② app-subtitle 텍스트 바꾸기
const appsubtitle = document.getElementById("app-subtitle");
appsubtitle.textContent = "오늘 영미님의 할 일은 아래와 같아요!";
// 미션 ③ remaining-count 숫자를 3으로 바꾸기
const count = document.getElementById("remaining-count");
count.textContent = "3";
// 미션 ④ todo-list 요소를 콘솔에 출력하기
// 힌트: console.log()를 사용하세요
const todolist = document.getElementById("todo-list");
console.log(todolist);
