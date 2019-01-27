
<?php
//przetwarzanie nowego zestawu ubraniowego
	require_once 'login.php';
	require_once 'functions.php';
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	//----------------------------------------------
	
	$idZestawu= sanitizeString($_POST['idZestawu']);
	$elemID = sanitizeString($_POST['elemID']);
	$ileElm=sanitizeString($_POST['ileElm']);
	$czasUz=sanitizeString($_POST['czasUz']);
	$cechElem=sanitizeString($_POST['cechElem']);
	
	
	//echo $idZestawu.' -> '.$elemID;
	
	$query0 = "DELETE FROM `ubrania`.`zst_ubr` WHERE `zst_ubr`.`id_zst` = '".$idZestawu."' AND `zst_ubr`.`id_ubr` = '".$elemID."'AND `zst_ubr`.`ilosc` = '".$ileElm."'AND `zst_ubr`.`okres` = '".$czasUz."'AND `zst_ubr`.`cecha` = '".$cechElem."';";
	$result0 = mysql_query($query0);
	if (!$result0) die ("Database access failed: " . mysql_error());
	
	mysql_close($db_server);
		
	echo "Dane usunięte.....<br>";	

?>
