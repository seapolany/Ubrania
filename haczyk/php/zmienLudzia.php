
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
	$rozPod = sanitizeString($_POST['rozPod']);
	$rozUbr0 = sanitizeString($_POST['rozUbr0']);
	$rozUbr1 = sanitizeString($_POST['rozUbr1']);
	$rozUbr2 = sanitizeString($_POST['rozUbr2']);
	$rozUbr = $rozUbr0.'/'.$rozUbr1.'/'.$rozUbr2;
	$rozBut0 = sanitizeString($_POST['rozBut0']);
	$rozKsk0 = sanitizeString($_POST['rozKsk0']);
	$dzial = sanitizeString($_POST['dzial']);
	
	if($rozUbr2==""){
		$rozUbr = $rozUbr0.'/'.$rozUbr1;
	}
	//UPDATE `ubrania`.`ludzie` SET `roz_pod` = 'L', `roz_ubr` = '11', `roz_but` = '33', `roz_ksk` = '33', `dzial` = 'tt' WHERE `ludzie`.`id` = 6997058;
	//$sql = "UPDATE `ubrania`.`ludzie` SET `roz_pod` = '".$rozPod."', `roz_ubr` = '".$rozUbr."', `roz_but` = '".$rozBut0."', `roz_ksk` = '".$rozKsk0."', `dzial` = '".$dzial."' WHERE `ludzie`.`id` = '".$id_ludz."';";
	
	$result = mysql_query("UPDATE `ubrania`.`ludzie` SET `roz_pod` = '".$rozPod."', `roz_ubr` = '".$rozUbr."', `roz_but` = '".$rozBut0."', `roz_ksk` = '".$rozKsk0."', `dzial` = '".$dzial."' WHERE `ludzie`.`id` = '".$id_ludz."';");
	/*
	if (0){
	 $result = mysql_query("insert into ");
	 
	 $result = mysql_query("INSERT INTO `ubrania`.`ludzie` (`id`, `imie`, `nazwisko`, `plec`, `roz_pod`, `roz_ubr`, `roz_but`, `roz_ksk`, `dzial`) VALUES ('".$sapId."', '".$imie."', '".$nazwisko."', '".$plec."', '".$rozPod."', '".$rozUbr."', '".$rozBut0."', '".$rozKsk0."', '".$dzial."')");
	

	$result = mysql_query("SELECT o.imie, o.nazwisko FROM ludzie o WHERE o.id='".$sapId."'");
			
			//"SELECT o.id o.imie, o.nazwisko FROM user o left join login l on o.id=l.id WHERE l.login=".$user."l.pass=SHA1(".$pass.")");
			
			//"SELECT id, imie, nazwisko FROM user WHERE imie='$user'");// AND pass='$pass'");
			$rows = mysql_num_rows($result);
			
			if (!$rows)
				{
				$error = "<span class='error'>Username	invalid</span><br><br>";
				echo $error;
				}
			else
				{
				
				for ($j = 0 ; $j < $rows ; ++$j)
				{
				$row = mysql_fetch_row($result);
								
				echo "<script>$('#box_1').html('".$row[0]."' + ' ".$row[1]."');</script>";
				
				}
			}
	}
	else echo "zle";
	*/

	echo $id_ludz;
	
?>