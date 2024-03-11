const quizData = [
    { question: "HTML stands for Hyper Text Markup Language.", answer: true },
    { question: "CSS stands for Central Style Sheets.", answer: false },
    { question: "JavaScript is a server-side scripting language.", answer: false },
    { question: "JSON stands for Java Script Object Notation.", answer: true },
    { question: "Bootstrap is a JavaScript library.", answer: false },
    { question: "jQuery is a framework of JavaScript.", answer: false },
    { question: "PHP stands for Hypertext Preprocessor.", answer: true },
    { question: "MySQL is a type of database.", answer: true },
    { question: "React is a JavaScript library for building user interfaces.", answer: true },
    { question: "Node.js is a front-end framework.", answer: false }
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  
  function buildQuiz() {
    quizData.forEach((data, index) => {
      const div = document.createElement('div');
      div.innerHTML = `<div>${index + 1}. ${data.question}</div>
        <input type="radio" id="true${index}" name="question${index}" value="true">
        <label for="true${index}">Đúng</label>
        <input type="radio" id="false${index}" name="question${index}" value="false">
        <label for="false${index}">Sai</label>`;
      quizContainer.appendChild(div);
    });
  }
  
  function checkAnswers() {
    let score = 0;
    quizData.forEach((data, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedOption) {
        if (selectedOption.value === data.answer.toString()) {
          score++;
        }
      }
    });
    resultContainer.innerHTML = `Kết quả: ${score}/${quizData.length}`;
  }
  
  buildQuiz();
  