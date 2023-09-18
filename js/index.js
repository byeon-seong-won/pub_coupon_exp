$(document).ready(function() {




   /*---------- main : tab script ----------*/
  // 상단 탭메뉴 클릭
  $(".tabsection .tab li").click(function() {
    let result = $(this).attr("data-alt");
    $(".tabsection .tabContent>div").removeClass("active");
    $("#" + result).addClass("active");
    window.scrollTo({ top: 0});  
  });

  $(".tabsection .tab li").click(function() {
    $(this).addClass("on");
    $(this).siblings("li").removeClass("on");
  });
  /*---------- /// tab script /// ----------*/








  /*---------- alert script ----------*/
  // 알림창 - 토글버튼
  $('.slider-toggle .slider').click(function(){
    $(this).parent('.slider-toggle')
        .toggleClass('left')
        .toggleClass('right');
  });


  // 알림창 팝업
  let right;
  $('.slider').click(function() {
    if(right !== true) {
      $(".modal_del").fadeIn();
    }
    right = false;
  })
  $(".close_no, .close_btn").click(function() {
    $(".modal_del").fadeOut();
    $('.slider-toggle').removeClass('right')
    right = false;
  })

  $(".close_yes").click(function() {
    $(".modal_del").fadeOut();
    $('.slider-toggle').removeClass('left')
    right = true;
  })
  /*---------- /// alert script /// ----------*/








  /*---------- faq script ----------*/
   /* accordion */
   $(".accordion_title").click(function() {
    $(this).find("p").toggleClass("active");     
    $(this).addClass("active");
    $(this).find("img").toggleClass("active");
    $(this).next().stop().slideToggle();
  });

   /*---------- /// faq script /// ----------*/








    /*---------- detail : tab script ----------*/
    // 상단 탭메뉴 클릭
    $(".tabmenu .tab li").click(function() {
      let result = $(this).attr("data-alt");
      $(".tabmenu .tabContent>div").removeClass("active");
      $("#" + result).addClass("active");
      window.scrollTo({ top: 0});  
    });

    $(".tabmenu .tab li").click(function() {
      $(this).addClass("on");
      $(this).siblings("li").removeClass("on");
    });
    /*---------- /// detail : tab script /// ----------*/





    


    /*---------- subsc script ----------*/
    // 구독하기 클릭
    $(".subscBtn").click(function() {
      $(".pur_detail").css({"bottom":"0","z-index":"10000"})
      $(".pur_detail_wp").css({"display":"block"})
      $(".footer_like").css({"display":"none"})
      $(".content_footer_ul").css({"width":"100%"});
      $(".content_footer_ul>li:nth-child(1)").text("장바구니");
    })
    
    // 구독하기 - 닫기 클릭
    $(".pur_detail .close").click(function() {
      $(".pur_detail_wp").css({"display":"none"})
      $(".footer_like").css({"display":"block"})
      $(".content_footer_ul").css({"width":"calc(100% - 60px)"});
      $(".content_footer_ul>li:nth-child(1)").text("선물하기");
    })
     /*---------- /// subsc script /// ----------*/






    //  include
    $(document).ready(function () {
        $("#header").load("header.html");  
        $("#footer").load("footer.html");  
    });











});