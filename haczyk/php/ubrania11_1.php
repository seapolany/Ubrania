<?php
	require_once 'login.php';
	require_once 'functions.php';
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	
		
	$idCzlow = sanitizeString($_POST['idCzlow']);
	$zestID = sanitizeString($_POST['zestID']);
	
	
	
	$query = "SELECT * FROM `ludz_zes` WHERE `id_ludz` = ".$idCzlow." ";
	$result = mysql_query($query);
	if (!$result) die ("Database access failed: " . mysql_error());
	$rows = mysql_num_rows($result);
	
	if($rows){
		if($zestID=="BRAK"){
			
			$query = "DELETE FROM `ubrania`.`ludz_zes` WHERE `ludz_zes`.`id_ludz` = ".$idCzlow.";";
			$result = mysql_query($query);
			if (!$result) die ("Database access failed: " . mysql_error());
			//$rows = mysql_num_rows($result);
			echo "Dane usunięte";
			
		}
		else{
			$query = "UPDATE `ubrania`.`ludz_zes` SET `id_zest` = '".$zestID."' WHERE `ludz_zes`.`id_ludz` = ".$idCzlow.";";
			$result = mysql_query($query);
			if (!$result) die ("Database access failed: " . mysql_error());
			//$rows = mysql_num_rows($result);
			echo "Dane zaktualizowane";
		}
	}
	else{
		//INSERT INTO `ubrania`.`ludz_zes` (`id`, `id_ludz`, `id_zest`) VALUES (NULL, '55', '55');
		$query = "INSERT INTO `ubrania`.`ludz_zes` (`id`, `id_ludz`, `id_zest`) VALUES (NULL, '".$idCzlow."', '".$zestID."');";
		$result = mysql_query($query);
		if (!$result) die ("Database access failed: " . mysql_error());
		//$rows = mysql_num_rows($result);
		echo "Dane wprowadzone";
		
	}

	mysql_close($db_server);
	
	
	
	
		

	
	
//echo "test_8";	

?>




