const quizContainer = document.getElementById('quiz');

const score_1 = localStorage.getItem('group1_score');
const score_2 = localStorage.getItem('group2_score');
const score_3 = localStorage.getItem('group3_score');
const score_4 = 4;
var myArray = [];

// Push values into the array
myArray.push(score_1);
myArray.push(score_2);
myArray.push(score_3);
myArray.push(score_4);

function buildQuiz() {
        for(let index =1;index<=4;index++) {
            let score = myArray[index-1];
            if(myArray[index-1] === null) score = 0;
            const div = document.createElement('div');
            div.classList.add('question');
            div.classList.add('questionBox');
            div.innerHTML = `<p>Kết quả bài thi ${index} :</p>
            ${score}/10
            `
            quizContainer.appendChild(div);
        }
}


buildQuiz();

function submitQuiz() {
   
   

    window.location.href = "../mainPage/index.html";
  }