document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start");
    const quizContainer = document.getElementById("quiz");
    const nextButton = document.getElementById("next");
    const questionElement = document.getElementById("question");
    const optionsList = document.querySelectorAll(".answer");
    const scoreElement = document.getElementById("score");
    const progressElement = document.getElementById("progress");
  
    let currentQuestionIndex = 0;
    let score = 0;
  
    let questions = [];
  
    // Fetch questions from API
    async function fetchQuestions() {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=35&category=12&difficulty=medium&type=multiple');
        const data = await response.json();
  
        questions = data.results.map((question, index) => ({
          question: question.question,
          options: shuffleOptions([...question.incorrect_answers, question.correct_answer]),
          answer: question.correct_answer,
          index: index
        }));
  
        showQuestion(currentQuestionIndex);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }
  
    // Display question and answer choices
    function showQuestion(index) {
      const question = questions[index];
      questionElement.textContent = question.question;
  
      optionsList.forEach((option, i) => {
        option.textContent = question.options[i];
        option.checked = false;
        option.disabled = false;
        option.parentElement.style.backgroundColor = "";
        option.parentElement.addEventListener("click", () => highlightAnswerBox(option.parentElement));
      });
  
      nextButton.style.display = "block";
    }
  
    // Shuffle options to randomize order
    function shuffleOptions(options) {
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      return options;
    }
  
    // Highlight selected answer box
    function highlightAnswerBox(selectedBox) {
      optionsList.forEach((option) => {
        option.parentElement.style.backgroundColor = "";
      });
  
      selectedBox.style.backgroundColor = "lightblue";
    }
  
    // Check selected answer and update score
    function checkAnswer() {
      const selectedOption = document.querySelector('input[name="answer"]:checked');
      if (!selectedOption) return;
  
      const selectedAnswer = selectedOption.parentElement.textContent;
      const correctAnswer = questions[currentQuestionIndex].answer;
  
      if (selectedAnswer === correctAnswer) {
        score++;
      }
  
      optionsList.forEach((option) => {
        option.disabled = true;
      });
  
      nextButton.style.display = "block";
    }
  
    // Display next question or end of quiz
    function nextQuestion() {
      currentQuestionIndex++;
  
      if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
      } else {
        showResults();
      }
    }
  
    // Display final score and correct answers
    function showResults() {
      questionElement.textContent = "Quiz completed! Your score is: " + score + " out of " + questions.length;
  
      optionsList.forEach((option) => {
        option.style.display = "none";
      });
  
      scoreElement.textContent = "Your Score: " + score + " out of " + questions.length;
      progressElement.textContent = "Quiz Completed";
      nextButton.style.display = "none";
    }
  
    // Event listeners
    startButton.addEventListener("click", () => {
      startButton.style.display = "none";
      quizContainer.style.display = "block";
      fetchQuestions();
    });
  
    nextButton.addEventListener("click", nextQuestion);
  
    // Initial setup
    quizContainer.style.display = "none";
    nextButton.style.display = "none";
  });
  