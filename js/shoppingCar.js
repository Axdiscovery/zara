
//购物车页面单品展示     （根据图片尺寸不同,采用瀑布流方式排列）
$(function(){
	for(let i=1;i<=10;i++){
	
		$("<img src='img/s"+i+".jpg'/>").appendTo("#goodsShow");	
	}	
});
	


