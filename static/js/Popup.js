//  const RATE_API_KEY = "d53ace0f556c6cedfeaf1d7d";
const RATE_API_URL = "https://v6.exchangerate-api.com/v6/d53ace0f556c6cedfeaf1d7d/latest/USD";


const selectCountry = document.querySelector('#selectCountry');
const seeCountry = document.querySelector('#seeCountry');
// const changeRate = document.querySelector('#changeRate');
const amount = document.querySelector('#amount');

const swapButton = document.querySelector('.swapButton');
const rateDiv = document.querySelector('#rateDiv');

$( function() {
  let strWidth = 450 + (window.outerWidth - window.innerWidth);
  let strHeight = 500 + (window.outerHeight - window.innerHeight);
  window.resizeTo( strWidth, strHeight );
})


//통화를 선택하거나 금액을swapButton 입력했을 때, calculate 함수를 통해 환율 정보를 받아온다.
//select 태그를 받아온 selectCountry와 seeCountry option이 바뀌는 것. "change" event를.
//amount, changeRate의 경우 사용자가 값을 입력할 수 있지만 옆에 있는 화살표를 이용해 양을 늘리거나 줄일 수 있기 때문에
// 그 모든 events를 포함하는 "input" event로 event listener를 만듦.
// selectCountry.addEventListener("change", calculate);
// amount.addEventListener("input", calculate);
// seeCountry.addEventListener("change", calculate);
// changeRate.addEventListener("input", calculate);
swapButton.addEventListener("click", showResult);

      $.ajax({
        type: "GET", // GET 방식으로 요청한다.
        url: RATE_API_URL,
        success: function (response) {
        },
      });

//키는 안필요함. 

function calculate(){
  const selectCountryValue = selectCountry.value;

  const seeCountryValue = seeCountry.value;

  if (selectCountryValue == seeCountryValue) {
    alert('기준 통화와 변환 통화가 같습니다')
    return
  }


  fetch(`https://v6.exchangerate-api.com/v6/d53ace0f556c6cedfeaf1d7d/latest/${selectCountryValue}`)
  .then((response) => response.json())
  .then((data) => {
      // console.log(data);

      const rate = data.conversion_rates[seeCountryValue];
      const result = Math.floor(rate * amount.value);
      let strWidth = 450 + (window.outerWidth - window.innerWidth);
      let strHeight = 550 + (window.outerHeight - window.innerHeight);
      window.resizeTo( strWidth, strHeight );
      $('#fourthbox').removeClass('hidden')
      // console.log(rate);
      // alert(`${amount.value} ${selectCountryValue}는 환전시  ${result} ${seeCountryValue} 입니다 ` )
      rateDiv.value = `${result} ${seeCountryValue}`;

      //input 창에 뜨게 하기(conversion_rates * 내가 입력한 돈의 양.value)
  });
}

function showResult(){
  calculate();
}