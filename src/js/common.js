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





//吸顶菜单
(function(){
    var nav = document.querySelector(".cheader");
    var h = 10;
    window.onscroll = function(){
        
        var sTop = document.documentElement.scrollTop || document.body.scrollTop;
        if( sTop > h ){
          nav.style.display = "block";
          nav.style.position = "fixed";
          nav.style.top = 0;
          nav.style.zIndex = "5"
        }
      }

})()


// 导航选择菜单
$(".lii1").mouseenter(function(){
    $(".twoSelect").slideDown(400);
    
  })
  $(".nav").mouseleave(function(){
    $(".twoSelect").slideUp(400);
   
  })


//   商品列表
// 通用的工具 ;
// 通用的函数封装。

function _(selector){
    var ele = document.querySelectorAll(selector);
    if(ele.length == 0) return null;
    return  ele.length == 1 ? ele[0] : ele; 
}
function _ajax(url){
    return new Promise(function(resolve , reject){
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url);
          xhr.send(null);
          xhr.onload = function(){
                if(xhr.status === 200){
                      resolve(xhr.response);
                }
          }
    })
}
function _jsonp(url , cb){
    return new Promise(function( resolve , reject ){
          cb = cb ? cb : "callback";
          var randomName = "cb"+Date.now();
          var script = document.createElement("script");
          url += (/\?/.test(url) ? "&" : "?") + `${cb}=${randomName}`;
          script.src = url;
          document.body.appendChild(script);
          script.onload = function(){
                this.remove();
          }
          window[randomName] = function(res){
                resolve(res)
          }
    })
}
// 兼容型伪数组转换成真数组;
function _slice(args){
    return Array.prototype.slice.call(args);
}

function _removeClass(dom , className){
    return  dom.className = dom.className.replace(className, "");
}