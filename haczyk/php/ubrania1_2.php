
<?php
//przetwarzanie nowego zestawu ubraniowego
	require_once 'login.php';
	require_once 'functions.php';
		
	$row_id= sanitizeString($_POST['row_id']);
	$elemID = sanitizeString($_POST['elemID']);
	$ileElm=sanitizeString($_POST['ileElm']);
	$czasUz=sanitizeString($_POST['czasUz']);
	//$cechElem1=sanitizeString($_POST['cechElem']);
	$cechElem=mb_convert_case($_POST['cechElem'],MB_CASE_UPPER,"UTF-8");
			
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
		
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
			
			
			
	$query0 = "UPDATE `ubrania`.`zst_ubr` SET `ilosc` = '".$ileElm."', `okres` = '".$czasUz."', `cecha` = '".$cechElem."' WHERE `zst_ubr`.`NUM_KOL` = ".$row_id.";";
	$result0 = mysql_query($query0);
	if (!$result0) die ("Database access failed: " . mysql_error());
	mysql_close($db_server);			
	//echo $idZestawu.' -> '.$elemID;
?>

