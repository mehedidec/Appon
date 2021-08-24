$(function() {

    //cursor
    $(document).ready(function(){
    var cursor = $(".cursor");
    
        $(window).mousemove(function(e) {
            cursor.css({
                top: e.clientY - cursor.height() / 2,
                left: e.clientX - cursor.width() / 2
            });
        });
    
        $(window)
            .mouseleave(function() {
                cursor.css({
                    opacity: "0"
                });
            })
            .mouseenter(function() {
                cursor.css({
                    opacity: "1"
                });
            });
    
        $("a, button, #submit, .back_to_top")
            .mouseenter(function() {
                cursor.css({
                    transform: "scale(3.2)"
                });
            })
            .mouseleave(function() {
                cursor.css({
                    transform: "scale(1)"
                });
            });
    
        $(window)
            .mousedown(function() {
                cursor.css({
                    transform: "scale(.5)"
                });
            })
            .mouseup(function() {
                cursor.css({
                    transform: "scale(1)"
                });
            });
    });
    
    //div animation
    new WOW().init();

    //scrollbar
    $(window).scroll(function(){
      var scrollBar = $(window).scrollTop(),
      dh = $(document).height(),
      wh = $(window).height();
      scrollPercent = (scrollBar / (dh-wh)) * 100;
      $('#scrollMain').css('height', scrollPercent + '%');
    })

    //navbar link responsive
    jQuery(document).ready(function($) {
      var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 992) {
          $('.nav_main .nav-item .nav-link').attr('data-bs-toggle','offcanvas');
          $('.nav_main .nav-item .nav-link').attr('data-bs-target','#navbarOffcanvasLg');
          $('.nav_main .nav-item .nav-link i').css('display', 'none')
          $(".nav_main .nav-item .mobiledropi").click(function(){
            $(".nav_main .nav-item .mobiledropi").toggleClass('active');
            $(".nav_main .nav-item .dropdown-menu").toggleClass('mobiledrop');
          });
        } else if (ww >= 992) {
          $('.nav_main .nav-item .nav-link').removeAttr('data-bs-toggle','offcanvas');
          $('.nav_main .nav-item .nav-link').removeAttr('data-bs-target','#navbarOffcanvasLg');
          $('.nav_main .nav-item .mobiledropi').css('display', 'none')
          $('.nav_main .nav-item .nav-link i').css('display', 'inline-block')
        };
      };
      $(window).resize(function(){
        alterClass();
      });
      alterClass();
      });

    //banner slider
    $('#banner').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        fade: true,
        arrows: false,
        dotsClass: 'banner-sdots',
        cssEase: 'linear'
      }); 

    //screenshots slider
    $('.screenshots-all').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'screenshots-sdots',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    //Team slider
    $('.team-all').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }); 

    //Feedback slider
    $('.feedback_body').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 1500,
      asNavFor: '.feedback_dp'
    });
    $('.feedback_dp').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.feedback_body',
      arrows: false,
      dots: true,
      dotsClass: 'feedback-sdots',
      centerMode: true,
      centerPadding: '30px',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '18px'
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '25px'
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    //iFrame
    $('.venobox').venobox({
      bgcolor: 'rgba(116, 79, 160, 0.85)',
      closeColor: 'rgba(116, 79, 160)'
    });

    //scroll
    $(window).scroll(function () { 
      var scrolling = $(this).scrollTop();

    //navbar
    if(scrolling > 30){
      $(".nav_main").addClass("navbg")
    }else{
     $(".nav_main").removeClass("navbg")
      }

    //back to top
       if(scrolling > 20){
           $(".back_to_top i").fadeIn()
       }else{
           $(".back_to_top i").fadeOut()
       }
    });

    //back to top
    $(".back_to_top i").click(function () { 
      $('html, body').animate({
        scrollTop:0
      }, 1000);
    });

    //scroll animation
    var html_body = $('html, body');
    $('nav .nav-link').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500,);
                return false;
            }
        }
    });
    
});