let initialsEl = document.getElementById("initials")


 function renderHighscores() {
        let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

      highscores.sort(function(a, b) {
           return b.score - a.score;
        });

      highscores.forEach(function(score) {
           let listTag = document.createElement("li");
           listTag.textContent = score.initials + " - " + score.score;

         let liEl = document.getElementById("highscores");
           liEl.appendChild(listTag);
        });
    }

    function clearHighscores() {
       window.localStorage.removeItem("highscores");
        window.location.reload();
    }


    function saveHighscores() {
        let initials = initialsEl.value.trim();

        if (initials !== "") {
            let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
            let newScore = {
                score: time,
                initials: initials
            };

        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        window.location.href = "highscores.html";
        }
    }

    function searchForClick(e) {
       if (e.key === "Enter") {
            saveHighScores();
        }
    }

    initialsEl.onkeyup = searchForClick;

    document.getElementById("clear").onclick = clearHighscores;

    renderHighscores();