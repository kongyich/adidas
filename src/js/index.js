

//banner轮播图

  var mySwiper = new Swiper ('.swiper-container', {
    
      loop: true, // 循环模式选项
      speed:2000,
      autoplay : {
          delay:3000
        },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })  













//case1

       $(".case1Con_botton").show();
       $(".case1Con_botton2").hide();
       $(".btn1").click(function(){
            $(".case1Con_botton").show();
            $(".case1Con_botton2").hide();
       });
      $(".btn2").click(function(){
        $(".case1Con_botton2").show();
        $(".case1Con_botton").hide();
       });


//case2

    // var mySwiper = new Swiper ('.swiper-container', {
      
    //   loop: true, // 循环模式选项
    //   speed:1600,
    //   // 如果需要分页器
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
      
    //   // 如果需要前进后退按钮
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
      
    
    // })   

     
//返回顶部
$(".back").click(function(){
  $("html,body").animate({scrollTop:0},500)
 })



 

