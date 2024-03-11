const quizData = [
  { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Rome"], answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
  { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O" },
  { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"], answer: "William Shakespeare" },
  { question: "What year did the Titanic sink?", options: ["1912", "1901", "1923", "1945"], answer: "1912" },
  { question: "What is the tallest mammal?", options: ["Giraffe", "Elephant", "Hippo", "Rhino"], answer: "Giraffe" },
  { question: "What is the closest planet to the sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
  { question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"], answer: "Leonardo da Vinci" },
  { question: "What is the largest ocean on Earth?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], answer: "Pacific Ocean" },
  { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Cu", "Fe"], answer: "Au" }
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');

function buildQuiz() {
  quizData.forEach((data, index) => {
    const div = document.createElement('div');
    div.classList.add('question');
    div.classList.add('questionBox');
    div.innerHTML = `<p>${index + 1}. ${data.question}</p>`;
    const ul = document.createElement('ul');
    div.appendChild(ul);

    data.options.forEach((option, optionIndex) => {
      const input = document.createElement('input');
      input.type = 'radio';
      input.id = `option${index}${optionIndex}`;
      input.name = `question${index}`;
      input.value = option;
      const label = document.createElement('label');
      label.htmlFor = `option${index}${optionIndex}`;
      label.textContent = option;
      const li = document.createElement('li');

      div.appendChild(li);
      div.appendChild(input);
      div.appendChild(label);
    });

    quizContainer.appendChild(div);
  });
}

function checkAnswers() {
  let score = 0;
  quizData.forEach((data, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedOption) {
      if (selectedOption.value === data.answer) {
        score++;
      }
    }
  });
  localStorage.setItem('group2_score', score);

}


function submitQuiz() {
  checkAnswers();
  window.location.href = "../group3/group3.html";
}

buildQuiz();
