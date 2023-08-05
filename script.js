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
  
    // Fetch questions from JSON file or API
    async function fetchQuestions() {
      try {
        const response = await fetch("questions.json"); // Replace with your JSON file or API URL
        questions = await response.json();
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
        option.parentElement.style.backgroundColor = ""; // Reset background color
        option.parentElement.addEventListener("click", () => highlightAnswerBox(option.parentElement));
      });
  
      nextButton.style.display = "block"; // Show the Next Question button
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
  
      const selectedAnswer = parseInt(selectedOption.id);
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
  