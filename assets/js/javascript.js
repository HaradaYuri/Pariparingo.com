$(document).ready(function () {
  var hash = window.location.hash;
  if (!hash) {
    // loader animation
    $('#loading').css({
      width: '100%',
      height: '100%',
      display: 'flex',
    });

    $('#loading img').css({
      width: '0px',
      animation: 'moveAnimation 2s linear forwards',
    });

    // reload top
    $(window).scrollTop(0);

    // instagram delay
    $('.index-instagram').addClass('instagram-delay');

    // end_loader
    setTimeout(end_loader, 1200);
  } else {
    $('.shop-container').css({ opacity: '1' });
    $('.point-container').css({ opacity: '1' });
  }

  // fadeTrigger
  function fadeAnime() {
    'use strict';
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    $('.fadeInTrigger').each(function () {
      var elemPos = $(this).offset().top;
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('fadeIn');
      } else {
        $(this).removeClass('fadeIn');
      }
    });

    $('.fadeUpTrigger').each(function () {
      var elemPos = $(this).offset().top;
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('fadeUp');
      } else {
        $(this).removeClass('fadeUp');
      }
    });

    $('.fadeUpCircTrigger').each(function () {
      var elemPos = $(this).offset().top;
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('fadeUpCirc');
      } else {
        $(this).removeClass('fadeUpCirc');
      }
    });

    $('.fadeLeftTrigger').each(function () {
      var elemPos = $(this).offset().top;
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('fadeLeft');
      } else {
        $(this).removeClass('fadeLeft');
      }
    });

    $('.fadeRightTrigger').each(function () {
      var elemPos = $(this).offset().top;
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('fadeRight');
      } else {
        $(this).removeClass('fadeRight');
      }
    });

    $('.rotateCircleTrigger').each(function () {
      var elemPos = $(this).offset().top;
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('rotateCircle');
      } else {
        $(this).removeClass('rotateCircle');
      }
    });
  }

  // スクロール時とロード時のアニメーション関数呼び出し
  $(window).on('scroll load', function () {
    fadeAnime();
  });

  // ナビゲーションオーバーレイの制御
  $('#navOpen').click(function (event) {
    event.preventDefault();
    $('.nav-overlay').addClass('active');
  });

  $('.navClose, .nav-text a').click(function () {
    $('.nav-overlay').removeClass('active');
  });

  // スライダーの設定
  $('.slider').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    dots: true,
  });
});

// ローディング終了時の処理
function end_loader() {
  $('#loading').fadeOut(300, function () {
    $(this).css('display', 'none');
  });
}
