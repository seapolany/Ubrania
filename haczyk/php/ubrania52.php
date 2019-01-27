<?php

	require_once 'login.php';
	require_once 'functions.php';

	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	
	$idLudz = sanitizeString($_POST['idLudz']);
	$dataR = sanitizeString($_POST['dataR']);
	$ilosc = sanitizeString($_POST['ilosc']);
	$numRuch = time();
	
	for ($j = 0 ; $j < $ilosc ; $j++){

		$id_ubr = sanitizeString($_POST['elem'.$j]);
		$rozmiar = sanitizeString($_POST['rozElem'.$j]);
		//$cecha = sanitizeString($_POST['cechElem'.$j]);
		$cecha=mb_convert_case($_POST['cechElem'.$j],MB_CASE_UPPER,"UTF-8");
		$iloscElem = sanitizeString($_POST['iloElem'.$j]);
		if(!$iloscElem){continue;}
		$zap0=" INSERT INTO `ubrania`.`ruch` (`numKol`, `numRuch`, `id_ludz`, `id_ubr`, `data_r`, `skan`, `rozmiar`, `cecha`, `ilosc`) VALUES (NULL, '".$numRuch."','".$idLudz."', '".$id_ubr."', '".$dataR."', '', '".$rozmiar."', '".$cecha."', '".$iloscElem."');";
		//$zap0.=" VALUES (NULL, '".$numRuch."','".$idLudz."', '".$id_ubr."', '".$dataR."', '', '".$rozmiar."', '".$cecha."', '".$iloscElem."'); ";
		//echo $zap0;
		//echo '>>'.$elem.' = '.$id_ubr;
		mysql_query($zap0);
	}
	
	//echo '>'.$idLudz.'>'.$dataR.'>'.$ilosc.'>'.$elem;
	//echo $zap0;
	
	//mysql_query($zap0);
	
	mysql_close($db_server);
?>