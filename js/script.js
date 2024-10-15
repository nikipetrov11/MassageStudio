
$('.results__preview').slick({
  arrows: false,
  vertical: true,
  asNavFor: '.results__slider',
  slidesPerRow: 5,
  slidesToShow: 5,
  verticalSwiping: true
});

// Navigation toggle
$('.header__hamburger').on('click', function() {
  $(this).toggleClass('active');
  $('.main-navigation').toggleClass('active');
  $('body').toggleClass('overflow');
});

// Close navigation on link click
$('.main-navigation a').on('click', function() {
  $('.header__hamburger').removeClass('active');
  $('.main-navigation').removeClass('active');
  $('body').removeClass('overflow');
});
