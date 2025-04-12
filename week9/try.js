let currentIndex = 0;

$(document).ready(function () {

    let score = 0;
    let selectedAnswer = "";


    let totalQuestion = quizData.length;

    console.log(totalQuestion);

    $(".openNav").hide();

    function displayNav() {
        $.each(quizData, function (index) {

            let nav = ` <a class="d-block text-decoration-none p-2 mb-2 navBtn text-center" id = "${index}" onclick=navActive(${index})> ${index + 1}</a>`;
            $(".sideNav").append(nav);
        });

    };

    $(".startBtn").on("click", function () {

        $(this).hide();
        var id = "question_" + (currentIndex);
        $(".gameHeading").text("");
        $(".sideNav").show();
        $(".questionContainer").show();
        $(".optionContainer").show();
        $(".nextBtn").show();
        $(".previousBtn").show();
        displayNav();
        displayQuestion(currentIndex);
        displayOptions(currentIndex);
        // $("#" + id).css("color", "white");
        // $(".question0").css("color","white");
        $("a").removeClass("active");
        $("#" + currentIndex).addClass("active");
    });


    $(".nextBtn").on("click", function () {

        $(this).text("Next");
        $(".gameHeading").text("");

        $("input[name='radioBtn']").addClass("checked");
        selectedAnswer = $("input[name='radioBtn']:checked").val();

        $("input[name='radioBtn'][value='" + selectedAnswer + "']").prop('checked', true);

        let correctAns = quizData[currentIndex].answer;
        console.log(correctAns);
        console.log(selectedAnswer);

        if (selectedAnswer === correctAns) {
            score += 5;
            console.log(score);
            console.log(selectedAnswer);
        }

        // var previous_id = "question_"+(currentIndex-1);
        // $("#" + previous_id).css("color", "#818181");
        // var next_id = "question_"+(currentIndex);
        // $("#" + next_id).css("color", "white");


        currentIndex++;

        if (currentIndex < totalQuestion){

            displayQuestion(currentIndex);

            displayOptions(currentIndex);

            $("a").removeClass("active");
            $("#" + currentIndex).addClass("active");
            $("input[name='radioBtn'][value= selectedAnswer]").attr('checked', true);
            // currentIndex++;
        } else {
            $(".submitBtn").show();
            $(".nextBtn").hide();
            $(".previousBtn").hide();
        }



    });

    $(".previousBtn").on("click", function () {
        if (currentIndex == 0) {
            alert("You are on first question");
        } else {
            currentIndex--;
            displayQuestion(currentIndex);
            displayOptions(currentIndex);
            $("a").removeClass("active");
            $("#" + currentIndex).addClass("active");
        }
    });

    $(".submitBtn").on("click", function () {
        $(this).hide();
        $(".timeContainer, .questionContainer , .optionContainer ").hide();

        let mssg = "";

        $(".gameHeading").text("Game Over").css({
            "color": "red",
            "font-weight": "500"
        });;


        if (score > 10) {
            mssg = "Congratulations!";
            $(".message").css("color", "green");
        } else if (score > 5) {
            mssg = "Well Done";
            $(".message").css("color", "green");
        } else {
            mssg = "You need practice";
            $(".message").css("color", "red");
        }

        $(".rowContainer").css({ "border": "2px solid green" });

        $(".message").text(mssg).css("font-size", "22px");

        $(".scoreContainer").html("Your Score is " + "<br>" + `${score}`).css({
            "font-size": "25px",
            "color": "green"
        });;

    });


    $(".closeNav").on("click", function () {
        $(".sideNav").hide();
        $(".openNav").show();
    });

    $(".openNav").on("click", function () {
        $(".sideNav").show();

    });

});



function displayQuestion(idx) {
    console.log(idx);
    let currentQuestion = quizData[idx].question;
    $(".questionContainer").css("border", "2px solid black");
    $(".questionContainer").text(currentQuestion);
    // $("#" + "question_" + idx).addClass(".active");
}


function displayOptions(idx) {
    $('.optionContainer').empty();
    $.each(quizData[idx].options, function (index, value) {
        value = quizData[idx].options[index];

        let op = `<div class="border p-2"><div class="form-check ">
                    <input class="form-check-input" type="radio" name="radioBtn" value="${value}" >
                    <label class="form-check-label" >
                    ${value}
                    </label>
                 </div></div>`;
        $('.optionContainer').append(op + "<br>");
    });


    $("input[name='radioBtn']").on("click", function () {

        selectedAnswer = $("input[name='radioBtn']:checked").val();
    });
};



function navActive(idx_id) {
    id = idx_id;
    console.log(id + "id of nav");
    console.log(currentIndex + 1 + "currentIndex");
    currentIndex = id;
    displayQuestion(id);
    displayOptions(id);
    $("a").removeClass("active");
    $("#" + id).addClass("active");
}


const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris",
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "HTML", "Java", "C++"],
        answer: "HTML",
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: [
            "Charles Dickens",
            "William Shakespeare",
            "Mark Twain",
            "Jane Austen",
        ],
        answer: "William Shakespeare",
    },
];