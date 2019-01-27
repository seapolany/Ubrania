
<?php
//dodawanie wiersza z elementami  do tabeli
	require_once 'login.php';
	require_once 'functions.php';
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	//----------------------------------------------
	$query0 = "SELECT * FROM `ubrania` ORDER BY `ubrania`.`opis` ASC";
	$result0 = mysql_query($query0);
	if (!$result0) die ("Database access failed: " . mysql_error());
	$rows0 = mysql_num_rows($result0);
	
	$query1 = "SELECT DISTINCT `cecha` FROM `zst_ubr` ORDER BY `zst_ubr`.`cecha` ASC";
	$result1 = mysql_query($query1);
	if (!$result1) die ("Database access failed: " . mysql_error());
	$rows1 = mysql_num_rows($result1);
	
	//----------------------------------------------
	echo '			<td class="opisUbId"> <select name = "opisUbId">';
		
						for ($j = 0 ; $j < $rows0 ; $j++)
							{
								$row0 = mysql_fetch_row($result0);
								echo '<option value='.$row0[0].' data0='.$row0[0].'>'.$row0[1].'</option>';
							
							}
							echo '</select></td>';
							
						echo '<td class="opisUbKolor" > <input list="opisUbKolor" name="opisUbKolor"> <datalist id="opisUbKolor"> ';	
						for ($j = 0 ; $j < $rows1 ; $j++)
							{
								$row1 = mysql_fetch_row($result1);
								echo '<option value='.$row1[0].'>';
							
							}
							echo '</datalist></td>';
						
						
							
							
					echo '	<td class="opisUbIlosc"><input min="1" step="1" max="9" type="number" name="ubrIlosc" /></td>
							<td class="opisUbCzas"><input min="6" step="6" max="60" type="number" name="ubrCzas" /></td>
							<td></td>

						';
						
	
	mysql_close($db_server);
		

?>
