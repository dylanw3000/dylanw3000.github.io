var slideIndex = [0,0];
var slideId = ["mySlides", "mySlides2"]
showSlides(0, 0);
// showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n >= x.length) {slideIndex[no] = 0}    
    if (n < 0) {slideIndex[no] = x.length-1}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex[no]].style.display = "block";  

    var dots = document.getElementsByClassName("dot");
    // var d = dots.getElementsByClassName(slideId[0]);
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    } 
    dots[slideIndex[0]].className += " active";
}
