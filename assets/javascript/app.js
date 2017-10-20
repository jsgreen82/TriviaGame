//create question objects that hold each question and corresponding answers
$(document).ready(function() {
	startGame();
	function startGame(event) {
		$('.container1').hide();
		$("#start").click(function() {
			$('.container1').show();
			$('#start').hide();
			run();
			decrement();
		});
		$('#score').hide();
		$("#clock").text("90");
		var correct = "";
		var wrong = "";
		var clock = 90; 
		var intervalId;



		var books = {
			dickens: {
				question: 'In Charles Dickens novel A Tale of Two Cities what are the names of the two cities?',
				possibleAnswers: ['A. Boston and New York', 'B. Rome and Venice', 'C. Brussels and Moscow', 'D. London and Paris'],
				correctAnswer: 'D. London and Paris'

			},

			steinbeck: {
				question: 'What is the title of the Steinbeck novel about Tom Joad and his family of migrant farm workers?',
				possibleAnswers: ['A. Cannery Row', 'B. The Grapes of Wrath', 'C. Of Mice and Men', 'D. East of Eden'],
				correctAnswer: 'B. The Grapes of Wrath'
			},
			sinclair: {
				question: 'Upton Sinclairs groundbreaking 1006 book The Jungle was primarily about which industry?',
				possibleAnswers: ['A. Steel', 'B. Meatpacking', 'C. Oil', 'D. Shipping'],
				correctAnswer: 'B. Meatpacking'
			},

			lewis: {
				question: 'The 1920 book Main Street focused on the hypocrisy and shallowness of small town life in the U.S. Who was the author?',
				possibleAnswers: ['A. Theodore Dreiser', 'B. Pearl Buck', 'C. Sinclair Lewis', 'D. Ernest Hemingway'],
				correctAnswer: 'C. Sinclair Lewis'
			},
			tolstoy: {
				question: 'I was the absolute poster child for adulteresses. I had a passionate love affair while trapped in a loveless marriage. I teetered between highs and lows, before becoming disillusioned with my paramour. Most importantly, though, I enacted a dramatic suicide involving a train, ending all of my suffering. Which novel replays my melancholy saga?',
				possibleAnswers: ['A. War and Peace', 'B. Family Happiness', 'C. Youth', 'D. Anna Karenina'],
				correctAnswer: 'D. Anna Karenina'

			},
			orwell: {
				question: 'Who is the author of 1984?',
				possibleAnswers: ['A. Jules Verne', 'B. Joseph Heller', 'C. George Orwell', 'D. Aldous Huxley'],
				correctAnswer: 'C. George Orwell'

			},

			vonnegut: {
				question: 'Kurt Vonnegut created this fictional autobiography of Rabo Karabekian. What was the title?',
				possibleAnswers: ['A. Bluebeard', 'B. Slaughterhouse-Five', 'C. Cats Cradle', 'D. Breakfast of Champions'],
				correctAnswer: 'A. Bluebeard' 
			},

			chabon: {
				question: 'Michael Chabon won the Puliter Prize for what novel?',
				possibleAnswers: ['A. Moonglow', 'B. Wonder Boys', 'C. The Amazing Adventures of Kavalier and Clay', 'D. The Yiddish Policemans Union'],
				correctAnswer: 'C. The Amazing Adventures of Kavalier and Clay' 
			}
		};

//user guess and submit button	
$("#submitTriviaAnswer").click(function() {
	var val = $('input[name=optradio1]:checked').val();
	var idx = parseInt(val);
	
	if (books.dickens.possibleAnswers[idx] === books.dickens.possibleAnswers[3]) {
		correct++;
		console.log("correct");
	}else {
		console.log("wrong");
		wrong++;
	}

});	

$("#submitTriviaAnswer").click(function() {
	var val = $('input[name=optradio2]:checked').val();
	var idx = parseInt(val);
	
	if (books.steinbeck.possibleAnswers[idx] === books.steinbeck.possibleAnswers[1]) {
		correct++;
		console.log("correct");
	}else {
		console.log("wrong");
		wrong++;
	}

});

$("#submitTriviaAnswer").click(function() {
	var val = $('input[name=optradio3]:checked').val();
	var idx = parseInt(val);
	
	if (books.sinclair.possibleAnswers[idx] === books.sinclair.possibleAnswers[1]) {
		correct++;
		console.log("correct");
	}else {
		console.log("wrong");
		wrong++;
	}

});	

$("#submitTriviaAnswer").click(function() {
	var val = $('input[name=optradio4]:checked').val();
	var idx = parseInt(val);
	
	if (books.tolstoy.possibleAnswers[idx] === books.tolstoy.possibleAnswers[3]) {
		correct++;
		console.log("correct");
	}else {
		console.log("wrong");
		wrong++;
	}

});	

$("#submitTriviaAnswer").click(function() {
	var val = $('input[name=optradio5]:checked').val();
	var idx = parseInt(val);
	
	if (books.lewis.possibleAnswers[idx] === books.lewis.possibleAnswers[2]) {
		correct++;
		console.log("correct");
	}else {
		console.log("wrong");
		wrong++;
	}

});	

$("#submitTriviaAnswer").click(function() {
	var val = $('input[name=optradio6]:checked').val();
	var idx = parseInt(val);
	
	if (books.orwell.possibleAnswers[idx] === books.orwell.possibleAnswers[2]) {
		correct++;
		console.log("correct");
	}else {
		console.log("wrong");
		wrong++;
	}

});		

$("#submitTriviaAnswer").click(function() {
	var val = $('input[name=optradio7]:checked').val();
	var idx = parseInt(val);
	
	if (books.vonnegut.possibleAnswers[idx] === books.vonnegut.possibleAnswers[0]) {
		correct++;
		console.log("correct");
	}else {
		console.log("wrong");
		wrong++;
	}

});	

$("#submitTriviaAnswer").click(function() {
	var val = $('input[name=optradio8]:checked').val();
	var idx = parseInt(val);
	
	if (books.chabon.possibleAnswers[idx] === books.chabon.possibleAnswers[2]) {
		correct++;
		console.log("correct");
	}else {
		console.log("wrong");
		wrong++;
	}


	stop();					
	endGame();

});


function endGame() {
	$('.container1').hide();
	$('#score').show();
	$('#correct').text(correct);
	$('#wrong').text(wrong);
	
};	

function stop() {

	clearInterval(intervalId);
};

function run() {
	intervalId = setInterval(decrement, 1000);
};
function decrement() {
      //  Decrease number by one.
      clock--;
      //  Show the number in the #show-number tag.
      $("#clock").html("<h2>" + clock + "</h2>");
      //  Once number hits zero...
      if (clock === 0) {

      	var val = $('input[name=optradio1]:checked').val();
      	var idx = parseInt(val);

      	if (books.dickens.possibleAnswers[idx] === books.dickens.possibleAnswers[3]) {
      		correct++;
      		console.log("correct");
      	}else {
      		console.log("wrong");
      		wrong++;
      	}

      	var val = $('input[name=optradio2]:checked').val();
      	var idx = parseInt(val);

      	if (books.steinbeck.possibleAnswers[idx] === books.steinbeck.possibleAnswers[1]) {
      		correct++;
      		console.log("correct");
      	}else {
      		console.log("wrong");
      		wrong++;
      	}

      	var val = $('input[name=optradio3]:checked').val();
      	var idx = parseInt(val);

      	if (books.sinclair.possibleAnswers[idx] === books.sinclair.possibleAnswers[1]) {
      		correct++;
      		console.log("correct");
      	}else {
      		console.log("wrong");
      		wrong++;
      	}



      	var val = $('input[name=optradio4]:checked').val();
      	var idx = parseInt(val);

      	if (books.tolstoy.possibleAnswers[idx] === books.tolstoy.possibleAnswers[3]) {
      		correct++;
      		console.log("correct");
      	}else {
      		console.log("wrong");
      		wrong++;
      	}

      	var val = $('input[name=optradio5]:checked').val();
      	var idx = parseInt(val);

      	if (books.lewis.possibleAnswers[idx] === books.lewis.possibleAnswers[2]) {
      		correct++;
      		console.log("correct");
      	}else {
      		console.log("wrong");
      		wrong++;
      	}

      	var val = $('input[name=optradio6]:checked').val();
      	var idx = parseInt(val);

      	if (books.orwell.possibleAnswers[idx] === books.orwell.possibleAnswers[2]) {
      		correct++;
      		console.log("correct");
      	}else {
      		console.log("wrong");
      		wrong++;
      	}
      	var val = $('input[name=optradio7]:checked').val();
      	var idx = parseInt(val);

      	if (books.vonnegut.possibleAnswers[idx] === books.vonnegut.possibleAnswers[0]) {
      		correct++;
      		console.log("correct");
      	}else {
      		console.log("wrong");
      		wrong++;
      	}
      	var val = $('input[name=optradio8]:checked').val();
      	var idx = parseInt(val);

      	if (books.chabon.possibleAnswers[idx] === books.chabon.possibleAnswers[2]) {
      		correct++;
      		console.log("correct");
      	}else {
      		console.log("wrong");
      		wrong++;
      	}

      	alert("Time Up!");
      	endGame();
      }
  };
};	
});