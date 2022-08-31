$('.menu__btn').on('touchstart', function()  {
    $('.menu').toggleClass('menu--active');
    $('.header__wrapper').toggleClass('header__wrapper--active');
    $('.header__inner').toggleClass('header__inner--active'); 
    let src = ($('.menu__img').attr("src") === "images/home/menu.svg") ? "images/home/close.svg" : "images/home/menu.svg";
  $('.menu__img').attr("src", src);
     
});

$('.menu__list-link').on('touchstart', function(e)  {
        e.preventDefault();
        $(this).closest('.menu__list-item').addClass('menu__list-item--touchstart');
        
});
$('.menu__list-link').on('touchend', function(e)  {
    e.preventDefault();
    setTimeout(function() {
        $('.menu__list-item').removeClass('menu__list-item--touchstart');
        $('.menu').toggleClass('menu--active');
    $('.header__wrapper').toggleClass('header__wrapper--active');
    $('.header__inner').toggleClass('header__inner--active'); 
    let src = ($('.menu__img').attr("src") === "images/home/menu.svg") ? "images/home/close.svg" : "images/home/menu.svg";
  $('.menu__img').attr("src", src);
    }, 100);
});

let navTree = document.querySelector(".nav-tree")
let leftMenu = document.querySelectorAll(".global-conteiner > nav > ol > li");
let practic = document.querySelector(".courses_individual .practic");
let answerArrow = document.querySelectorAll(".answer-header > div");

navTree.onclick = function(event) {             //menu
    leftMenu.forEach(element => {
        
        if(event.target == element && typeof(element.childNodes[1]) == "object") {

            if(event.target.className == "closed") {
                element.className = "open"
            } else {
                element.className = "closed"
            }

        }
        
    });

}

document.querySelector(".practic-header div").onclick = () => {
    practic.classList.toggle("open")
};
document.querySelector(".practic button").onclick = () => {
    practic.classList.remove("open")
}

document.querySelector(".practic").onclick = (event) => {
    
    answerArrow.forEach((element, index) => {
        if(event.target == element || event.target == element.childNodes[0]) {
            document.querySelectorAll(".answer")[index].classList.toggle("open")
        }
    })

}

document.querySelector(".global-conteiner > nav > span").onclick = () => {
    document.querySelector(".global-conteiner > nav").classList.toggle("open")
}

if(window.outerWidth > 751) {
    document.querySelector(".code-example.first").style.width = (window.outerWidth - 260) +"px";
    document.querySelector(".code-example.second").style.width = (window.outerWidth - 260) +"px";
} else {
    document.querySelector(".code-example.first").style.width = (window.outerWidth - 80) +"px";
    document.querySelector(".code-example.second").style.width = (window.outerWidth - 80) +"px";
}

if(window.outerWidth > 751 && window.outerWidth < 918) {
    document.querySelectorAll(".practic .task")[1].style.width = (window.outerWidth - 320) +"px";
} else if(window.outerWidth < 751) {
    document.querySelectorAll(".practic .task")[1].style.width = (window.outerWidth - 100) +"px";
}
