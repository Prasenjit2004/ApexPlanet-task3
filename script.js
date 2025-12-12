const quiz = [
    {
        q: "Who is the President of India?",
        options: ["Narendra Modi", "Droupadi Murmu", "Amit Shah", "Rahul Gandhi"],
        answer: 1
    },
    {
        q: "Capital of India?",
        options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
        answer: 2
    },
    {
        q: "National Animal of India?",
        options: ["Tiger", "Lion", "Elephant", "Leopard"],
        answer: 0
    }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

function loadQuestion() {
    resultEl.innerHTML = "";
    const q = quiz[index];

    questionEl.textContent = q.q;
    optionsEl.innerHTML = "";

    q.options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.className = "option";
        div.textContent = opt;

        div.onclick = () => checkAnswer(div, i);

        optionsEl.appendChild(div);
    });
}

function checkAnswer(selected, i) {
    const correctIndex = quiz[index].answer;
    const options = document.querySelectorAll(".option");

    options.forEach((opt, idx) => {
        if (idx === correctIndex) opt.classList.add("correct");
        if (idx === i && i !== correctIndex) opt.classList.add("wrong");
        opt.style.pointerEvents = "none"; // disable click
    });

    if (i === correctIndex) score++;
}

document.getElementById("nextBtn").onclick = () => {
    if (index < quiz.length - 1) {
        index++;
        loadQuestion();
    } else {
        showResult();
    }
};

document.getElementById("prevBtn").onclick = () => {
    if (index > 0) {
        index--;
        loadQuestion();
    }
};

function showResult() {
    questionEl.textContent = "Quiz Finished!";
    optionsEl.innerHTML = "";
    resultEl.innerHTML = `Your Score: ${score} / ${quiz.length}`;
}

loadQuestion();
