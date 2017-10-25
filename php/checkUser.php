<?php
	header("content-type:text/html;charset=utf-8");
	$userId=$_GET['userId'];
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "-1";		
	}else{
		mysql_select_db("zaradb",$con);
		
		$sqlStr="select * from  zarauser where userId='".$userId."'";
	   // echo $sqlStr;
		$result = mysql_query($sqlStr,$con);
		//4)、关闭数据库
		mysql_close($con);
		
		//数据库中查询出结果，表示用户名已经存在表中。
		if(mysql_num_rows($result)==1){
			echo "1";
		}else{
			echo "0";
		}	
	}
	
	
?>