<?php
//dodawanie danych do tabeli sql
	require_once 'login.php';
	require_once 'functions.php';
	
	$tab_id = sanitizeString($_POST['tab_id']);
	$ubrElem = sanitizeString($_POST['ubrElem']);
	$czasUbr = sanitizeString($_POST['czasUbr']);
	$cechaUbr = sanitizeString($_POST['cechaUbr']);
	$ubrIlosc = sanitizeString($_POST['ubrIlosc']);
	
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	
	
	//INSERT INTO `ubrania`.`zst_ubr` (`NUM_KOL`, `id_zst`, `id_ubr`, `ilosc`, `okres`, `cecha`) VALUES (NULL, 'aa', 'bb', '1', '3', 'dd');
	//"DELETE FROM `ubrania`.`zst_ubr` WHERE `zst_ubr`.`NUM_KOL` = 141"
	//UPDATE `ubrania`.`zst_ubr` SET `ilosc` = '22' WHERE `zst_ubr`.`NUM_KOL` = 2;
	
	$query = "INSERT INTO `ubrania`.`zst_ubr` (`NUM_KOL`, `id_zst`, `id_ubr`, `ilosc`, `okres`, `cecha`) VALUES (NULL, '".$tab_id."', '".$ubrElem."', '".$ubrIlosc."', '".$czasUbr."', '".$cechaUbr."');";
	//$query = "SELECT * FROM ludzie";
	$result = mysql_query($query);
	if (!$result) die ("Database access failed: " . mysql_error());
	
	
	mysql_close($db_server);

	
//echo "test_8";	

?>



