const readline =require ("readline");
const r1=readline . createInterface({ 
    input:process.stdin,
    output:process .stdout
});
 
let secretnumber=Math.floor(Math.random()*10)+1;
let attempts=0;
console.log ("welcome to number guessing game!");
console.log("guess a number between 1 and 100");
function askGuess(){
    r1.question("enter your guess:",function (userguess){
 attempts++;
 userguess =Number(userguess);// guessnumber

 if (userguess==secretnumber){
    console.log("congratulations! you have guessed the correct number in " + attempts +"attempts");
    r1.close();

 }
 else if(userguess>secretnumber){
    console.log("too high!try again");
    askGuess();
 }
 else if(userguess <secretnumber){
    console.log("too low! try again");
    askGuess();
 }
 else{
    console.log("invalid number.please enter a valid number");
    askGuess();
 }
    });
}
askGuess();