"use strict"

function startGame () {
	var userChoice=prompt("First person to get 50 points wins. You have to use each die one time before you can roll again.  Choose your which dice to roll. 1. 4d6, 2. 6d6, 3.8d6, 4. 10d6, 5. 12d 6. 20d6");
	return userChoice;
}

function userChoice (userChoice) {
	var userDie;
	switch (userChoice) {
		case "1":
			userDie=rollDice(4);
			break;
		case "2":
			userDie=rollDice(6);	
			break;
		case "3":
			userDie=rollDice(8);
			break;
		case "4":
			userDie=rollDice(10);
			break;
		case "5":
			userDie=rollDice(12);
			break;
		case "6":
			userDie=rollDice(20);
			break;
	} 

	return userDie;
}

function computerChoice () {
	var getComputerChoice=(Math.floor(Math.random()*(6-1))+1).toString();
	var compDie;
	switch (getComputerChoice) {
		case "1":
			compDie=rollDice(4);
			break;
		case "2":
			compDie=rollDice(6);
			break;	
		case "3":
			compDie=rollDice(8);
			break;
		case "4":
			compDie=rollDice(10);
			break;
		case "5":
			compDie=rollDice(12);
			break;
		case "6":
			compDie=rollDice(20);
			break;
	} 

	return compDie;
}

function compareRoll (userChoice, compChoice) {
	if (userChoice>=50 && compChoice >= 50) {
		if (userChoice>compChoice) {
			alert("Player wins!");
			return false;
		}
		else {
			alert("Computer wins!");
			return false;
		}
	}
	else if(userChoice>=50){
		alert("Player wins!");
		return false;
	}
	else if(compChoice>=50){
		alert("Computer wins!");
			return false;
	}

	else {
		return true;
	}
}

function addPlayerValues (userChoice, userTotalScore) {
		userTotalScore+=userChoice;
		return userTotalScore;
}

function addCompValues (compChoice, compTotalScore) {
		compTotalScore+=compChoice;
		return compTotalScore;
}

function rollDice (roll) {
	
var die;
switch  (roll) {
	case 4:
		die = 1+Math.floor(Math.random()*4);
		console.log("Your roll is " +die);
		break;

	case 6:
		die = 1+Math.floor(Math.random()*6);
		break;

	case 8:
		die = 1+Math.floor(Math.random()*8);
		break;
	case 10:
		die = 1+Math.floor(Math.random()*10);
		break;
	case 12:
		die = 1+Math.floor(Math.random()*12);
		break;
	case 20:
		die = 1+Math.floor(Math.random()*20);
		break;
	}

return die;

}

function runGame () {

		var userTotalScore =0;
		var compTotalScore =0;
		var getCompareRoll=true;
		while (getCompareRoll) {
		var userInitialChoice=startGame();
		var getUserChoice=userChoice(userInitialChoice);
		var getComputerChoice=computerChoice();
		userTotalScore=addPlayerValues(getUserChoice, userTotalScore);
		compTotalScore=addCompValues(getComputerChoice, compTotalScore);
		console.log("User score: " + userTotalScore);
		console.log("Comp score: " + compTotalScore);
		getCompareRoll=compareRoll(userTotalScore,compTotalScore);
	}
}
//runGame ();
