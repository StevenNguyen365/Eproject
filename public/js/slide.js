
/* SlideShow */
var slideIndex = 1;
plusSlides(1);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (typeof slides[slideIndex - 1] !== "undefined") {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

}
window.onload = function () {
    showSlides(slideIndex);

    setInterval(function () {
        plusSlides(1);
    }, 3000);
}


/* Gallery.html */

/* Clear all - reload trang */

/* clock */

// Hàm này có tác dụng chuyển những số bé hơn 10 thành dạng 01, 02, 03, ...
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function nowDateTime() {
    var nowDate = new Date();
    var day = nowDate.getDate();
    var month = nowDate.getMonth() + 1;
    var year = nowDate.getFullYear();
    var hour = nowDate.getHours();
    var min = nowDate.getMinutes();
    var sec = nowDate.getSeconds();

    hour = checkTime(hour)
    min = checkTime(min)
    sec = checkTime(sec)
    day = checkTime(day)
    month = checkTime(month)

    var dateTime = " Time: " + hour + " : " + min + " : " + sec + " -- Date: " + day + " - " + month + " - " + year;
    document.getElementById("hvn").innerHTML = dateTime;
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var log = position.coords.longitude;

        // hiển thị vị trí
        var location = "---Your location: " + "Latitude: " + lat + " Longitude: " + log;
        document.getElementById("gps").innerHTML = location;
    });
}
setInterval(nowDateTime, 1500);

/* go to top */

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}