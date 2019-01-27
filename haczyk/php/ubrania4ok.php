
<script>
</script>

<?php
	require_once 'login.php';
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	 
	$query = "SELECT a.id, a.imie, a.nazwisko, a.dzial, a.plec, a.roz_pod, a.roz_ubr, a.roz_but, a.roz_ksk, b.id_zest, c.id_ubr, c.okres, c.ilosc, d.opis, d.typ_0, c.cecha FROM ludzie a left join ludz_zes b on b.id_ludz = a.id left join zst_ubr c on c.id_zst = b.id_zest left join ubrania d on d.id = c.id_ubr ORDER BY a.nazwisko ASC, a.imie ASC";
	//$query = "SELECT * FROM ludzie";
	//$query = "SELECT a.id, a.imie, a.nazwisko, b.id_zest, c.id_ubr, c.okres, c.ilosc, d.opis FROM ludzie a left join ludz_zes b on b.id_ludz = a.id left join zst_ubr c on c.id_zst = b.id_zest left join ubrania d on d.id = c.id_ubr ORDER BY `a`.`id` ASC";
	
	
	$result = mysql_query($query);
	if (!$result) die ("Database access failed: " . mysql_error());
	
	$rows = mysql_num_rows($result);
	
	//$query2 = "SELECT datediff(CURDATE(),'2015-05-01')";
	//$result2 = mysql_query($query2);
	//if (!$result2) die ("Database access failed: " . mysql_error());
	//$row2 = mysql_fetch_row($result2);
	
	
	
	//$_POST['dane_0']="tekst";

	echo '<table id="ubrania4">
			<thead> 
				<tr>
					<th>Imie</th>	<th>Nazwisko</th>	<th>Dział</th> <th>Ubranie</th>	<th>Rozmiar</th> <th>Ilość</th> <th>Kolor</th>
				</tr>
			</thead>
		<tbody>';
	
	$tabUbrM=array();
	$tabUbrI=array();
		
	
	for ($j = 0 ; $j < $rows ; ++$j)
		{
		$row = mysql_fetch_row($result);
		//zapytanie pokazuje date ostatniego wydania ubrania danemu delikwentowi
		
		$query1 = "SELECT r.data_r, r.numRuch, (DATEDIFF(r.data_r , NOW()))/30 FROM ruch r WHERE id_ludz= ".$row[0]." and id_ubr='".$row[10]."' ORDER BY r.data_r DESC LIMIT 1";
		//$query1 = "SELECT r.data_r, r.numRuch, EXTRACT(MONTH FROM r.data_r) FROM ruch r WHERE id_ludz= ".$row[0]." and id_ubr='".$row[4]."' ORDER BY r.data_r DESC";
		$result1 = mysql_query($query1);
		if (!$result1) die ("Database access failed: id_ludz= ".$row[0]." and id_ubr=".$row[10]." ".mysql_error());
		$rows1 = mysql_num_rows($result1);
		$row1 = mysql_fetch_row($result1);
		if($row1[2]==""){$row1[2]=-12;}
		//$roznica0=$row2[0]-$row1[0];
		
		$zmTmp0=$row[13]."_".$row[$row[14]+4]."_".$row[15];
		
		
		$rozmiarTab=count($tabUbrM);
		//echo 'tabela ma rozmiar'.$rozmiarTab;
		$zmTmp1=1;
		if(!$rozmiarTab){$tabUbrM[]=$zmTmp0; $tabUbrI[]=$row[12];}
		else{
			for($jj = 0 ; $jj < $rozmiarTab ; $jj++){
				if($tabUbrM[$jj]==$zmTmp0){$tabUbrI[$jj]+=$row[12];$zmTmp1=0; 
				//echo 'znalazl '.$jj.': '.$zmTmp0.' '.$j.'<br>';
				break;}
				
			}
			if($zmTmp1){$tabUbrM[]=$zmTmp0; $tabUbrI[]=$row[12];
			//echo 'nowy '.$jj.': '.$zmTmp0.' '.$j.'<br>';
			}
		}
		
		
		
		//print_r();
		//print_r($tabUbrI);
		
		
		//$query2 = "SELECT round(datediff(CURDATE(),' ".$row1[0]." ')/12)";
		//$result2 = mysql_query($query2);
		//if (!$result2) die ("Database access failed: " . mysql_error());
		//$row2 = mysql_fetch_row($result2);
		
		if($row[11]+$row1[2]<=6){
			echo '<tr>'.
				//'<td>'.$row[0].'</td>'.
				'<td class="imie">'.$row[1].'</td>'.
				'<td class="nazwisko">'.$row[2].'</td>'.
				'<td class="dzial">'.$row[3].'</td>'.
				'<td class="opis">'.$row[13].'</td>'.
				'<td class="roz_ubr">'.$row[$row[14]+4].'</td>'.
				
				'<td class="ilosc">'.$row[12].'</td>'.
				
				//'<td>'.$row[6].'</td>'.
				//'<td>'.$row[7].'</td>'.
				//'<td>'.$row[8].'</td>'.
				//'<td>'.$row[9].'</td>'.
				'<td class="cecha">'.$row[15].'</td>'.
				'<td class="id_ubr">'.$row[10].'</td>'.
				
				'<td>'.$row[11].'</td>'.
				//'<td>'.$row[12].'</td>'.
				//'<td>'.$row[13].'</td>'.
				//'<td>'.$row1[0].'</td>'.
				//'<td>'.$row1[1].'</td>'.
				'<td>'.$row1[2].'</td>'.
				'<td>'.$zmTmp0.'</td>'.
				
				'</tr>';
			}
		
		}
		
	echo '</tbody></table>';
		
		
	
	mysql_close($db_server);
	
	
	
	for ($jjj = 0 ; $jjj < $rozmiarTab ; $jjj++){
	echo $jjj.': '.$tabUbrM[$jjj].' '.$tabUbrI[$jjj].'<br>';}


	
	
//echo "test_8";	

?>

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>


