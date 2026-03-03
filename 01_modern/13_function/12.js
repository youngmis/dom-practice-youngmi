// 구조가 재귀적일 때 재귀가 자연스러운 예: 트리(나무 구조) 탐색
// 각 노드는 같은 형태의 자식 노드 배열을 가짐 → 재귀 정의

const tree = {
  name: "루트",
  children: [
    {
      name: "폴더A",
      children: [
        { name: "파일A-1", children: [] },
        {
          name: "폴더A-1",
          children: [{ name: "파일A-1-1", children: [] }],
        },
      ],
    },
    {
      name: "폴더B",
      children: [{ name: "파일B-1", children: [] }],
    },
  ],
};

// 재귀: "현재 노드 처리 → 자식들에 대해 같은 일 반복"
function printAllNames(node) {
  console.log(node.name);
  for (const child of node.children) {
    printAllNames(child); // 자식도 같은 구조 → 같은 함수 호출
  }
}

console.log("--- 트리 전체 이름 출력 (재귀) ---");
printAllNames(tree);
// 루트 → 폴더A → 파일A-1 → 폴더A-1 → 파일A-1-1 → 폴더B → 파일B-1

// 노드 개수 세기 (재귀)
function countNodes(node) {
  let count = 1;
  for (const child of node.children) {
    count += countNodes(child);
  }
  return count;
}

console.log("\n--- 전체 노드 개수 ---");
console.log(countNodes(tree)); // 7

// 반복문만 쓰려면? → "방문할 노드" 스택을 직접 만들고 push/pop 해야 함.
// 구조가 재귀적이면 재귀 함수가 그 스택(호출 스택)을 대신해 줘서 코드가 단순해짐.
