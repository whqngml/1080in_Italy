var slides = document.querySelector('.slides');
var slide = document.querySelectorAll('.slides li');
var currentIdx = 0;
var slideCount = slide.length;

var slideWidth = 350;
var slideMargin = 30;

var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px'; // ul의 너비는 css에서 안잡아도 된다.


function moveSlide(num){
    slides.style.left = -num * 385 + 'px';
    currentIdx = num;
}

nextBtn.addEventListener('click', function(){
    if(currentIdx < slideCount - 3){ // 7보다 작으면
        moveSlide(currentIdx + 1);   
    }
    else{ // 처음으로 돌아가기
        moveSlide(0); 
    }
});

prevBtn.addEventListener('click', function(){
    if(currentIdx > 0){ // 0보다 크면
        moveSlide(currentIdx - 1);   
    }
    else{ 
        moveSlide(slideCount - 3); // slideCount-3이 마지막 
    }
});

