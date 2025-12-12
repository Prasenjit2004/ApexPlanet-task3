const questions = [
    {
        q: "Which international body held its climate summit recently?",
        options: [
            "UNFCCC",
            "WHO",
            "G7",
            "IMF"
        ],
        answer: 0
    },
    {
        q: "Which news is part of Current Affairs?",
        options: [
            "Politics & Economy",
            "Cooking recipes",
            "Sports only",
            "Only movies"
        ],
        answer: 0
    },
    {
        q: "Which event affects international travel?",
        options: [
            "Health Alert",
            "Mobile Launch",
            "Film Festival",
            "Cooking Show"
        ],
        answer: 0
    }
];

let index = 0;
let selectedAnswers = new Array(questions.length).fill(null);

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const qIndexEl = document.getElementById("qIndex");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function loadQuestion() {
    const q = questions[index];
    questionEl.textContent = q.q;

    optionsEl.innerHTML = "";

    q.options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.className = "option";
        div.textContent = opt;

        // If already answered earlier → show colors
        if (selectedAnswers[index] !== null) {
            if (i === q.answer) div.classList.add("correct");
            else if (i === selectedAnswers[index]) div.classList.add("wrong");
        }

        div.onclick = function () {
            // Save user selection
            selectedAnswers[index] = i;

            // Remove previous colors
            document.querySelectorAll(".option").forEach(el => {
                el.classList.remove("correct", "wrong");
            });

            // Show instant result
            if (i === q.answer) {
                div.classList.add("correct");
            } else {
                div.classList.add("wrong");
            }
        };

        optionsEl.appendChild(div);
    });

    qIndexEl.textContent = `Question ${index + 1} of ${questions.length}`;
}

// next question
nextBtn.onclick = () => {
    if (index < questions.length - 1) {
        index++;
        loadQuestion();
    }
};

// previous question
prevBtn.onclick = () => {
    if (index > 0) {
        index--;
        loadQuestion();
    }
};

loadQuestion();

