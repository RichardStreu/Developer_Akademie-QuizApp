let questions = [
  {
    question: "Welches Jahr gilt als Geburtsjahr des Internets?",
    answer_1: "1983",
    answer_2: "1995",
    answer_3: "1975",
    answer_4: "2000",
    right_answer: "answer_1",
  },
  {
    question: "Welche Programmiersprache wird für Webentwicklung verwendet?",
    answer_1: "Python",
    answer_2: "JavaScript",
    answer_3: "C++",
    answer_4: "Assembly",
    right_answer: "answer_2",
  },
  {
    question: "Wofür steht 'CSS'?",
    answer_1: "Cascading Style Sheets",
    answer_2: "Computer Style System",
    answer_3: "Creative Style Setup",
    answer_4: "Cascading System Style",
    right_answer: "answer_1",
  },
  {
    question: "Was ist ein Browser?",
    answer_1: "Ein Texteditor",
    answer_2: "Ein E-Mail-Programm",
    answer_3: "Ein Webanwendungs-Tool",
    answer_4: "Ein Programm zur Anzeige von Webseiten",
    right_answer: "answer_4",
  },
  {
    question: "Welches dieser Protokolle wird für Webseiten verwendet?",
    answer_1: "HTTP",
    answer_2: "FTP",
    answer_3: "SMTP",
    answer_4: "SSH",
    right_answer: "answer_1",
  },
  {
    question: "Was ist JavaScript?",
    answer_1: "Eine Programmiersprache",
    answer_2: "Ein Betriebssystem",
    answer_3: "Eine Datenbank",
    answer_4: "Ein Texteditor",
    right_answer: "answer_1",
  },
  {
    question: "Welches Unternehmen hat den Webbrowser Chrome entwickelt?",
    answer_1: "Microsoft",
    answer_2: "Apple",
    answer_3: "Google",
    answer_4: "Mozilla",
    right_answer: "answer_3",
  },
  {
    question: "Welche Sprache ist keine Programmiersprache?",
    answer_1: "HTML",
    answer_2: "Java",
    answer_3: "C#",
    answer_4: "Ruby",
    right_answer: "answer_1",
  },
  {
    question: "Welches Framework wird oft für Frontend-Entwicklung verwendet?",
    answer_1: "Node.js",
    answer_2: "React",
    answer_3: "Django",
    answer_4: "Laravel",
    right_answer: "answer_2",
  },
  {
    question: "Was macht die Methode 'push' in JavaScript?",
    answer_1: "Fügt ein Element an den Anfang eines Arrays hinzu",
    answer_2: "Entfernt das letzte Element eines Arrays",
    answer_3: "Fügt ein Element an das Ende eines Arrays hinzu",
    answer_4: "Sortiert das Array",
    right_answer: "answer_3",
  },
  {
    question: "Wofür steht 'SQL'?",
    answer_1: "Structured Query Language",
    answer_2: "Simple Query Language",
    answer_3: "Sequential Query Language",
    answer_4: "System Query Language",
    right_answer: "answer_1",
  },
  {
    question: "Was ist Git?",
    answer_1: "Ein Webserver",
    answer_2: "Ein Versionskontrollsystem",
    answer_3: "Ein Texteditor",
    answer_4: "Ein Datenbank-Management-Tool",
    right_answer: "answer_2",
  },
  {
    question: "Welches Unternehmen hat Linux entwickelt?",
    answer_1: "Apple",
    answer_2: "Microsoft",
    answer_3: "Linus Torvalds",
    answer_4: "IBM",
    right_answer: "answer_3",
  },
  {
    question: "Was ist ein Repository in Git?",
    answer_1: "Eine Sammlung von Dateien",
    answer_2: "Eine Datenbank",
    answer_3: "Ein Paketmanager",
    answer_4: "Ein Code-Editor",
    right_answer: "answer_1",
  },
  {
    question: "Welcher dieser Tags ist kein HTML-Tag?",
    answer_1: "div",
    answer_2: "span",
    answer_3: "box",
    answer_4: "img",
    right_answer: "answer_3",
  },
  {
    question: "Welches dieser Datenbanken ist eine NoSQL-Datenbank?",
    answer_1: "MySQL",
    answer_2: "MongoDB",
    answer_3: "PostgreSQL",
    answer_4: "SQLite",
    right_answer: "answer_2",
  },
  {
    question: "Welches dieser Programme ist ein Code-Editor?",
    answer_1: "Visual Studio Code",
    answer_2: "Microsoft Word",
    answer_3: "Adobe Photoshop",
    answer_4: "Google Chrome",
    right_answer: "answer_1",
  },
  {
    question: "Was ist JSON?",
    answer_1: "Ein Datenformat",
    answer_2: "Eine Programmiersprache",
    answer_3: "Ein Webserver",
    answer_4: "Eine Datenbank",
    right_answer: "answer_1",
  },
  {
    question: "Welche Programmiersprache wird oft für maschinelles Lernen verwendet?",
    answer_1: "Python",
    answer_2: "PHP",
    answer_3: "C++",
    answer_4: "Java",
    right_answer: "answer_1",
  },
  {
    question: "Was ist eine API?",
    answer_1: "Eine Schnittstelle zur Kommunikation zwischen Programmen",
    answer_2: "Ein Betriebssystem",
    answer_3: "Ein Texteditor",
    answer_4: "Eine Art von Datenbank",
    right_answer: "answer_1",
  },
];

