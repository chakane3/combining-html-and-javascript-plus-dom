const mirrorString = () => {
    const userInput = document.getElementById("mirror-input")
    const mirrorOutput = document.getElementById("mirror-output")
    mirrorOutput.textContent = `${userInput.value}`
}

const makeUppercase = () => {
    const userInput = document.getElementById("uppercaser-input")
    const uppercaseOutput = document.getElementById("uppercaser-output")
    uppercaseOutput.textContent = `${userInput.value.toUpperCase()}`
}

const palindromeCheck = () => {
    const userInput = document.getElementById("palindrome-input")
    const palindromOutput = document.getElementById("palindrome-output")
    const reversedString = userInput.value.split("").reverse().join("")
    
    // check if palindrome
    if(reversedString === userInput.value) {
        palindromOutput.textContent = `It is true that ${userInput.value} is a palindrome`
    } else {
        palindromOutput.textContent = `It is false that ${userInput.value} is a palindrome`
    }
}

const evenCheck = () => {
    const userInput = document.getElementById("even-checker-input")
    const evenCheckOutput = document.getElementById("even-checker-output")

    if(Number(userInput.value) % 2 === 0) {
        evenCheckOutput.textContent = `It is true that ${userInput.textContent} is even`
    } else {
        evenCheckOutput.textContent = `It is false that ${userInput.textContent} is even`
    }
}

const doubleNumber = () => {
    const userInput = document.getElementById("doubler-input")
    const doubleNumOutput = document.getElementById("doubler-output")
    doubleNumOutput.textContent = `${userInput.value} doubled is ${Number(userInput.value)*2}`

}