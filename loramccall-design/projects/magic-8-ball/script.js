$(document).ready(function(){
var magic8List = {};

magic8List.Answers = ["You will succeed in your efforts.", "More will be revealed", "Beware of strange sounds", "You will fail miserably","A sudden craving for anchovies will surprise you", "A friend in need will contact you","Be aware of men with pinkie rings", "Pray for guidance and you will have it"];



magic8List.askQuestion = function() {
var randomNumber = Math.random();
var randomNumberArray = randomNumber * this.Answers.length;
var randomIndex = Math.floor(randomNumberArray);
var randomAnswer = this.Answers[randomIndex];
$("#answer").text(randomAnswer);
};
magic8List.askQuestion();


var onClick = function() {
  $("#answer").hide();
  setTimeout(
       function() {
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

var popQuestion = prompt("Ask a yes/no question");
         $("#answer").fadeIn(6000);
$("#8ball").effect( "shake" );}, 600);


};

$("#questionButton").click(onClick);

$("#answer").hide();

});
