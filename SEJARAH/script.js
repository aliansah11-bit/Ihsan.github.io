document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const startPage = document.getElementById("start-page");
    const rulesPage = document.getElementById("rules-page");
    const startGameButton = document.getElementById("start-game");
     const loadingPage = document.getElementById("loading-page");
    const quizPage = document.getElementById("quiz-page");
    const optionsEl = document.getElementById("options");
    const questionEl = document.getElementById("question");
    const scoreEl = document.getElementById("score");
    const resultPage = document.getElementById("result-page");
    const finalScoreEl = document.getElementById("final-score");
    const badgeEl = document.getElementById("badge");
    const restartButton = document.getElementById("restart-button");
    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');
    
    

 // Fungsi untuk menangani jawaban
 function checkAnswer(selectedOption) {
  const isCorrect = selectedOption.classList.contains('correct');
  // Jika jawabannya benar
  if (isCorrect) {
    score += 10; // Tambah skor
    selectedOption.classList.add('correct'); // Menandakan jawaban benar
    correctSound.play(); // Putar suara benar
  } else {
    wrongSound.play(); // Putar suara salah
    score -= 5; // Kurangi skor
    selectedOption.classList.add('wrong'); // Menandakan jawaban salah
  }

  // Update skor di tampilan
  document.getElementById('score').textContent = 'Skor: ' + score;

  // Pindah ke soal berikutnya setelah beberapa detik
  setTimeout(loadNextQuestion, 3000);
}

    let currentQuestionIndex = 0;
    let score = 0;
  
    const questions = [
      {
        question: "Siapa yang memproklamirkan kemerdekaan Indonesia?",
        options: ["Soekarno", "Agus Salim", "Sutan Sjahrir", "Hatta"],
        answer: "Soekarno",
      },
      {
        question: "Kapan Indonesia memproklamasikan kemerdekaannya?",
        options: ["20 Oktober 1945", "17 Agustus 1945", "1 Januari 1945", "12 Maret 1945"],
        answer: "17 Agustus 1945",
      },
      {
        question: "Apa nama pertempuran besar pertama dalam perjuangan kemerdekaan?",
        options: ["Pertempuran Surabaya", "Pertempuran Medan Area", "Pertempuran Ambarawa", "Pertempuran Bandung Lautan Api"],
        answer: "Pertempuran Surabaya",
      },
      {
        question: "Siapa tokoh yang gugur dalam peristiwa bandung lautan api?",
        options: ["Soekarno", "Pangeran Diponegoro", "Sutan Sjahrir", "Mohammad Toha"],
        answer: "Mohammad Toha",
      },
      {
        question: "Kapan peristiwa bandung lautan api terjadi",
        options: ["28 Agustus 1947", "23 Maret 1946", "1 November 1948", "8 April 1946"],
        answer: "23 Maret 1946",
      },
      {
        question: "Siapa tokoh yang terlibat dalam peristiwa pertempuran medan area",
        options: ["Abdul Rohman", "Achmad Soebardjo", "Ahmad Tahir", "Kapitan Pattimura"],
        answer: "Ahmad Tahir",
      },
      {
        question: "Kapan pertempuran Medan Area terjadi?",
        options: ["13 Oktober 1945", "15 Oktober 1946", "17 Mei 1948", "1 Oktober 1946"],
        answer: "13 Oktober 1945",
      },
      {
        question: "Pertempuran Ambarawa terjadi pada tanggal",
        options: ["20 Oktober 1945", "19 Oktober 1946", "18 Agustus 1944", "7 September 1946"],
        answer: "20 Oktober 1945",
      },
      {
        question: "Siapa yang memimpin pasukan Indonesia dalam Perang Padri di Sumatra",
        options: ["Pangeran Diponegoro", "Tuanku Imam Bonjol", "Sultan Agung", "Abdul Haris"],
        answer: "Tuanku Imam Bonjol",
      },
      {
        question: "Perang Diponegoro terjadi di wilayah?",
        options: ["Papua", "Kalibagor", "Jawa", "Wonosobo"],
        answer: "Jawa",
      },
    ];
  
    startButton.addEventListener("click", function () {
      startPage.style.display = "none";
      rulesPage.style.display = "block";
    });
  
    startGameButton.addEventListener("click", function () {
      rulesPage.style.display = "none";
      quizPage.style.display = "block";
      loadQuestion();
    });
  
    restartButton.addEventListener("click", function () {
      resultPage.style.display = "none";
      score = 0;
      currentQuestionIndex = 0;
      quizPage.style.display = "block";
      loadQuestion();
    });
  
    function loadQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      questionEl.textContent = currentQuestion.question;
      optionsEl.innerHTML = "";
      currentQuestion.options.forEach(function (option) {
        const button = document.createElement("button");
        button.textContent = option;
        optionsEl.appendChild(button);
  
        button.addEventListener("click", function () {
          const selectedAnswer = button.textContent;
          const correctAnswer = currentQuestion.answer;
  
          optionsEl.querySelectorAll("button").forEach((btn) => {
            btn.classList.remove("correct", "wrong");
          });
  
          if (selectedAnswer === correctAnswer) {
            score += 10;
            button.classList.add("correct");
          } else {
            score -= 5;
            button.classList.add("wrong");
          }
  
          scoreEl.textContent = `Skor: ${score}`;
          currentQuestionIndex++;
  
          if (currentQuestionIndex < questions.length) {
            setTimeout(loadQuestion, 1000);
          } else {
            setTimeout(showResult, 1000);
          }
        });
      });
    }
  
    function showResult() {
      quizPage.style.display = "none";
      resultPage.style.display = "block" ;
      finalScoreEl.textContent = `Skor Akhir: ${score}`;
  
      let badge = "";
      if (score === 100) {
        badge = '<img src="gold-badge.png" alt="Gold Badge">';
      } else if (score <= 90) {
        badge = '<img src="silver-badge.png" alt="Silver Badge">';
      } else if (score <= 30){
        badge = '<img src="bronze-badge.png" alt="Bronze Badge">';
      }
      badgeEl.innerHTML = badge;
    }
  });
  