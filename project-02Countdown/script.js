const startButton = document.getElementById("startButton")
const timeInput = document.getElementById("timeInput")
const countdownDisplay = document.getElementById("countDownDisplay")
// These are returned as objects

function startTimer() {
    const valueInSec = parseInt(timeInput.value);
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

    setInterval()

    console.log(typeof timeInput) // object
    console.log(timeInput.value) // number
    console.log(typeof timeInput.value) // string
    // input wale me value use kr sakte hain
}

startButton.addEventListener('click', startTimer)