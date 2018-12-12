var oDiv = document.getElementsByClassName('list');
var oList = document.getElementsByClassName('mainlist');
var timer = null;
for( let i = 0 ; i < oList.length ; i++ ){
	oList[i].onmouseenter = function(){
		for( var j = 0 ; j < oList.length ; j++){
			oList[j].style.borderBottom = "none";
		}		
		none_div(oList[i].getAttribute("id"))
		clearInterval(timer);
		oList[i].style.borderBottom = "1px solid black";
	}
}
var none_div = function(div){
	for( var i = 0 ; i < oDiv.length ; i++){
		oDiv[i].style.display = 'none'
	}
	document.getElementById("list_"+div).style.display = "block";
}
for( let i = 0 ; i < oDiv.length ; i++){
	oDiv[i].onmouseleave = function(){
		timer = setTimeout(function(){
			oDiv[i].style.display = "none"
			oList[i].style.borderBottom = "none";
		},100)	
	}
	oDiv[i].onmouseenter = function(){
		oDiv[i].style.display = "block";
		clearInterval(timer)
	}
}
// header_input.onfocus = function(){
// 	var timer = null;
// 	var i = 0;
// 	timer = setInterval(function(){
// 		i++;
// 		header_div2_inputdiv.style.width = 192 + i + "px";
// 		if( i == 30 ){
// 			clearInterval(timer)
// 		}
// 	},10)	
// }
// header_input.onblur = function(){
// 	var timer = null;
// 	var i = 0;
// 	timer = setInterval(function(){
// 		i--;
// 		header_div2_inputdiv.style.width = 222 + i + "px";
// 		if( i == -30 ){
// 			clearInterval(timer)
// 		}
// 	},10)	
// }
// icon1.onmouseenter = function(){
// 	footer_img.style.display = "block";
// }
// icon1.onmouseleave = function(){
// 	footer_img.style.display = "none";
// }






var phonenum_1 = false;
var yanzhengma_1 = false;
phonenum.onblur = function(){
	var num = phonenum.value;
	var reg = /^1[35678]\d{9}$/;
	if( !reg.test(num) ){
		wrongphone.innerHTML = "";
		wrongphone.style.display = "block";
		phone.style.border=" 1px solid red";
		var str = `<p style = "text-align: center;color:red;font-size : 12px">请输入正确的手机号码<p>`;
		wrongphone.innerHTML = str;
		phonenum_1 = false;
		
	}else{
		wrongphone.innerHTML = "";
		wrongphone.style.display = "none";
		phone.style.border=" 1px solid #8D8D8D";
		phonenum_1 = true;
	}
}
yanzhengma.onblur = function(){
	if( yanzhengma.value != 123456 ){
		wrongnum.style.display = "block";
		check.style.border=" 1px solid red"
		var str = `<p style = "text-align: center;color:red;font-size : 12px">请输入正确的验证码<p>`
		wrongnum.innerHTML = str;
		yanzhengma_1 = false;
	}else{
		wrongnum.innerHTML = "";
		wrongnum.style.display = "none";
		check.style.border=" 1px solid #8D8D8D"
		yanzhengma_1 = true;
	}
}
continuebtn.onclick = function(){
	if( phonenum_1&&yanzhengma_1 ){
		first.style.display = "none";
		next.style.display = "block";
	}
}
var aname_1 = false;
aname.onblur = function(){
	var num = aname.value;
	var reg = /^[\u4e00-\u9fa5]{1,4}$/;
	if( !reg.test(num)){
		wrongname.innerHTML = "";
		wrongname.style.display = "block";
		var str = `<p style = "text-align: center;color:red;font-size : 12px">请输入正确的姓氏或名字<p>`;
		wrongname.innerHTML = str;
		aname.style.border=" 1px solid red"
		aname_1 = false;
	}else{
		wrongname.innerHTML = "";
		wrongname.style.display = "none";
		aname.style.border=" 1px solid #8D8D8D"
		aname_1 = true;
	}
}
var yourname_1 = false;
yourname.onblur = function(){
	var num = yourname.value;
	var reg = /^[\u4e00-\u9fa5]{1,4}$/;
	if( !reg.test(num)){
		wrongname.innerHTML = "";
		wrongname.style.display = "block";
		yourname.style.border=" 1px solid #8D8D8D"
		var str = `<p style = "text-align: center;color:red;font-size : 12px">请输入正确的姓氏或名字<p>`;
		wrongname.innerHTML = str;
		yourname_1 = false;
	}else{
		wrongname.innerHTML = "";
		wrongname.style.display = "none";
		yourname.style.border=" 1px solid #8D8D8D"
		yourname_1 = true;
	}
}
var yourpassword_1 = false;
yourpassword.onblur = function(){
	var num = yourpassword.value;
	var reg = /^\w{9,13}$/;
	if( !reg.test(num)){
		wrongpassword.innerHTML = "";
		wrongpassword.style.display = "block";
		yourpassword.style.border=" 1px solid red"
		var str = `<p style = "text-align: center;color:red;font-size : 12px">请输入至少9位至多13位的字母或数字或下划线<p>`;
		wrongpassword.innerHTML = str;
		yourpassword_1 = false;
	}else{
		wrongpassword.innerHTML = "";
		wrongpassword.style.display = "none";
		yourpassword.style.border=" 1px solid #8D8D8D"
		yourpassword_1 = true;
	}
}
a_span.onclick = function(){
	duihao1.style.display = "inline-block";
	duihao2.style.display = "none";
}
b_span.onclick = function(){
	duihao2.style.display = "inline-block";
	duihao1.style.display = "none";
}
var countchecked = 1;
checked.onclick = function(){
	if( countchecked%2 == 1){
		checked_span.style.display = "none	"
	}else{
		checked_span.style.display = "inline-block"
	}
	countchecked++;
}
sendcheck.onclick = function(){
	var count = 30;
	daojishi.style.display = "block";
	var timer = setInterval(function(){
		count--;
		if(count<0){
			daojishi.style.display = "none";
			clearInterval(timer)
			count = 0;
		}
		daoshu.innerHTML = count;		
	},1000)
}
goin.onclick = function(){
	if( aname_1&&yourname_1&&yourpassword_1 ){
		var user = {"id":phonenum.value,"pwd":yourpassword.value};
		localStorage.setItem("user",JSON.stringify(user));		
		next.style.display = "none";
		lastpage.style.display = "block";
		var count = 3;
		var timer = setInterval(function(){
			count--;
			if( count<0 ){
				clearInterval(timer);
				count = 3;
				lastpage.style.display = "none";
				location.href = "login.html"
			}else{
				tiaoindex.innerHTML = count;
			}			
		},1000)
	}
}
returnfirst.onclick = function(){
	next.style.display = "none";
	first.style.display = "block";
}

