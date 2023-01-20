const express = require("express");

const app = express();

const PORT = 8300; // 포트번호

app.set("view engine", "ejs"); //app에 view engine을 ejs로 설정
app.use("/views", express.static(__dirname + "/views")); // ejs 파일을 저장할 views 폴더의 경로

//브라우저가 ip:port/stztic/image/cat.jpg
//해당 파일을 ip:port/static/image/cat.jpg 에 존재하는지 찾음
app.use("/static", express.static(__dirname + "/static"));

// app.get('/',function(request, response){
//     //client가 get 요청을 보내면 -> 응답으로 send('안에 있는 메서지')를 띄운다
//     // response.send('connect success');
//     response.render('sights')
// })

app.get("/", function (request, response) {
  //client가 get 요청을 보내면 -> 응답으로 send('안에 있는 메서지')를 띄운다
  // response.send('connect success');
  response.render("main");
});

app.get("/sights", function (request, response) {
  response.render("sights");
});
//성당
app.get("/florence", function (request, response) {
  response.render("florence"); //피렌치
});

app.get("/review", function (request, response) {
  response.render("review");
});

app.get("/weather", function (request, response) {
  response.render("weather");
});
app.get("/exchangeRate", function (request, response) {
  response.render("exchangeRate");
});

app.get("/Popup", function (request, response) {
  response.render("Popup");
});
app.get("/milan", function (request, response) {
  response.render("milan"); //밀라노
});

app.get("/saint", function (request, response) {
  response.render("saint"); // 성베드로
});

// 유적지
app.get("/colosseum", function (request, response) {
  response.render("colosseum"); //콜로세움
});

app.get("/pantheon", function (request, response) {
  response.render("pantheon"); // 판테온
});

app.get("/fororomano", function (request, response) {
  response.render("fororomano"); // 포로로마노
});

// 휴양지
app.get("/capri", function (request, response) {
  response.render("capri"); //카프리
});
app.get("/cinqueTerre", function (request, response) {
  response.render("cinqueTerre"); //친퀘테레
});

app.get("/venice", function (request, response) {
  response.render("venice"); //베네치아
});

//===========================================================
app.get("/Popup", function (request, response) {
  response.render("Popup"); // 환율 팝업창
});
app.get("/ticket", function (request, response) {
  response.render("ticket");
});
app.get("/login", function (request, response) {
  response.render("login");
});

app.get("/country", function (request, response) {
  response.render("country");
});

app.get("/food", function (request, response) {
  response.render("food");
});
app.get("/exchangeRate", function (request, response) {
  response.render("exchangeRate"); //환율 연습
});

app.get("/pageWeather", function (request, response) {
  response.render("pageWeather"); // 날씨 팝업창
});

//로컬 서버 동작
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
