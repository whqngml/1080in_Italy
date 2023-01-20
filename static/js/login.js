$(function () {
  let strWidth = 440 + (window.outerWidth - window.innerWidth);
  let strHeight = 540 + (window.outerHeight - window.innerHeight);

  console.log(strWidth)
  window.resizeTo( strWidth, strHeight );
})

//카카오로그인
function kakaoLogin() {
  Kakao.init('cd08c92ff47abb48747e75288b10a427'); //발급받은 키 중 javascript키를 사용해준다.
  console.log(Kakao.isInitialized()); // sdk초기화여부판단
  Kakao.Auth.login({
    success: function (response) {
      Kakao.API.request({
        url: '/v2/user/me',
        success: function (response) {
          console.log(response)
          const nickname = response.kakao_account.profile.nickname;
          const image = response.kakao_account.profile.profile_image_url;
          opener.document.getElementById("welcome").innerHTML = `환영합니다 <br> ${nickname}님`;
          opener.document.getElementById("profileImage").setAttribute("src", response.kakao_account.profile.profile_image_url);
          opener.document.getElementById("ticket").classList.remove("hidden");
          opener.document.getElementById("mainLoginBtn").classList.add("hidden");
          window.close();
        },
        fail: function (error) {
          console.log(error)
        },
      })
    },
    fail: function (error) {
      console.log(error)
    },
  })
}

$('#loginForm').submit(function(e){
  e.preventDefault();
  
  let userNameVal = $('#userName').val();
  let passWordVal = $('#passWord').val();

  if (userNameVal == '') {
    alert('닉네임을 입력해주세요.');
    return;
  }

  if (passWordVal == '') {
    alert('비밀번호를 입력해주세요(1234)');
    return;
  }

  if (passWordVal != 1234) {
    alert('비밀번호가 틀렸습니다');
    return;
  }
  opener.document.getElementById("welcome").innerHTML = `환영합니다 <br> ${userNameVal}님`
  opener.document.getElementById("ticket").classList.remove("hidden");
  opener.document.getElementById("mainLoginBtn").classList.add("hidden");
  window.close();
  
})
