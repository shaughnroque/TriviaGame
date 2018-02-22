//Game needs to have a timer of 45 seconds
//There will be 4 questions
//Each question has 4 answers 
//You need to answer 

$(document).ready(function() {

var time = 45;

var stopTime;

var answers = {
		question1: null,
		question2: null,
		question3: null,
		question4: null
};

var value;
var name;
var correctAns = 0;
var incorrectAns= 0;


function run() {
      clearInterval(stopTime);
      stopTime = setInterval(decrement, 1000);
    }

function decrement() {

      time--;

      
      $("#Timer").html("<h2>" + time + "</h2>");


      
      if (time === 0) {

        
        stop();
    }
}
    
    function stop() {

     
      clearInterval(stopTime);
    };

    run();


function theAnswers() {
	$(".correct").on("click", function() {
		value = $(".correct")
		name = $(".correct").attr("name")
		answers[name]=true;
		console.log()

});


	$(".incorrect").on("click", function() {
		value = $(".incorrect")
		name = $(".incorrect").attr("name");
		answers[name]= false;


});

}
 theAnswers();

function submitAns() {

	$(".enterAnswers").on("click", function() {

	if (answers.question1 == null) {
		incorrectAns;
	}
	else if(answers,question1 == true){
		correctAns++;
	}
	else{
		incorrectAns++;
	}

	if (answers.question2 == null) {
		incorrectAns;
	}
	else if(answers,question2 == true){
		correctAns++;
	}
	else{
		incorrectAns++;
	}

	if (answers.question3 == null) {
		incorrectAns;
	}
	else if(answers,question3 == true){
		correctAns++;
	}
	else{
		incorrectAns++;
	}
	if (answers.question4 == null) {
		incorrectAns;
	}
	else if(answers,question4 == true){
		correctAns++;
	}
	else{
		incorrectAns++;
	}

	console.log(correctAns);
	console.log(incorrectAns);

});
submitAns();

}















});























