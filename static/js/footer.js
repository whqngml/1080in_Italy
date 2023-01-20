const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



function shareTwitter() {
    var sendText = "1080 in italy"; // 전달할 텍스트
    var sendUrl = "devpad.tistory.com/"; // 전달할 URL
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}

function shareFacebook() {
    var sendUrl = "devpad.tistory.com/"; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}


function shareKakao() {
 
    // 사용할 앱의 JavaScript 키 설정
    Kakao.init('cd08c92ff47abb48747e75288b10a427');
   
    // 카카오링크 버튼 생성
    Kakao.Link.createDefaultButton({
      container: '#btnKakao', // 카카오공유버튼ID
      objectType: 'feed',
      content: {
        title: "1080 in italy", // 보여질 제목
        description: "이탈리아 관광을 위한 페이지입니다", // 보여질 설명
        imageUrl: "localhost:8300/", // 콘텐츠 URL
        link: {
           mobileWebUrl: "localhost:8300/",
           webUrl: "localhost:8300/"
        }
      }
    });
  }
  