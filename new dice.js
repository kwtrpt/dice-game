"use strict"

function startGame () {
	var playerDiceChoice=prompt("First person to get 50 points wins. You have to use each die one time before you can roll again.  Choose your which dice to roll. 1. 4d6, 2. 6d6, 3.8d6, 4. 10d6, 5. 12d 6. 20d6");
	return playerDiceChoice;
}

function removePlayerDice (playerDiceChoice) {
	var playerDiceList= [("1"),("2"),("3"),("4"),("5"),("6")];	
		for (var i=0; i<playerDiceList.length; i++) {
			if (i==playerDiceChoice) {
				 var diceToBePushed=playerDiceList.splice(i-1,1);
				return playerDiceList;
			}
		else {}
		}
}

function playerTurn (playerDiceChoice) {
	var playerDiceRoll;
	switch (playerDiceChoice) {
		case "1":
			playerDiceRoll=rollDice(4);
			break;
		case "2":
			playerDiceRoll=rollDice(6);	
			break;
		case "3":
			playerDiceRoll=rollDice(8);
			break;
		case "4":
			playerDiceRoll=rollDice(10);
			break;
		case "5":
			playerDiceRoll=rollDice(12);
			break;
		case "6":
			playerDiceRoll=rollDice(20);
			break;
	} 

	return playerDiceRoll;
}

function computerStart () {
	var computerDiceChoice=(Math.floor(Math.random()*(6-1))+1).toString();
	return computerDiceChoice;
}

function computerTurn (computerDiceChoice) {
	
	var computerDiceRoll;
	switch (computerDiceChoice) {
		case "1":
			computerDiceRoll=rollDice(4);
			break;
		case "2":
			computerDiceRoll=rollDice(6);
			break;	
		case "3":
			computerDiceRoll=rollDice(8);
			break;
		case "4":
			computerDiceRoll=rollDice(10);
			break;
		case "5":
			computerDiceRoll=rollDice(12);
			break;
		case "6":
			computerDiceRoll=rollDice(20);
			break;
	} 

	return computerDiceRoll;
}

function removeComputerDice (computerDiceChoice) {
	var computerDiceList= ["1","2","3","4","5","6"];
		for (var i=0; i<computerDiceList.length; i++) {
			if (i==computerDiceChoice) {
				var diceToBePushed=computerDiceList.splice(i-1,1);
				return computerDiceList;
			}
		else {}
		}
}

function compareRoll (playerTurn, computerTurn) {
	if (playerTurn>=50 && computerTurn >= 50) {
		if (playerTurn>computerTurn) {
			alert("Player wins!");
			return false;
		}
		else {
			alert("Computer wins!");
			return false;
		}
	}
	else if(playerTurn>=50){
		alert("Player wins!");
		return false;
	}
	else if(computerTurn>=50){
		alert("Computer wins!");
			return false;
	}

	else {
		return true;
	}
}

function addPlayerValues (playerTurn, userTotalScore) {
		userTotalScore+=playerTurn;
		return userTotalScore;
}

function addCompValues (computerTurn, compTotalScore) {
		compTotalScore+=computerTurn;
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
		var getUserChoice=playerTurn(userInitialChoice);
		var getInitialComputerChoice=computerStart();
		var getPlayerDiceList=removePlayerDice(userInitialChoice);
		var getComputerDiceList=removeComputerDice(getInitialComputerChoice);
		userTotalScore=addPlayerValues(getUserChoice, userTotalScore);
		compTotalScore=addCompValues(getInitialComputerChoice, compTotalScore);
		
		console.log("Player score: " + userTotalScore);
		console.log("Computer score: " + compTotalScore);
		getCompareRoll=compareRoll(userTotalScore,compTotalScore);
	}
}

