//Loading up our images
const rockImg = new Image();
rockImg.src = 'rock.png';

const paperImg = new Image();
paperImg.src = 'paper.png';

const scissorsImg = new Image();
scissorsImg.src = 'scissors.png';

//Putting our images in an array
const images = [rockImg, paperImg, scissorsImg];


//function to generate the computer's choice
function makeTheComputersChoice() {
  //create a function that returns a random number between 1-3
   let temp = Math.floor((Math.random()*3)+1);
   return temp;
}
// log the computer's choice to the console
// console.log(`COMPUTER CHOICE: ${makeTheComputersChoice()}`);

// function to select and load the user's choice
function checkResult(userChoice){

// store the computer's choice in a variable
let compChoice = makeTheComputersChoice();

  // evaluate and compare the user's choice to computer's choice
  //the User Wins
  if((userChoice == 1 && compChoice == 3) || (userChoice == 2 && compChoice == 1) || (userChoice == 3 && compChoice == 2)) {
   $(".result").text("You Win!");
  }

  //the user Loses against the computer
  else if((userChoice == 1 && compChoice == 2) || (userChoice == 2 && compChoice == 3) || (userChoice == 3 && compChoice == 1)){
    $(".result").text("You Lose!");
  }
  //Tie
  else{
    $(".result").text("Tie!");
  }
  
//let’s test it out 
  console.log(`Did you win?`);
  console.log(`Remember that ROCK=1, PAPER=2, SCISSOR=3\n`);
  console.log(`USER CHOICE: ${userChoice}\nCOMPUTER CHOICE: ${compChoice}\n\n`);
   displayChoices(userChoice, compChoice);
}



function displayChoices(userChoice,computerChoice){
 $('#playerChoice').attr('src',((images[userChoice - 1]).src));
  $('#playerChoice').addClass('img-fluid');

  $('#computerChoice').attr('src',((images[computerChoice - 1]).src));
  $('#computerChoice').addClass('img-fluid');
}









