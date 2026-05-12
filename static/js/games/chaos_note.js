const note = document.getElementById("note");
const save = document.getElementById("save");
const clear = document.getElementById("clear");
const result = document.getElementById("result");

const trollMessages = [
  "저장되었습니다! (거짓말)",
  "저장 중... 아, 실패했습니다.",
  "메모가 우주로 전송되었습니다.",
  "저장 완료! 어딘가에는요.",
  "내용이 너무 좋아서 삭제했습니다.",
  "저장은 유료 기능입니다.",
];

function shuffleText(text) {
  const arr = text.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

save.addEventListener("click", () => {
  const r = Math.random();
  if (r < 0.25) {
    note.value = note.value.split("").reverse().join("");
    result.textContent = "저장하면서 내용을 뒤집었습니다 :3";
  } else if (r < 0.45) {
    note.value = "";
    result.textContent = "저장 완료! (내용은 증발했습니다)";
  } else if (r < 0.65) {
    note.value = shuffleText(note.value);
    result.textContent = "저장하면서 섞었습니다 :3";
  } else {
    result.textContent = trollMessages[Math.floor(Math.random() * trollMessages.length)];
  }
  showToast();
});

clear.addEventListener("click", () => {
  if (Math.random() < 0.4) {
    note.value += "\n[초기화 거부됨]";
    result.textContent = "초기화를 거부했습니다.";
  } else {
    note.value = "";
    result.textContent = "초기화 완료.";
  }
});

// 엔터 시 랜덤 기호 삽입
note.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && Math.random() < 0.3) {
    event.preventDefault();
    const cursors = ["¯\\_(ツ)_/¯", "~", "♪", "...", "zzz"];
    note.value += cursors[Math.floor(Math.random() * cursors.length)];
  }
});

// 타이핑 중 랜덤으로 커서 위치 점프
note.addEventListener("input", () => {
  if (Math.random() < 0.1) {
    const pos = Math.floor(Math.random() * note.value.length);
    note.setSelectionRange(pos, pos);
  }
});
