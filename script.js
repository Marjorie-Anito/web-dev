var slideIndex, slides, dots;

function initGallery(){
    slideIndex=0;
    slides=document.getElementsByClassName("images");

    // dots=[];
    // var dotsContainer = document.getElementsById("dotsContainer");

    // for (var i = 0; i<slides.length; i++){
    //     var dot=document.createElement("span");
    //     dot.classList.add("dots");
    //     dotsContainer.append(dot);
    //     dots.push(dot);
    // }
}


initGallery(); 

function plusSlides(n){
    moveSlide(slideIndex+n);
}

function moveSlide(n){
    var i, current, next;
    var moveSlideAnimClass={
        forCurrent:"",
        forNext:""
    }
    if(n>slideIndex){
        if(n>=slides.length){n=0}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        
    }
    else if(n<slideIndex){
        if(n<0){n=slides.length-1}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightNextSlide";
    }
    if(n!=slideIndex){
        next=slides[n];
        current=slides[slideIndex];
        for(i=0; i<slides.length; i++){
            slides[i].className="images";
            slides[i].style.opacity=0;
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        slideIndex=n;
    }


}

var timer=null;
function setTimer(){
    timer=setInterval(function(){
        plusSlides(1);
    }, 3000)
}
setTimer();

