//
// достать текст из выбраного оптион из селекта:
// let index = ваш_select.selectedIndex;
// let text = ваш_select.options[index].text
//

const param = {
  "url": "https://api.openweathermap.org/data/2.5/",
  "appid": "f15075293acdac24de40dc11096ac41d",
};

function getWeather() {
  const cityId = document.querySelector('#cities').value;
  fetch(`${param.url}weather?id=${cityId}&APPID=${param.appid}&units=metric`)
    .then(weather => {
      return weather.json();
    }).then(showWeather);
}

function showWeather(data) {
  console.log(data);
  const temperature = `🌡 ${Math.round(data.main.temp)}&deg;`;
  const humidity = `humidity is ${data.main.humidity}&#37;`;
  const pressure = `pressure is ${data.main.pressure}mbar`;
  const iconId = data.weather[0].icon;
  console.log('iconId= ', iconId);

  document.querySelector('.city-choise-show').innerHTML = `The weather in ${data.name}:`;
  document.querySelector('.temperature-show').innerHTML = temperature;
  document.querySelector('.icon-show').innerHTML = `<img src="http://openweathermap.org/img/wn/${iconId}@2x.png" alt="weather icon">`;
  document.querySelector('.weather-description').textContent = `${data.weather[0].description}`;
  document.querySelector('.weather-out').innerHTML = `${humidity}<br>${pressure}`;

}

getWeather();
document.querySelector('#cities').onchange = getWeather;