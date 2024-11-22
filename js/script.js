// Quiz questions array
const easyMLB = [
  {
    question: 'What does "MLB" stand for?',
    options: ["Major League Baseball", "Minor League Baseball", "Major League Bowling", "Major League Basketball"],
    correctAnswer: 0,
  },
  {
    question: 'Which team is known as the "Yankees"?',
    options: ["Boston", "New York", "Chicago", "Los Angeles"],
    correctAnswer: 1,
  },
  {
    question: "What is a home run?",
    options: ["Stealing a base", "Striking out the batter", "Catching the ball in foul territory", "Hitting the ball out of the park"],
    correctAnswer: 3,
  },
  {
    question: "Which team is based in Chicago?",
    options: ["Dodgers", "Cubs", "Red Sox", "Giants"],
    correctAnswer: 1,
  },
  {
    question: 'What is the name of the trophy awarded to the World Series winner?',
    options: ['Larry O’Brien Trophy', 'Stanley Cup', 'Heisman Trophy', 'Commissioner’s Trophy'],
    correctAnswer: 3,
  },
  {
    question: 'How many players are on the field for one team during play?',
    options: ['9', '10', '7', '8'],
    correctAnswer: 0,
  },
  {
    question: 'What is it called when a batter strikes out four times in a game?',
    options: ['A Hat Trick', 'A Golden Sombrero', 'A Triple Play', 'A Slam Dunk'],
    correctAnswer: 1,
  },
  {
    question: 'Which team plays at Fenway Park?',
    options: ['Boston Red Sox', 'Detroit Tigers', 'Oakland Athletics', 'New York Yankees'],
    correctAnswer: 0,
  },
  {
    question: 'Who is the "Home Team"?',
    options: ['The team batting first', 'The team playing at their own stadium', 'The team with fewer errors', 'The team with the most wins'],
    correctAnswer: 1,
  },
  {
    question: 'Which MLB team is based in Los Angeles?',
    options: ['Phillies', 'Brewers', 'Mariners', 'Dodgers'],
    correctAnswer: 3,
  },
  {
    question: 'What is it called when a batter is out due to a fielder throwing the ball to first base before the runner gets there?',
    options: ['A Fly Ball', 'A Ground Out', 'A Foul Ball', 'A Double Play'],
    correctAnswer: 1,
  },
  {
    question: 'What is the result of four balls pitched outside the strike zone in one at-bat?',
    options: ['A Walk', 'A Foul Tip', 'A Balk', 'A Strike'],
    correctAnswer: 0,
  },
  {
    question: 'Which team has won the most World Series championships?',
    options: ['St. Louis Cardinals', 'Boston Red Sox', 'New York Yankees', 'San Francisco Giants'],
    correctAnswer: 2,
  },
  {
    question: 'Which is a  nickname of the MLB All-Star game?',
    options: ['The Home Run Derby', 'The Fall Classic', 'The Big Game', 'The Midsummer Classic'],
    correctAnswer: 3,
  },
  {
    question: 'Which team’s mascot is "The Phanatic"?',
    options: ['Atlanta Braves', 'Philadelphia Phillies', 'Miami Marlins', 'Houston Astros'],
    correctAnswer: 1,
  },
  {
    question: 'How many innings are in a standard MLB game?',
    options: ['9', '10', '7', '8'],
    correctAnswer: 0,
  },
  {
    question: 'What is the term for a pitcher striking out three batters in one inning on 9 pitches?',
    options: ['An Immaculate Inning', 'A Triple Crown', 'A Cycle', 'A No-Hitter'],
    correctAnswer: 0,
  },
  {
    question: 'Which position is located behind home plate?',
    options: ['Pitcher', 'Shortstop', 'First Baseman', 'Catcher'],
    correctAnswer: 3,
  },
  {
    question: 'What is it called when a batter hits for a single, double, triple, and home run in one game?',
    options: ['A Hat Trick', 'A Cycle', 'A Slam', 'A Grand Slam'],
    correctAnswer: 1,
  },
  {
    question: 'Who holds the MLB record for career home runs?',
    options: ['Babe Ruth', 'Barry Bonds', 'Hank Aaron', 'Willie Mays'],
    correctAnswer: 1,
  }
];

// DOM elements
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

// Load a question
function loadQuestion() {
  const currentQuestion = easyMLB[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  // Clear old options
  optionsEl.innerHTML = "";

  // Render new options
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener('click', () => handleAnswer(index));
    optionsEl.appendChild(button);
  });
}

//Handle user answer
function handleAnswer(selectedIndex) {
  const currentQuestion = easyMLB[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correctAnswer) {
    score++;
  }

  // Move to next question or finish quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < easyMLB.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show final result
function showResult() {
  questionEl.textContent = `Quiz complete! You scored ${score} out of ${easyMLB.length}.`;
  optionsEl.innerHTML = '';
}

// Initial call
loadQuestion();
