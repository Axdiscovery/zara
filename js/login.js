//登录页面    login.html

//跳转注册页面   register.html

$(".btn01").click(function(){
	$("#regist").load("register.html")
});
//导航栏点击跳转index.html

$("nav h2,nav #info").click(function(){
	$("body").load("index.html" )    
});


//注册页面，当光标离开提示“必选项”

$(".userMsg input").blur(function(){
	if($(this).val()==0){	
		$(this).next(".hint").text("此处为必选项");
	}
})

//省、市、区获取	
//所有的省市数据（来自服务器）

$(function(){
	$("#province").citySelect({
		prov:"湖南", 
		city:"长沙",
		dist:"岳麓区",
		nodata:"none"
	});
	
});
