
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
	
	//$idZestawu = sanitizeString($_POST['idZestawu']);
	$idZestawu=mb_convert_case(sanitizeString($_POST['idZestawu']),MB_CASE_UPPER,"UTF-8");
	
	$opisZestawu = sanitizeString($_POST['opisZestawu']);
	
	$query0 = "SELECT * FROM `zestawy` WHERE `id` LIKE '".$idZestawu."';";
	$result0 = mysql_query($query0);
	if (!$result0) die ("Database access failed: " . mysql_error());
	
	$rows0 = mysql_num_rows($result0);
	//echo "ilosc: $rows0<br>";
	
	if ($rows0) {
		echo 'Uwaga, taki zestaw już isnieje!';
		return;
		//echo '!!!!!!!!!!!!!!!!!!!';
		}
	else{
		$query0 = "INSERT INTO `ubrania`.`zestawy` (`id`, `nazwa`) VALUES ('".$idZestawu."', '".$opisZestawu."');";
		$result0 = mysql_query($query0);
		if (!$result0) die ("Database access failed: " . mysql_error());
		//echo '@@@@@@@@@@@@@@@@@@@@@@@';			
		}
	//
	
	
	
	
	
	$ilosc = (count($_POST)/4)-0.5;
	
	//echo "ilosc: $ilosc<br>";
	
	for ($j = 0 ; $j < $ilosc ; $j++){

		$elemID = sanitizeString($_POST['elemID'.$j]);
		$kolorElem=mb_convert_case($_POST['kolorElem'.$j],MB_CASE_UPPER,"UTF-8");
		$ilElem = sanitizeString($_POST['ilElem'.$j]);
		if(!$ilElem){continue;}
		$czasElem = sanitizeString($_POST['czasElem'.$j]);
		
		$zap0="INSERT INTO `ubrania`.`zst_ubr` (`NUM_KOL`, `id_zst`, `id_ubr`, `ilosc`, `okres`, `cecha`) VALUES (NULL, '".$idZestawu."', '".$elemID."', '".$ilElem."', '".$czasElem."', '".$kolorElem."');";
		
		mysql_query($zap0);
	}
	
	
	
	//----------------------------------------------
	
	
	//$query1 = "SELECT DISTINCT `cecha` FROM `zst_ubr` ORDER BY `zst_ubr`.`cecha` ASC";
	//$result1 = mysql_query($query1);
	//if (!$result1) die ("Database access failed: " . mysql_error());
	//$rows1 = mysql_num_rows($result1);
	
	//----------------------------------------------
	
	
	mysql_close($db_server);
		
	echo "Dane wprowadzone.....<br>";	
	/*	
	$ileZm=count($_POST);
	echo 'Tablica ma '.$ileZm.' elementów<br>';
	$j = 0;
	foreach($_POST as $elem)
		{
		echo "$j: $elem<br>";
		++$j;
		}
	*/
?>
