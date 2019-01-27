
<script>
</script>

<?php
//dodawanie bran do zestawow
	require_once 'login.php';
	require_once 'functions.php';
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	
	$query = "SELECT * FROM `ubrania` ORDER BY `ubrania`.`id` ASC";
	$result = mysql_query($query);
	if (!$result) die ("Database access failed: " . mysql_error());
	
	//$query1 = "SELECT DISTINCT `okres` FROM `zst_ubr` ORDER BY `zst_ubr`.`okres` ASC";
	//$result1 = mysql_query($query1);
	//if (!$result1) die ("Database access failed: " . mysql_error());
		
	$query2 = "SELECT DISTINCT `cecha` FROM `zst_ubr` ORDER BY `zst_ubr`.`cecha` ASC";
	$result2 = mysql_query($query2);
	if (!$result2) die ("Database access failed: " . mysql_error());
	
	
	$rows = mysql_num_rows($result);
	//$rows1 = mysql_num_rows($result1);
	$rows2 = mysql_num_rows($result2);
	
	//echo '1:'.$rows.' 2:'.$rows1.' 3:'.$rows2.' b ';
	
	$TabelaDoAktualizacji = sanitizeString($_POST['tab_id']);
	//global $TabelaDoAktualizacji;
	
	echo '<div class="formAG" id="dodajUbr">
			<form method="post">
			<input type="text" 	name="tab_id" value="'.$TabelaDoAktualizacji.'" style = "display: none"><br>
			<span class="fieldname">Element: </span> <select name = "ubrElem">';
			
			for ($j = 0 ; $j < $rows ; ++$j)
			{
			$row = mysql_fetch_row($result);
						
				echo '<option value='.$row[0].'>'.$row[1].'</option>';
					
			}
			
			echo '</select>
			<label for="il_ubr"> ilość elementów: </label> <input min="1" step="1" max="9" type="number" name="ubrIlosc" value="1"/>
			<label for="czas_ubr"> Czas: </label> <input min="6" step="6" max="60" type="number" name="czasUbr" value="6"/>';
			
			
			/*
			echo '<span class="fieldname"> Czas: </span> <select name = "czasUbr">';
			
			for ($j = 0 ; $j < $rows1 ; ++$j)
			{
			$row1 = mysql_fetch_row($result1);
						
				echo '<option value='.$row1[0].'>'.$row1[0].'</option>';
					
			}
			
			echo '</select>';
			*/
			
			echo '<span class="fieldname">Cecha </span> <select name = "cechaUbr">';
			
			for ($j = 0 ; $j < $rows2 ; ++$j)
			{
			$row2 = mysql_fetch_row($result2);
						
				echo '<option value='.$row2[0].'>'.$row2[0].'</option>';
					
			}			
			
			echo '</select>			
			
			<br>
			<span class="fieldname">&nbsp;</span>
			
			<input type="submit" value="Dodaj">
			
			
			</form>
			</div>';
			
			//echo $TabelaDoAktualizacji;
			
			
	//$_POST['dane_0']="tekst";
	
		
	mysql_close($db_server);

	
//echo "test_8";	

?>

<p><script>
//$_POST['dane_0'];
</script></p>

<p><script>
$('#dodajUbr form').submit(function(){

			//alert("coposzlo....1");
			
			
			$.post('haczyk/php/ubrania3.php', $(this).serialize(), function(data){
				$('#poziom4').html(data);
				$('#poziom3').empty();
				//dodajPrzyciskiDoTabeli();
				//$('#poziom5').html(data);
				
				wybranoWyswietlZest();
			});
			
			//var coposzlo=$('#dodajUbr form').serialize();
			//alert(coposzlo);
			
			
			//$('#poziom5').empty().show();
			//$('#poziom4').empty().show();
			//alert("coposzlo....2").show();
			//$('#poziom3').empty().show();
			//alert("coposzlo....3");
			
			
			
			
			//$('#poziom4').empty();
			//$('#poziom3').show();
			
			return false;
			
				
		});


</script></p>

