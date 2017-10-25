//header文件

$("header").load("index.html header",function(){
	if(getCookie("userEmail")){
		$("#login_a").text(getCookie("userEmail"));
	}
	$("#hoverCar").hover(function(){
    	$(".basketUls").toggle(1000,goodsCar);

	});
});


// nav-------- 
$("#navBox").load("index.html nav",navShow);
	
function navShow(){						
	
	$("nav h2,nav #info").click(function(){		//点击h2标题，隐藏的副标题出现，
		if($(this).next().attr('onceClick')){	//通过点击不同菜单，关闭之间打开的菜单
			$(this).next().removeClass('ulShow').removeAttr('onceClick');
		}else{
			$(this).next().addClass('ulShow').siblings('ul').removeClass('ulShow');
			$(this).next().attr('onceClick',true).siblings('ul').removeAttr('onceClick');
		}
	});
	//女士
	$(".womanAllshop li").click(function(){
		$("section").load("shopping.html .w",showGoods)   //通过点h2下的副标题，进行页面转换
	});
	//男士
	$(".manAllshop li").click(function(){
		$("section").load("shopping.html .m",showGoods)    //通过点h2下的副标题，进行页面转换
	});
	//童装
	$(".childAllshop li").click(function(){
		$("section").load("shopping.html .c",showGoods);	//通过点h2下的副标题，进行页面转换
	});

	function showGoods(){
        $(".shop_uls li img").click(function(){
			location.href="shoppingCar.html"
        })
	}

    // +资讯 ---根据滚动条的位置确定nav偏移程度 
	$("#info").bind("click",function(){
		if($(window).scrollTop()<=150){
			$("#news_a").toggle(function(){
					$("nav").animate({
						top: -1*$(window).scrollTop()
					},100)
			})
		}else{
			$("#news_a").toggle(function(){
				$("nav").animate({
					top: -150
				},100)
			})
		}
	});	
}

$("#footer_Ipt").keydown(function(){
	$("#form_sex").show();
});

//footer中的help内容
$("footer .help").load("login.html .help dl");




function getCookie(key){
	var cookieStr = unescape(document.cookie);
	//1、分割数组
	var arr = cookieStr.split("; ");	
	//2、在数组里查找
	for(var i=0;i<arr.length;i++){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].substring(key.length+1);
		}
	}
	return null;
}




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