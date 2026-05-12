const choices = document.getElementById("choices");
const question = document.getElementById("question");
const depth = document.getElementById("depth");

let count = 0;

const questions = [
  "정말 확실한가요?", "그래도요?", "다시 생각해보시겠습니까?",
  "방금 선택한 선택을 유지하시겠습니까?", "이 선택이 최선이라고 믿으시나요?",
  "마지막으로 한 번만 더 선택해주세요.", "마지막이라고 한 적은 없습니다.",
  "선택의 선택을 선택해주세요.", "이건 선택이 아닙니다. 의식입니다.",
  "선택 피로도가 상승 중입니다.",
];

const labels = [
  "네", "아니요", "보류", "다시 선택", "확실함", "확실하지 않음",
  "조금 확실함", "아마도", "기분 탓", "농담입니다", "계속하기",
  "그만하기", "왜요?", "몰라요", "둘 다", "둘 다 아님",
];

const colors = ["green", "pink", "blue", ""];

function createButton() {
  const btn = document.createElement("button");
  btn.className = `btn ${colors[Math.floor(Math.random() * colors.length)]}`;
  btn.textContent = labels[Math.floor(Math.random() * labels.length)];

  // 깊이 10 이상이면 버튼이 흔들림
  if (count >= 10) btn.style.animation = "shake 0.3s infinite";

  choices.appendChild(btn);
}

choices.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;

  count += 1;
  question.textContent = questions[Math.floor(Math.random() * questions.length)];
  depth.textContent = `선택 깊이: ${count}`;

  // 가끔 버튼 2~3개 동시 생성
  const spawnCount = count > 5 && Math.random() < 0.3 ? Math.floor(Math.random() * 2) + 2 : 1;
  for (let i = 0; i < spawnCount; i++) createButton();

  if (count % 5 === 0) showToast("좋은 선택입니다. 아마도요.");

  // 깊이 15 넘으면 가끔 기존 버튼 텍스트가 바뀜
  if (count > 15 && Math.random() < 0.4) {
    const btns = choices.querySelectorAll("button");
    const target = btns[Math.floor(Math.random() * btns.length)];
    target.textContent = labels[Math.floor(Math.random() * labels.length)];
  }
});
