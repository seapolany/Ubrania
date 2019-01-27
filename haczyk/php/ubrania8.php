<?php
//dodawanie ubran do bazy
	require_once 'login.php';
	require_once 'functions.php';
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	
	//$rows = mysql_num_rows($result);
	$nazwa_ubr=($_POST['nazwa_ubr']);
	$nazwa_ubr=mb_convert_case($nazwa_ubr,MB_CASE_TITLE,"UTF-8");
	//$nazwa_ubr=sanitizeString($nazwa_ubr);
		
	//$nazwa_ubrBPZ = _no_pl($nazwa_ubr);
	//$nazwa_ubrBPZ = strtr($_POST['nazwa_ubr'], 'ĘÓĄŚŁŻŹŃęóąśłżźćń', 'EOASLZZCNeoaslzzcn');
		
	//$nazwa_ubrBPZ=win2iso($_POST['nazwa_ubr']);
		
	//$id_ubr=substr($nazwa_ubr,0,2);
	$spsPom=sanitizeString($_POST['spsPom']);
	$query = "INSERT INTO `ubrania`.`ubrania` (`id`, `opis`, `typ_0`) VALUES (NULL, '".$nazwa_ubr."', '".$spsPom."');";
	//$query = "SELECT count(*)  FROM `ubrania` WHERE `id` LIKE '".$id_ubr."%'";
	$result = mysql_query($query);
	

	echo $result;
		
	mysql_close($db_server);

	
//echo "test_8";	

?>