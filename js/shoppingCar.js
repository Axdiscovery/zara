
//购物车页面单品展示     （根据图片尺寸不同,采用瀑布流方式排列）
$(function(){
	for(var i=1;i<=10;i++){
		$("<img src='img/s"+i+".jpg'/>").appendTo("#goodsShow");	
	}	
});
// 选择尺寸

$(".goodsCarUls li").bind({
    click:function(){
        $(".threeH6").replaceWith($(this).text());          
        $(".goodsCarUls").hide();
    },
    mouseenter:function(){$(this).css("background","#ccc");},
    mouseleave:function(){$(this).css("background","white");}
});

//购物篮  goodsBasket   通过添加按钮addGoods在网页弹出购物篮     ？？？？动态添加物品
$(".addGoods").click(function(){
    $(".basketUls").show(goodsCar);

});

//点击查看购物篮按钮  basketBtn进入购物车页面
function goodsCar(){
    $(".basketBtn").click(function(){
		$("section").load("shoppingCar2.html",moneyTotal);
		$(".basketUls").hide();
    })
}


// 点击聊天按钮 chatBtn弹出聊天对话框
$(".chatBtn").click(function(){
    
})


// shoppingCar2  ------费用总计页面
 function moneyTotal(){

    //商品数量的增、减
    let Num = Number($(".goodsNum").text());
    $(".addNum").click(function(){
        $(".goodsNum").text(++Num);
        $(".totalPirce").text(Num*$(".pirce").text()+".00");    
    });
    $(".reduceNum").click(function(){
        if(Num==0){
          $(".goodsNum").text("0"); 
            $(".totalPirce").text(0);    
        }else{
            $(".goodsNum").text(--Num);
        $(".totalPirce").text(Num*$(".pirce").text()+".00");    

        }  
    });
    //通过点击×删除改行商品
    $(".delete").click(function(){
        $(this).parent().remove();
    })
 }

 