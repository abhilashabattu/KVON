
$(document).ready(function () {

    
    let currentIndex = 1;
    let score = 0;
    let selectedAnswer = "";
    let totalQuestion = quizData.length;
    
    console.log(totalQuestion);

    $(".openNav").hide();

    function displayNav() {
        $.each(quizData, function (currentIndex) {
            
            let nav = ` <a class="d-block text-decoration-none p-2 question_${currentIndex}" id = "question_${currentIndex}" onclick=abhilasha_click(${(currentIndex+1)})>Question ${currentIndex+1}</a>`;
            $(".sideNav").append(nav);
            
        });
        
    };

    

    $(".startBtn").on("click", function () {

        $(this).hide();
        var id = "question_"+(currentIndex-1)
        $(".gameHeading").text("");
        $(".sideNav").show();
        $(".questionContainer").show();
        $(".optionContainer").show();
        $(".nextBtn").show();
        displayNav();
        displayQuestion(currentIndex-1);
        displayOptions(currentIndex-1);
        $("#" + id).css("color", "white");
        // $(".question0").css("color","white");
    });


    $(".nextBtn").on("click", function () {

        $(this).text("Next");
        $(".gameHeading").text("");
       

        selectedAnswer = $("input[name='radioBtn']:checked").val();
        let correctAns = quizData[currentIndex].answer;
        console.log(correctAns);
        console.log(selectedAnswer);

        if (selectedAnswer === correctAns) {
            score += 5;
            console.log(score);
            console.log(selectedAnswer);

        }


        var previous_id = "question_"+(currentIndex-1);
        $("#" + previous_id).css("color", "#818181");
        var next_id = "question_"+(currentIndex);
        $("#" + next_id).css("color", "white");

        
        if (currentIndex < totalQuestion) {
            
            displayQuestion(currentIndex);
            displayOptions(currentIndex);
           
            // currentIndex++;
        }
        currentIndex++;
        
        if (currentIndex === totalQuestion) {
            $(".submitBtn").show();
            $(".nextBtn").hide();
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


    $(".closeNav").on("click",function(){
        $(".sideNav").hide();
        $(".openNav").show();
    });

    $(".openNav").on("click",function(){
        $(".sideNav").show();
       
    });

});

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

function displayQuestion(idx) {
       
    let currentQuestion = quizData[idx].question;
    $(".questionContainer").css("border", "2px solid black");
    $(".questionContainer").text(currentQuestion);
    // $(".question").css("color","white");
    document.getElementById("question_1");

};

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

function abhilasha_click(idx_id){
    console.log();
    
    id = idx_id - 1;

    displayQuestion(id);
    displayOptions(id);
}



