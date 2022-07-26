$(document).ready(function(){


  //header
  $(".search img").click(function(){
    $(".search input").toggleClass("input_click");
  });



  //#menu
  $("#menu img").click(function(){
    $(this).hide();
    $("#menu_content").animate({"left":"0"},700);
    $(".sub_menu").hide();


  });

  $("#menu_content h3").click(function(){
    $("#menu_content").animate({"left":"-100%"},700);
    $("#menu img").show();


  });

  $("#menu_content li").click(function(){
    $(this).children(".sub_menu").slideToggle();
    $("#menu_content li").not(this).children(".sub_menu").slideUp();


  });



  //visual
  var swiper = new Swiper(".swiper1", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true, //반복
      autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      }, //자동실행
      pagination: {
      el: ".swiper-pagination",
      }, //페이지
      scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      }, //스크롤바
  });

  //visual2
  var swiper = new Swiper(".swiper2", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true, //반복
      autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      }, //자동실행
      pagination: {
      el: ".swiper-pagination",
      }, //페이지
      scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      }, //스크롤바
  });





  //#section1
  $(".brand_bar li").eq(0).css("background","rgba(0,0,0,0)");
  $(".brand_content li").hide();
  $(".brand_content li").eq(0).show();

  $(".brand_bar li").click(function(){
      $(".brand_bar li").removeClass("brand_bar_over");
      $(this).addClass("brand_bar_over");

      var barNum = $(this).index();
      $(".brand_content li").hide();
      $(".brand_content li").eq(barNum).show();


  });



  //#section2
  var swiper = new Swiper(".sec2_arrow1", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });





  


  //lobo

  //lobo gallery
  $(".more").click(function(){

    $(this).css("display","none");
    $(".gallery_content li").css("display","block");


  });






  //sodam
  var swiper = new Swiper(".sodam", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });






  //qa,nobo

  // FAQ - 아코디언
  $("#often li").click(function(){
    $(this).children(".answer").slideToggle();
    $("#section5 li").not(this).children(".answer").slideUp();
    // .answer 초기화 열고 닫히고
    




  });




  //support
  //support_sup
  var swiper = new Swiper(".support_sup_slide", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    loop: true, //반복
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      }, //자동실행
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });








});