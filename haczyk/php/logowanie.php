<?php
require_once 'loginDB.php';
require_once 'functions.php';
//phpinfo();
	//echo "<div class='main'><h3>Your details to log in</h3>".$db_hostname.$db_database.$db_username.$db_password;
	$db_server = mysql_connect($db_hostname, $db_username, $db_password);
	if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	//$db_server = mysqli_connect($db_hostname, $db_username, $db_password);
	//if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());
	//echo "1";
	mysql_select_db($db_database)
	or die("Unable to select database: " . mysql_error());
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8_unicode_ci");
	
	//echo "<div class='main'><h3>Your details to log in</h3>";
	$error = $user = $pass = "";
	if (isset($_POST['user']))
	{
		$user = sanitizeString($_POST['user']);
		$pass = sanitizeString($_POST['pass']);
		//$user = ($_POST['user']);
		//$pass = ($_POST['pass']);
		if ($user == "" || $pass == "")	$error = "Not all fields were entered<br>";
		else
			{
			$result = mysql_query("SELECT o.imie, o.nazwisko FROM user o left join login l on o.id=l.id WHERE l.login='".$user."' and l.pass='".$pass."'");
			
			//"SELECT o.id o.imie, o.nazwisko FROM user o left join login l on o.id=l.id WHERE l.login=".$user."l.pass=SHA1(".$pass.")");
			
			//"SELECT id, imie, nazwisko FROM user WHERE imie='$user'");// AND pass='$pass'");
			$rows = mysql_num_rows($result);
			
			if (!$rows)
				{
				$error = "<span class='error'>Username/Password	invalid</span><br><br>";
				echo $error;
				}
			else
				{
				
				for ($j = 0 ; $j < $rows ; ++$j)
				{
				$row = mysql_fetch_row($result);
				$_POST['pass']='obecny';
				//echo '_'.$row[0].'_'.$row[1].'_'.$result.'_'.$rows.'_'.$_POST['pass'].'_';
				//echo "<script>$('#box_1').html('".$user."' + ' zalogowany');</script>";
				echo "<script>$('#box_1').html('".$user."' + ' zalogowany ');
				$.getScript('haczyk/js/zalUbrania.js', function(){
				$('#logIn').remove();
				zalUbrania();});
				</script>";
				$_SESSION['user'] = $user;
				$_SESSION['pass'] = $pass;
				//$ileNas=count($_SESSION);
				//echo 'witaj'.$ileNas;
				//echo "<script>$('#box_1').html('".$user."' + ' zalogowany '+'".$ileNas."');</script>";

				//die("You are now logged in.<br>");
				}
		}
	}
}
?>