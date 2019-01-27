
<?php
require_once 'loginDB.php';
require_once 'functions.php';

		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	
	$id_ludz=sanitizeString($_POST['id_ludz']);
	//$pstLng=count($_POST);
	
	//echo "<script> $('#box_1').html($id_ludz); </script>";

	//UPDATE `ubrania`.`ludzie` SET `roz_pod` = 'L', `roz_ubr` = '11', `roz_but` = '33', `roz_ksk` = '33', `dzial` = 'tt' WHERE `ludzie`.`id` = 6997058;
	//$sql = "UPDATE `ubrania`.`ludzie` SET `roz_pod` = '".$rozPod."', `roz_ubr` = '".$rozUbr."', `roz_but` = '".$rozBut0."', `roz_ksk` = '".$rozKsk0."', `dzial` = '".$dzial."' WHERE `ludzie`.`id` = '".$id_ludz."';";
	
	//$result = mysql_query("DELETE FROM `ubrania`.`ludzie` WHERE `ludzie`.`id` = ".$id_ludz.";");
	
	$result = mysql_query("UPDATE `ubrania`.`ludzie` SET `status` = '1' WHERE `ludzie`.`id` = ".$id_ludz.";");
	
	if (!$result) die ("Database access failed: " . mysql_error());
	
	$result = mysql_query("DELETE FROM `ubrania`.`ludz_zes` WHERE `ludz_zes`.`id_ludz` = ".$id_ludz.";");
	if (!$result) die ("Database access failed: " . mysql_error());
	
	mysql_close($db_server);
	//"DELETE FROM `ubrania`.`ludz_zes` WHERE `ludz_zes`.`id` = 81"
	
	//UPDATE `ubrania`.`ludzie` SET `roz_pod` = '".$rozPod."', `roz_ubr` = '".$rozUbr."', `roz_but` = '".$rozBut0."', `roz_ksk` = '".$rozKsk0."', `dzial` = '".$dzial."' WHERE `ludzie`.`id` = '".$id_ludz."';");
	
	echo "<script> $('#box_1').html($id_ludz); </script>";
	
		
?>