const form = document.querySelector(".wrap");

function deleteBtn(obj) {
  console.log("click delete btn!");
  console.log(obj);
  console.log(obj.parentElement.parentElement.parentElement.parentElement);
  const removeReviews =
    obj.parentElement.parentElement.parentElement.parentElement;
  // console.log(list);
  // console.log(reviews);
  console.log(removeReviews);
  removeReviews.remove();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nickname = document.getElementById("nickname").value;
  const review = document.getElementById("review").value;

  const list = document.querySelector(".list");
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const perdate = document.querySelector(".dates"); // 작성일 출력을 위한 변수 지정
  const pericon = document.querySelector(".icon2");
  const perstars = document.querySelector("stars");
  const starcheck = document.querySelector(".rate_radio");

  let html = `
    <div class="reviews">
      <div class="left">
        <div class="icon2"><i class="bi bi-person-circle"></i></div>
        <div class="nickname">${nickname}</div>
      </div>
      <div class="right">
        <div class="textreview">${review}</div>
        <div class="side">
          <div class="stars">${stars()}</div>
          <div class="bot">
            <div class="dates">${year}.${month + 1}.${day}</div>
            <button class="deleteBtn" onclick="deleteBtn(this);">삭제</button>
          </div>
        </div>
      </div>
    </div>
  `; // .list 자식태그로 들어갈 개인 리뷰창 구조 및 컨텐츠 생성

  $(list).append(html);

  if (nickname === "" || review === "" || starcheck == false) {
    alert("닉네임과 리뷰, 별점을 입력해주세요");
    perdate.textContent = "";
    pericon.innerHTML = "";
    perstars.textContent = "";
  } // nickname value와 review value가 없을때 date출력되지 않게끔

  $("form[name='review']").each(function () {
    this.reset();
  }); // 등록 눌렀을때 폼 초기화
});

document.getElementById("review").addEventListener("keydown", function () {
  //리뷰 20자 초과 안되게 자동 자름
  let reviewLength = document.getElementById("review");

  let lengthCheckEx = /^.{20,}$/;
  if (lengthCheckEx.test(reviewLength.value)) {
    //20자 초과 컷
    reviewLength.value = reviewLength.value.substr(0, 20);
  }
});

function Rating() {}
Rating.prototype.rate = 0;
Rating.prototype.setRate = function (rateobj, newrate) {
  //별점 마킹 - 클릭한 별 이하 모든 별 체크 처리
  this.rate = newrate;
  let checks = null;
  //요소가 파라메터로 넘어오면 별점 클릭, 없으면 저장 후 전체 초기화
  if (rateobj) {
    rateobj.querySelector(".ratefill").style.width =
      parseInt(newrate * 60) + "px"; // 현재 별점 갯수 채색
    checks = rateobj.querySelectorAll(".rate_radio"); // 넘어온 요소 하위의 라디오버튼만 선택
  } else {
    //전체 별점 채색 초기화
    const rateFills = document.querySelectorAll(".ratefill");
    rateFills.forEach(function (item) {
      item.style.width = parseInt(newrate * 60) + "px"; //
    });
  }

  //별점 체크 라디오 버튼 처리
  if (checks) {
    checks.forEach(function (item, idx) {
      if (idx < newrate) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    });
  }
};

let rating = new Rating(); //별점 인스턴스 생성
document.addEventListener("DOMContentLoaded", function () {
  //별점선택 이벤트 리스너
  const rateForms =
    document.querySelectorAll(".rating"); /* 별점 선택 템플릿을 모두 선택 */
  rateForms.forEach(function (item) {
    //클릭 이벤트 리스너 각각 등록
    item.addEventListener("click", function (e) {
      let elem = e.target;
      if (elem.classList.contains("rate_radio")) {
        rating.setRate(elem.parentElement, parseInt(elem.value)); // setRate() 에 ".rating" 요소를 첫 번째 파라메터로 넘김
      }
    });
  });
});

function stars() {
  const rating1 = document.getElementById("rating1");
  const rating2 = document.getElementById("rating2");
  const rating3 = document.getElementById("rating3");
  const rating4 = document.getElementById("rating4");
  const rating5 = document.getElementById("rating5");

  const star1 = rating1.checked;
  const star2 = rating2.checked;
  const star3 = rating3.checked;
  const star4 = rating4.checked;
  const star5 = rating5.checked;

  if (star5 == true) {
    return '<img src="/static/img/5점.png" alt ="별점이미지">';
  } else if (star4 == true && star5 != true) {
    return '<img src="/static/img/4점.png" alt ="별점이미지">';
  } else if (star3 == true && star4 != true) {
    return '<img src="/static/img/3점.png" alt ="별점이미지">';
  } else if (star2 == true && star3 != true) {
    return '<img src="/static/img/2점.png" alt ="별점이미지">';
  } else if (star1 == true && star2 != true) {
    return '<img src="/static/img/1점.png" alt ="별점이미지">';
  } else {
    return;
  }
}
