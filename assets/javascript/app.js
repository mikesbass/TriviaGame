// Global Variables
var answers = ['Son of God', 'Died', 'He arose', 'Pay for our sins', 'Faith in Christ'], // correct answers
 	data = $('input'), // all inputs from the DOM
 	correctAnswer = 0, // correct answer
 	inCorrectAnswer = 0, // incorrect answer
 	empty = 0, // empty ones
 	counter = 15; // counter


function startGame(){
	// hiding the forms elements
	$('.data').css('display', 'none');

	// looping through the inputs and checking if the user select any
	for(var i = 0; i < data.length; i++){

		// If the user selects some
		if(data[i].checked){

			// check if what the user select if equal to the array answers
			// and add one every it's equal to the correct answer global variable.
			if(answers.indexOf(data[i].value) !== -1){
				correctAnswer++;
			}

			// do the same thing for the incorrect 
			else{
				inCorrectAnswer++;
			}
		} // end of the first if statement
	} // end of the for loop


	// Adding the correct and incorrect in order to get the remaining
	var result = correctAnswer + inCorrectAnswer;


	// Getting the remaining. 
	if(result !== 5){
		empty = 5 - result; // the remaining

	}


	// Putting the results to the DOM (correct answer, incorrect answer, and empy ones.)
	$('.empty').html("You have " + empty + " that you have not selected!!!");
	$('.correct').html("You have " + correctAnswer + " correct answers");
	$('.incorrect').html("You have " + inCorrectAnswer + " wrong answers");
	$('.result p').addClass('stylish');

} // end of the start game function





$('.start').on('click', function(){
	// Hiding and showing elements to the DOM
	$('.start').css('display', 'none');
	$('.data').css('display', 'block');


	// Starting the counter
	var startCounter = setInterval(function(){
		counter--; // decreasing the counter
		

		// Not adding an extra 0 if the counter is greater than 9
		if(counter > 14){
			$('.counter').html("You have " + "00:" + counter + " remaining...!!!");
		}

		// adding an extra 0 if the counter is less than 9
		else if(counter <= 14){
			$('.counter').html("You have " + "00:0" + counter + " remaining...!!!");
		}


		// If the counter is equal to 0
		// Then stop the game
		if(counter <= 0){
			clearInterval(startCounter); // stop the counter
			startGame(); // grab the values and do the math

		}
	}, 1000); // end of the counter


	$('.done').on('click', function(){
		clearInterval(startCounter); // stop the counter
		startGame(); // grab the values and do the math
	});
}); // end of the start button


















// var questions = [
// 					{
// 						question:"Who is Jesus?",
// 						answers: ['God in the flesh', 'Regular Man', 'Sinner', 'Thief'],
// 						correctAnswer: 'God in the flesh'
// 					},

// 					{
// 						question:"What did Jesus do for us?",
// 						answers: ['Preached', 'Lied', 'Died', 'Teached'],
// 						correctAnswer: 'Died'
// 					},

// 					{
// 						question:"What happened on third day after his death?",
// 						answers: ['Nothing', 'He arose', 'Body was stole', 'Conquered'],
// 						correctAnswer: 'He arose'
// 					},

// 					{
// 						question:"Why did Jesus die for us?",
// 						answers: ['Pay for our sins', 'He was a thief', 'No reason', 'Fake'],
// 						correctAnswer: 'Pay for our sins'
// 					},

// 					{
// 						question:"What is the one thing we must do to enter Heaven?",
// 						answers: ['Help others', 'Do good', 'Pay for it', 'Faith in Christ'],
// 						correctAnswer: 'Faith in Christ'
// 					}
// 				];

// 		var correctAnswer = 0;
// 		 	incorrectAnswer = 0;
// 			emptyAnswer = 0;
// 			// userChoice = [];
// 			// count = 5;

// 			title = $('h3');
// 			result = $('p');



// 			guess = [];


// 	questions.map(function(e, index)
// 	{
// 		var arr = e.answers;
// 		var correct = e.correctAnswer;


// 		$(title[index]).html(e.question);

// 		// $(result[index]).html(guess[index]);

// 		if(arr.length ===4)
// 		{
// 			if(arr.includes(correct))
// 			{
// 				correctAnswer++;
// 			}
			
// 			else
// 			{
// 				incorrectAnswer++;
// 			}
// 		}

// 		arr.map(function(e)
// 		{
// 			guess.push(e);
// 		});

// 	});

// 	for(var i = 0; i < result.length; i++)
// 	{
// 		$(result[i]).attr('value', guess[i]);
// 		$(result[i]).html(guess[i]);
// 	}

// console.log(correctAnswer);
// console.log(incorrectAnswer);


// var result = document.forms[0];

// $('#done').on('click', function()
// {

// 	for(var i = 0; i < result.length; i++)
// 	{
// 		if(result[i].checked)
// 		{
// 			// console.log(result[i].value);
// 		}
// 	}
// 	// console.log(result[i].value);
// });




// var result = document.forms[0];

// var arr = [1, 2, 3, 4, 5];

// for(var i = 0; i < result.length; i++)
// {
// 	if(result[i].checked)
// 	{
// 		console.log(result[i].value);
// 	}
// }

// result[i]












// var count = 5;

// var counter = setInterval(function()
// {
// 	count--;
// 	console.log(count);

// 	if (count <= 0)
// 	{
// 		console.log("Stop");
// 		clearInterval(counter)
// 	}
// }, 1000)









//Basic Title background with Start button.
//Timer begins on start and questions are all displayed.
//Multiple choice or true/false questions. Can ONLY choose one answer per question.
//Mouse will choose the answer.
//Done on bottom of page to display results of answers.
//Timer will overule wether user has answered all questions.
//Result page will display correct and incorrect questions.


//Extra
//Does one question at a time. Timer still overules.
//Congratuations screen for correct answers.
//Few secs after congrats next question is displayed.
//Time up screen with correct answer.
//Few secs after times up next question is displayed.
//Wrong answer screen with correct answer.
//Few secs after wrong next question is displayed.
//Result page will display correct and incorrect questions with restart button.