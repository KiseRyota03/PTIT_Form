const quizData = [
  { question: "What are the colors of the French flag?", options: ["Blue", "White", "Red", "All of the above"], answers: ["Blue", "White", "Red"] },
  { question: "Which of the following are primary colors?", options: ["Red", "Green", "Blue", "All of the above"], answers: ["Red", "Blue", "Green"] },
  { question: "Which animals are mammals?", options: ["Dog", "Bird", "Snake", "All of the above"], answers: ["Dog"] },
  { question: "Which of the following are fruits?", options: ["Tomato", "Potato", "Banana", "All of the above"], answers: ["Tomato", "Banana"] },
  { question: "Which of the following are programming languages?", options: ["HTML", "CSS", "JavaScript", "All of the above"], answers: ["HTML", "CSS", "JavaScript"] },
  { question: "Which countries are part of the European Union?", options: ["Germany", "France", "Italy", "All of the above"], answers: ["Germany", "France", "Italy"] },
  { question: "Which of the following are musical instruments?", options: ["Piano", "Chair", "Guitar", "All of the above"], answers: ["Piano", "Guitar"] },
  { question: "Which of the following are seasons?", options: ["Spring", "Monday", "Autumn", "All of the above"], answers: ["Spring", "Autumn"] },
  { question: "Which of the following are programming paradigms?", options: ["Object-Oriented", "Procedural", "Declarative", "All of the above"], answers: ["Object-Oriented", "Procedural", "Declarative"] },
  { question: "Which of the following are celestial bodies?", options: ["Star", "Car", "Planet", "All of the above"], answers: ["Star", "Planet"] }
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');

function buildQuiz() {
  quizData.forEach((data, index) => {
    const div = document.createElement('div');
    div.classList.add('question');
    div.classList.add('questionBox');
    const ul = document.createElement('ul');
    div.appendChild(ul);

    div.innerHTML = `<p>${index + 1}. ${data.question}</p>`;
    data.options.forEach((option, optionIndex) => {
      const input = document.createElement('input');
      input.type = 'checkbox';
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
    let correct = true;
    data.answers.forEach(answer => {
      const selectedOption = document.querySelector(`input[name="question${index}"][value="${answer}"]`);
      if (!selectedOption.checked) {
        correct = false;
      }
    });
    if (correct) {
      score++;
    }

  });
  localStorage.setItem('group3_score', score);
}




function submitQuiz() {
  checkAnswers();
    window.location.href = "../group4/group4.html";
  }

buildQuiz();
