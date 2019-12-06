
const apiKey = "8526085382366075361f5d8780b8ab00";
const input = document.getElementById("findCity");
const btn = document.getElementById("search");
const city = document.getElementById("city");



var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


var one = weekday[d.getDay()];
document.getElementById("dayOne").innerHTML = one;
console.log(one)
var two = weekday[d.getDay()+1];
document.getElementById("dayTwo").innerHTML = two;

var three = weekday[d.getDay()-5];
document.getElementById("dayThree").innerHTML = three;

var four = weekday[d.getDay()-4];
document.getElementById("dayFour").innerHTML = four;

var five = weekday[d.getDay()-3];
document.getElementById("dayFive").innerHTML = five;
console.log(five)

btn.addEventListener("click", onclick);

function onclick() {
	getWeather(input.value);
  }


// Make a request for a user with a given ID
function getWeather(){
const cityName = document.getElementById("findCity").value;

axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=${apiKey}&unit=metrics`)
  .then(function (response) {

    // handle success
	console.log(response);
	let responseData = response.data;
	//name
	city.innerText = responseData.city.name;
	console.log(responseData);



	//Temperature
	firstTemp.innerText = responseData.list[0].main.temp + ' °C';
	secondTemp.innerText = responseData.list[8].main.temp + ' °C';
	thirdTemp.innerText = responseData.list[16].main.temp + ' °C';
	fourthTemp.innerText = responseData.list[24].main.temp + ' °C';
	fifthTemp.innerText = responseData.list[32].main.temp + ' °C';



	//Description
	firstDescription.innerText = responseData.list[0].weather[0].description;
	secondDescription.innerText = responseData.list[8].weather[0].description;
	thirdDescription.innerText = responseData.list[16].weather[0].description;
	fourthDescription.innerText = responseData.list[24].weather[0].description;
	fifthDescription.innerText = responseData.list[32].weather[0].description;


	//symbols
	firstSymb.innerHTML = responsedata.list[0].weather[0].icon;

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}


onclick();
getWeather();

