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
	

	
	$biezID=-1;
	
	$rozmiarTab=count($rows);	
	//echo '<p> Liczba wierszy: '.$rows.'</p>';
		
	for ($j = 0 ; $j < $rows ; $j++)
		{
		$row = mysql_fetch_row($result);
		
		
		//zapytanie pokazuje date ostatniego wydania ubrania danemu delikwentowi
		if($row[9]=="") continue;
		$query1 = "SELECT r.data_r, r.numRuch, (DATEDIFF(r.data_r , NOW()))/30, r.ilosc, count(*) FROM ruch r WHERE id_ludz= ".$row[0]." and id_ubr='".$row[10]."' ORDER BY r.data_r DESC LIMIT 1";
		//$query1 = "SELECT r.data_r, r.numRuch, EXTRACT(MONTH FROM r.data_r) FROM ruch r WHERE id_ludz= ".$row[0]." and id_ubr='".$row[4]."' ORDER BY r.data_r DESC";
		$result1 = mysql_query($query1);
		if (!$result1) die ("Database access failed: id_ludz= ".$row[0]." and id_ubr=".$row[10]." ".mysql_error());
		$rows1 = mysql_num_rows($result1);
		$row1 = mysql_fetch_row($result1);
		//echo 'a: '.$row1[0].' '.$row1[1].' '.$row1[2].'<br>';
		if($row1[2]==""){$row1[2]=-48;$row1[0]="NIEZAREJESTROWANE";$row1[1]="BRAK";}
		//echo 'b: '.$row1[0].' '.$row1[1].' '.$row1[2].'<br>';
		//------------------------------------
		
		$query2 = "select sum(r.ilosc), count(*) FROM ruch r where (DATEDIFF(r.data_r , NOW())/30)>-6 and id_ludz= ".$row[0]." and id_ubr='".$row[10]."'";
		//$query1 = "SELECT r.data_r, r.numRuch, EXTRACT(MONTH FROM r.data_r) FROM ruch r WHERE id_ludz= ".$row[0]." and id_ubr='".$row[4]."' ORDER BY r.data_r DESC";
		$result2 = mysql_query($query2);
		if (!$result2) die ("Database access failed: id_ludz= ".$row[0]." and id_ubr=".$row[10]." ".mysql_error());
		$row2 = mysql_fetch_row($result2);
		if($row2[1]==""){$row2[1]=0;$row2[0]=0;}			
		$ileWydan = $row2[1];
		$ileUbrWydano = 0;
		$ok = 0;
		if($ileWydan) {//jezeli nie bylo wydan ustawiamy ilosc danego ubrania na 0
			//$ok = 1;
			$ileUbrWydano = $row2[0];
			//if ($row[12]-$ileUbrWydano>0) {$ok=1;}
		}
		if($row[11]+$row1[2]<=6){//jezeli komus nalezy sie ubranie bo od ostatniego mineło wystarczajaco duzo czasu
			$ok = 1;//ustawiamy znacznik na 1
		}
		
		if ($row[12]-$ileUbrWydano<=0) {$ok=0;}//jezeli ilosc wydanych ubran jest wieksza niz sie komos nalezy

		//$zostaloDoWydania=$row[12]-$ileUbrWydano;
		//echo 'wydan: '.$ileWydan.' zostalo '.$zostaloDoWydania.' | ';	
		
		//------------------------------------
		//echo ': '.$row1[0].' '.$row1[1].' '.$row1[2].'<br>';
		
		//if($row1[2]==""){$row1[2]=-12;$row1[0]="NIEZAREJESTROWANE";$row1[1]="BRAK";}
		
		//$roznica0=$row2[0]-$row1[0];
		
		//sprawdzamy czy do wydania jest mniej niz pol roku
		if($ok){
		
			//wyswietlamy wynik
			if($biezID!=$row[0]){//jezeli jest nowe id, dodoajemy formatke
				if($j){//jezeli jest nowe id, zamykamy stara formatke
					echo '</tbody></table></form></div>';
				}
				
				$biezID=$row[0];
				echo 	'<div class="formAG" id="'.$row[0].'">
						<form method="post">
						<label for="imie">'			.$row[1].'</label>
						<label for="nazwisko">'		.$row[2].'</label>
						<label for="dzial">'		.$row[3].'</label>
						<label for="idZest">Zestaw: '.$row[9].'</label>
						
						<table class="ubrania50">
							<thead> 
								<tr>
									<th>Ubranie</th><th>Rozmiar</th><th>Kolor</th><th>&nbsp</th><th>Ilość</th><th>&nbsp</th> 
								</tr>
							</thead>
							<tfoot> 
								<tr>
									<td><input type="button" name="dodajUbr" value="DODAJ" class="dodajUbr"/></td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>
								</tr>
								<tr>
									<td><input type="date" name="bday" min="2000-01-01" value="'.date("Y-m-d").'"></td><td>&nbsp</td><td><input type="submit" name="submit" value="WYDAJ" class="wydano"/></td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>
								</tr>
							</tfoot>							
						<tbody>
						<tr>
							<td class="opis" id="'.$row[10].'">'.$row[13].'</td>';
								if($row[14]==0){
									echo '<td class="roz_ubr"></td>';
									}
								else{
									echo '<td class="roz_ubr">'.$row[$row[14]+4].'</td>';
								}
							echo 	'<td class="cecha">'.$row[15].'</td>'.
									'<td class="minus">-</td>'.
									'<td class="ilosc"><input type="text" name="quantity" value="'.($row[12]-$ileUbrWydano).'" maxlength="1"/></td>'.
									'<td class="plus">+</td>'.
						'</tr>';
			}
			else{
				echo '<tr>
							<td class="opis" id="'.$row[10].'">'.$row[13].'</td>';
								if($row[14]==0){
									echo '<td class="roz_ubr"></td>';}
								else{
									echo '<td class="roz_ubr">'.$row[$row[14]+4].'</td>';
								}
							echo 	'<td class="cecha">'.$row[15].'</td>'.
									'<td class="minus">-</td>'.
									'<td class="ilosc"><input type="text" name="quantity" value="'.($row[12]-$ileUbrWydano).'" maxlength="1"/></td>'.
									//'<td class="ilosc">'.$row[12].'</td>'.
									'<td class="plus">+</td>'.
						'</tr>';
				
			}
			if($j==$rows){
					echo '</tbody></table></form></div>';
				}
			
		}	
		
	}
		
//	echo '</tbody></table>';
		
	
	
	mysql_close($db_server);
		
	
//echo "test_8";	

?>
