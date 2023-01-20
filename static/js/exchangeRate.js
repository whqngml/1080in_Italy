//  const RATE_API_KEY = "d53ace0f556c6cedfeaf1d7d";
const RATE_API_URL = "https://v6.exchangerate-api.com/v6/d53ace0f556c6cedfeaf1d7d/latest/USD";
const selectCountry = document.querySelector('#selectCountry');
const amount = document.querySelector('#amount');
const seeCountry = document.querySelector('#seeCountry');
const swapButton = document.querySelector('.swapButton');
const rateDiv = document.querySelector('#rateDiv');

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

          // 서버에서 준 결과를 response라는 변수에 담음
          // console.log(response); // 서버에서 준 결과를 이용해서 나머지 코드를 작성
          // console.log(response.conversion_rates); // 서버에서 준 결과를 이용해서 나머지 코드를 작성
          // console.log(response.conversion_rates.AED);
          // console.log(response.conversion_rates.AFN);
          // console.log(response.conversion_rates.ALL);
          // console.log(response.conversion_rates.AMD);
          // console.log(response.conversion_rates.ANG);
          // console.log(response.conversion_rates.AOA);
          // console.log(response.conversion_rates.ARS);
          // console.log(response.conversion_rates.AUD);
          // console.log(response.conversion_rates.AWG);
          // console.log(response.conversion_rates.AZN);
          // console.log(response.conversion_rates.BAM);
          // console.log(response.conversion_rates.BBD);
          // console.log(response.conversion_rates.BDT);
          // console.log(response.conversion_rates.BGN);
          // console.log(response.conversion_rates.BHD);
          // console.log(response.conversion_rates.BIF);
          // console.log(response.conversion_rates.BMD);
          // console.log(response.conversion_rates.BND);
          // console.log(response.conversion_rates.BOB);
          // console.log(response.conversion_rates.BRL);
          // console.log(response.conversion_rates.BSD);
          // console.log(response.conversion_rates.BTN);
          // console.log(response.conversion_rates.BWP);

          // console.log(`백틱 테스트 입니다. ${str}`);

        },
      });

//키는 안필요함. 

//항상 temp 변수를 만들어서 A 값을 넣어주고
//A, B 값 바꿔준다. => A와 B 값이 벼한다.
//그럼 currency가 변했으니 그걸 기준으로 다시 환율을 calculate 한다.
function calculate(){
  const selectCountryValue = selectCountry.value;

  const seeCountryValue = seeCountry.value;

  fetch(`https://v6.exchangerate-api.com/v6/d53ace0f556c6cedfeaf1d7d/latest/${selectCountryValue}`)
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      const rate = data.conversion_rates[seeCountryValue];
      const result = rate * amount.value;
      console.log(rate);
      rateDiv.innerHTML = `${amount.value} ${selectCountryValue} = ${seeCountryValue} ${result}`;
      // console.log('@@@',amount);
      // changeRate.value = amount.value * rate}.toFixed(2);

      //input 창에 뜨게 하기(conversion_rates * 내가 입력한 돈의 양.value)
  });
}

function showResult(){
  calculate();
}