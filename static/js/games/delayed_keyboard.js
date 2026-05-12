const input = document.getElementById("input");
const anger = document.getElementById("anger");

let fakeValue = "";
let score = 0;

input.addEventListener("keydown", (event) => {
  event.preventDefault();

  score += 1;
  anger.textContent = `분노 지수: ${score}`;

  // 분노 지수에 비례해서 딜레이 증가
  const delay = 200 + Math.random() * 600 + score * 15;

  setTimeout(() => {
    if (event.key === "Backspace") {
      // 가끔 2글자 삭제
      fakeValue = fakeValue.slice(0, Math.random() < 0.3 ? -3 : -1);
    } else if (event.key === " ") {
      if (Math.random() > 0.35) fakeValue += " ";
    } else if (event.key.length === 1) {
      let char = event.key;

      // 대소문자 반전
      if (Math.random() < 0.2) {
        char = char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
      }

      // 글자 복제
      if (Math.random() < 0.12) {
        char = char.repeat(Math.floor(Math.random() * 3) + 2);
      }

      // 순서 뒤바뀜
      if (Math.random() < 0.15 && fakeValue.length > 0) {
        fakeValue = fakeValue.slice(0, -1) + char + fakeValue.slice(-1);
      } else {
        fakeValue += char;
      }
    } else if (event.key === "Enter") {
      fakeValue += "\n";
    }

    input.value = fakeValue;
  }, delay);
});
