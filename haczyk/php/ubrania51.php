
<?php
//WYBÓR UBRANIA DODATKOWEGO
	require_once 'login.php';
	require_once 'functions.php';
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	
	$query0 = "SELECT * FROM `ubrania` ORDER BY `ubrania`.`id` ASC";
	$result0 = mysql_query($query0);
	if (!$result0) die ("Database access failed: " . mysql_error());
	
	//$rows0 = mysql_num_rows($result0);
	
	$danuLudz = sanitizeString($_POST['idLudz']);
	
	$query1 = "SELECT a.plec, a.roz_pod, a.roz_ubr, a.roz_but, a.roz_ksk FROM ludzie a WHERE a.id=".$danuLudz." ";
	$result1 = mysql_query($query1);
	if (!$result1) die ("Database access failed: " . mysql_error());
		
	$query2 = "SELECT DISTINCT `cecha` FROM `zst_ubr` ORDER BY `zst_ubr`.`cecha` ASC";
	$result2 = mysql_query($query2);
	if (!$result2) die ("Database access failed: " . mysql_error());
	
	
	$rows0 = mysql_num_rows($result0);
	$rows1 = mysql_num_rows($result1);
	$rows2 = mysql_num_rows($result2);
	
	//echo '1:'.$rows.' 2:'.$rows1.' 3:'.$rows2.' b ';
	$row1 = mysql_fetch_row($result1);
	

	echo '<td class="opis" > <select name = "ubrElem0">';//';//.$row0[1].'</td>';';
		
	for ($j = 0 ; $j < $rows0 ; ++$j)
		{
			$row0 = mysql_fetch_row($result0);
			echo '<option value='.$row0[0].' data0='.$row1[$row0[2]].'>'.$row0[1].'</option>';
		
		}
		echo '</select></td>';
		
	
		echo '<td class="roz_ubr">&nbsp</td>';
		
	echo '<td class="cecha" > <select name = "ubrElem1">';//';//.$row0[1].'</td>';';
		
	for ($j = 0 ; $j < $rows2 ; ++$j)
		{
			$row2 = mysql_fetch_row($result2);
			echo '<option value='.$row2[0].'>'.$row2[0].'</option>';
		
		}
		echo '</select></td>'.	
			'<td class="minus">-</td>'.
			'<td class="ilosc"><input type="text" name="quantity" value="1" maxlength="1"/></td>'.
			'<td class="plus">+</td>';
	
	
	mysql_close($db_server);
		
	
//echo "test_8";	


//echo 'jest '.date("Y-m-d").' ok - '.$danuLudz.' b';

?>
