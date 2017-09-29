//Selection
// 轮播图
	cbpBGSlideshow.init();	
// nav--------      
	$("nav h2,nav #info").click(function(){											//点击h2标题，隐藏的副标题出现，
			if($(this).next().attr('onceClick')){									//通过点击不同菜单，关闭之间打开的菜单
				$(this).next().removeClass('ulShow').removeAttr('onceClick');
			}else{
				$(this).next().addClass('ulShow').siblings('ul').removeClass('ulShow');
				$(this).next().attr('onceClick',true).siblings('ul').removeAttr('onceClick');
			}
	});
	//女士
	$(".womanAllshop li").click(function(){
		$("section").load("shopping.html .w" )    //通过点h2下的副标题，进行页面转换  
	});
	//男士
	$(".manAllshop li").click(function(){
		$("section").load("shopping.html .m" )    //通过点h2下的副标题，进行页面转换  
	});
	//童装
	$(".childAllshop li").click(function(){
		$("section").load("shopping.html .c" )    //通过点h2下的副标题，进行页面转换  
	});
	
	$(".shop_uls li img").click(function(){							//点击图片跳转到shoppingCar.html页面
		
	})
// +资讯
  //根据滚动条的位置确定nav偏移程度 
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

	$("#footer_Ipt").keydown(function(){
		$("#form_sex").show();
	})	;
//分割线 ______________________________________________________________________________________

