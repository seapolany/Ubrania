
var katalog="k";
var funkcja="f";
var wybrano="w";
//alert("1");
//paski

function zaladojPaski(){
	
	var $box_bottom = $('<div>bottom</div>').attr("id","box_1").appendTo('body');
	
	var $box_case = $('<div></div>').attr("id","box_choose").appendTo('#poziom0').addClass('pasek00');
	
		
		//alert("ggh");
		//$('#poziom4').load('haczyk/php/logowanie.php');
		$('.vision').empty();
		
		
		
			$('#poziom1').html(
			
			"<div class='formAG' id='logIn'>"
				+"<form method='post'>"
				+"<span class='fieldname'>Login</span> <input type='text' 	maxlength='16' name='user' value=''><br>"
				+"<span class='fieldname'>Hasło</span> <input type='password' maxlength='16' name='pass' value=''><br>"
				+"<span class='fieldname'>&nbsp;</span>"
				+"<input type='submit' value='Login'>"
				//+"<span class='fieldname'>STS</span> <input type='text' maxlength='3' name='sts' value='off'><br>"
				+"</form>"
				+"</div>"	
				
			);
		
			
			$('#logIn form').submit(function(){
				
				$.post('haczyk/php/logowanie.php', $(this).serialize(), function(data){
					$('#poziom2').html(data);
				});
				return false;
				
				
			});
		

}//zaladojPaski()
	