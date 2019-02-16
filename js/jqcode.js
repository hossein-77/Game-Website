$(document).ready(function(){
  $('svg').click(function(){
    $('.menu-hamburger').toggleClass('open');
    if($('.menu-hamburger').hasClass('open')){
      $('.menu-hamburger').addClass('open-menu-hamburger');
      $('.menu-hamburger').removeClass('close-menu-hamburger');
    }else{
      $('.menu-hamburger').addClass('close-menu-hamburger');
      $('.menu-hamburger').removeClass('open-menu-hamburger');
    }
  });
  $('.top').click(function(){
    $('html,body').animate({scrollTop:0},'slow');
  });
  $(document).scroll(function(){
    var valScroll=$(document).scrollTop();
    if(valScroll>500){
      $('.top').addClass('showTop');
    }else{
      $('.top').removeClass('showTop');
    }
  });
  $('.part-img1').click(function(){
    $('html,body').animate({scrollTop:$('.sec1').offset().top},1000);
  });

  $('.part-img2').click(function(){
    $('html,body').animate({scrollTop:$('.sec2').offset().top},2000);
  });

  $('.part-img3').click(function(){
    $('html,body').animate({scrollTop:$('.sec3').offset().top},2000);
  });

  $('.part-img4').click(function(){
    $('html,body').animate({scrollTop:$('.comment').offset().top},3000);
  });

  $('form').submit(function(){

    var valName=$('.name-comment').val();
    var valEmail=$('.email-comment').val();
    var valText=$('.text-comment').val();

    if(valName==''){
      $('.name-comment').css('background-color','#fe5e5e');
      return false;
    }else if(valEmail==''){
      $('.email-comment').css('background-color','#fe5e5e');
      return false;
    }else if(valText==''){
      $('.text-comment').css('background-color','#fe5e5e');
      return false;
    }
  });

  $('body').click(function(){
    var valName=$('.name-comment').val();
    var valEmail=$('.email-comment').val();
    var valText=$('.text-comment').val();

    if(valName!=''){
      $('.name-comment').css('background-color','#fff');
    }
    if(valEmail!=''){
      $('.email-comment').css('background-color','#fff');
    }
    if(valText!=''){
      $('.text-comment').css('background-color','#fff');
    }
  });
});
