<?php
	require_once 'login.php';
	require_once 'functions.php';
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	
	$imie0=$nazwisko0='%';
	$czas0=12;

	if (isset($_POST['imie'])){$imie0 = ($_POST['imie']);}
	if (isset($_POST['nazwisko'])){$nazwisko0 = ($_POST['nazwisko']);}
	if (isset($_POST['miesiac'])){$czas0=($_POST['miesiac']);}
	
	
	//if (isset($_POST['imie'])){$imie0 = sanitizeString($_POST['imie']);}
	//else{$imie0='%a';}
		
	//if (isset($_POST['nazwisko'])){$nazwisko0 = sanitizeString($_POST['nazwisko']);}
	//else{$nazwisko0='%a';}
	
	//if (isset($_POST['miesiac'])){$czas0=sanitizeString($_POST['miesiac']);}
	//else{$czas0=12;}
	//echo '1: '.$imie0.' '.$nazwisko0.' '.$czas0.'<br>';

	if($imie0!=''){
		//$imie0=ucfirst(strtolower(str_replace("*","%",$imie0)));
		$imie0=mb_convert_case(str_replace("*","%",$imie0),MB_CASE_TITLE,"UTF-8");
	}	
	else {$imie0='%';}
	
	if($nazwisko0!=''){
		//$nazwisko0=ucfirst(strtolower(str_replace("*","%",$nazwisko0)));
		$nazwisko0=mb_convert_case(str_replace("*","%",$nazwisko0),MB_CASE_TITLE,"UTF-8");
	}	
	else {$nazwisko0='%';}

	//echo '2: '.$imie0.' '.$nazwisko0.' '.$czas0.'<br>';
	
	if($czas0==''){$czas0=12;}
	$enddate=date("Y-m-d");
	//$enddate = strtotime("-".$czas0." Months",$startdate);
	$startdate = date("Y-m-d", strtotime("-".$czas0." Months"));
	
	
	$query = "SELECT a.id, a.imie, a.nazwisko, a.dzial, b.data_r, c.opis, b.ilosc, b.id_ubr FROM ludzie a left join ruch b on a.id=b.id_ludz left join ubrania c on b.id_ubr = c.id WHERE a.imie LIKE '".$imie0."' AND a.nazwisko LIKE '".$nazwisko0."' and `data_r` BETWEEN '".$startdate."' AND '".$enddate."' ORDER BY a.nazwisko ASC, a.imie ASC, a.id ASC";	
	$result = mysql_query($query);
	if (!$result) die ("Database access failed: " . mysql_error());
	$rows = mysql_num_rows($result);
	
	$biezID=-1;
	
	
	
	
	
	for ($j = 0 ; $j < $rows ; $j++){
		$row = mysql_fetch_row($result);
		
		if($biezID!=$row[0]){//jezeli jest nowe id, dodoajemy tabelkę
				if($j){
					echo '</tbody></table></form></div>';
				}
				
			$biezID=$row[0];
			echo 	'<div class="formAG" id="'.$row[0].'">
						<form method="post">
						<label for="imie">'			.$row[1].'</label>
						<label for="nazwisko">'		.$row[2].'</label>
						<label for="dzial">'		.$row[3].'</label>
						
						
						<table class="ubrania60">
							<thead> 
								<tr>
									<th>Ubranie</th><th>Ilość</th><th>Data wydania</th><th>Podpis:</th><th>Data:</th>
								</tr>
							</thead>
								
						<tbody>
						<tr>
							<td class="opis" id="'.$row[7].'">'.$row[5].'</td>
							<td class="ilosc">'.$row[6].'</td>
							<td class="data_r">'.$row[4].'</td>
							<td>__________</td>
							<td>__________</td>
						</tr>';
			}
			else{
				echo '<tr>
						<td class="opis" id="'.$row[7].'">'.$row[5].'</td>
						<td class="ilosc">'.$row[6].'</td>
						<td class="data_r">'.$row[4].'</td>
						<td>__________</td>
						<td>__________</td>
					</tr>';
				
			}
			if($j==$rows){
					echo '</tbody></table></form></div>';
				}
			
		
	}
	
	//if($nazwisko0!='' || $imie0!=''){}
	//else {$nazwisko0='%';$imie0='%';}

	
	//echo "kuku".$imie0." > ".$nazwisko0." > ".$czas0." >  > end: ".$enddate." >";
		
	
	

?>
