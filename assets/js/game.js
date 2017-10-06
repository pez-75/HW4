var ramdom_result;
var lost;
var win;



$(document).ready(function() {
  
  var wins = 0;
  var losses = 0;
  var currentScore = 0;
  var counter = 0;
  var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
  var numberOptions = [4, 5, 6, 7];
 
  $("#number-to-guess").text(targetNumber);

  $("#cryone").attr("data-crystalvalue", numberOptions[0]);
  $("#crytwo").attr("data-crystalvalue", numberOptions[1]);
  $("#crythree").attr("data-crystalvalue", numberOptions[2]);
  $("#cryfour").attr("data-crystalvalue", numberOptions[3]);
  
  $("img").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
   
    if (counter === targetNumber) {
      wins++;
      reset();
    } else if (counter >= targetNumber) {
      losses++;
      reset();
    }
  
    var html = "<p><h3>Wins: " + wins + 
    "</h3></p>" + "<p><h3>Losses: " + losses + "</h3></p>";
    document.querySelector("#score").innerHTML = html;

    var html = "<p><h3>Current Score: " + counter + "</h3></p>";
    document.querySelector("#current-score").innerHTML = html;
  });
 
  function reset() {
    counter = 0;
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $("#number-to-guess").text(targetNumber);
    numberOptions = Array.from({
      length: 4
    }, () => Math.floor(Math.random() * (12- 1) + 1))
    $("#one").attr("data-crystalvalue", numberOptions[0]);
    $("#two").attr("data-crystalvalue", numberOptions[1]);
    $("#three").attr("data-crystalvalue", numberOptions[2]);
    $("#four").attr("data-crystalvalue", numberOptions[3]);
    console.log("array2:" + numberOptions)
  }
  $(".instruct").click(function() {
    $("#toggle").toggle("blind");
  });
});