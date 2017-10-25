<?php
	header("content-type:text/html;charset=utf-8");
	$userId = $_POST['userId'];
	$userEmail = $_POST['userEmail'];
	$userName=$_POST['userName'];
	$userPass = $_POST['userPass'];	

	
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "注册失败，服务器异常......";
	}else{
		mysql_select_db("zaradb",$con);
		$str="insert into zarauser(userId,userEmail,userName,userPass) values
		
		('".$userId."','".$userEmail."','".$userName."','".$userPass."')";
		
		$t=mysql_query($str,$con);
		mysql_close($con);
		if($t==1){
			echo "亲，注册成功";
		}else{
			echo "亲，注册失败";
		}
	}
	
?>