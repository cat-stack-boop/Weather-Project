let output = document.querySelector('weather')
let yourApi = 'ec27abb97a35310899ce51667241b768'; // put in your own API
let weatherLocation = document.querySelector('.weatherLocation')
let weatherDescription = document.querySelector('.weatherDescription p')
let weatherIcon = document.querySelector('.weatherIcon')
let weatherTemperature= document.querySelector('.weatherTemperature p')
let container = document.querySelector('.container')
let weather = document.querySelector('.weather')
let weather2 = document.querySelector('.weather2')




BtnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    let searchValue = document.querySelector('#inputValue').value
       
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${yourApi}`)
        
                .then((response)=> {
                    if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else { 
                    alert('Thats not a real city mate');
                }
            })

            // got rid of the container div just below card. 
                .then(data => {
                 
                    let output3 = JSON.stringify(data)
                    localStorage.setItem('weather', JSON.stringify(data));
                    
                    weather.innerHTML = ` 
                   
                  <h4 class="text-center">Results For ${data.name}, ${data.sys.country} </h4>
                  <div class="card-deck text-center">
                     <div class="card" style="width: 18rem;">
                         <div class="card-header bg-primary over text-center">Overview</div>
                            <div class="card-body text-center">
                              <p class="card-text">${data.weather[0].description}</p>
                              <p class="card-text">${emojis[data.weather[0].icon]}</p>
                              <p class="card-text"><p>${data.main.temp}°C</p>
                            </div>
                         </div>
                         <div class="card" style="width: 18rem;">
                         <div class="card-header bg-primary over text-center">Temperature</div>
                            <div class="card-body text-center">
                              <p class="card-text">Humidity:\n${data.main.humidity}</p>
                              <p class="card-text">Feels like: ${data.main.feels_like}°C</p>
                              <p class="card-text">Pressure: ${data.main.pressure}</p>
                            </div>
                         </div>
                         <div class="card" style="width: 18rem;">
                         <div class="card-header bg-primary over text-center">Wind</div>
                            <div class="card-body text-center">
                              <p class="card-text">${data.wind.deg}°</p>
                              <p class="card-text"><p>${data.wind.speed}KPH</p>
                            </div>
                         </div>
                    </div>
                    </div>
                  </div>
                  `
                })               
    })

    const emojis = {
        '01d': '☀️',
        '02d': '⛅️',
        '03d': '☁️',
        '04d': '☁️',
        '09d': '🌧',
        '10d': '🌦',
        '11d': '⛈',
        '13d': '❄️',
        '50d': '💨',
        '01n': '☀️',
        '02n': '⛅️',
        '03n': '☁️',
        '04n': '☁️',
        '09n': '🌧',
        '10n': '🌦',
        '11n': '⛈',
        '13n': '❄️',
        '50n': '💨',
      };









