const randomNumber = Math.floor(Math.random() * 12) + 1;
console.log(randomNumber);

function randomNum(){
    let guessId = document.getElementsByTagName("button");
    let feedBack = document.getElementById("text")
    let myGuess = guessId.value;
    
    if(myGuess === randomNumber){
        feedBack.textContent = "You got it right!"
    }else if(myGuess > randomNumber){
        feedBack.textContent = "Your guess was " + myGuess + ". That's too high. Try Again!"
    }else if(myGuess < randomNumber){
        feedBack.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!"
    }

    guessId.addEventListener('click',randomNum())

}