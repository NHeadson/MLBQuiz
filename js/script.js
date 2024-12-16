// Quiz questions array
const easyMLB = [
  {
    question: '1) What does "MLB" stand for?',
    options: [
      "Major League Baseball",
      "Minor League Baseball",
      "Major League Bowling",
      "Major League Basketball",
    ],
    correctAnswer: 0,
  },
  {
    question: '2) Which team is known as the "Yankees"?',
    options: ["Boston", "New York", "Chicago", "Los Angeles"],
    correctAnswer: 1,
  },
  {
    question: "3) What is a home run?",
    options: [
      "Stealing a base",
      "Striking out the batter",
      "Catching the ball in foul territory",
      "Hitting the ball out of the park",
    ],
    correctAnswer: 3,
  },
  {
    question: "4) Which team is based in Chicago?",
    options: ["Dodgers", "Cubs", "Red Sox", "Giants"],
    correctAnswer: 1,
  },
  {
    question:
      "5) What is the name of the trophy awarded to the World Series winner?",
    options: [
      "Larry O’Brien Trophy",
      "Stanley Cup",
      "Heisman Trophy",
      "Commissioner’s Trophy",
    ],
    correctAnswer: 3,
  },
  {
    question: "6) How many players are on the field for one team during play?",
    options: ["9", "10", "7", "8"],
    correctAnswer: 0,
  },
  {
    question:
      "7) What is it called when a batter strikes out four times in a game?",
    options: [
      "A Hat Trick",
      "A Golden Sombrero",
      "A Triple Play",
      "A Slam Dunk",
    ],
    correctAnswer: 1,
  },
  {
    question: "8) Which team plays at Fenway Park?",
    options: [
      "Boston Red Sox",
      "Detroit Tigers",
      "Oakland Athletics",
      "New York Yankees",
    ],
    correctAnswer: 0,
  },
  {
    question: '9) Who is the "Home Team"?',
    options: [
      "The team batting first",
      "The team playing at their own stadium",
      "The team with fewer errors",
      "The team with the most wins",
    ],
    correctAnswer: 1,
  },
  {
    question: "10) Which MLB team is based in Los Angeles?",
    options: ["Phillies", "Brewers", "Mariners", "Dodgers"],
    correctAnswer: 3,
  },
  {
    question:
      "11) What is it called when a batter is out due to a fielder throwing the ball to first base before the runner gets there?",
    options: ["A Fly Ball", "A Ground Out", "A Foul Ball", "A Double Play"],
    correctAnswer: 1,
  },
  {
    question:
      "12) What is the result of four balls pitched outside the strike zone in one at-bat?",
    options: ["A Walk", "A Foul Tip", "A Balk", "A Strike"],
    correctAnswer: 0,
  },
  {
    question: "13) Which team has won the most World Series championships?",
    options: [
      "St. Louis Cardinals",
      "Boston Red Sox",
      "New York Yankees",
      "San Francisco Giants",
    ],
    correctAnswer: 2,
  },
  {
    question: "14) Which is a nickname of the MLB All-Star game?",
    options: [
      "The Home Run Derby",
      "The Fall Classic",
      "The Big Game",
      "The Midsummer Classic",
    ],
    correctAnswer: 3,
  },
  {
    question: '15) Which team’s mascot is "The Phanatic"?',
    options: [
      "Atlanta Braves",
      "Philadelphia Phillies",
      "Miami Marlins",
      "Houston Astros",
    ],
    correctAnswer: 1,
  },
  {
    question: "16) How many innings are in a standard MLB game?",
    options: ["9", "10", "7", "8"],
    correctAnswer: 0,
  },
  {
    question:
      "17) What is the term for a pitcher striking out three batters in one inning on 9 pitches?",
    options: [
      "An Immaculate Inning",
      "A Triple Crown",
      "A Cycle",
      "A No-Hitter",
    ],
    correctAnswer: 0,
  },
  {
    question: "18) Which position is located behind home plate?",
    options: ["Pitcher", "Shortstop", "First Baseman", "Catcher"],
    correctAnswer: 3,
  },
  {
    question:
      "19) What is it called when a batter hits for a single, double, triple, and home run in one game?",
    options: ["A Hat Trick", "A Cycle", "A Slam", "A Grand Slam"],
    correctAnswer: 1,
  },
  {
    question: "20) Who holds the MLB record for career home runs?",
    options: ["Babe Ruth", "Barry Bonds", "Hank Aaron", "Willie Mays"],
    correctAnswer: 1,
  },
];

