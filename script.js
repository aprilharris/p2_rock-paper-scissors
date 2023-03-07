
// RULES


// Scissors cuts paper.
// Paper covers rock.
// Rock crushes lizard.
// Lizard poisons Spock.
// Spock smashes scissors.
// Scissors decapitates lizard.
// Lizard eats paper.
// Paper disproves Spock.
// Spock vaporizes rock.
// Rock crushes scissors.


//Loading up our images
const rockImg = new Image();
rockImg.src = 'rock.png';

const paperImg = new Image();
paperImg.src = 'paper.png';

const scissorsImg = new Image();
scissorsImg.src = 'scissors.png';

//Putting our images in an array
const images = [rockImg, paperImg, scissorsImg];

function makeTheComputersChoice() {
  //create a function that returns a random number between 1-3
   let temp = Math.floor((Math.random()*3)+1);
   return temp;
}

console.log(makeTheComputersChoice());

function checkResult(userChoice){

let compChoice = makeTheComputersChoice();


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
  console.log(userChoice, compChoice);
   displayChoices(userChoice, compChoice);
}



function displayChoices(userChoice,computerChoice){
 $('#playerChoice').attr('src',((images[userChoice - 1]).src));

  $('#computerChoice').attr('src',((images[computerChoice - 1]).src));
}









