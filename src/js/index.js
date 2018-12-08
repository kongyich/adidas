// header部分点击显示隐藏
(function(){
    $(".emillevent").mouseenter(function(){
        $(".divnone").slideDown(600);
        $(".nav").animate({top: '+250px'}, "slow");

    })
    $(".emillevent").mouseleave(function(){
        $(".divnone").slideUp(600);
        $(".nav").stop().animate({top: '-=221px'}, "slow");

    })
})()

// $_emillevent = $(".emillevent");
// $_emillevent.on("click" , function(){
//              $(".divnone").slideDown(500);
//              $(".nav").animate({top: '+245px'}, "slow");
    
//          })

//banner轮播图

var mySwiper = new Swiper ('.swiper-container', {
   
    loop: true, // 循环模式选项
   
    autoplay:true,
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




  var oTxt = document.querySelector("#txt");
  var oUl = document.querySelector(".inu");

  oTxt.onkeyup = function(){
      oUl.innerHTML = '';
      var sc = document.createElement('script');
      sc.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + this.value + "&cb=fn";
      document.querySelector('head').appendChild(sc);
  }

  function fn(data){

      for(var i = 0; i < data.s.length; i ++){
          var li = document.createElement("li");
          li.innerHTML = data.s[i];
          oUl.appendChild(li);
          oUl.style.display = 'block';


          var items = oUl.children;
          for(var i=0; i<items.length; i++){
            items[i].onclick = function(){
              oTxt.value = this.innerHTML;
              oUl.style.display = "none";
            }

      }


     }

}