const hardMLB = [
  {
    question:
      "1) What team did Jackie Robinson play for to break the color barrier?",
    options: [
      "Kansas City Monarchs",
      "Los Angeles Dodgers",
      "Brooklyn Dodgers",
      "Brooklyn Monarchs",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "2) The New York Yankees are the team with the most World Series Championships with how many?",
    options: ["15", "13", "32", "27"],
    correctAnswer: 3,
  },
  {
    question:
      "3) Who is the only pitcher in MLB history to record over 5,000 career strikeouts?",
    options: ["Randy Johnson", "Nolan Ryan", "Bob Gibson", "Greg Maddox"],
    correctAnswer: 1,
  },
  {
    question:
      "4) What year did the Milwaukee Brewers join the National League Central division?",
    options: ["2000", "1995", "1998", "1999"],
    correctAnswer: 2,
  },
  {
    question:
      '5) What controversial play involving Armando Galarraga is often referred to as "The Perfect Game That Wasnt"?',
    options: [
      "A fan interference call overturned a crucial out in the 9th inning",
      "A blown call at first base by umpire Jim Joyce cost Galarraga a perfect game",
      "A balk was incorrectly called in the 9th inning, spoiling the perfect game",
      "Galarraga was ejected for arguing a strike call while pitching in the final inning",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "6) Who was the first player to sign a $400 million contract in MLB history?",
    options: ["Mike Trout", "Alex Rodriguez", "Shohei Ohtani", "Bryce Harper"],
    correctAnswer: 0,
  },
  {
    question:
      "7) Which MLB player stole 130 bases in a single season, setting a record that still stands today?",
    options: [
      "Fernando Tatis Jr.",
      "Rickey Henderson",
      "Billy Hamilton",
      "Ronald Acuna Jr",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "8) Who holds the MLB record for the highest career batting average?",
    options: ["Babe Ruth", "Ted Williams", "Ty Cobb", "Rod Carew"],
    correctAnswer: 2,
  },
  {
    question:
      "9) Who is the only player to hit two grand slams in a single inning?",
    options: [
      "Fernando Tatís",
      "Manny Ramirez",
      "Albert Pujols",
      "Alex Rodriguez",
    ],
    correctAnswer: 0,
  },
  {
    question: "10) Who holds the single-season home run record?",
    options: ["Mark McGwire", "Barry Bonds", "Sammy Sosa", "Roger Maris"],
    correctAnswer: 1,
  },
  {
    question: "11) Who was the youngest player to hit 500 career home runs?",
    options: ["Alex Rodriguez", "Hank Aaron", "Willie Mays", "Albert Pujols"],
    correctAnswer: 0,
  },
  {
    question:
      "12) Who threw the fastest recorded pitch in MLB history, clocked at 105.1 mph?",
    options: ["Aroldis Chapman", "Nolan Ryan", "Randy Johnson", "Jacob deGrom"],
    correctAnswer: 0,
  },
  {
    question:
      "13) Which player hit a walk-off home run to win Game 7 of the 1993 World Series?",
    options: [
      "Rickey Henderson",
      "Paul Molitor",
      "Joe Carter",
      "Tony Fernandez",
    ],
    correctAnswer: 2,
  },
  {
    question: '14) Which MLB player was nicknamed "The Say Hey Kid"?',
    options: ["Willie Mays", "Hank Aaron", "Joe DiMaggio", "Stan Musial"],
    correctAnswer: 0,
  },
  {
    question:
      "15) What is the oldest active ballpark in Major League Baseball?",
    options: [
      "Wrigley Field",
      "Fenway Park",
      "Dodger Stadium",
      "Yankee Stadium",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "16) Who was the first MLB player to appear on the cover of Sports Illustrated?",
    options: ["Mickey Mantle", "Ted Williams", "Willie Mays", "Eddie Mathews"],
    correctAnswer: 3,
  },
  {
    question:
      "17) Which MLB team has played in Canada besides the Toronto Blue Jays?",
    options: [
      "Montreal Expos",
      "Vancouver Beavers",
      "Ottawa Lynx",
      "Quebec Nordiques",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "18) Who was the first player in MLB history to have his 500th home run coincide with his 3,000th hit?",
    options: ["Albert Pujols", "Hank Aaron", "Willie Mays", "Eddie Murray"],
    correctAnswer: 1,
  },
  {
    question: "19) Who was the last player to hit over .400 in a season?",
    options: ["Ted Williams", "George Brett", "Tony Gwynn", "Rod Carew"],
    correctAnswer: 0,
  },
  {
    question: '20) Which MLB player was nicknamed "Mr. October"?',
    options: [
      "Derek Jeter",
      "Reggie Jackson",
      "Joe Morgan",
      "Carl Yastrzemski",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "21) Which MLB player has hit the most grand slams in their career?",
    options: ["Alex Rodriguez", "Manny Ramirez", "Lou Gehrig", "Eddie Murray"],
    correctAnswer: 0,
  },
  {
    question: "22) Who was the first MLB player to reach 4,000 career hits?",
    options: ["Pete Rose", "Ty Cobb", "Hank Aaron", "Stan Musial"],
    correctAnswer: 1,
  },
  {
    question:
      "23) Who is the only player to hit a MLB home run and score an NFL touchdown in the same week?",
    options: ["Frank Thomas", "Bo Jackson", "Mark Brunell", "Deion Sanders"],
    correctAnswer: 3,
  },
];

const easyMLBRules = [
  {
    question: "1) What is the number of strikes that must be called in order to be considered a strikeout?",
    options: ["2", "4", "3", "5"],
    correctAnswer: 2,
  },
  {
    question: "2) How many outs are there in one half-inning?",
    options: ["6", "3", "2", "4"],
    correctAnswer: 1,
  },
  {
    question: "3) What is it called when a batter hits the ball over the outfield fence in fair territory?",
    options: ["Single", "Ground-rule double", "Home run", "Foul ball"],
    correctAnswer: 2,
  },
  {
    question: "4) What is the distance between the bases on a Major League Baseball field?",
    options: ["100 feet", "60 feet", "80 feet", "90 feet"],
    correctAnswer: 3,
  },
  {
    question: "5) How many balls does it take for a batter to earn a walk?",
    options: ["4", "3", "5", "6"],
    correctAnswer: 0,
  },
  {
    question: "6) What is the term for when a batter swings and misses a pitch?",
    options: ["Foul", "Ball", "Strike", "Hit"],
    correctAnswer: 2,
  },
  {
    question: "7) How many innings are in a standard MLB game?",
    options: ["10", "7", "6", "9"],
    correctAnswer: 3,
  },
  {
    question: "8) What is the name of the player who throws the ball to the batter?",
    options: ["Infielder", "Catcher", "Pitcher", "Outfielder"],
    correctAnswer: 2,
  },
  {
    question: "9) What is the term for a batter hitting the ball and reaching first base safely?",
    options: ["Base-hit", "Walk", "Single", "Fly ball"],
    correctAnswer: 0,
  },
  {
    question: "10) What is it called when a fielder catches a ball hit in the air before it touches the ground?",
    options: ["Strike", "Ground out", "Fly out", "Foul ball"],
    correctAnswer: 2,
  },
  {
    question: "11) What happens if a batted ball lands outside the foul lines?",
    options: ["It is a walk", "It is a home run", "It is a strike", "It is a foul ball"],
    correctAnswer: 3,
  },
  {
    question: "12) What is the term for when a pitcher throws four balls to a batter?",
    options: ["Strikeout", "Walk", "Hit by pitch", "Double"],
    correctAnswer: 1,
  },
  {
    question: "13) How many bases must a player touch to score a run?",
    options: ["5", "3", "2", "4"],
    correctAnswer: 3,
  },
  {
    question: "14) What is the term for when a batter hits the ball and reaches second base safely?",
    options: ["Two-baser", "Single", "a Second-hit", "Double"],
    correctAnswer: 3,
  },
  {
    question: "15) What is it called when a pitcher throws three strikes to a batter?",
    options: ["Hit", "Walk", "Strikeout", "Ball"],
    correctAnswer: 2,
  },
  {
    question: "16) What is the term for a defensive mistake that allows a batter or runner to advance?",
    options: ["Error", "Strike", "Ball", "Walk"],
    correctAnswer: 0,
  },
  {
    question: "17) How many umpires are typically on the field during a regular MLB game?",
    options: ["2", "4", "3", "5"],
    correctAnswer: 1,
  },
  {
    question: "18) What is the term for a batted ball that hits the ground and rolls into the outfield?",
    options: ["Ground ball", "Fly ball", "Line drive", "Pop-up"],
    correctAnswer: 0,
  },
  {
    question: "19) What is it called when a batter hits the ball and reaches third base safely?",
    options: ["Single", "Double", "Triple", "Home run"],
    correctAnswer: 2,
  },
  {
    question: "20) What is the term for a ball that bounces over the outfield fence in fair territory?",
    options: ["Single", "Home Run", "Foul ball", "Ground-rule double"],
    correctAnswer: 3,
  },
  {
    question: "21) What happens if a batter is hit by a pitch?",
    options: ["It counts as a strike", "They are out", "They are awarded first base", "It counts as a ball"],
    correctAnswer: 2,
  },
  {
    question: "22) What happens if a batter bunts the ball foul with two strikes?",
    options: ["They are out", "It counts as a ball", "It is a foul ball", "They get another pitch"],
    correctAnswer: 0,
  },
  {
    question: "23) What is the term for a play where the pitcher illegally attempts to deceive a baserunner?",
    options: ["Interference", "Error", "Strike", "Balk"],
    correctAnswer: 3,
  },
  {
    question: "24) What is the name of the area where the pitcher must stand to throw the ball?",
    options: ["Bullpen", "Batter’s box", "On-deck circle", "Pitcher’s mound"],
    correctAnswer: 3,
  },
  {
    question: "25) What happens if a fly ball is caught in foul territory?",
    options: ["The batter is out", "It is a foul ball", "The runners advance", "It is a strike"],
    correctAnswer: 0,
  },
];

// DOM elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const quizSelectionEl = document.getElementById("quiz-selection");
const quizContainerEl = document.getElementById("quiz-container");
const easyQuizBtn = document.getElementById("easyQuiz");
const hardQuizBtn = document.getElementById("hardQuiz");
const easyRulesBtn = document.getElementById("easyRules");

let currentQuestionIndex = 0;
let score = 0;
let currentQuiz = [];

// Event listeners for quiz selection
easyQuizBtn.addEventListener("click", () => startQuiz(easyMLB));
hardQuizBtn.addEventListener("click", () => startQuiz(hardMLB));
easyRulesBtn.addEventListener("click", () => startQuiz(easyMLBRules));

function startQuiz(quizArray) {
  currentQuiz = quizArray;
  currentQuestionIndex = 0;
  score = 0;
  quizSelectionEl.style.display = "none";
  quizContainerEl.style.display = "block";
  loadQuestion();
}

// Load a question
function loadQuestion() {
  const currentQuestion = currentQuiz[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  // Clear old options
  optionsEl.innerHTML = "";

  // Render new options
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => handleAnswer(index));
    optionsEl.appendChild(button);
  });
}

// Handle user answer
function handleAnswer(selectedIndex) {
  const currentQuestion = currentQuiz[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correctAnswer) {
    score++;
  }

  // Move to next question or finish quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show final result
function showResult() {
  let message;
  const percentage = (score / currentQuiz.length) * 100;

  if (percentage === 100) {
    message = "Perfect score! You're a true MLB expert!";
  } else if (percentage >= 80) {
    message = "Great job! You really know MLB!";
  } else if (percentage >= 50) {
    message =
      "Not bad but not good. You at least have a decent grasp of MLB trivia.";
  } else {
    message = "Terrible. You've clearly got some learning to do...";
  }

  questionEl.textContent = `Quiz complete! \nYou scored ${score} out of ${currentQuiz.length}. \n${message}`;
  optionsEl.innerHTML = "";
}
