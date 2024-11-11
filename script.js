const questions = [
    {
      question: "¿Cuál fue nuestro primer lugar de cita?",
      answers: [
        { text: "La U Hijito", correct: true },
        { text: "Cine", correct: false },
        { text: "Fuimos a comer gilbertito", correct: false }
      ]
    },
    {
      question: "¿Cuál es mi color favorito?",
      answers: [
        { text: "Rojo", correct: false },
        { text: "Azul", correct: true },
        { text: "Verde", correct: false }
      ]
    },
    {
      question: "¿Qué es lo que más me gusta de ti?",
      answers: [
        { text: "Tu cabello", correct: false },
        { text: "Tus ojos", correct: true },
        { text: "Tu sentido del humor", correct: false }
      ]
    },
    {
        question: "¿A qué le tengo miedo?",
        answers: [
          { text: "Todo tipo de Aves", correct: true },
          { text: "A mi ma enojada", correct: false },
          { text: "A conocer a tus pa´s", correct: false }
        ]
      },
      {
        question: "¿Mi comida Favorita?",
        answers: [
          { text: "Cevichazo", correct: true },
          { text: "Causa Rellena", correct: false },
          { text: "Broster", correct: false }
        ]
      },
      {
        question: "¿Bebida Gasificada Favorita?",
        answers: [
          { text: "Coca Cola", correct: false },
          { text: "Inka Cola", correct: true },
          { text: "Sprite", correct: false }
        ]
      },
      {
        question: "¿Como te suelo decir?",
        answers: [
          { text: "Monga", correct: false },
          { text: "Mi Amor", correct: false },
          { text: "Chibola Lola", correct: true }
        ]
      },
      {
        question: "¿Juego Favorito?",
        answers: [
          { text: "Fortnite", correct: false },
          { text: "Far Cry 5", correct: false },
          { text: "Valorant", correct: true }
        ]
      },
      {
        question: "¿soy...?",
        answers: [
          { text: "Gilberto", correct: false },
          { text: "El unico el irrepetible el sin igual el que nacio 2 veces", correct: true },
          { text: "Feo", correct: false }
        ]
      },
      {
        question: "¿Cuantos meses vamos?",
        answers: [
          { text: "5", correct: true },
          { text: "4", correct: false },
          { text: "1 año y medio tarao", correct: false }
        ]
      },
      {
        question: "¿Cómo te pedí que seas mi enamorada?",
        answers: [
          { text: "Significas demasiado en mi vida de verdad no quiero que te vayas", correct: false },
          { text: "Jodamonos Juntos", correct: true },
          { text: "Renuncié a Lima, contratame en tu corazón", correct: false }
        ]
      },
      {
        question: "¿Mi gata se llama?",
        answers: [
          { text: "Michifus", correct: false },
          { text: "Amanda", correct: false },
          { text: "Nuci", correct: true }
        ]
      },
      {
        question: "¿Me gusta...?",
        answers: [
          { text: "Hablar", correct: true },
          { text: "Vagar", correct: false },
          { text: "Lavar", correct: false }
        ]
      },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showQuestion(question) {
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    
    questionElement.innerText = question.question;
    answerButtons.innerHTML = "";
  
    question.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectAnswer(answer));
      answerButtons.appendChild(button);
    });
  }
  
  function selectAnswer(answer) {
    const errorImage = document.getElementById("error-image");
    
    if (answer.correct) {
      score++;
      errorImage.style.display = "none"; // Oculta la imagen si la respuesta es correcta
    } else {
      errorImage.style.display = "block"; // Muestra la imagen si la respuesta es incorrecta
    }
    document.getElementById("next-button").style.display = "block"; // Muestra el botón "Siguiente"
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
      showResults();
    }
    document.getElementById("next-button").style.display = "none";
    document.getElementById("error-image").style.display = "none"; // Oculta la imagen para la siguiente pregunta
  }
  
  function showResults() {
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
  
    const resultMessage = document.getElementById("result-message");
    if (score === questions.length) {
      resultMessage.innerText = `¡Perfecto! Conoces todo de mi, la mejor novia del mundo (Vamo a desayunar en la noche bb?uwu), Por cierto no se me dió muy bien programar esto fue super improvisado, me agarró la locura por la mañana JAAAAAAAA💕.`;
    } else {
      resultMessage.innerText = `Puntuación: ${score}/${questions.length} - PEPEPEPE Aún así eres la persona perfecta para mí! mwah! `;
    }
  }
  
  // Inicia la trivia
  showQuestion(questions[currentQuestionIndex]);
  