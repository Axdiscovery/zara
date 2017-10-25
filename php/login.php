<?php
	header("Content-type: text/html; charset=utf-8");
	$email=$_POST['userEmail'];
	$userPass=$_POST['userPass'];
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		die("注册失败:".mysql_error());
	}else{
		mysql_select_db("zaradb",$con);
		
		$str="select * from  ZaraUser where userEmail='".$email."' and userPass='".$userPass."'";
			
		$t=mysql_query($str,$con);
		
		mysql_close($con);	
		if(mysql_num_rows($t)==1){
			echo "1";
		}else{
			echo "0";
		}
	}
?>