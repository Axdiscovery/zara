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
//电子邮箱
$(".userMsg input[name='email']").focus(function(){
	$(this).next(".hint").text("请输入你的电子邮箱地址");
});

//密码

$(".userMsg input[name='password']").focus(function(){
	$(this).next(".hint").text("至少八个字母以上，须包含大写字母、小写字母和数字。");
})

//姓名

$(".userMsg input[name='username']").focus(function(){
	$(this).next(".hint").text("请输入你的名字");
})

//省、市、区获取	
//所有的省市数据（来自服务器）

$(function(){
	$("#province").citySelect({
		prov:"选择", 
		city:"--",
		dist:"--",
		nodata:"none"
	});
	
});

//地址

$(".userMsg input[name='adress']").focus(function(){
	$(this).next(".hint").text("请输入你的地址，使用第二个字段注明附加信息（长地址、门牌号等）");
})

//邮政编码

$(".userMsg input[name='post_code']").focus(function(){
	$(this).next(".hint").text("请输入6位邮政编码，例如：123456，200120，101300");
})

//电话号码

$(".userMsg input[name='telephone']").focus(function(){
	$(this).next(".hint").text("请输入电话号码以便联系；例如：+86 1369999999");
})



