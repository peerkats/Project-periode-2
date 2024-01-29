const quizData = [
    {
        question: "Wat leer je met de opleiding softwaredeveloper?",
        options: ["Koken", "Programmeren", "Voetballen", "Zwemmen"],
        correctAnswer: "Programmeren"
    },
    {
        question: "Welke programmeertaal gebruiken we voor de opmaak van de website?",
        options: ["CSS", "HTML", "JavaScript", "C++"],
        correctAnswer: "HTML"
    },
    {
        question: "Welke programmeertaal gebruiken we voor het stylen van de website?",
        options: ["CSS", "JavaScript", "C++", "HTML"],
        correctAnswer: "CSS"
    },
    {
        question: "Welke programmeertaal gebruiken we voor het interactief maken van de website?",
        options: ["CSS", "JavaScript", "C++", "HTML"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Wat is de betekenis van CSS?",
        options: ["Cascading Style Sheets", "Creative Style Solutions", "Cool Styling Suite", "Clever Styling Strategies"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Wat is de betekenis van HTML?",
        options: ["Handcrafted Textual Magic Land", "HyperText Markup Language", "Happy Text Making Life", "Hierarchical Text Management Language"],
        correctAnswer: "HyperText Markup Language"
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const resultContainer = document.getElementById("result");

    questionContainer.textContent = quizData[currentQuestion].question;
    optionsContainer.innerHTML = "";

    quizData[currentQuestion].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    resultContainer.textContent = "";
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    const resultContainer = document.getElementById("result");

    if (selectedOption === correctAnswer) {
        resultContainer.textContent = "Correct!";
        score++;
    } else {
        resultContainer.textContent = "Wrong! The correct answer is: " + correctAnswer;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        resultContainer.textContent = "Quiz completed! Your score: " + score + " out of " + quizData.length;
    }
}

startQuiz();
