const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '78f3bcad8amsh0c3e43185ab72adp17b54fjsn352b66fc5bd9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const weathercity = (city) => {
	cityname.innerHTML=city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			sunrise.innerHTML=response.sunrise
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			wind_degrees.innerHTML = response.wind_degrees
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault();
	weathercity(city.value)
})