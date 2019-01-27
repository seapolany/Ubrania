<?php
	require_once 'login.php';
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	
	$query = "SELECT id FROM `zestawy`";
	$result = mysql_query($query);
	if (!$result) die ("Database access failed: " . mysql_error());
	$rows = mysql_num_rows($result);
	
		$tekst00 = '<datalist id="zestawId"><option value="BRAK">';
  
	  for ($j = 0 ; $j < $rows ; $j++){
		$row = mysql_fetch_row($result);
	  	$tekst00 = $tekst00.'<option value="'.$row[0].'">';
	  }
	$tekst00 = $tekst00.'</datalist>';
	
	
	
	$query = "SELECT a.id, a.imie, a.nazwisko, a.dzial , c.id, c.nazwa FROM  ludzie a left join ludz_zes b on b.id_ludz = a.id left join zestawy c on c.id = b.id_zest WHERE a.status = '0' ORDER BY a.nazwisko ASC, a.imie ASC";
	$result = mysql_query($query);
	if (!$result) die ("Database access failed: " . mysql_error());
	$rows = mysql_num_rows($result);
	
	
	echo 	'<div class="tabelaAG" id="przZest">
				<table class="ubrania110">
					<thead> 
						<tr>
							<th>Imie</th><th>Nazwisko</th><th>Zestaw</th><th>Opis</th><th>&nbsp</th> 
						</tr>
							</thead>
					
						<tbody>';
						
			for ($j = 0 ; $j < $rows ; $j++){
				$row = mysql_fetch_row($result);
				echo	'<tr id="'.$row[0].'" class="'.$row[3].'">
						<td class="imie">'.$row[1].'</td>
						<td class="nazw">'.$row[2].'</td>
						<td class="zest"><input list="zestawId" name="zestawId" value="'.$row[4].'">'.$tekst00.'</td>
						<td class="opis">'.$row[5].'</td>
						
						</tr>';
						
			}	
			
		
			echo '</tbody></table></div>';
	

	
	mysql_close($db_server);
	
	
	
	
		

	
	
//echo "test_8";	

?>

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>


