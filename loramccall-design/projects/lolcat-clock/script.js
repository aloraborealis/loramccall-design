var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;
var updateClock = function()
{
var lolcatJS = document.getElementById('lolcat');
var timeEventJS
=document.getElementById("timeEvent");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
var messageText;

if (time == partyTime){
    image ="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
    image="https://images.pexels.com/photos/96428/pexels-photo-96428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350";
    messageText = "IZ NAP TIME…";
} else if (time == lunchTime) {
    image ="https://images.unsplash.com/photo-1517330156738-0b67722f3751?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ae2ea69b4d585ebbb32925a8e619d633&auto=format&fit=crop&w=1950&q=80";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeUpTime) {
	image ="https://images.pexels.com/photos/1022158/pexels-photo-1022158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350";
  messageText = "IZ WAKE UP SLEEPYHEDZ!!";
} else if (time < noon) {
	image = "https://comments.fjcdn.com/pictures/Cat+working+on+his+bachelors_3090e8_6175486.jpg";
    messageText = "Good morning!";
} else if (time > evening) {
	image = "https://images.pexels.com/photos/137049/pexels-photo-137049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    messageText = "Good Evening!";
} else {
	image ="https://images.pexels.com/photos/17767/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    messageText = "Good afternoon!";
}

timeEventJS.innerText = messageText;
lolcatJS.src = image;

  showCurrentTime();};

var showCurrentTime = function()
{var clock = document.getElementById('clock');
 var currentTime = new Date();
 var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
     // Set hours
    if (hours >= noon)
    { meridian = "PM";}
    if (hours > noon)
    {hours = hours - 12; }
     // Set Minutes
    if (minutes < 10)
    {minutes = "0" + minutes}
     // Set Seconds
    if (seconds < 10)
    {seconds = "0" + seconds;}

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;};
  updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);

var partyTimeButton =  document.getElementById("partyTimeButton");
  var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");

 var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  partyTimeButton.style.backgroundColor = "#0A8DAB";
	partyTimeButton.innerText = "Party Over";

   }else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.style.backgroundColor = "#222";
	  partyTimeButton.innerText = "PARTY TIME!";}};

var wakeUpEvent = function()
{wakeUpTime = wakeUpTimeSelector.value;};

var napEvent = function()
{napTime = napTimeSelector.value;};

var lunchEvent = function()
{lunchTime =lunchTimeSelector.value;};

partyTimeButton.addEventListener('click', partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
