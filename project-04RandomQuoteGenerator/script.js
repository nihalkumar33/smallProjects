const quotes = [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q6",
    "Q7",
]

const generateButton = document.getElementById("generateButton")
const quote =  document.getElementById("quote")

generateButton.addEventListener('click', () => { generateQuote() })
// Note this code was not working without calling generateQuote() 
// in a callback

function generateQuote() {
    console.log("reached here")
    const randomIndex = Math.floor(Math.random() * quotes.length)
    console.log(randomIndex)
    
    const quoteF = quotes[randomIndex];
    console.log(quoteF)

    quote.innerText = quoteF;
    
}