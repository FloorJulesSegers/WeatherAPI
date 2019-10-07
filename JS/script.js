const apiKey = "8526085382366075361f5d8780b8ab00";
const cityName = "London"/*document.getElementById("input")*/;

const input = document.getElementById("findCity");
const btn = document.getElementById("search");
const city = document.getElementById("city");

btn.addEventListener("click", onclick);

function onclick() {
	getWeather(input.value);
  }

function getWeather(){
	axios
	.get (`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=${apiKey}&unit=metrics`)
	.then(function(response) {
		let responseData = response.data;
		//name
		city.innerText = responseData.name;
}

getWeather();