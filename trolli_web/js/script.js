$(document).ready(function(){


 //#menu
 $("#menu img").click(function(){
    $(this).hide();
    $("#menu_content").animate({"right":"0"},700);
    $(".sub_menu").hide();


  });

  $("#menu_content h3").click(function(){
    $("#menu_content").animate({"right":"-100%"},700);
    $("#menu img").show();


  });

  $("#menu_content li").click(function(){
    $(this).children(".sub_menu").slideToggle();
    $("#menu_content li").not(this).children(".sub_menu").slideUp();


  });




    //#section2
    $(".jelly_bar li").eq(0).css("background","rgba(0,0,0,0)");
    $(".jelly_prouct li").hide();
    $(".jelly_prouct li").eq(0).show();
  
    $(".jelly_bar li").click(function(){
        $(".jelly_bar li").removeClass("jelly_bar_over");
        $(this).addClass("jelly_bar_over");
  
        var barNum = $(this).index();
        $(".jelly_prouct li").hide();
        $(".jelly_prouct li").eq(barNum).show();
  
  
    });



    //product
    
    // FAQ - 아코디언
    $("#often li").click(function(){
      $(this).children(".answer").slideToggle();
      $("#section5 li").not(this).children(".answer").slideUp();
      // .answer 초기화 열고 닫히고
      




    });


    
});