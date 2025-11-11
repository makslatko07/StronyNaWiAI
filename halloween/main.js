// System nawigacji
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Gra Pumpkin Clicker
let score = 0;

function clickPumpkin() {
    score++;
    document.getElementById('score').textContent = score;
    
    // Animacja
    const pumpkin = document.getElementById('pumpkin-clicker');
    pumpkin.style.transform = 'scale(1.2) rotate(10deg)';
    setTimeout(() => {
        pumpkin.style.transform = 'scale(1) rotate(0deg)';
    }, 100);
    
    // Losowe emotikony
    if (score % 10 === 0) {
        alert('🎉 Gratulacje! Zdobyłeś ' + score + ' punktów! 🎃');
    }
}

function resetGame() {
    score = 0;
    document.getElementById('score').textContent = score;
}

// Quiz
const quizData = [
    {
        question: "Kiedy obchodzi się Halloween?",
        options: ["31 października", "1 listopada", "25 października", "13 października"],
        correct: 0
    },
    {
        question: "Skąd pochodzi tradycja Halloween?",
        options: ["USA", "Irlandia", "Anglia", "Szkocja"],
        correct: 1
    },
    {
        question: "Co oznacza 'Trick or Treat'?",
        options: ["Podejście czy odejście", "Cukierek albo psikus", "Strach czy radość", "Duch czy zombie"],
        correct: 1
    },
    {
        question: "Z czego tradycyjnie rzeźbi się Jack-o'-lantern?",
        options: ["Arbuza", "Dyni", "Melona", "Jabłka"],
        correct: 1
    },
    {
        question: "Jaki kolor jest najbardziej kojarzony z Halloween?",
        options: ["Czerwony i biały", "Czarny i zielony", "Pomarańczowy i czarny", "Fioletowy i żółty"],
        correct: 2
    }
];

let quizScore = 0;
let answeredQuestions = new Set();

function loadQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';
    
    quizData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.innerHTML = `
            <h3>${index + 1}. ${item.question}</h3>
            <div class="quiz-options">
                ${item.options.map((option, i) => `
                    <button onclick="checkAnswer(${index}, ${i}, this)">${option}</button>
                `).join('')}
            </div>
        `;
        container.appendChild(questionDiv);
    });
}

function checkAnswer(questionIndex, answerIndex, button) {
    if (answeredQuestions.has(questionIndex)) return;
    
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
    
    if (answerIndex === quizData[questionIndex].correct) {
        button.classList.add('correct');
        quizScore++;
        document.getElementById('quiz-score').textContent = quizScore;
    } else {
        button.classList.add('wrong');
        buttons[quizData[questionIndex].correct].classList.add('correct');
    }
    
    answeredQuestions.add(questionIndex);
}

function resetQuiz() {
    quizScore = 0;
    answeredQuestions.clear();
    document.getElementById('quiz-score').textContent = quizScore;
    loadQuiz();
}

// Inicjalizacja po załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    loadQuiz();
});
