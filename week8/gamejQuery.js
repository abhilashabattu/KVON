
$(document).ready(function () {
    let player = 1;
    let winner = "false";
    let turnCount = 1;

    $("button").click(function () {
        if (player == 1) {
            $(this).addClass("fa-solid fa-xmark text-dark");

            check("fa-solid fa-xmark", player);
            turnCount++;
            player = 2;
            $(this).prop("disabled", true);

        } else {
            $(this).addClass("fa-regular fa-circle text-dark");

            check("fa-regular fa-circle", player);
            turnCount++;
            player = 1;
            $(this).prop("disabled", true);

        }
    });


    function check(symbol, winnerPlayer) {
        if ($(".Btn1").hasClass(symbol) &&
            $(".Btn2").hasClass(symbol) &&
            $(".Btn3").hasClass(symbol)) {
            buttonHighlight(".Btn1",".Btn2",".Btn3");
            winner = "true";

            $(".resetBtn").css("display", "block");
        }
        else if ($(".Btn4").hasClass(symbol) &&
            $(".Btn5").hasClass(symbol) &&
            $(".Btn6").hasClass(symbol)) {
            buttonHighlight(".Btn4",".Btn5",".Btn6");
            winner = "true";

            $(".resetBtn").css("display", "block");
        }
        else if ($(".Btn7").hasClass(symbol) &&
            $(".Btn8").hasClass(symbol) &&
            $(".Btn9").hasClass(symbol)) {
            buttonHighlight(".Btn7",".Btn8",".Btn9");
            winner = "true";

            $(".resetBtn").css("display", "block");
        }
        else if ($(".Btn1").hasClass(symbol) &&
            $(".Btn4").hasClass(symbol) &&
            $(".Btn7").hasClass(symbol)) {
            buttonHighlight(".Btn1",".Btn4",".Btn7");
            winner = "true";

            $(".resetBtn").css("display", "block");
        }
        else if ($(".Btn2").hasClass(symbol) &&
            $(".Btn5").hasClass(symbol) &&
            $(".Btn8").hasClass(symbol)) {
            buttonHighlight(".Btn2",".Btn5",".Btn8");
            winner = "true";

            $(".resetBtn").css("display", "block");
        }
        else if ($(".Btn3").hasClass(symbol) &&
            $(".Btn6").hasClass(symbol) &&
            $(".Btn9").hasClass(symbol)) {
            buttonHighlight(".Btn3",".Btn6",".Btn9");
            winner = "true";

            $(".resetBtn").css("display", "block");
        }
        else if ($(".Btn1").hasClass(symbol) &&
            $(".Btn5").hasClass(symbol) &&
            $(".Btn9").hasClass(symbol)) {
            buttonHighlight(".Btn1",".Btn5",".Btn9");
            winner = "true";

            $(".resetBtn").css("display", "block");
        }
        else if ($(".Btn3").hasClass(symbol) &&
            $(".Btn5").hasClass(symbol) &&
            $(".Btn7").hasClass(symbol)) {
            buttonHighlight(".Btn3",".Btn5",".Btn7");

            winner = "true";

            $(".resetBtn").css("display", "block");
        }

        if (winner == "true") {
            $(".result").text("Player " + `${winnerPlayer}` + " win");
            $(".result").css({ "color": "green", "font-weight": "bold" });
            $(".gameBtn").prop("disabled", true);
        } else if (winner == "false" && turnCount === 9) {
            $(".result").text("It's a Draw!");
            $(".result").css({ "color": "red", "font-weight": "bold" });
            $(".resetBtn").css("display", "block");
        }


    }

    function buttonHighlight(btn1, btn2, btn3) {
        $(btn1).css("background-color", "rgb(96, 201, 96)");
        $(btn2).css("background-color", "rgb(96, 201, 96)");
        $(btn3).css("background-color", "rgb(96, 201, 96)");
    }


    $(".resetBtn").click(function () {
        $("button").removeClass("fa-solid fa-xmark fa-regular fa-circle");
        $("button").prop("disabled", false);
        $(this).css("display", "none");

        $(".result").text("Let's Play");
        $(".result").css({ "color": "black", "font-weight": "400" });

        $(".gameBtn").css("background-color", "rgb(155, 185, 241)");

        player = 1;
        winner = "false";
        turnCount = 1;
    });


});

