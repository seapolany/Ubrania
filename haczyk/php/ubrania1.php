<?php
	require_once 'login.php';
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	/*
	$query = "select a.nazwa, b.opis, c.ilosc, c.okres, c.cecha, a.id, b.id from zst_ubr c \n"
    . "left join zestawy a on a.id = c.id_zst\n"
    . "left join ubrania b on b.id=c.id_ubr ORDER BY `a`.`nazwa` ASC";
	*/
	$query = "select a.nazwa, b.opis, c.ilosc, c.okres, c.cecha, a.id, b.id, c.NUM_KOL from zst_ubr c left join zestawy a on a.id = c.id_zst left join ubrania b on b.id=c.id_ubr ORDER BY a.id ASC";
	
	
	//$query = "SELECT * FROM ludzie";
	$result = mysql_query($query);
	if (!$result) die ("Database access failed: " . mysql_error());
	
	$rows = mysql_num_rows($result);
	//$_POST['dane_0']="tekst";
	
	$nagl0 = "empty_";
	
		
	for ($j = 0 ; $j < $rows ; $j++)
		{
			$row = mysql_fetch_row($result);
			if($row[5]!=$nagl0)
			{
				$nagl0=$row[5];
				echo '<table class="tabZst0" id='.$row[5].'>
					<thead>
						<tr>
							<th>'.$row[0].'</th> <th>&nbsp</th> <th>'.$row[5].'</th> <th>&nbsp</th> <th>&nbsp</th><th>&nbsp</th>
						</tr>
						<tr>
							<th>&nbsp</th>	<th>Ilość</th> 	<th>Okres</th>	  <th>Cecha</th>
						</tr>
					</thead>
					<tfoot>
						<tr>
						  <td style = "padding:8px">Dodaj</td><th>&nbsp</th><th>&nbsp</th><th>&nbsp</th><th>&nbsp</th>	
						</tr>
					</tfoot>
				<tbody>	
					';
			}	
			
			echo '<tr id='.$row[7].' class='.$row[6].'>'.
			'<td>'.$row[1].'</td>'.'<td>'.$row[2].'</td>'.'<td>'.$row[3].'</td>'.'<td>'.$row[4].'</td>'
			.'</tr>';
		}
		
	echo '</tbody></table>';
		
	mysql_close($db_server);

	
	
//echo "test_8";	

?>