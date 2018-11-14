import "./style.scss";

const calendar = document.querySelector(".calendar");

const col = 7; // 7day per week
const row = 6;
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const first = new Date(year, month, 1);

document.querySelector(".heading").textContent = `${year}年${month + 1}月`;

const weeks = ["日", "月", "火", "水", "木", "金", "土"];

// header
for (let i = 0; i < col; i++) {
  const day = document.createElement("li");
  day.classList.add("week", "week-header", `week${i % col}`);
  day.textContent = weeks[i % col];
  calendar.appendChild(day);
}
// body
for (let i = 0, date = 0; i < col * row; i++) {
  const day = document.createElement("li");
  // mark week
  day.classList.add("week", `week${i % col}`);
  if (date === 0 && first.getDay() === i % col) {
    date++;
  } else if (date > 0) {
    date++;
  }
  if (date > 0 && new Date(year, month, date).getMonth() !== month) {
    date = -1;
  }
  if (date > 0) {
    day.textContent = `${date}`;
    if (date === now.getDate()) {
      day.classList.add("now");
    }
  }
  calendar.appendChild(day);
}

enum WEEK {
  SUN = 0,
  MON = 1,
  TUE = 2,
  WED = 3,
  THU = 4,
  FRI = 5,
  SAT = 6
}
