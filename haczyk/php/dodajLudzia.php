<?php
require_once 'loginDB.php';
require_once 'functions.php';
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	
	$sapId="NULL";
	$idLudzia=0;
	$plec = sanitizeString($_POST['plec']);
	$rozPod = sanitizeString($_POST['rozPod']);
	$rozUbr0 = sanitizeString($_POST['rozUbr0']);
	$rozUbr1 = sanitizeString($_POST['rozUbr1']);
	$rozUbr2 = sanitizeString($_POST['rozUbr2']);
	$rozUbr = $rozUbr0.'/'.$rozUbr1.'/'.$rozUbr2;
	$rozBut0 = sanitizeString($_POST['rozBut0']);
	$rozKsk0 = sanitizeString($_POST['rozKsk0']);
	$dzial = sanitizeString($_POST['dzial']);
	$imie=sanitizeString($imie);
	$imie=mb_convert_case($_POST['imie'],MB_CASE_TITLE,"UTF-8");
	$nazwisko=sanitizeString($nazwisko);
	$nazwisko=mb_convert_case($_POST['nazwisko'],MB_CASE_TITLE,"UTF-8");
	$zestUbr = sanitizeString($_POST['zestUbr']);
	
	if ($imie && $nazwisko && $plec){
		//$result = mysql_query("insert into ");
	 	$result = mysql_query("INSERT INTO `ubrania`.`ludzie` (`id`, `imie`, `nazwisko`, `plec`, `roz_pod`, `roz_ubr`, `roz_but`, `roz_ksk`, `dzial`, `status`) VALUES ('".$sapId."', '".$imie."', '".$nazwisko."', '".$plec."', '".$rozPod."', '".$rozUbr."', '".$rozBut0."', '".$rozKsk0."', '".$dzial."', '0')");
		if (!$result) die ("Database access failed: " . mysql_error());
		
		$idLudzia = mysql_insert_id();
		//echo "<script>alert(".$idLudzia.")</script>";

		if($zestUbr!="BRAK"){
		
			//$query = "INSERT INTO `ubrania`.`ludz_zes` (`id`, `id_ludz`, `id_zest`) VALUES (NULL, '".$idCzlow."', '".$zestID."');";
			$result = mysql_query("INSERT INTO `ubrania`.`ludz_zes` (`id`, `id_ludz`, `id_zest`) VALUES (NULL, '".$idLudzia."', '".$zestUbr."');");
			if (!$result) die ("Database access failed: " . mysql_error());
		
		}
	

			
		echo "<script>$('#poziom3').empty();	$('#poziom4').empty();	wybranoWyswietl();	</script>";
				

	}
	else echo "<span class='error'>Username	invalid</span><br><br>";
	
	
	mysql_close($db_server);
	

?>