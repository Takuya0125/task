
/**
 * swiper.js の初期化処理
 */
window.addEventListener('load', function() {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },
      });
}, false);


$(window).on('scroll', function() {
    // idがbaseの要素の画面最上部からの距離を取得
    let q11 = $('#base').offset().top;

    // 画面の高さ
    let wh = $(window).height();

    // $(window).scrollTop()は現在のスクロール位置
    if (q11 <= $(window).scrollTop() + wh) {
      $('.pic1').removeClass('hide');
    } else {
      $('.pic1').addClass('hide');
    }
    
  })

// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

    
