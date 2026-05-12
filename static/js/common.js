const toastMessages = [
  "불편을 드려 죄송하지 않습니다 :3",
  "사용자 경험을 악화시키는 중입니다.",
  "이 기능은 의도된 동작입니다.",
  "오류가 아닙니다. 농담입니다.",
  "Human Detected.",
];

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message || toastMessages[Math.floor(Math.random() * toastMessages.length)];
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 2200);
}

setInterval(() => {
  if (Math.random() < 0.18) showToast();
}, 8000);
