# 코딩온 first project
URL은 http://101.101.208.246:8300/ 입니다.

# Summary
이탈리아 여행 소개 사이트로 사용자에게 문화, 음식, 관광지 등의 정보를 알려주는 웹사이트이다.

코로나 시국의 해제로 인한 해외 여행객들의 증가로 여행과 관련된 사이트를 만들어 보았으며 벡엔드 없이 프론트엔드 3명으로 진행하였다. 벡엔드가 없다보니 DB 없이 외부 API를 사용해 실시간 환율정보, 날씨정보, 로그인 증 서비스를 구현하였다. 

개발 언어는 node.js이고 서버는 filezilla와 putty, naver cloud platform을 사용했다. 

### 주요기능(API)
* 카카오 로그인 인증, 카카오 공유 기능 <- kakaodevelop
* 실시간 환율 정보를 적용해 해당 금액 출력 <- api-exchangeRate
* 실시간 날씨 정보를 가져와 원하는 지역의 날씨정보 출력 <- openweather
    * openweather API 경우에는 위치값을 받아 날씨 정보를 출력하는 방법이 있고 문자열(지역이름)을 받아 정보를 출력하는 방법이 있는데 우리 팀은 문자열을 받아 적용하는 방식을 사용했다.(전자 ; 보안으로 인해 사용 불가능)


# 프로젝트 시작 전 설치방법
```node.js 설치
#apt-get install nodejs
#apt-get install npm
```

```npm 사용하기
#npm init
#npm init --yes
#npm install 패키지 이름
```

```express 모율 설치
#npm install express
```

```ejs 템플릿
#npm install ejs
```

```git bash 서버 연결
# npm install 
# node app.js  # localhost:8300 접속
```

# 기능 소개
## 메인창(Main)
* 위에 언급된 3개의 API(로그인 인증, 환율, 날씨) - 하드코딩 아님.
    * 로그인 인증 api : kakaodevelop에서 api를 받아와 로그인을 하면 현재 사용자의 프로필 사진이 적용되며 사용자의 kakao 정보를 기반으로 카카오 공유하기 기능 또한 적용. 
    * 환율 api : 환율 정보를 직접 코드 내부에 입력해 환율 적용 금액을 보여주는 것이 아닌 현재 환율 정보를 api에서 받아와 적용
    * 날씨 api : 날씨 정보 또한 하드 코딩이 아닌 openweather애서 실시간 해당 지역 날씨 정보를 받아와 화면에 출력.
* 화면 크기가 줄어들었을 때 nav바가 상단 오른쪽에 아이콘으로 바뀌며 버튼 클릭시 오른쪽에서 왼쪽으로 nav바가 나오는 기능.
* 사진에 hover(마우스 올렸을 때) 사진 배경이 어두워지며 관련 글귀가 나오는 기능.
## 서브창(Sub)
* 성당페이지의 사진전에서 마지막 사진에 도달해 next 버튼을 누르면 다시 처음 사진으로 돌아가는 기능. 처음사진에서 prev를 누르면 마지막 사진으로 보여주는 기능.
* 리뷰페이지에서 사용자가 리뷰를 작성하면 리뷰가 작성되고 삭제 버튼을 누르면 작성된 리뷰를 삭제할 수 있는 기능

# 아쉬운 점
* 전제 : UI,UX 등 디자인 점에서 많이 퀄리티가 떨어짐. 한 페이지에서 기능별로 파트를 나눈 것이 아닌 페이지별로 역할을 나눠서 서로 협업할 수 있는 시간이 별로 없었다.
* 김예나: 성당 관련 페이지에서 사진전 반응형을 제대로 적용하지 못했다. 
* 김영훈: 로그인 비밀번호가 1234만 가능하다는 점. 메인창에서 "미디어" 클릭하고 반응형 보면 글자가 깨지는 현상 발생.
* 조부희: 담당한 페이지(리뷰 페이지)에 닉네임을 적지 않으면 리뷰가 올라가지 않는 오류 발생(but 현재 고침). 프로젝트 전체에서의 공헌도는 있지만 프로그래밍 하는 것에 대한 공헌도가 적어 아쉬움.

# 저작권, 라이선스 정보
  외부 API를 사용한 곳이 있어 코드를 참고하려는 사람들은 그 해당 URL_KEY 값을 받아야 하며 이 프로젝트를 사용하는 사용자는 따로 제약조건은 없다.
  
   
   
## 
![6](https://user-images.githubusercontent.com/84219649/198203354-9e3a1fa0-8508-4848-b66a-c1af267d5c72.jpg)

![5](https://user-images.githubusercontent.com/84219649/198203434-ff74eb22-0ea8-47f1-973c-d0f52bf7df62.jpg)
![4](https://user-images.githubusercontent.com/84219649/198203449-a7fe8598-3e5c-4840-aeea-78e9036c2358.jpg)
![3](https://user-images.githubusercontent.com/84219649/198203458-e4939f0c-a0a1-4186-84a5-ba886c71aac6.jpg)
![2](https://user-images.githubusercontent.com/84219649/198203486-d2616ba5-8cc7-427e-8298-ce57f474fed6.jpg)
![1](https://user-images.githubusercontent.com/84219649/198203493-1de78bbd-29cd-44c9-b340-e6df072087f8.jpg)
![main](https://user-images.githubusercontent.com/84219649/198203530-e32c95ed-9155-432c-ad7c-bdcac762377c.png)
![api](https://user-images.githubusercontent.com/84219649/198203544-d4512914-5def-4a73-b516-57dbbf831d29.png)
