$(document).ready(function () {
    let player = 1;
    let winner = false;  // Use boolean for simplicity
    let moveCount = 1;    // Counter to track number of moves

    $("button").click(function () {
        if (player == 1) {
            $(this).addClass("fa-solid fa-xmark text-dark");

            check("fa-solid fa-xmark", player);
            moveCount++;  // Increment move count

            player = 2;
            $(this).prop("disabled", true);
        } else {
            $(this).addClass("fa-regular fa-circle text-dark");

            check("fa-regular fa-circle", player);
            moveCount++;  // Increment move count

            player = 1;
            $(this).prop("disabled", true);
        }
    });

    // Check for winner
    function check(symbol, winnerPlayer) {
        if ($(".Btn1").hasClass(symbol) &&
            $(".Btn2").hasClass(symbol) &&
            $(".Btn3").hasClass(symbol)) {
            highlightWinningButtons(".Btn1", ".Btn2", ".Btn3");
            winner = true;
        } else if ($(".Btn4").hasClass(symbol) &&
            $(".Btn5").hasClass(symbol) &&
            $(".Btn6").hasClass(symbol)) {
            highlightWinningButtons(".Btn4", ".Btn5", ".Btn6");
            winner = true;
        } else if ($(".Btn7").hasClass(symbol) &&
            $(".Btn8").hasClass(symbol) &&
            $(".Btn9").hasClass(symbol)) {
            highlightWinningButtons(".Btn7", ".Btn8", ".Btn9");
            winner = true;
        } else if ($(".Btn1").hasClass(symbol) &&
            $(".Btn4").hasClass(symbol) &&
            $(".Btn7").hasClass(symbol)) {
            highlightWinningButtons(".Btn1", ".Btn4", ".Btn7");
            winner = true;
        } else if ($(".Btn2").hasClass(symbol) &&
            $(".Btn5").hasClass(symbol) &&
            $(".Btn8").hasClass(symbol)) {
            highlightWinningButtons(".Btn2", ".Btn5", ".Btn8");
            winner = true;
        } else if ($(".Btn3").hasClass(symbol) &&
            $(".Btn6").hasClass(symbol) &&
            $(".Btn9").hasClass(symbol)) {
            highlightWinningButtons(".Btn3", ".Btn6", ".Btn9");
            winner = true;
        } else if ($(".Btn1").hasClass(symbol) &&
            $(".Btn5").hasClass(symbol) &&
            $(".Btn9").hasClass(symbol)) {
            highlightWinningButtons(".Btn1", ".Btn5", ".Btn9");
            winner = true;
        } else if ($(".Btn3").hasClass(symbol) &&
            $(".Btn5").hasClass(symbol) &&
            $(".Btn7").hasClass(symbol)) {
            highlightWinningButtons(".Btn3", ".Btn5", ".Btn7");
            winner = true;
        }

        // If a winner is found
        if (winner) {
            $(".result").text("Player " + `${winnerPlayer}` + " wins!");
            $(".result").css({ "color": "green", "font-weight": "bold" });
            $(".gameBtn").prop("disabled", true);  // Disable all buttons
            $(".resetBtn").css("display", "block");
        }

        // Check for a draw (when all buttons are clicked and no winner)
        if (moveCount === 9 && !winner) {
            $(".result").text("It's a Draw!");
            $(".result").css({ "color": "red", "font-weight": "bold" });
            $(".resetBtn").css("display", "block");
        }
    }

    // Function to highlight the winning buttons
    function highlightWinningButtons(btn1, btn2, btn3) {
        $(btn1).css("background-color", "rgb(96, 201, 96)");
        $(btn2).css("background-color", "rgb(96, 201, 96)");
        $(btn3).css("background-color", "rgb(96, 201, 96)");
    }

    // Reset the game
    $(".resetBtn").click(function () {
        $("button").removeClass("fa-solid fa-xmark fa-regular fa-circle text-dark");
        $("button").prop("disabled", false);
        $(".gameBtn").css("background-color", "rgb(155, 185, 241)");
        $(".resetBtn").css("display", "none");

        $(".result").text("Let's Play");
        $(".result").css({ "color": "black", "font-weight": "400" });

        player = 1;
        winner = false;
        moveCount = 0;  // Reset move count
    });
});
