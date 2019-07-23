var breakfasttime = 7;
var noon = 12;
var codetime = 12;
var gymtime = codetime + 2;
var flextime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "tbn0.gstatic.com/images?q=tbn:ANd9GcQs3jhJCS9nisT77T9g5GgKAKpAc-JISFRD_Z9ul-W7yI-RkzotQQ";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('RiseImage');
  
  if (time == flextime)
  {
    image = "https://i.pinimg.com/originals/48/0e/bc/480ebc56b3ef355b3b84e42e00a3071a.jpg";
    messageText = "Squeeeeze!";
  }
  else if (time == breakfasttime)
  {
    image = "https://www.weightlossresources.co.uk/pimg/wlr/e/egg-bacon-with-toast-article.jpg";
    messageText = "Eat!";
  }
  else if (time == codetime)
  {
    image = "https://www.njea.org/wp-content/uploads/2014/10/Coding.jpg";
    messageText = "Code!";
  }
  else if (time == gymtime)
  {
    image = "https://chuzefitness.com/wp-content/uploads/Clean_gym.jpg";
    messageText = "Gains!";
  }
  else if (time < noon)
  {
    image = "https://ssl.quiksilver.com/static/QS/default/category-assets/marketing-landing/landing/build/img/surf/tiles/surf_featured_1.jpg";
    messageText = "The Day is Young!";
  }
  else if (time >= evening)
  {
    image = "https://i0.wp.com/luketyburski.com/wp-content/uploads/2017/10/Be-Consistent-Achieve.jpg?fit=650%2C433&ssl=1";
    messageText = "Consistency!";
  }
  else
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sunset_2007-1.jpg/800px-Sunset_2007-1.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  RiseImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("flexTimeButton");

var partyEvent = function()
{
    if (flextime < 0) 
    {
        flextime = new Date().getHours();
        flexTimeButton.innerText = "Exhale!";
        flexTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        flextime = -1;
        flexTimeButton.innerText = "Flex!";
        flexTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var breakfastTimeSelector =  document.getElementById("breakfastTimeSelector");

var wakeUpEvent = function()
{
    breakfasttime = breakfastTimeSelector.value;
};

breakfastTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var codeTimeSelector =  document.getElementById("codeTimeSelector");

var lunchEvent = function()
{
    codetime = codeTimeSelector.value;
};

codeTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var gumTimeSelector =  document.getElementById("gymTimeSelector");

var napEvent = function()
{
    gymtime = gymTimeSelector.value;
};

gymTimeSelector.addEventListener("change", napEvent);