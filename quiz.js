const questions = [
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: 1
  },
  {
    question: "What planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "NaCl"],
    correctAnswer: 1
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
    correctAnswer: 2
  },
  {
    question: "What force keeps us on the ground?",
    options: ["Magnetism", "Friction", "Gravity", "Electricity"],
    correctAnswer: 2
  },
  {
    question: "What is the center of an atom called?",
    options: ["Electron", "Proton", "Neutron", "Nucleus"],
    correctAnswer: 3
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
    correctAnswer: 2
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 2
  },
  {
    question: "What is the main gas found in the air we breathe?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 2
  },
  {
    question: "What part of the plant conducts photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    correctAnswer: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.querySelector('.question');
const optionButtons = document.querySelectorAll('.option');
const previousButton = document.querySelector('.control-button .control:nth-child(1)');
const nextButton = document.querySelector('.control-button .control:nth-child(2)');
const scoreModal = document.getElementById('scoreModal');
const scoreMessage = document.getElementById('scoreMessage');
const closeModalButton = document.getElementById('closeModal');

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionButtons.forEach((button, index) => {
    button.textContent = currentQuestion.options[index];
    button.style.background = 'transparent'; // Reset button style
    button.style.color = 'white'; // Reset text color
    button.onclick = () => selectAnswer(index);
  });
}

function selectAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.correctAnswer) {
    score++;
  }
  optionButtons.forEach((button, index) => {
    if (index === currentQuestion.correctAnswer) {
      button.style.background = 'linear-gradient(to right, #019301, #8be48b)'; // Green gradient
    } else if (index === selectedIndex) {
      button.style.background = 'linear-gradient(to right, #8B0000, #FFA500)'; // Red gradient
    }
    button.onclick = null; // Disable further clicks
  });
}

previousButton.onclick = () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
};

nextButton.onclick = () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showScore();
  }
};

closeModalButton.onclick = () => {
  scoreModal.style.display = 'none';
};

function showScore() {
  scoreMessage.textContent = `Your score is ${score} out of 10.`;
  scoreModal.style.display = 'block';
}

loadQuestion();
