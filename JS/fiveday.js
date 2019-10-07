const apiKey = "8526085382366075361f5d8780b8ab00";
const city = "London"/*document.getElementById("input")*/;

//Get the weekday
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday"

var one = weekday[d.getDay()];
document.getElementById("dayOne").innerHTML = one;

var two = weekday [d.getDay()+1];
document.getElementById("dayTwo").innerHTML = two;

var three = weekday [d.getDay()+2];
document.getElementById("dayThree").innerHTML = three;

var four = weekday [d.getDay()+3];
document.getElementById("dayFour").innerHTML = four;

var five = weekday [d.getDay()+4];
document.getElementById("dayFive").innerHTML = five;





document.getElementById("search").addEventListener("click",displayWeather());

async function getWeather(){
const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}&unit=metrics`)
const myJson = await response.json();
console.log(JSON.stringify(myJson));

var descriptionOne = weather[0].description;
var JSONdescription = JSON.stringify(descriptionOne);

document.getElementById("Onedescription").innerHTML= JSONdescription;
console.log(JSONdescription);
}

/*function getWeather(){
fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}&unit=metrics`)

.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
})
var cityDisplay = city.name;
document.getElementById("city").innerHTML= cityDisplay;
    
var descriptionOne = weather[0].description;
document.getElementById("Onedescription").innerHTML= descriptionOne;
console.log(descriptionOne);
}*/


function displayWeather(){
 /* let jsonObject = JSON.parse(response);
  city.innerHTML = jsonObject.name;*/



}

window.onload = getWeather();

