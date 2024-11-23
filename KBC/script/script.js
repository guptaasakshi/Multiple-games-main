// document.getElementById('background-music').volume = 0.2;
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["William Shakespeare", "Charles Dickens", "J.K. Rowling", "Leo Tolstoy"],
    correct: 0
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Indian", "Atlantic", "Pacific", "Arctic"],
    correct: 2
  },
  {
    question: "Which country is famous for sushi?",
    options: ["China", "Thailand", "Japan", "Vietnam"],
    correct: 2
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1920", "1898", "1905"],
    correct: 0
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "HO"],
    correct: 0
  },
  {
    question: "Who is known as the father of computers?",
    options: ["Alan Turing", "Charles Babbage", "Thomas Edison", "Nikola Tesla"],
    correct: 1
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correct: 2
  },
  {
    question: "Which is the largest country by area?",
    options: ["USA", "China", "Russia", "Canada"],
    correct: 2
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    correct: 3
  },
  {
    question: "Which is the smallest planet in our solar system?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correct: 0
  },
  {
    question: "In which continent is the Sahara Desert located?",
    options: ["Africa", "Asia", "North America", "Australia"],
    correct: 0
  },
  {
    question: "What is the largest animal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    correct: 1
  },
  {
    question: "Who invented the lightbulb?",
    options: ["Nikola Tesla", "Isaac Newton", "Thomas Edison", "Galileo"],
    correct: 2
  },
  {
    question: "What is the smallest country in the world by area?",
    options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
    correct: 0
  },
  {
    question: "In which continent is the Sahara Desert located?",
    options: ["Africa", "Asia", "North America", "Australia"],
    correct: 0
  },
  {
    question: "What is the capital of France?",
    options: ["Rome", "Madrid", "Paris", "Berlin"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correct: 1
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "J.K. Rowling", "Jane Austen"],
    correct: 0
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correct: 1
  },
  {
    question: "Which element has the chemical symbol O?",
    options: ["Oxygen", "Gold", "Silver", "Hydrogen"],
    correct: 0
  },
  {
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correct: 1
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    correct: 0
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    correct: 1
  },
  {
    question: "Which gas do plants primarily use for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correct: 2
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    correct: 1
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Pacific", "Indian", "Arctic"],
    correct: 1
  },
  {
    question: "What is the freezing point of water in Celsius?",
    options: ["-1°C", "0°C", "1°C", "5°C"],
    correct: 1
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "India", "South Korea"],
    correct: 1
  },
  {
    question: "Who discovered gravity?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    correct: 1
  },
  {
    question: "Which language has the most native speakers worldwide?",
    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    correct: 2
  },
  {
    question: "What is the currency of the United Kingdom?",
    options: ["Euro", "Pound Sterling", "Dollar", "Yen"],
    correct: 1
  },
  {
    question: "Which organ is responsible for pumping blood in the human body?",
    options: ["Lungs", "Brain", "Heart", "Liver"],
    correct: 2
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Iron", "Mercury", "Copper", "Gold"],
    correct: 1
  }
  
];

const prizeMoney = [
  "₹1,000", "₹2,000", "₹3,000", "₹5,000", "₹10,000", "₹20,000", "₹40,000", "₹80,000", 
  "₹1,60,000", "₹3,20,000", "₹6,40,000", "₹12,50,000", "₹25,00,000", "₹50,00,000", 
  "₹1,00,00,000", "₹7,00,00,000"
];

let currentQuestionIndex = 0;
let score = 0;
let lifelinesUsed = { "5050": false, "audience": false, "phone": false };

// Function to shuffle the questions array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

window.onload = function() {
  shuffle(questions);  // Shuffle questions to randomize their order
  loadQuestion();  // Load the first question right away
};

function loadQuestion() {
  const questionElement = document.getElementById('question');
  const options = document.querySelectorAll('.option');
  const currentQuestion = questions[currentQuestionIndex];

  // Set the question
  questionElement.textContent = currentQuestion.question;

  // Set the options
  options.forEach((option, index) => {
    option.textContent = `${String.fromCharCode(65 + index)}) ${currentQuestion.options[index]}`;
    option.setAttribute('data-correct', index === currentQuestion.correct);
    option.style.visibility = 'visible';  // Make sure the options are visible
    option.disabled = false;  // Reset options to be selectable
  });

  // Clear the result text
  document.getElementById('result').textContent = '';
}

function checkAnswer(button) {
  const isCorrect = button.getAttribute('data-correct') === 'true';
  const resultText = document.getElementById('result');
  const correctSound = document.getElementById('correct-sound');
  const wrongSound = document.getElementById('wrong-sound');

  if (isCorrect) {
    resultText.textContent = "Correct Answer!";
    correctSound.play();
    score++;
  } else {
    resultText.textContent = "Wrong Answer! You lose.";
    wrongSound.play();
    endGame();
    return;
  }

  // Update the score based on prizeMoney
  document.getElementById('score').textContent = `Score: ${prizeMoney[currentQuestionIndex]}`;

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    setTimeout(loadQuestion, 2000);  // Load the next question after 2 seconds
  } else {
    setTimeout(endGame, 2000);  // End the game after the last question
  }
}

function endGame() {
  document.querySelector('.question-container').innerHTML = `<p>Game Over! Final Score: ${prizeMoney[currentQuestionIndex - 1]}</p>`;
  document.querySelector('.options-container').style.display = 'none';
  document.getElementById('result').style.display = 'none';
}

// Lifeline logic
function use5050() {
  if (!lifelinesUsed["5050"]) {
    lifelinesUsed["5050"] = true;
    document.getElementById('lifeline-5050').disabled = true;
    const options = document.querySelectorAll('.option');
    const correctOption = questions[currentQuestionIndex].correct;
    let count = 0;

    // Disable two incorrect options
    options.forEach((option, index) => {
      if (index !== correctOption && count < 2) {
        option.style.visibility = 'hidden';
        count++;
      }
    });
  }
}

function useAudiencePoll() {
  if (!lifelinesUsed["audience"]) {
    lifelinesUsed["audience"] = true;
    document.getElementById('lifeline-audience').disabled = true;
    alert("Audience thinks the answer is: " + questions[currentQuestionIndex].options[questions[currentQuestionIndex].correct]);
  }
}

function usePhoneAFriend() {
  if (!lifelinesUsed["phone"]) {
    lifelinesUsed["phone"] = true;
    document.getElementById('lifeline-phone').disabled = true;
    alert("Your friend suggests: " + questions[currentQuestionIndex].options[questions[currentQuestionIndex].correct]);
  }
}

