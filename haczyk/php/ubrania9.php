
<?php
	require_once 'login.php';
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	
	$query = "SELECT * FROM ubrania ORDER BY opis ASC, id ASC";
	
	$result = mysql_query($query);
	if (!$result) die ("Database access failed: " . mysql_error());
	
	$rows = mysql_num_rows($result);
	//$_POST['dane_0']="tekst";
	$tabTransfer=["xxx/yyy","S - XXL","xxx/yyy/zzz","35 - 50","BRAK"];
		
	echo '<table> 
		  <tr>
			<th>lp.</th> <th>Nazwa</th>	<th>Wymiatowanie</th>
		</tr>';
		
	
	for ($j = 0 ; $j < $rows ; $j++)
		{
		$row = mysql_fetch_row($result);
		if(count($tabTransfer)<=$row[2]){
			$row[2]=4;
		}
		echo '<tr id='.$row[0].'>'.'<td>'.$j.'</td>'.'<td>'.$row[1].'</td>'.'<td>'.$tabTransfer[$row[2]].'</tr>';
		}
		
	echo '</table>';
		
	mysql_close($db_server);

	
	
//echo "test_8";	

?>