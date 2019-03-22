jQuery(document).foundation();

jQuery(function($){
"use strict";

/*--------------------------------------------------------------
DOCUMENT READY
--------------------------------------------------------------*/
$(document).ready(function(){

  var winWidth = $(window).width(), winHeight = $(window).height(), resizeTimer;

  var weddDay = new Date(2019, 9-1, 21);// YYYY, M, D -- no leading zeros
  $('#default-countdown').countdown({until: weddDay, format: 'YOD'});

  $('.blocking').hide();// Hide fixed nav on load

  $('.bridemaids-mobile-slider, .groomsmen-mobile-slider, .couple-mobile-slider').append('<ul class="slides"></ul>');
  $('#bridesmaids-carousel a div, #groomsmen-carousel a div').addClass('slide-text');

  $(document).on('click','.mobile-menu-btn',function(){
    $(this).find('span').toggleClass('active');// Add active class to hamburger icon
    $(this).siblings('.mobile-menu-container').toggleClass('active');// Add active class to menu container
    return false;
  });

  $(document).on('click','.scroll-to',function(){
    var href = $(this).find('a').attr('href'), hash = href.substr(href.indexOf('#'));
    winWidth = $(window).width();
    if ( winWidth > 1024 ) {
      goToByScroll(hash);// Scroll to the clicked section
    }
    else {
      $('.mobile-menu-btn span, .mobile-menu-container').removeClass('active');
      goToByScroll(hash, 0);// Scroll to the clicked section
    }
    return false;
  });

  $(document).on('click','.dg-wrapper a, .dg-wrapper-g a',function(){
    return false;
  });

  // Create couple gallery popup
  var imgCounter = 0;
  var activeSlide = '';
  $('.il-scattered-gallery a').each(function(){
    if( imgCounter == 0 ){ activeSlide = 'active-slide'; }else{  activeSlide = ''}
    var img = $(this).html();
    var imgThumb = '<li data-slide-number="'+imgCounter+'" href="" class="'+activeSlide+'">'+img+'</li>';
    var imgSrc = $(this).find('img').attr('src');
    $('#couple-slideshow').append('<li style="background:url('+imgSrc+') no-repeat center; background-size:cover;">'+img+'</li>');
    $('.couple-thumbs').append(imgThumb);
    imgCounter++;
  });

  // Launch the gallery popup
  $(document).on('click','#gallery-launcher',function(){
    $('.couple-slideshow-wrap').append('<a class="close-btn" title="Click to close"><em>X</em>Close</a>');
    $('.blocking').fadeIn(500);
    $('.couple-slideshow-wrap').css('z-index','2001');
    goToByScroll('#couple-slideshow');
    setTimeout(function(){
      $('.couple-slideshow-wrap').addClass('visible');
    }, 100);
    return false;
  });

  $(document).on('click','.close-btn, .couple-gallery .blocking',function(){
    $('.couple-slideshow-wrap').removeClass('visible');
    setTimeout(function(){
      $('.couple-slideshow-wrap').css('z-index','');
    }, 500);
    $('.couple-gallery .close-btn').fadeOut(500).delay(500).remove();
    $('.blocking').fadeOut(500);
    return false;
  });

  $('#bridesmaids-carousel').gallery();
  $('#groomsmen-carousel').ggallery();
  $('#couple-gallery').ilScatteredGallery();

  // SCROLL FUNCTIONS
  $(window).scroll(function() {

    if( $('body').hasClass('home') ){
      if( $(window).scrollTop() > 349 ){
        $('.fixed-header').addClass('visible');
      }
      else{
        $('.fixed-header').removeClass('visible');
      }
    }
    else{
      if( $(window).scrollTop() > 107 ){
        $('.fixed-header').addClass('visible');
      }
      else{
        $('.fixed-header').removeClass('visible');
      }
    }

    if( $('body').hasClass('home') ){

      if( $('#recent-posts').exists() ){
        if( $('#recent-posts').isOnScreen() ){
          $('#recent-posts .blog-post').addClass('on-screen');
        }
      }

      if( $('#rsvp').exists() ){
        if( $('#rsvp').isOnScreen() ){
          $('.rsvp-form-wrap').addClass('on-screen');
        }
      }

      if( $('#schedule').exists() ){
        if( $('#schedule').isOnScreen() ){
          $('.schedule-content-wrap').addClass('on-screen');
        }
      }

      if( $('#contact').exists() ){
        if( $('#contact').isOnScreen() ){
          $('.contact-form-wrap').addClass('on-screen');
        }
      }

    }

    $('section').each(function(){
      var currentSection = $(this);
      var currentId = $(this).attr('id');
      // For each section that comes into view add active class to corresponding side nav link
      if(currentSection.isOnScreen()){
        $('.scroll-to').each(function(){
          var currElem = $(this);
          var href = $(this).find('a').attr('href'), hash = href.substr(href.indexOf('#')+1);
          if( currentId == hash ){
            currElem.find('a').addClass('active');
          }
          else{
            currElem.find('a').removeClass('active');
          }
        });
      }
    });

    parallaxScroll();

    if(winWidth > 1024){
    }// end winWidth > 1024

  });// End window.scroll()

  $(window).on('resize', function(e) {

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {

      $('.recent-posts .blog-post .post-text').css('height', '').equalHeights();

    }, 1100);

  });// End window.resize()

});

/*--------------------------------------------------------------
AFTER DOCUMENT LOADS
--------------------------------------------------------------*/
$(window).load (function(){

  $(window).scroll();

  $('.recent-posts .blog-post .post-text').equalHeights();

  if( $('body').hasClass('home') ){

    // Begin "create sliders for all the galleries"

    var bridesmaidsSlider = [], groomsmenSlider = [], coupleSlider = [], slider, sliderTwo, sliderThree, coupleSlideshow;

    // Bridesmaids
    /* $('#bridesmaids-carousel a img').each(function(){
      bridesmaidsSlider.push($(this).attr('src'));
    });
    for ( var i = 0, l = bridesmaidsSlider.length; i < l; i++ ) {
      $('.bridemaids-mobile-slider .slides').append('<li><img src="'+bridesmaidsSlider[ i ]+'" alt=""></li>');
    }
    if( $('#bridesmaids-carousel').exists() ){
      $('.bridemaids-mobile-slider').flexslider({
        animation: "slide",
        slideshow: false,
        controlNav: false,
      });
    } */
    $('#bridesmaids-carousel a').each(function(){
      var currElem = $(this);
      var imgSrc = currElem.find('img').attr('src');
      var slideText = currElem.find('.slide-text').html();
      bridesmaidsSlider.push({"img":imgSrc, "slide_text":slideText});
    });
    for ( var i = 0, l = bridesmaidsSlider.length; i < l; i++ ) {
      $('.bridemaids-mobile-slider .slides').append(
        '<li>' +
          '<img src="' + bridesmaidsSlider[i].img + '" alt="">' +
          bridesmaidsSlider[i].slide_text +
        '</li>'
      );
    }
    if( $('#bridesmaids-carousel').exists() ){
      $('.bridemaids-mobile-slider').flexslider({
        animation: "slide",
        slideshow: false,
        controlNav: false,
      });
    }


    // Groomsmen
    $('#groomsmen-carousel a').each(function(){
      // groomsmenSlider.push($(this).attr('src'));
      var currElem = $(this);
      var imgSrc = currElem.find('img').attr('src');
      var slideText = currElem.find('.slide-text').html();
      groomsmenSlider.push({"img":imgSrc, "slide_text":slideText});
    });
    for ( var i = 0, l = groomsmenSlider.length; i < l; i++ ) {
      // $('.groomsmen-mobile-slider .slides').append('<li><img src="'+groomsmenSlider[ i ]+'" alt=""></li>');
      $('.groomsmen-mobile-slider .slides').append(
        '<li>' +
          '<img src="' + groomsmenSlider[i].img + '" alt="">' +
          groomsmenSlider[i].slide_text +
        '</li>'
      );
    }
    if( $('#groomsmen-carousel').exists() ){
      $('.groomsmen-mobile-slider').flexslider({
        animation: "slide",
        slideshow: false,
        controlNav: false,
      });
    }

    // Couple
    $('.il-scattered-gallery a img').each(function(){
      coupleSlider.push($(this).attr('src'));
    });
    for ( var i = 0, l = coupleSlider.length; i < l; i++ ) {
      $('.couple-mobile-slider .slides').append('<li><img src="'+coupleSlider[ i ]+'" alt=""></li>');
    }

    $('.couple-mobile-slider > img').remove();
    $('.couple-mobile-slider').flexslider({
      animation: "slide",
      slideshow: false,
      controlNav: false,
    });

    // End "create sliders for all the galleries"

    coupleSlideshow = $('#couple-slideshow').bxSlider({
      mode: 'fade',
      speed: 1000,
      auto: false,
      controls: false,
      pager: false
    });

    $('.couple-thumbs').bxSlider({
      minSlides: 5,
      maxSlides: 5,
      slideWidth: 178,
      slideMargin: 0,
      speed: 750,
      pager: false,
      prevText: 'Previous'
    });

    $(document).on('click','.couple-thumbs li',function(){
      var slideIndex = $(this).attr('data-slide-number');
      coupleSlideshow.goToSlide(slideIndex);
      $(this).siblings('li').removeClass('active-slide');
      $(this).addClass('active-slide');
    });

  }// end if body.home

});

/*--------------------------------------------------------------
THE FUNCTIONS
--------------------------------------------------------------*/
/**
  * @desc checks if current element exists
  * @param none
  * @return int - the number of elements present, > 0 = element exists
*/
jQuery.fn.exists = function(){ return this.length > 0; }

/**
  * @desc checks if current element is on screen or within viewport
  * @param none
  * @return int - the coordinates of the window vs. the element
*/
jQuery.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var elemtHeight = this.height()/2;// Get half of the height of current element
    elemtHeight = Math.round(elemtHeight);// Round it to whole humber

    var bounds = this.offset();// Coordinates of current element
    bounds.top = bounds.top + elemtHeight;// Top is redefined as half of current element's height
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

}

