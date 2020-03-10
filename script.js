/*
---Setup the documents
Write questions and answers
---store the questions and answers in objects and arrays

code page 1 - start quiz
  mock up each page
  design each page with html/css
  create a skeleton of click event functions and render functions

code page 2 - the actual quiz
  mock up each page
  design each page with html/css
  create a skeleton of click event functions and render functions

code page 3 - finish page
  mock up each page
  design each page with html/css
  create a skeleton of click event functions and render functions



All objects/questions will be stored in an array
let questionsArray = [];

A question (object)
  1 String that is a question
  4 possible answers
  1 right answer

Make a function that takes in 5 parameters, the first 4 are
possible answers and the fifth is the right answer. Return
an object.

to do (3/2):
finish comments
create HTML for Landing page
call function in the else statement
create function
  empty main-game
  append landing page html (static)
  create a variable to calculate score playerscore/ masterArray.length
  round whole cardNumber
  change the append landing page (dynamic)
*/


//
//
// --------------------------
// Declare global variables player score and counter to loop through master questions array
//
let playerScore = 0;
let counter = 0;



//
//
// -------------------------
// Function to render question.
// Empties the page.
// Appends question to documents.
// Calls click function.
//
//
function questRender(quest){

  $(".main-game").empty();

  $(".main-game").append(
    `
    <div class="question-block">` + quest.question + `</div>
  </div>
  <div class="container">
    <div class="block">
        <div class="col playing-card" id="1">
          <p class="suite">1&spades;</p>
          <p>
          ` + quest.answer1 + `
          </p>
          </div>
        <div class="col playing-card" id="2">
          <p class="suite"><font color="red">2&hearts;</font></p>
          <p>
          ` + quest.answer2 + `
          </p></div>
    </div>
    <div class="block">
        <div class="col playing-card" id="3">
          <p class="suite"><font color="red">3&diams;</font></p>
          <p>
          ` + quest.answer3 + `
          </p></div>
        <div class="col playing-card" id="4">
          <p class="suite">4&clubs;</p>
          <p>
          ` + quest.answer4 + `
          </p></div>
    </div>
    `
  );

  //
  //
  //--------------------------
  //adds click event to playing cards.
  //increments playerScore for correct answer.
  //renders landing page when user has completed all questions in masterQuestions array.
  //
  //
  $('.playing-card').click(function(){
    let cardNumber = this.id;
    if (cardNumber === quest.correctAnswer){
      playerScore = playerScore + 1;
    }
    counter++;
    if (counter < masterQuestions.length) {
      questRender(masterQuestions[counter]);
    } else {
      finalPage();
    }

  });
}
  //
  //
  //----------------------------------
  //function to render final score
  //
  //
  function finalPage(){

    $(".main-game").empty();

    $(".main-game").append(
      `  <div class="landing-container">
          <div>
           <p class="final">FINAL SCORE =<br> ` + finalScore(playerScore,masterQuestions.length) + ` % </p>
          </div> `

    );
  }





function finalScore(num1,num2){

  let obtained = num1;
  let possible = num2;
  let percent = obtained * 100 / possible;
  percent = Math.ceil(percent);
  return percent;
}



//
//
//---------------------------------------
//
//
//
const toQuestion = (quest, ans1, ans2, ans3, ans4, rightAnswer) => {

  let object1 = {
    question: quest,
    answer1: ans1,
    answer2: ans2,
    answer3: ans3,
    answer4: ans4,
    correctAnswer: rightAnswer
  };


  return object1;
};

//
//
//-------------------------------
//initial button click empties landing page and renders questions
//
//
$('.button').click(function(){
  $(".main-game").empty();
  questRender(masterQuestions[counter]);
});



//
//
//---------------------------------------
//returning objects to question variables
//
//
question1 = toQuestion(
  'According to the "Welcome to Twin Peaks" sign, how many people live there?',
  '5,201',
  '51,201',
  '2,501',
  '15,102',
  '2'
);


question2 = toQuestion(
  'What name did David Lynch originally want to title the series?',
   'Northern Exposure',
   'The Great Northern',
   'White Tail Mountain',
   'Northwest Passage',
   '4'
 );

question3 = toQuestion(
  'What is the name of Laura Palmers therapist?',
  'Dr. Jacoby',
  'Dr. Briggs',
  'Dr. Hurley',
  'Dr. Jeffries',
  '1'
);
question4 = toQuestion(
  'On what day did Agent Dale Cooper first come to Twin Peaks?',
   'March 24th',
   'April 7th',
   'February 24th',
   'September 19th',
   '3'
);

//
//
//______________________________________________________________
//pushing the question objects into the master array
//
//

masterQuestions = [];
masterQuestions.push(question1);
masterQuestions.push(question2);
masterQuestions.push(question3);
masterQuestions.push(question4);
