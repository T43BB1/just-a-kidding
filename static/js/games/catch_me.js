const button = document.getElementById("runaway");
const box = document.getElementById("box");
const message = document.getElementById("message");

let tries = 0;

const taunts = [
  "조금만 더요...", "거의 잡을 뻔했어요!", "아깝다~",
  "손이 느리시군요.", "버튼이 더 빨라지고 있습니다.",
  "여기까지 오신 것도 대단합니다.", "포기는 아직 이릅니다.",
  "집중하세요!", "이번엔 진짜 잡힐 수도?",
];

function moveButton() {
  tries += 1;

  const maxX = box.clientWidth - button.offsetWidth - 60;
  const maxY = box.clientHeight - button.offsetHeight - 80;
  const x = Math.max(0, Math.random() * maxX);
  const y = Math.max(110, Math.random() * maxY);

  button.style.position = "absolute";
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;

  // 시도할수록 버튼이 작아짐
  const scale = Math.max(0.5, 1 - tries * 0.03);
  button.style.transform = `scale(${scale})`;

  // 가끔 투명해짐
  button.style.opacity = Math.random() < 0.2 ? "0.3" : "1";

  message.textContent = taunts[Math.floor(Math.random() * taunts.length)];
}

button.addEventListener("mouseenter", moveButton);

button.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveButton();
});

button.addEventListener("click", () => {
  if (Math.random() < 0.08) {
    message.textContent = "성공! JUST A KIDDING :3";
    button.style.transform = "scale(1)";
    button.style.opacity = "1";
    showToast("오늘은 운이 좋네요.");
    return;
  }

  // 가짜 성공 연출
  if (tries > 10 && Math.random() < 0.15) {
    message.textContent = "축하합니다! 성공—";
    setTimeout(() => {
      message.textContent = "...이라고 할 뻔했습니다 :3";
      moveButton();
    }, 800);
    return;
  }

  moveButton();
});
