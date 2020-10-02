let output = document.querySelector('weather')
let yourApi = ''; // put in your own API
let weatherLocation = document.querySelector('.weatherLocation')
let weatherDescription = document.querySelector('.weatherDescription p')
let weatherIcon = document.querySelector('.weatherIcon')
let weatherTemperature= document.querySelector('.weatherTemperature p')
let container = document.querySelector('.container')
let weather = document.querySelector('.weather')



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

            // got rid of the container div jsut below card. 
                .then(data => {
                 
                    let output3 = JSON.stringify(data)
                    localStorage.setItem('weather', JSON.stringify(data));

                    weather.innerHTML = ` 
                   

                  <div class="card " style="width: 18rem;">
                  <div class="card-header bg-primary over">Overview</div>
                  <div class="card-body">
                    <h5 class="card-title">${data.name} ${data.sys.country}</h5>
                    <p class="card-text">${data.weather[0].description}</p>
                    <p class="card-text">${emojis[data.weather[0].icon]}</p>
                    <p class="card-text"><p>${data.main.temp} °<p>C</p></p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
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









