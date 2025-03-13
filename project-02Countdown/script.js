const startButton = document.getElementById("startButton")
const timeInput = document.getElementById("timeInput")
const countdownDisplay = document.getElementById("countDownDisplay")
// These are returned as objects

function startTimer() {
    let valueInSec = parseInt(timeInput.value);
    // NaN means not a number

    if (isNaN(valueInSec)) {
        // this will render the i tag and it's text as italic
        // countdownDisplay.innerHTML = "<i>Please enter valid number<i/>"
        
        countdownDisplay.innerText = "Please enter valid number"
        return;
    }
    
    if (valueInSec < 0) {
        countdownDisplay.innerText = "Please enter valid number"
        return;
    }

    const timer = setInterval(function() {
        console.log("Timer ke andar")
        valueInSec--;
        if (valueInSec >= 0) {
            countdownDisplay.innerText = `Time remaining: ${valueInSec} seconds`;
        
        } else {
            countdownDisplay.innerText = `Time's up!!`
            clearInterval(timer)
        }
        console.log(timer)
        
    }, 1000);

    console.log("timer se bhar")
    // ab iska simple sa matlab yeh hua ki timer mera asyc call hai..
    // control phele timer se bhar aaya tha aur phir uske baad woh andar gya tha
    


    // console.log(typeof timeInput) // object
    // console.log(timeInput.value) // number
    // console.log(typeof timeInput.value) // string
    // // input wale me value use kr sakte hain
}

startButton.addEventListener('click', startTimer)