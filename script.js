const quizData = [
  { question: "1. 지구 온난화의 주된 원인은 무엇일까요?",
    options: ["이산화탄소 증가", "산소 감소", "해수면 상승", "오존층 회복"],
    answer: 0 },
  { question: "2. 일회용 컵 대신 사용하는 친환경 대체품은?",
    options: ["플라스틱컵", "스테인리스컵", "스티로폼컵", "유리컵"],
    answer: 1 },
  { question: "3. 지구의 평균 기온이 상승하면 가장 직접적인 영향은?",
    options: ["해수면 상승", "빙하 증가", "사막 축소", "폭설 증가"],
    answer: 0 },
  { question: "4. 재활용 표시 1번(PET)은 어떤 재질일까요?",
    options: ["종이", "유리", "페트병", "비닐"],
    answer: 2 },
  { question: "5. ‘탄소 발자국’을 줄이는 행동이 아닌 것은?",
    options: ["대중교통 이용", "일회용품 사용", "재활용", "걷기"],
    answer: 1 },
  { question: "6. 태양광, 풍력은 어떤 에너지일까요?",
    options: ["화석연료", "재생에너지", "핵에너지", "화학에너지"],
    answer: 1 },
  { question: "7. 플라스틱이 분해되는 데 걸리는 기간은?",
    options: ["1년", "10년", "100년", "500년 이상"],
    answer: 3 },
  { question: "8. 산림 파괴의 주요 원인이 아닌 것은?",
    options: ["불법 벌목", "농지 개간", "태양광 발전", "산불"],
    answer: 2 },
  { question: "9. ‘제로웨이스트(Zero Waste)’의 뜻은?",
    options: ["쓰레기 최소화", "재활용 금지", "소비 촉진", "폐기물 수출"],
    answer: 0 },
  { question: "10. 플라스틱 빨대 대신 권장되는 대체품은?",
    options: ["금속 빨대", "플라스틱 빨대", "종이컵", "나무젓가락"],
    answer: 0 }
];

let current = 0;
let score = 0;

const quizBox = document.getElementById("quiz-box");
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result");

function loadQuiz() {
  const q = quizData[current];
  quizBox.innerHTML = `
    <div class="question">${q.question}</div>
    <div class="options">
      ${q.options.map((opt, i) => 
        `<button onclick="checkAnswer(${i})">${opt}</button>`).join("")}
    </div>
  `;
  result.classList.add("hidden");
  nextBtn.style.display = "none";
}

function checkAnswer(selected) {
  const correct = quizData[current].answer;
  if (selected === correct) {
    result.innerHTML = "✅ 정답입니다!";
    score++;
  } else {
    result.innerHTML = `❌ 오답입니다. 정답은 <b>${quizData[current].options[correct]}</b>`;
  }
  result.classList.remove("hidden");
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  current++;
  if (current < quizData.length) {
    loadQuiz();
  } else {
    quizBox.innerHTML = `<h2>🎉 퀴즈 완료!</h2><p>당신의 점수는 <b>${score} / ${quizData.length}</b> 입니다.</p>`;
    nextBtn.style.display = "none";
    result.classList.add("hidden");
  }
});

loadQuiz();