let currentQuestion = 0;
let nextQuestionAvialable = false;
let rigthAnswers = 0;

function init() {
  document.getElementById("questionsLength").innerHTML = questions.length;
  showCurrentQuestion();
}

function showCurrentQuestion() {
  let questionObject = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = questionObject.question;
  document.getElementById("answer_1").innerHTML = questionObject.answer_1;
  document.getElementById("answer_2").innerHTML = questionObject.answer_2;
  document.getElementById("answer_3").innerHTML = questionObject.answer_3;
  document.getElementById("answer_4").innerHTML = questionObject.answer_4;
  document.getElementById("currentNumberOfQuestions").innerHTML = currentQuestion + 1;
  removeHighlightAnswerClasses();
  addOnclicks();
}

function addOnclicks() {
  document.getElementById("answer_1").onclick = function () {
    doAnswer("answer_1");
  };
  document.getElementById("answer_2").onclick = function () {
    doAnswer("answer_2");
  };
  document.getElementById("answer_3").onclick = function () {
    doAnswer("answer_3");
  };
  document.getElementById("answer_4").onclick = function () {
    doAnswer("answer_4");
  };
}

function removeOnclicks() {
  document.getElementById("answer_1").onclick = "";
  document.getElementById("answer_2").onclick = "";
  document.getElementById("answer_3").onclick = "";
  document.getElementById("answer_4").onclick = "";
}

function showNextQuestion() {
  if (currentQuestion + 1 == questions.length) {
    showEndDialog();
  } else if (currentQuestion < questions.length && nextQuestionAvialable) {
    currentQuestion++;
    showCurrentQuestion();
    nextQuestionAvialable = false;
  } else {
    return;
  }
}

function showEndDialog() {
  document.getElementById("dialog").classList.remove("d-none");
  document.getElementById("reachedPoints").innerHTML = rigthAnswers;
}

function hideEndDialog() {
  document.getElementById("dialog").classList.add("d-none");
  currentQuestion = 0;
  nextQuestionAvialable = false;
  rigthAnswers = 0;
  showCurrentQuestion();
}

function doAnswer(answer) {
  if (answer == questions[currentQuestion].right_answer) {
    chooseRightAnswer(answer);
    highlightRightAnswer(answer);
  } else {
    highlightWrongAnswer(answer);
    chooseFalseAnswer(answer);
  }
}

function chooseRightAnswer() {
  nextQuestionAvialable = true;
  removeOnclicks();
  rigthAnswers++;
  console.log(rigthAnswers);
}

function chooseFalseAnswer() {
  nextQuestionAvialable = true;
  removeOnclicks();
  console.log("got the false answer");
}

function highlightRightAnswer(answer) {
  document.getElementById(answer).classList.add("highlight-right-answer");
}

function highlightWrongAnswer(answer) {
  document.getElementById(answer).classList.add("highlight-wrong-answer");
}

function removeHighlightAnswerClasses() {
  document.getElementById("answer_1").classList.remove("highlight-right-answer");
  document.getElementById("answer_2").classList.remove("highlight-right-answer");
  document.getElementById("answer_3").classList.remove("highlight-right-answer");
  document.getElementById("answer_4").classList.remove("highlight-right-answer");
  document.getElementById("answer_1").classList.remove("highlight-wrong-answer");
  document.getElementById("answer_2").classList.remove("highlight-wrong-answer");
  document.getElementById("answer_3").classList.remove("highlight-wrong-answer");
  document.getElementById("answer_4").classList.remove("highlight-wrong-answer");
}
