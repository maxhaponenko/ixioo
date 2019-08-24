const $ = require('jquery');


// Выдвигаем или прячем меню
var moveNavPanel = (id,px) => {
    var elem = document.getElementById(id);
    elem.style.top = px;
};

// Слушатель события + определяем прятать или выдвигать навигационную панель при нажатии
document.getElementById("navigation_start").addEventListener("click", function() {
    let elem = document.getElementById("mobile_navigation").style.top ;
    if (elem !== "0vh") {
        moveNavPanel("mobile_navigation", "0vh");
        document.getElementById("navigation_close").addEventListener("click", function() {
            moveNavPanel("mobile_navigation", "-100vh");    
        })
    } 
});

$('navigation_close').click(function(){
    alert('button clicked');
})