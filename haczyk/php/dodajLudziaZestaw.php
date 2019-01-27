
<?php
require_once 'loginDB.php';
require_once 'functions.php';

		
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	
	
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	
	//SELECT * FROM `zestawy`
	
	$query = "SELECT * FROM `zestawy`";	
	$result = mysql_query($query);
	if (!$result) die ("Database access failed: " . mysql_error());
	$rows = mysql_num_rows($result);
	
	echo "<input type='radio' name='zestUbr' value='BRAK' required checked> BRAK<br>";
	
		for ($j = 0 ; $j < $rows ; ++$j)
		{
			$row = mysql_fetch_row($result);
			echo "<input type='radio' name='zestUbr' value='".$row[0]."'> ".$row[0]." ".$row[1]."<br>";
			//echo '<option value='.$row[0].'>'.$row[0].'</option>';
		
		}
	
	
	
	mysql_close($db_server);
	

?>