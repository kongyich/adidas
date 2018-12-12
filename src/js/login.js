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
login_phonenum.onblur = function(){
	var num = login_phonenum.value;
	var reg = /^1[35678]\d{9}$/;
	if( !reg.test(num) ){
		login_wrongphone.innerHTML = "";
		login_wrongphone.style.display = "block";
		login_phone.style.border=" 1px solid red";
		var str = `<p style = "text-align: center;color:red;font-size : 12px">请输入正确的手机号码<p>`;
		login_wrongphone.innerHTML = str;
		phonenum_1 = false;
		
	}else{
		login_wrongphone.innerHTML = "";
		login_wrongphone.style.display = "none";
		login_phone.style.border=" 1px solid #8D8D8D";
		phonenum_1 = true;
	}
}

var yourpassword_1 = false;
login_yourpassword.onblur = function(){
	var num = login_yourpassword.value;
	var reg = /^\w{9,13}$/;
	if( !reg.test(num)){
		login_wrongpassword.innerHTML = "";
		login_wrongpassword.style.display = "block";
		login_yourpassword.style.border=" 1px solid red"
		var str = `<p style = "text-align: center;color:red;font-size : 12px">请输入至少9位至多13位的字母或数字或下划线<p>`;
		login_wrongpassword.innerHTML = str;
		yourpassword_1 = false;
	}else{
		login_wrongpassword.innerHTML = "";
		login_wrongpassword.style.display = "none";
		login_yourpassword.style.border=" 1px solid #8D8D8D"
		yourpassword_1 = true;
	}
}

var countchecked = 1;
login_checked.onclick = function(){
	if( countchecked%2 == 1){
		login_checked_span.style.display = "none	"
	}else{
		login_checked_span.style.display = "inline-block"
	}
	countchecked++;
}
var user = localStorage.getItem("user");
user = JSON.parse(user);
console.log(user);
login_goin.onclick = function(){
	if( phonenum_1&&yourpassword_1 ){
		if( user.id == login_phonenum.value&&user.pwd == login_yourpassword.value ){
			login_wronglogin.innerHTML = "";
			login_wronglogin.style.display = "none";
			location.href = "index.html";
		}else{
			login_wronglogin.innerHTML = "";
			login_wronglogin.style.display = "block";
			var str = `<p style = "text-align: center;color:red;font-size : 12px">账号或密码不正确<p>`;
			login_wronglogin.innerHTML = str;
		}
	}
}