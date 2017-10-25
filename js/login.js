// 登录页面    login.html
$("#loginBtn").click(function(){
	$.ajax({
		type:"post",
		url:"php/login.php",
		async:true,
		data:{
			userEmail:$("#emailIpt").val(),
			userPass:$("#passIpt").val()
		},
		success:function(data){
			if(data=="1"){
				//保存cookie
				addCookie("userEmail",$('#emailIpt').val(),7);
				location.href="index.html";
			}else{
				alert("您输入的email或者密码错误！");
			}
		}
		
	});
});

//跳转注册页面   register.html

$(".btn01").click(function(){
	$("#regist").load("register.html",regfunc)
});
//导航栏点击跳转index.html

$("#navBox").load("index.html nav",function(){
	$("nav h2,nav #info").click(function(){
		location.href="index.html"
	});
});
function regfunc(){
	//注册页面，当光标离开提示“必选项”
	//电子邮箱
	$(".userMsg input[name='userEmail']").bind({focus:function(){
		$(this).next(".hint").text("请输入你的电子邮箱地址");},
		blur:function(){
	        regCheck('email',this)
		}
	})				
	//密码

	$(".userMsg input[name='userPass']").bind({focus:function(){
		$(this).next(".hint").text("只能输入6-20个字母、数字、下划线");},
	    blur:function(){
	        regCheck('password',this)
	    }
	})			
	//姓名
	$(".userMsg input[name='userName']").bind({focus:function(){
		$(this).next(".hint").text("输入5-20个以字母开头、可带数字、“_”、“.”的字串");},
	    blur:function(){
	        regCheck('username',this)
	    }
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
	//会员ID

	$(".userMsg input[name='userId']").bind({focus:function(){
		$(this).next(".hint").text("请输入5位号码，例如：123456，200120，101300");},
	    blur:function(){
	    	regCheck('userId',this)
		}
	})
	//电话号码

	$(".userMsg input[name='telephone']").bind({focus:function(){
		$(this).next(".hint").text("请输入电话号码以便联系；例如：+86 1369999999");},
	    blur:function(){
	        regCheck('phone',this)
	    }
	})

	$("#userId").blur(function(){
		$.ajax({
			type:"get",
			url:"php/checkUser.php",
			async:true,
			data:{
				userId:$(this).val()
			},
			success:function(data){
				if(data=="1"){
					$("#hint").html("用户名已经存在");
				}else if(data=="0"){
					$("#hint").html("用户名可用");
				}else if(data=="-1"){
					$("#hint").html("服务器端异常");
				}
			}
		})
	})

}

	

// 正则验证函数
function checkAll(type,str){
    var reg="";
    switch(type){
        //必须有@和.，而且@在.的前面，而且，@不能开头，@前面可以是数字字母下划线和点。
        case "email":reg = /^[\w\.]+@\w+(\.com|\.net|\.cn|\.com\.cn)$/;break;
        //只能输入6-20个字母、数字、下划线
		case "password":reg =/^(\w){6,20}$/;break;
		//只能输入5-20个以字母开头、可带数字、“_”、“.”的字串
		case "username": reg=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/; ;break;
        //以1开头，第二位只能是3,4,5,7,8，后面是9位的数字
        case "phone":reg = /^1[34578]\d{9}$/;break;
        //6位数字
        case "userId":reg = /^[0-9]\d{4}/; break;
        default:break;
    }
    if(reg.test(str)){
        return true;
    }
    return false;
}
function regCheck(types,that){
    if($(that).val()==0){
        $(that).next(".hint").text("此处为必选项");
    }else if(checkAll(types,$(that).val())){
        $(that).next(".hint").text("√");
    }else{
        $(that).next(".hint").text("×");
    }
}

																							



//添加cookie
//参数：
//键，
//值，
//时长：单位是天
//访问的路径，
//访问的主机

//返回值：无
function addCookie(key,value,dayCount,path,domain){
	var d =new Date();
	d.setDate(d.getDate()+dayCount);
	var cookieStr = key+"="+escape(value)+";expires="+d.toGMTString();
	if(path){
		cookieStr+=";path="+path;
	}
	if(domain){
		cookieStr+=";domain="+domain;		
	}
	document.cookie = cookieStr;
}