/**
  * @desc checks if current element is 100% visible within viewport
  * @param none
  * @return int - the coordinates of the window vs. the element
*/
jQuery.fn.isFullyVisible = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var elemtHeight = this.height();// Get the full height of current element
    elemtHeight = Math.round(elemtHeight);// Round it to whole humber

    var bounds = this.offset();// Coordinates of current element
    bounds.top = bounds.top + elemtHeight;// Top is redefined as half of current element's height
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

}

/**
  * @desc create equal height columns
  * @param object - the elements to apply equal heights to
  * @return none
*/
jQuery.fn.equalHeights = function(){
  var colSelector = this.selector;// Get the selector of the object
  var newHeight;
  var colHeights = [];
  $(colSelector).each(function(){
    var singleCol = $(this).outerHeight();// Get the outerHeight of a single column
    colHeights.push(singleCol);// Push the single height into the array
    newHeight = Math.max.apply(Math,colHeights);// Get the tallest column from the array
  });
  $(colSelector).css('height', newHeight+'px');// Apply the tallest height to all columns
}

/**
  * @desc scroll to the specified anchor section
  * @param int id - the id of the section to scroll to
  * @return none
*/
function goToByScroll(id, scrollPadding = 106){
  var scrollAmount = $(id).offset().top;
  var scrollPadding = scrollPadding;
  if( scrollPadding == 0 ){
    $('html,body').animate({
      scrollTop: scrollAmount},
    'slow');
  }
  else{
    $('html,body').animate({
      scrollTop: (scrollAmount - scrollPadding)},
    'slow');
  }
}

/**
  * @desc Parallax scrolling on different elements
  * @param none
  * @return none
*/
function parallaxScroll(){
  // var scrolled = $(window).scrollTop();
  // var winWidth = $(window).width();

  if( $('body').hasClass('home') ){
    $('.main-navigation, .site-branding').css('margin-top', '-' + Math.round( ($(window).scrollTop() * 0.3) ) + 'px');
  }

  // if( $('body').hasClass('blog') || $('body').hasClass('single') ){
  //   $('h1').css({
  //     'position' : 'relative',
  //     'top' : '-' + Math.round( (scrolled * 0.3) ) + 'px'
  //   });
  // }

}

});// End jQuery(function($)
