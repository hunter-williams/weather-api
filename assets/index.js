var weatherapiKey = 'fd159012c9dc8e373611cb59c10df8ea'
var weatherapirootURL = 'https://api.openweathermap.org'
var searchInput = document.querySelector('input')
var submitButton = document.querySelector('#button')

function getCord (search) {
    //var apiURL = `${weatherapirootURL}/data/2.5/weather?lat=35&lon=139&appid=${weatherapiKey}`
    var apiURL = `${weatherapirootURL}/data/2.5/weather?q=${search}&appid=${weatherapiKey}`

    fetch (apiURL)
    .then(function(response)
        {
            //console.log('response',response.json())
        return response.json()}) 
    .then(function(data)
        {if (data)
            {console.log('data',data.weather)}})
    .catch(function(error)
        {console.log('e',error)})


}
console.log('button',submitButton)
// submitButton.addEventListener('click', ()=>{
//     searchSubmit()
// })

function searchSubmit (){
    //e.preventDefault()
    var search = searchInput.value.trim()
    getCord(search)
}