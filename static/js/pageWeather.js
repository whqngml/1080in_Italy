const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '7f59daeedf7035efe7544f4ec617e143';
// const API_KEY = '3aa3f27483a6d0c00cdcf947123163df';
const city = document.querySelector("#city"); //select 태그
let temp = document.querySelector("#temp");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let cloud = document.querySelector('#cloud');
const cityName = document.querySelector("#cityName"); // 도시 이름을 저장한 변수
const resultbtn = document.querySelector('#resultbtn');
const btnMax = document.querySelector(".btnMax");
const btnMin = document.querySelector(".btnMin");
const now = document.querySelector('.now');
const tempMaxMinName = document.querySelector(".tempMaxMinName");
let cityDay = document.querySelector(".cityDay");
let weatherImg = document.querySelector("#weatherImg > img");

//==========================================================

let clock = new Date();
clock.setHours(clock.getHours() - 7);
var time = clock;
var year = time.getFullYear();
var month = time.getMonth() + 1;
var date = time.getDate();
cityDay.innerText = `${year}년 ${month}월 ${date}일`;

//============================================================

$(function () {
  let strWidth = 350 + (window.outerWidth - window.innerWidth);
  let strHeight = 600 + (window.outerHeight - window.innerHeight);
  window.resizeTo(strWidth, strHeight);
})

uraxInfo('rome'); //urax의 정보를 가져온다. => 기본값으로 로마

resultbtn.addEventListener("click", apply);

function apply() { // 날씨 보기 버튼을 눌르면 실행.
  const cityValue = city.value; // city 변수의 value값을 cityValue에 대입.
  const name = `${cityValue}`;
  // console.log("cityValue: " + cityValue);
  // console.log("name : " + name);
  cityName.innerHTML = cityValue;

  //urax의 정보를 가져온다.

  uraxInfo(name); 
}


function uraxInfo(name) {
  // const cityurax = name; //서울은 기본값
  // let cityurax = 'busan';
  let cityurax = name;
  // console.log("!!!!!cityurax: "+ cityurax);
  let url = API_URL + cityurax + '&appid=' + API_KEY;
  // console.log("URL:::::::" + url);
  $.ajax({
    url: url,
    dataType: 'json',
    type: 'GET',
    async: 'false',
    success: function (response) {
      // console.log(response);
      // console.log("뭔데:" + response.weather[0]['main']);
      // console.log('원래 현재온도 : ' + (response.main.temp - 273.15));
      // console.log('최고온도 : ' + (response.main.temp_max - 273.15));
      // console.log('최저 온도: ' + (response.main.temp_min - 273.15));
      // console.log('현재습도 : ' + response.main.humidity);
      // console.log('날씨 : ' + response.weather[0].main);
      // console.log('상세날씨설명 : ' + response.weather[0].description);
      // console.log('날씨 이미지 : ' + response.weather[0].icon);
      // console.log('바람   : ' + response.wind.speed);
      // console.log('나라   : ' + response.sys.country);
      // console.log('도시이름  : ' + response.name);
      // console.log('구름  : ' + response.clouds.all + '%');

      temp.innerHTML = `${Math.floor(response.main.temp - 273.15)}°C`;
      humidity.innerHTML = response.main.humidity;
      wind.innerHTML = response.wind.speed;
      cloud.innerHTML = response.clouds.all + '%';
      let weatherInfo = response.weather[0]['main'];
      console.log("weatherInfo: " + weatherInfo);

      // function changeIcon(weatherInfo){

      if (weatherInfo === 'Clouds') {
        weatherImg.setAttribute('src', '/static/img/clouds.png');
      }
      else if (weatherInfo === 'Clear') {
        weatherImg.setAttribute('src', '/static/img/clear.png');
      }
      else if (weatherInfo === 'Thunderstrom') {
        weatherImg.setAttribute('src', '/static/img/Thunderstrom.png');
      }
      else if (weatherInfo === 'Drizzle') {
        weatherImg.setAttribute('src', '/static/img/Drizzle.png');
      }
      else if (weatherInfo === 'Rain') {
        weatherImg.setAttribute('src', '/static/img/rain.png');
      }
      else if (weatherInfo === 'Snow') {
        weatherImg.setAttribute('src', '/static/img/snow.png');
      }
      else if (weatherInfo === 'Atmosphere') {
        weatherImg.setAttribute('src', '/static/img/atmoshere.png');
      }
      else {
        weatherImg.setAttribute('src', '/static/img/clear.png');
      }

      btnMax.addEventListener("click", function () {
        btnMax.style.backgroundColor = "white";
        btnMin.style.backgroundColor = "#FCEDF1";
        now.style.backgroundColor = "#FCEDF1";

        console.log('BtnMax click!')
        tempMaxMinName.innerHTML = "최고온도";
        temp.innerHTML = `${Math.floor(response.main.temp_max - 273.15)}°C`;
      })

      btnMin.addEventListener("click", function () {
        btnMax.style.backgroundColor = "#FCEDF1";
        btnMin.style.backgroundColor = "white";
        now.style.backgroundColor = "#FCEDF1";

        btnMin.style.backgroundColor = "white";
        console.log('BtnMin click!')
        tempMaxMinName.innerHTML = "최저온도";
        temp.innerHTML = `${Math.floor(response.main.temp_min - 273.15)}°C`;
      })

      now.addEventListener('click', function () {
        btnMax.style.backgroundColor = "#FCEDF1";
        btnMin.style.backgroundColor = "#FCEDF1";
        now.style.backgroundColor = "white";
        tempMaxMinName.innerHTML = "현재온도";
        temp.innerHTML = `${Math.floor(response.main.temp - 273.15)}°C`;
      })
    },
  });
}

