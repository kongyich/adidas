

var container = _(".container-goodslist");
var pagebox = _(".page-box");

var page_num = 0;
var show_num = 8;
// 页面渲染的数组;
var json = null;

// 1. 渲染页面;
// 1. jsonp加载数据;

_jsonp("https://list.mogujie.com/search")
.then(function(res){
      json = res.result.wall.list;
      // console.log(json);
      _renderPage();

      // 计算页数，制作页数按钮;
      _renderBtn();

      // 绑定事件;
      _bindBtnEvent();
})


function _renderPage(){
      var html = "";
      json.forEach(function(item,index){
            // console.log(item);

            // 根据页码 , 每页显示的数量去进行页面的渲染;
            // => 在分页规律txt之中查找规律; 自己写一些规律;
            if(!(index >= page_num * show_num  &&  index <= page_num * show_num + show_num - 1)) return false;

            html += `
                        <div class="goods-box">
                              <div class="good-image">
                                    <img src="${item.show.img}" alt="">
                              </div>
                              <div class="good-title">
                                    <p>${item.title}</p>
                              </div>
                              <div class="line"></div>
                              <div class="good-detail">
                                    <span class="detail-price">
                                          ${item.price}
                                    </span>
                                    <div class="detail-start">
                                          <i>★ </i>
                                          <span>${item.itemMarks.split(" ")[0]}</span>
                                    </div>
                              </div>
                        </div>
                  `
      });

      container.innerHTML = html;
      return html;
}

function _renderBtn(){
      // 计算共有多少页。
      var item_num = json.length;
      var page_count = Math.ceil(item_num / show_num);
      // console.log(page_count);

      var fragement = document.createDocumentFragment();
      for(var i = 0 ; i < page_count ; i ++){
            var span = document.createElement("span");
            span.innerHTML = i + 1;
            fragement.appendChild(span);
            if(i === page_num){
                  span.className = "active";
            }
      }
      pagebox.innerHTML = "";
      pagebox.appendChild(fragement)

}

function _bindBtnEvent(){
      var btns = _slice(pagebox.children);
      btns.forEach(function(btn,index){
            btn.onclick = _handleBtnEvent.bind({} , index , btns);
      })
}

function _handleBtnEvent(index , btns){
      // 根据下标 , 更改page_num ;
      // 重新渲染页面 ;
      // console.log(this , index);
      page_num = index;

      // 给当前按钮添加active;
      btns.forEach(function(btn){
            _removeClass(btn , "active");
      })

      btns[index].className = "active";

      _renderPage();
}

// 切换每页显示数量;

// console.time("render");

// // 统一进行插入;

// var fragement = document.createDocumentFragment();

// // console.log(fragement)

// for(var i = 0 ; i < 10000 ; i ++){
//       var span = document.createElement("span");
//       span.innerHTML = i + 1;
//       fragement.appendChild(span);
// }

// pagebox.appendChild(fragement)

// console.timeEnd("render");

var select_show = _("#select_show");
select_show.onchange = function(){
      // console.log(this.value);
      show_num = Number(this.value);
      _renderPage();
      _renderBtn();
      _bindBtnEvent();
}





