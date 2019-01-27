
<?php
//przetwarzanie nowego zestawu ubraniowego
	require_once 'login.php';
	require_once 'functions.php';
		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	//----------------------------------------------
	
	$row_id= sanitizeString($_POST['row_id']);
	$opis_El= sanitizeString($_POST['opis_El']);
	
	
	//$query = "SELECT * FROM `ubrania` WHERE `id` = '".$elem_id."'";
	//$result = mysql_query($query);
	//if (!$result) die ("Database access failed: " . mysql_error());
	
	//$query1 = "SELECT DISTINCT `okres` FROM `zst_ubr` ORDER BY `zst_ubr`.`okres` ASC";
	//$result1 = mysql_query($query1);
	//if (!$result1) die ("Database access failed: " . mysql_error());
		
	$query2 = "SELECT DISTINCT `cecha` FROM `zst_ubr` ORDER BY `zst_ubr`.`cecha` ASC";
	$result2 = mysql_query($query2);
	if (!$result2) die ("Database access failed: " . mysql_error());
	
	
	//$rows = mysql_num_rows($result);
	//$rows1 = mysql_num_rows($result1);
	$rows2 = mysql_num_rows($result2);
	
	
	echo '<div class="formAG" id="zmienUbr">
			<form method="post">
			
			<input type="text" 	name="row_id" value="'.$row_id.'" style = "display: none"><br>
			<input type="text" 	name="elemID" value="'.$opis_El.'"';
			
			/*
			<span class="fieldname">Element: </span> <select name = "elemID">';
			
			for ($j = 0 ; $j < $rows ; ++$j)
			{
			$row = mysql_fetch_row($result);
						
				echo '<option value='.$row[0].'>'.$row[1].'</option>';
					
			}
			echo '</select>
			*/
			echo '
			<label for="il_ubr"> ilość elementów: </label> <input min="1" step="1" max="9" type="number" name="ileElm" value="1"/>
			<label for="czas_ubr"> Czas: </label> <input min="6" step="6" max="60" type="number" name="czasUz" value="6"/>';
				
			echo '<span class="fieldname">Cecha </span> <select name = "cechElem">';
			for ($j = 0 ; $j < $rows2 ; ++$j)
			{
			$row2 = mysql_fetch_row($result2);
						
				echo '<option value='.$row2[0].'>'.$row2[0].'</option>';
					
			}			
			
			echo '</select>			
			
			<br>
			<span class="fieldname">&nbsp;</span>
			
			<input type="submit" value="Zmiana">
			
			
			</form>
			</div>';
	
	mysql_close($db_server);
?>


<p><script>

	$('#zmienUbr form').submit(function(){

			//alert("coposzlo....1");
			$.post('haczyk/php/ubrania1_2.php', $(this).serialize(), function(data){
				$('#poziom4').html(data);
				$('#poziom3').empty();
				//dodajPrzyciskiDoTabeli();
				//$('#poziom5').html(data);
				
				wybranoWyswietlZest();
			});
			
					return false;		
		});

</script></p>
