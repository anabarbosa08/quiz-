const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const myQuestions = [
{
question: "1. Qual time é o atual campeão do Brasileirão?",
answers: {
a: "Palmeiras",
b: "Flamengo",
c: "Atlético-MG",
d: "Botafogo"
},
correctAnswer: "a"
},
{
question: "2. Qual clube tem mais títulos de Brasileirão?",
answers: {
a: "São Paulo",
b: "Palmeiras",
c: "Flamengo",
d: "Corinthians"
},
correctAnswer: "b"
},
{
question: "3. Quantos clubes participam da Série A do Brasileirão?",
answers: {
a: "18",
b: "20",
c: "22",
d: "16"
},
correctAnswer: "b"
},
{
question: "4. Quem foi o artilheiro do Brasileirão 2024?",
answers: {
a: "Pedro (Flamengo)",
b: "Endrick (Palmeiras)",
c: "Tiquinho Soares (Botafogo)",
d: "Paulinho (Atlético-MG)"
},
correctAnswer: "c"
},
{
question: "5. Qual clube é conhecido como 'Gigante da Colina'?",
answers: {
a: "Fluminense",
b: "Vasco da Gama",
c: "Botafogo",
d: "Grêmio"
},
correctAnswer: "b"
},
{
question: "6. Qual estádio é a casa do Corinthians?",
answers: {
a: "Maracanã",
b: "Morumbi",
c: "Neo Química Arena",
d: "Mineirão"
},
correctAnswer: "c"
},
{
question: "7. Qual time tem a torcida conhecida como 'Galoucura'?",
answers: {
a: "Cruzeiro",
b: "Atlético-MG",
c: "Grêmio",
d: "Internacional"
},
correctAnswer: "b"
},
{
question: "8. Quem foi eleito o craque do Brasileirão 2023?",
answers: {
a: "Arrascaeta",
b: "Hulk",
c: "Raphael Veiga",
d: "Endrick"
},
correctAnswer: "d"
},
{
question: "9. Qual destes clubes nunca foi campeão brasileiro?",
answers: {
a: "Athletico-PR",
b: "Ceará",
c: "Bahia",
d: "Coritiba"
},
correctAnswer: "b"
},
{
question: "10. Quantos clubes caem para a Série B a cada temporada?",
answers: {
a: "2",
b: "3",
c: "4",
d: "5"
},
correctAnswer: "c"
}
];

function buildQuiz() {
const output = [];
myQuestions.forEach((currentQuestion, questionNumber) => {
const answers = [];
for (letter in currentQuestion.answers) {
answers.push(
`<label>
<input type="radio" name="question${questionNumber}" value="${letter}">
${letter}: ${currentQuestion.answers[letter]}
</label>`
);
}
output.push(
`<div class="question"> ${currentQuestion.question} </div>
<div class="answers"> ${answers.join("")} </div>`
);
});
quizContainer.innerHTML = output.join("");
}

function showResults() {
const answerContainers = quizContainer.querySelectorAll(".answers");
let numCorrect = 0;

myQuestions.forEach((currentQuestion, questionNumber) => {
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

if (userAnswer === currentQuestion.correctAnswer) {
numCorrect++;
answerContainers[questionNumber].style.color = "green";
} else {
answerContainers[questionNumber].style.color = "red";
}
});

resultsContainer.innerHTML = `Você acertou ${numCorrect} de ${myQuestions.length}!`;
}

buildQuiz();
submitButton.addEventListener("click", showResults);
