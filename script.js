let answerOfQust1 = "python"
let answerOfQust2 = "python, javascript";
let answerOfQust3 = "back-end"
let answerOfQust4 = "1 year"
let count = 0


document.querySelector(".checkBttn").onclick = function() {
    document.querySelector(".checkBttn").disabled = true;
    let userInput1 = document.querySelector(".qustInput1").value;
    if (userInput1 === answerOfQust1) {
        count += 1
        console.log("CorrectAnsw1")
        let qustn1 = document.querySelector(".qust1");
        qustn1.style.color = "green";
    }
    let userInput2 = document.querySelector(".qustInput2").value;
    if (userInput2 === answerOfQust2) {
        count += 1
        console.log("CorrectAnsw2")
        let qustn2 = document.querySelector(".qust2");
        qustn2.style.color = "green";
    }
    let userInput3 = document.querySelector(".qustInput3").value;
    if (userInput3 === answerOfQust3) {
        count += 1
        console.log("CorrectAnsw3")
        let qustn3 = document.querySelector(".qust3");
        qustn3.style.color = "green";
    }
    let userInput4 = document.querySelector(".qustInput4").value;
    if (userInput4 === answerOfQust4) {
        count += 1
        console.log("CorrectAnsw4")
        let qustn4 = document.querySelector(".qust4");
        qustn4.style.color = "green";
    }
    if (count === 4) {
        alert("You have all the answers correct")
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