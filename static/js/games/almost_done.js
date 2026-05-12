const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const statusText = document.getElementById("status");

let value = 0;
let fakeComplete = false;

const messages = [
  "거의 다 됐습니다...", "조금만 더 기다려주세요.",
  "서버가 고민 중입니다.", "최적화 중...",
  "마무리 단계입니다.", "아마 곧 끝날 겁니다.",
  "끝나려다 말았습니다.", "99%에서 멈춘 건 기분 탓입니다.",
  "완료까지 약 ∞초 남았습니다.", "열심히 하는 척 중...",
];

setInterval(() => {
  if (fakeComplete) return;

  if (value < 96) {
    // 가끔 역주행
    if (value > 40 && Math.random() < 0.1) {
      value -= Math.floor(Math.random() * 20) + 5;
      statusText.textContent = "앗, 뭔가 잘못됐습니다.";
    } else {
      value += Math.floor(Math.random() * 7) + 1;
    }
  } else {
    const loopValues = [97, 98, 99, 100, 97, 98, 99];
    value = loopValues[Math.floor(Math.random() * loopValues.length)];
  }

  if (value > 100) value = 99;
  if (value < 0) value = 0;

  // 100% 찍으면 가짜 완료 후 리셋
  if (value === 100 && Math.random() < 0.3) {
    fakeComplete = true;
    bar.style.width = "100%";
    percent.textContent = "100%";
    statusText.textContent = "완료! 🎉";

    setTimeout(() => {
      value = Math.floor(Math.random() * 30);
      fakeComplete = false;
      statusText.textContent = "...다시 시작합니다 :3";
      showToast("농담이었습니다.");
    }, 1500);
    return;
  }

  if (value === 100) value = 97;

  bar.style.width = `${value}%`;
  percent.textContent = `${value}%`;
  statusText.textContent = messages[Math.floor(Math.random() * messages.length)];
}, 650);
