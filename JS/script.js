
const apiKey = "8526085382366075361f5d8780b8ab00";
const cityName = "London"
//document.getElementById("findCity");
/*document.getElementById("input")*/;

const input = document.getElementById("findCity");
const btn = document.getElementById("search");
const city = document.getElementById("city");

var current= new Date()
var day_night=current.getHours()
if (day_night<=12)
    document.write("<img src='./IMG/day.jpg'>")
else
    document.write("<img src='./IMG/night.jpg'>")

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


btn.addEventListener("click", onclick);

function onclick() {
	getWeather(input.value);
  }


// Make a request for a user with a given ID
function getWeather(){
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

	//Temperature min
	firstMinTemp.innerText = 'Min temp: ' + responseData.list[0].main.temp_min + ' °C';
	secondMinTemp.innerText = 'Min temp: ' + responseData.list[8].main.temp_min + ' °C';
	thirdMinTemp.innerText ='Min temp: ' +  responseData.list[16].main.temp_min + ' °C';
	fourthMinTemp.innerText ='Min temp: ' +  responseData.list[24].main.temp_min + ' °C';
	fifthMinTemp.innerText ='Min temp: ' +  responseData.list[32].main.temp_min + ' °C';

	//Temperature max
	firstMaxTemp.innerText = 'Max temp: ' + responseData.list[0].main.temp_max + ' °C';
	secondMaxTemp.innerText = 'Max temp: ' +  responseData.list[8].main.temp_max + ' °C';
	thirdMaxTemp.innerText = 'Max temp: ' +  responseData.list[16].main.temp_max + ' °C';
	fourthMaxTemp.innerText = 'Max temp: ' +  responseData.list[24].main.temp_max + ' °C';
	fifthMaxTemp.innerText = 'Max temp: ' +  responseData.list[32].main.temp_max + ' °C';

	//Description
	firstDescription.innerText = responseData.list[0].weather[0].description;
	secondDescription.innerText = responseData.list[8].weather[0].description;
	thirdDescription.innerText = responseData.list[16].weather[0].description;
	fourthDescription.innerText = responseData.list[24].weather[0].description;
	fifthDescription.innerText = responseData.list[32].weather[0].description;

	firstMinTemp.innerText = responseData.list[0].main.temp_min;

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

