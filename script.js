let answerOfQust1 = "Python";
let answerOfQust2 = "Python, JavaScript";
let answerOfQust3 = "Back-end"
let answerOfQust4 = "1 year"
let count = 0

document.querySelector(".checkBttn").onclick = function() {
    alert("You didn't answer to all questions!")
    document.querySelector(".checkBttn").disabled = true;
    let userInput1 = document.querySelector(".qustInput1").value;
    if (userInput1 === answerOfQust1) {
        console.log("CorrectAnsw1")
    }
    let userInput2 = document.querySelector(".qustInput2").value;
    if (userInput2 === answerOfQust2) {
        console.log("CorrectAnsw2")
    }
    let userInput3 = document.querySelector(".qustInput3").value;
    if (userInput3 === answerOfQust3) {
        console.log("CorrectAnsw3")
    }
    let userInput4 = document.querySelector(".qustInput4").value;
    if (userInput4 === answerOfQust4) {
        console.log("CorrectAnsw4")
    }
    if (userInput1 === answerOfQust1) {
        if (userInput2 === answerOfQust2) {
            if (userInput3 === answerOfQust3) {
                if (userInput4 === answerOfQust4) {
//                    count += 1
                    alert("You have all answers correct")
                    console.log("4 are correct")
                }
            }
        }
    }
    if (userInput1 === answerOfQust1) {
        count += 1
    }
    if (userInput2 === answerOfQust2) {
        count += 1
    }
    if (userInput3 === answerOfQust3) {
        count += 1
    }
    if (userInput4 === answerOfQust4) {
        count += 1
    }
    if (count === 1) {
        alert("You have 1 correct");
    }
    if (count === 2) {
        alert("you have 2 correct");
    }
    if (count === 3) {
        alert("you have 3 correct");
    }
    if (count === 4) {
        alert("you have 4 correct");
    }
}