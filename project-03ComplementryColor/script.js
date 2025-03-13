const colorInput = document.getElementById("colorInput")
const colorCode = document.getElementById("colorCode")
const copyButton = document.getElementById("copyButton")
const complementaryContainer = document.getElementById("complementaryContainer")
const saveColorButton = document.getElementById("saveColorButton")
const favouratesContainer = document.getElementById("favourateContainer")


colorInput.addEventListener('input', () => {
    const selectedColor = colorInput.value;
    updateColorDisplay(selectedColor)
    showComplementaryColor(selectedColor)
})

function updateColorDisplay(color) {
    colorCode.textContent = color;
    colorCode.style.color = color;
}

function showComplementaryColor(color) {
    const complementaryColors = getComplementoryColor(color)
    complementaryContainer.innerHTML = ''; // clear previous 
    console.log(complementaryColors)

    complementaryColors.forEach((compColor) => {
        const colorBox = document.createElement("div")
        colorBox.style.backgroundColor = compColor;
        colorBox.style.height = '40px';
        colorBox.style.width = '40px';
        
        console.log(colorBox)
        complementaryContainer.appendChild(colorBox)
    })
}

function getComplementoryColor(color) {
    const base = parseInt(color.slice(1), 16) // removes #
    const complementaryColor = (0xFFFFFF ^ base).toString(16).padStart(6, '0')
    return [`#${complementaryColor}`]
}

// click to copy button

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(colorCode.textContent)
    .then(() => alert("Color Code Copied"))
    .catch(err => console.error("Failed to copy: ", err))
})

saveColorButton.addEventListener('click', () => {
    const color = colorCode.textContent
    addFavourateColor(color)
})

function addFavourateColor(color) {
    const colorBox = document.createElement("div")

    colorBox.style.backgroundColor = color
    colorBox.style.height = "40px"
    colorBox.style.width = "40px"
    colorBox.title = color;

    favouratesContainer.appendChild(colorBox)
}