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
