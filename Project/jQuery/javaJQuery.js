
$(document).ready(function (){

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

    currentIndex=0;
    totalQuestion=quizData.length;

    function displayNav() {
        $.each(quizData, function (index) {

            let nav = ` <a class="d-block text-decoration-none p-2 mb-2 text-white text-center fs-5 border" id = "${index}" > ${index + 1}</a>`;
            $(".sideNav").append(nav);
        });

    };

    function displayQuestion(currentIndex) {
        console.log(currentIndex);
        let currentQuestion = quizData[currentIndex].question;
       
        $(".questionContainer").text(currentQuestion);
    }
    
    

    function displayOptions(currentIndex) {
        $('.answerContainer').empty();
        $.each(quizData[currentIndex].options, function (index, value) {
            value = quizData[currentIndex].options[index];
    
            let options = `<div class="border border-2 rounded p-2 position-relative start-50">
                        <div class="form-check ">
                            <input class="form-check-input" type="radio" name="radioBtn" value="${value}" >
                            <label class="form-check-label" >
                            ${value}
                            </label>
                        </div>
                     </div>`;
            $('.answerContainer').append(options + "<br>");
        });
    
    
        $("input[name='radioBtn']").on("click", function () {
    
            selectedAnswer = $("input[name='radioBtn']:checked").val();
            console.log(selectedAnswer);
        });
    };


    displayNav();
    displayQuestion(currentIndex);
    displayOptions(currentIndex)
})
