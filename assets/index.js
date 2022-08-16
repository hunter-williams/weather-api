var weatherapiKey = 'fd159012c9dc8e373611cb59c10df8ea'
var weatherapirootURL = 'https://api.openweathermap.org'
var searchInput = document.querySelector('input')
var submitButton = document.querySelector('#button')

// var iconURL = 'http://openweathermap.org/img/wn/10d@2x.png'

function getCord (search) {
    //var apiURL = `${weatherapirootURL}/data/2.5/weather?lat=35&lon=139&appid=${weatherapiKey}`
    var apiURL = `${weatherapirootURL}/data/2.5/weather?q=${search}&appid=${weatherapiKey}`

    fetch (apiURL)
    .then(function(response){
            //console.log('response',response.json())
        return response.json()}) 
    .then(function(data){
        if (data)
            {console.log('data',data)
            console.log('City',data.name)
            console.log('Temp',data.main.temp)
            console.log('Humidity',data.main.humidity)
            console.log('Wind',data.wind.speed)
            console.log('icon',data.weather[0].icon)
            console.log('UV',data.weather.uvi)
            console.log('CC',data.weather[0].main)
            console.log('lat/lon',data.coord.lat,data.coord.lon)
            console.log('',)
            getForcast(data.coord.lat,data.coord.lon)
        }})
    .catch(function(error)
        {console.log('e',error)})
    
    

}

function getForcast (lat,lon){
    var apiURL = `${weatherapirootURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherapiKey}`
    fetch (apiURL)
    .then(function(response){
        return response.json()}) 
    .then(function(data)
        {if (data){
            console.log('datea',data)
            renderForcast(data)
        }})
    .catch(function(error)
        {console.log('e',error)})
}

function searchSubmit (){
    //e.preventDefault()
    var search = searchInput.value.trim()
    getCord(search)
}

function renderForcast (data){
    var div = document.querySelector('div')
    for (i = 0; i < 5; i++){
        createCard(data.list[i])
    }

}
function createCard(forecast){
    console.log('wind',forecast.wind.speed)
    console.log('humidity',forecast.main.humidity)
    console.log('temp',forecast.main.temp)
    console.log('main',forecast.weather[0].main)
    var icon = forecast.weather[0].icon
    var iconURL = `http://openweathermap.org/img/wn/${icon}.png`
    document.querySelector('img').setAttribute('src',iconURL)
}