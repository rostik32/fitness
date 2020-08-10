$(document).ready(function () {
  $('.video-slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.video-slider-small',
    accessibility: false,
    swipe: false,
    waitForAnimate: false,
    draggable: false
  });
  $('.video-slider-small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.video-slider-big',
    dots: false,
    waitForAnimate: false,
    focusOnSelect: true
  });

  $('.trainers__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    fade: true,
    asNavFor: '.trainers__photos',
    accessibility: false,
    swipe: false,
    waitForAnimate: false,
    draggable: false
  });

  $('.trainers__photos').slick({
    infinity: false,
    slidesToShow: 3,
    infinite: false,
    variableWidth: true,
    slidesToScroll: 1,
    asNavFor: '.trainers__list',
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          variableWidth: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.workouts').slick({
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true
  });

  $('.testmonials__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    focusOnSelect: false
  });
});

const videoBtn = document.querySelectorAll('.videoBtn'),
  slideVideo = document.querySelectorAll('.video-slide-video');

videoBtn.forEach((item, i) => {
  item.addEventListener('click', function () {
    slideVideo[i].play();
    item.style.display = 'none';
  });
});

slideVideo.forEach((item, i) => {
  item.addEventListener('click', function () {
    item.pause();
    videoBtn[i].style.display = 'block';
  });
});


// burger-menu  

const burger = document.querySelector('.burger'),
  headerNav = document.querySelector('.header-main__list'),
  body = document.body;

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  headerNav.classList.toggle('active');
  body.classList.toggle('lock');
});

// DROPDOWN MENU

const dropdownMenu = document.querySelector('.dropdown__menu'),
  dropdownToggle = document.querySelector('.dropdown__toggle'),
  dropdownInput = document.querySelectorAll('.dropdown__input');

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open');
});

dropdownInput.forEach(function(item) {
  item.addEventListener('change', () => {
    let inputValue = item.value;
    dropdownToggle.textContent = inputValue;
    dropdownMenu.classList.remove('open');
  });
});