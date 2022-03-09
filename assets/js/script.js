let questionsEl = document.getElementById("question-container");
let timerItem = document.getElementById("time");
let choiceEl = document.getElementById("answer-choices");
let startButton = document.getElementById("start");
let submitButton = document.getElementById("submit");
let responseEl = document.getElementById("responses")

let currentQuizQuestions = 0;
let time = questions.length * 20;
let timerId;

    function beginQuiz() {
        let startQuizEl = document.getElementById("start-container");
        startQuizEl.setAttribute("class", "hide");

        questionsEl.removeAttribute("class");

        timerId = setInterval(clockTick, 1000);

        timerItem.textContent = time;

        displayQuestion();
    }

    function displayQuestion() {
        let currentQuestion = questions[currentQuizQuestions];

        let titleEl = document.getElementById("questions-header");
        titleEl.textContent = currentQuestion.title;

        choiceEl.innerHTML = "";

        currentQuestion.choices.forEach(function(choice, i){
            let choiceQuery = document.createElement("button");
            choiceQuery.setAttribute("class", "choice");
            choiceQuery.setAttribute("value", choice);

            choiceQuery.textContent = i + 1 + "." + choice;

            choiceQuery.onclick = questionBtn;

            choiceEl.appendChild(choiceQuery);
        });
    }

    function questionBtn() {
        if(this.value !== questions[currentQuizQuestions].answer) {
            time -= 20;

            if (time < 0) {
                time = 0;
            }

            timerItem.textContent = time;
    

        responseEl.textContent = "Wrong!";
    } else {
        responseEl.textContent = "Correct!";
    }

    responseEl.setAttribute("class", "feedback");
    setTimeout(function() {
        responseEl.setAttribute("class", "response hide");
    }, 1500);

    currentQuizQuestions++;

    if (currentQuizQuestions === questions.length) {
        endQuiz();
    } else {
        displayQuestion();  
        }
    }

    function endQuiz() {
        clearInterval(timerId);


    let closeOut = document.getElementById("end-container");
    closeOut.removeAttribute("class");

    let finalScoreItem = document.getElementById("score-banner");
    finalScoreItem.textContent = time;

    questionsEl.setAttribute("class", "hide");

}

    function clockTick() {
        time--;
        timerItem.textContent = time;

        if(time <= 0) {
            endQuiz();
        }
    }


    startButton.onclick = beginQuiz;

