// The Ultimite Soccer Trivia

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let input1 = document.getElementById("input1").value.toLowerCase();
  let input2 = document.getElementById("input2").value.toLowerCase();
  let input3 = document.getElementById("input3").value.toLowerCase();
  let input4 = document.getElementById("input4").value.toLowerCase();
  let totalcorrect = 0;
  let totalquestions = 4;

  // Marking The Quiz
  if (input1 === "11") {
    document.getElementById("result1").innerHTML = "Correct";
    totalcorrect++;
  } else {
    document.getElementById("result1").innerHTML = "Wrong";
  }

  if (input2 === "90") {
    document.getElementById("result2").innerHTML = "Correct";
    totalcorrect++;
  } else {
    document.getElementById("result2").innerHTML = "Wrong";
  }

  if (input3 === "Argentina" || input3 === "argentina") {
    document.getElementById("result3").innerHTML = "Correct";
    totalcorrect++;
  } else {
    document.getElementById("result3").innerHTML = "Wrong";
  }

  if (
    input4 === "Lionel Messi" ||
    input4 === "Messi" ||
    input4 === "lionel messi" ||
    input4 === "messi"
  ) {
    document.getElementById("result4").innerHTML = "Correct";
    totalcorrect++;
  } else {
    document.getElementById("result4").innerHTML = "Wrong";
  }

  // Calculations Output
  document.getElementById("output").innerHTML = totalcorrect;

  let percent1 = (totalcorrect / totalquestions) * 100;
  document.getElementById("output2").innerHTML = percent1;

  if (totalcorrect === 4) {
    document.getElementById("note").innerHTML = "Legend!!!";
  }
  if (totalcorrect === 3) {
    document.getElementById("note").innerHTML = "Keep Up The Amazing Work:))";
  }
  if (totalcorrect === 2) {
    document.getElementById("note").innerHTML = "Good Work!";
  }
  if (totalcorrect === 1) {
    document.getElementById("note").innerHTML = "Maybe Next Time...";
  }
  if (totalcorrect === 0) {
    document.getElementById("note").innerHTML = "You Need Some Review";
  }
}
