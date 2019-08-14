'use strict';
console.log('Hohoho');
window.onload = function(){
    window.onscroll = function () {
        var windowHeight = document.documentElement.clientHeight;
        var touchPoint = windowHeight - 50;
        console.log(windowHeight);
        if (window.scrollY >= touchPoint) {
            document.getElementById('nav-header').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        } else if (window.scrollY <= windowHeight) {
            document.getElementById('nav-header').style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        }
    }
    
}