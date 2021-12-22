// create select' list

// html = "";
// const cities = {
//   23232: "london",
//   33456: "minsk",
//   //и так далее.
// };
// for (var key in obj) {
//   html += "<option value=" + key + ">" + obj[key] + "</option>";
// }
// document.getElementById("cities").innerHTML = html;

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
  document.querySelector('.temperature-show').innerHTML = temperature;
  document.querySelector('.weather-out').innerHTML = `${humidity}<br>${pressure}`;

}

getWeather();
document.querySelector('#cities').onchange = getWeather;