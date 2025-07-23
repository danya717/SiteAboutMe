let answerQust1 = "Python"
let answerQust2 = "Python, JavaScript"


document.querySelector(".checkBttn").onclick = function() {
    let userInput1 = document.querySelector(".qustInput1")
    if (userInput1 = answerQust1) {
        console.log("HI")
    }
    let userInput2 = document.querySelector(".qustInput2")
    if (userInput2 = answerQust2) {
        console.log("hi")
    }
    if (userInput1 = answerQust1) {
        if (userInput2 = answerQust2) {
            console.log("2 correct")
        }
    }
}