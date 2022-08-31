


$('.article__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-9.53674e-07 5.99988L6 0V4.81907L6 7.18085L6 12L-9.53674e-07 5.99988Z" fill="#23262D"/><line y1="-1" x2="34.4444" y2="-1" transform="matrix(1 7.86805e-08 9.71364e-08 -1 5.55469 5)" stroke="#23262D" stroke-width="2"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 6.00012L34 12L34 7.18093L34 4.81915L34 9.53674e-07L40 6.00012Z" fill="#23262D"/><line y1="-1" x2="34.4444" y2="-1" transform="matrix(-1 -1.66103e-07 -1.84559e-07 1 34.4453 7)" stroke="#23262D" stroke-width="2"/></svg></button>',
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 940,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 630,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
      ]
});

$('.courses1__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-9.53674e-07 5.99988L6 0V4.81907L6 7.18085L6 12L-9.53674e-07 5.99988Z" fill="#23262D"/><line y1="-1" x2="34.4444" y2="-1" transform="matrix(1 7.86805e-08 9.71364e-08 -1 5.55469 5)" stroke="#23262D" stroke-width="2"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 6.00012L34 12L34 7.18093L34 4.81915L34 9.53674e-07L40 6.00012Z" fill="#23262D"/><line y1="-1" x2="34.4444" y2="-1" transform="matrix(-1 -1.66103e-07 -1.84559e-07 1 34.4453 7)" stroke="#23262D" stroke-width="2"/></svg></button>',
    responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
        
      ]
});

const deadline = '2022-9-30';
function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());
        if(t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t/(1000*60*60*24));
            hours = Math.floor((t/(1000*60*60))%24);
            minutes = Math.floor((t/(1000*60))%60);
            seconds = Math.floor((t/1000)%60);
        }
            
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num) {
    if(num >=0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}
function setClock(endtime, selector) {
    let timer = document.querySelector(selector),
        days = document.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds');
        const updateTime = setInterval(updateClock , 1000);
        updateClock();
        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if(t.total <= 0) {
                clearInterval(updateTime);
            }
        }
}
setClock(deadline, '.timer');

//Modal 

const openModalBtn = document.querySelectorAll('[data-modal]'),
        closeModal = document.querySelector('[data-close]'),
        modal = document.querySelector('.modal');
openModalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
    if(e.target == modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    }
});



// подписка

const form = document.querySelector('.programming-form'),
    closeSubModal = document.querySelector('[data-closeSub]'),
    subModal = document.querySelector('.modal-subscribe');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    subModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});
closeSubModal.addEventListener('click', () => {
    subModal.style.display = 'none';
    document.body.style.overflow = '';
});

subModal.addEventListener('click', (e) => {
    if(e.target == subModal) {
    subModal.style.display = 'none';
    document.body.style.overflow = '';
    }
});



// adaptive menu 
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

// Adaptive
/*
function myFunction(x) {
    if (x.matches) { // Если медиа запрос совпадает
      document.querySelector('.platform__text').innerText = "Курси для початківців і просунутих програмістів, а також цікаві статті.";
    } else {
        document.querySelector('.platform__text').innerText = "Курси для початківців і просунутих програмістів, а також цікавістатті. Приєднуйтесь і дозвольте нам підтримати вас у вашій кар’єрі";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)");
  myFunction(x);
console.dir(document.querySelector('.platform__title'));*/



