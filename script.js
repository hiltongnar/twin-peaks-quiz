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

week 1 to do:
click event on start button (alert test)
empty container class, place in page two
write HTML/CSS for page 2

think through all of the functions


*/

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
}

question1 = toQuestion('What is 2+2', '1', '7', '4', '10', '4');
question2 = toQuestion('What is 2+2', '1', '7', '4', '10', '4');
question3 = toQuestion('What is 2+2', '1', '7', '4', '10', '4');
question4 = toQuestion('What is 2+2', '1', '7', '4', '10', '4');

masterQuestions = [];
masterQuestions.push(question1);
masterQuestions.push(question2);
masterQuestions.push(question3);
masterQuestions.push(question4);
