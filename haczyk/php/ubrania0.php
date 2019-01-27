<?php
	require_once 'login.php';
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	
	$query = "SELECT * FROM ludzie WHERE status ='0' ORDER BY nazwisko ASC, imie ASC, id ASC";
	
	$result = mysql_query($query);
	if (!$result) die ("Database access failed: " . mysql_error());
	
	$rows = mysql_num_rows($result);
	//$_POST['dane_0']="tekst";
	
	echo '<table style = "margin-bottom:50px"> 
		  <tr>
			<th>Imię</th><th>Nazwisko</th><th>Rozmiar</th><th>Ubranie</th><th>Buty</th><th>Kask</th><th>Dział</th><th>&nbsp</th><th>&nbsp</th>
		</tr>';
		
	
	for ($j = 0 ; $j < $rows ; ++$j)
		{
		$row = mysql_fetch_row($result);
		echo '<tr id='.$row[0].'>'.
		'<td>'.$row[1].'</td>'.'<td>'.$row[2].'</td>'.'<td>'.$row[4].'</td>'.'<td>'.$row[5].'</td>'.'<td>'.$row[6].'</td>'.'<td>'.$row[7].'</td>'.'<td>'.$row[8].'</td>'
		.'</tr>';
		}
		
	echo '</table>';
		
	mysql_close($db_server);
	
//echo "test_8";	

?>
<p><script>//alert("kuku");dodajPrzyciskiDoTabeli();</script></p>