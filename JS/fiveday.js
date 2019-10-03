const apiKey = "8526085382366075361f5d8780b8ab00";
const city = "London"/*document.getElementById("input")*/;
const dayOutput = document.getElementById("days");


let d = new Date(); 
let day = d.getDay(); 
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let firstBox = document.getElementById('dayOne');
let secondBox = document.getElementById('dayTwo'); 
let thirdBox = document.getElementById('dayThree'); 
let fourthBox = document.getElementById('dayFour'); 
let fifthBox = document.getElementById('dayFive');




//headerBox.innerHTML= 
/*firstBox.innerHTML= days[day+0]; 
secondBox.innerHTML= days[day+1]
thirdBox.innerHTML= days[day+2]
fourthBox.innerHTML= days[day+3]
fifthBox.innerHTML= days[day+3]*/
console.log(days); 

document.getElementById("search").addEventListener("click",getWeather());

function getWeather(){
fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}&unit=metrics`)

.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
})


}

