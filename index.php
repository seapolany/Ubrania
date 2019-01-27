<!doctype html>
<html lang="us">
<head>
	<meta charset="utf-8">
	<title>hcheck4</title>
	
	<link href="haczyk/style/stylev3.css" rel="stylesheet">
	<!--<link href="haczyk/style/print.css" rel="stylesheet" type="text/css" media="print" />-->
	<script src="haczyk/jq_cstm/external/jquery/jquery.js"></script>
	<!--<script src="haczyk/js/haczyk00.js"></script>-->
	<!--<script src="haczyk/js/zalZlec.js"></script>-->
	<!--<script src="haczyk/js/zalRap.js"></script>-->
	<script src="haczyk/js/zalPaski.js"></script>
		
	
</head>
<body>

<div id="php">
<?php
session_start();
?>

</div>
<div id="poziom0">
<?php
//echo 'kuku';
//echo '<script> alert("?"); </script>';
//echo 'kuku';
?>
</div>
<div id="poziom1" class="vision_menu"></div>
<div id="poziom2" class="vision"></div>
<div id="poziom3" class="vision"></div>
<div id="poziom4" class="vision"></div>
<div id="poziom5" class="vision"></div>
<!-- Button 
<h2 class="demoHeaders">Button</h2>
<button id="button">A button element</button>
-->

<script>

$(document).ready(function(){
	$.getScript("haczyk/js/zalPaski.js", function(){zaladojPaski();});
	});
	</script>
	
	
<script>
/*
if($('#box_0').name == undefined){
alert("undefined "+$('#box_0').name);
}

//alert("0 " + $('#box_0')+" kk");

else{
alert("else"+$('#box_0').name);
}
*/
	</script>
	
	
	

<script>
//var czas = (Date());
//$('#box_1').html(czas);
//$('#box_00').remove();
</script>

</body>
</html>
