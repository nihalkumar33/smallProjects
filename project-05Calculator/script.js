// dono input se unka value nikalna hai 
// buttons pr eventlistner lagana hai aur woh log jake calculate ko call krenge


// Buttons
const addition = document.getElementById("addition")
const multiply = document.getElementById("multiply")
const substract = document.getElementById("substract")
const divide = document.getElementById("divide")

// ab inhi buttons ke click pr mujhe input fields se value nikalna hai

addition.addEventListener("click", () => (calculate("add")))
multiply.addEventListener("click", () => (calculate("mul")))
substract.addEventListener("click", () => (calculate("subs")))
divide.addEventListener("click", () => (calculate("div")))

// Now the calculate function
function calculate(operation) {
    // take inputs from input
    const num1 = takeInput("firstNum")
    const num2 = takeInput("secondNum")

    let ans;

    if (operation === "add") {
        ans = num1 + num2;

    } else if (operation === "mul") {
        ans = num1 * num2;

    } else if (operation === "subs") {
        ans = num1 - num2;

    } else if (operation === "div") {
        try {
            ans = num1 / num2;

        } catch(error) {
            console.log("The error: ", error);
        }

    }

    updateResult(ans);
}

// Now to take input
function takeInput(ID) {
    // Inputs
    const inputFromForm = document.getElementById(ID)  
    
    const input = Number(inputFromForm.value);
    // console.log(typeof(input))
    // console.log(input)
    
    return input;
}

function updateResult(ans) {
    const result = document.getElementById("result")
    result.innerText = `Result: ${ans}`
}







// const firstOperand = firstNum.value;
// console.log(firstOperand) 
// console.log("Number")





