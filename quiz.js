var quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "Which language is used to style web pages (css, html, or javascript)?", answer: "css" },
  { question: "What does HTML stand for? (type: hypertext markup language)", answer: "hypertext markup language" },
  { question: "Which company originally created JavaScript? (netscape, google, or microsoft)", answer: "netscape" },
  { question: "What is 2 + 2?", answer: "4" }
];

function runQuiz() {
  var score = 0;

  for (var i = 0; i < quizQuestions.length; i++) {
    var q = quizQuestions[i];
    var userAnswer = prompt("Question " + (i + 1) + " of " + quizQuestions.length + ":\n\n" + q.question);

    if (userAnswer === null) {
      alert("Quiz cancelled.\nYour score: " + score + " / " + quizQuestions.length);
      return;
    }

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === q.answer) {
      score++;
      alert("Correct!");
    } else {
      alert("Wrong!\nCorrect answer: " + q.answer);
    }
  }

  alert("Quiz finished!\nYour final score: " + score + " / " + quizQuestions.length);
}

runQuiz();
