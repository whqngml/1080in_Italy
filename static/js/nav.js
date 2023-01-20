$('.loginBtn').click(function (e) {
    e.preventDefault();
    function openCenter(doc, win, w, h){
        var left = (screen.availWidth - w) / 2;
        var top = (screen.availHeight - h) / 2;
        var opt = "left=" + left + ",top=" + top + ",width=" + w + ",height=" + h;
        window.open(doc, win, opt); 
    }
    window.name = "mainForm";
    openCenter("/login","login", 450, 540);
})
    
// 로그아웃 기능

$('.logout').click(function () {
    $('.welcDiv').html('')
    $('.loginBtn').removeClass('hidden')
    $('#ticket').addClass('hidden')
    $('#profileImage').attr("src","/static/image/LOGO2.png")
    if(!Kakao.isInitialized()){
        Kakao.init('cd08c92ff47abb48747e75288b10a427'); //발급받은 키 중 javascript키를 사용해준다.
    }
     // sdk초기화여부판단
    kakaoLogout();
})

//카카오로그아웃  

function kakaoLogout() {
    if (Kakao.Auth.getAccessToken()) {
        Kakao.API.request({
            url: '/v1/user/unlink',
            success: function (response) {
                console.log(response)
            },
            fail: function (error) {
                console.log(error)
            },
        })
        Kakao.Auth.setAccessToken(undefined)
    }
}

// 예매하기 기능

$('.ticketting').click(function () {
    function openCenter(doc, win, w, h){
        var left = (screen.availWidth - w) / 2;
        var top = (screen.availHeight - h) / 2;
        var opt = "left=" + left + ",top=" + top + ",width=" + w + ",height=" + h;
        window.open(doc, win, opt); 
    }
    openCenter("/ticket","ticket", 450, 450);
})

// 네비게이션 마우스 호버시 나타나는 효과

$('.naviBoss').mouseover(function () {
    $('.naviHid').removeClass('hidden')
})

$('.naviBoss').mouseout(function () {
    $('.naviHid').addClass('hidden')
})

// 네비바 좁은화면 버튼 클릭시
$('.navMQBtn').click(function () {
    $('.navMQmaster').toggleClass('hidden');
})

$('.navMQtag').click(function () {
    $('.navMQSub').removeClass('hidden')
    $('.navMQSub').addClass('hidden')
    $(this).next('.navMQSub').removeClass('hidden')
})

$('.navMQLogo').click(function () {
    $('.navMQSub').removeClass('hidden')
    $('.navMQSub').addClass('hidden')
})  

//환율창에 대한 js
// let money = document.querySelector(".money");

$('.money').click(function(){
    function openCenter(doc, win, w, h){
        var left = (screen.availWidth - w) / 2;
        var top = (screen.availHeight - h) / 2;
        var opt = "left=" + left + ",top=" + top + ",width=" + w + ",height=" + h;
        window.open(doc, win, opt); 
    }
    openCenter("/Popup", "pop", 450, 550);
})

$('.navMQBack').click(function () {
    $('.navMQSub').removeClass('hidden')
    $('.navMQSub').addClass('hidden')
    $('.navMQmaster').toggleClass('hidden')
})

$('.weatherbtn').click(function(){
    function openCenter(doc, win, w, h){
        var left = (screen.availWidth - w) / 2;
        var top = (screen.availHeight - h) / 2;
        var opt = "left=" + left + ",top=" + top + ",width=" + w + ",height=" + h;
        window.open(doc, win, opt);
    }
    openCenter("/pageWeather", "weather", 350, 600);
})