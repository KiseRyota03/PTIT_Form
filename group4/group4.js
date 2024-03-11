const quizData = [
  "What is the capital of France?",
  "What is the largest planet in our solar system?",
  "Who is the author of 'To Kill a Mockingbird'?",
  "What is the chemical symbol for water?",
  "Who painted the Mona Lisa?",
  "What is the tallest mountain in the world?",
  "Who discovered penicillin?",
  "What is the main ingredient in guacamole?",
  "Who is the lead singer of the band 'Queen'?",
  "What is the currency of Japan?"
];

const quizContainer = document.getElementById('quiz');
const quizForm = document.getElementById('quizForm');
const resultContainer = document.getElementById('result');

function buildQuiz() {
  quizData.forEach((question, index) => {
    const div = document.createElement('div');
    div.classList.add('question');
    div.classList.add('questionBox');
    div.innerHTML = `<p for="answer${index + 1}">${question}</p>
    <textarea type="text" rows="3" id="answer${index + 1}" name="answer${index + 1}" required>
    </textarea>
    `
  ;
    quizContainer.appendChild(div);
  });
}

// function checkAnswers(event) {
//   let score = 0;
//   const answers = quizForm.elements;
//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i].type === 'text') {
//       if (answers[i].value.trim() !== '') {
//         score++;
//       }
//     }
//   }
//   localStorage.setItem('group4_score', score);

// }

function submitQuiz() {
  // console.log(textare)
  // checkAnswers();
  alert('Chúc mừng bạn đã hoàn thành bài khảo sát');
  window.location.href = "../result/result.html";
  }

buildQuiz();
