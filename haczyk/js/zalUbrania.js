function zalUbrania(){

	//
	$('#box_0').remove();
		
	var $box_0 = $('<div></div>').attr("id","box_0").attr("name","box_0").addClass('pasek00');
		
	var $box_ubrania = $('<div></div>').attr("id","box_ubrania");
		

	$('<div class="guzik01" name="LUDZIE" id="g_u00"></div>').text('LUDZIE').appendTo($box_ubrania);
	$('<div class="guzik01" name="UBRANIA" id="g_u01"></div>').text('UBRANIA').appendTo($box_ubrania);
	$('<div class="guzik01" name="ZAPOTRZEBOWANIE" id="g_u03"></div>').text('ZAPOTRZEBOWANIE').appendTo($box_ubrania);
	$('<div class="guzik01" name="WYDANIE" id="g_u04"></div>').text('WYDANIE').appendTo($box_ubrania);
	$('<div class="guzik01" name="RAPORT" id="g_u05"></div>').text('RAPORT').appendTo($box_ubrania);
		
	$box_ubrania.click(function(event){
		
		$('#box_ubrania .guzik01').removeClass().addClass('guzik01');
		//alert("[0]");
		$(event.target).toggleClass('guzik01_ch');
		wybrano=$(event.target).text();
		
		$('#box_1').html(wybrano);
		//alert("[4]");
		
		zaladojOpcjeUbran(wybrano);
		

		//$box_FN.appendTo('#box_0');
	}).appendTo($box_0);
	
	
	$box_0.appendTo('#poziom1');

}//zaladojMies()


function zaladojOpcjeUbran(wybrano){
	$('.vision').empty();
	switch(wybrano) //tak zaczyna się zawsze taki blok
		{ //nawiasy są konieczne
		 case 'LUDZIE': $('#box_1').html('klik '+wybrano); 	wybranoLudzie();	break;	
		 case 'UBRANIA': $('#box_1').html('klik '+wybrano); wybranoUbrania();	break;	
		 case 'LOGOWANIE': $('#box_1').html('klik '+wybrano); wybranoLogowanie();	break;	
		 case 'ZAPOTRZEBOWANIE': $('#box_1').html('klik '+wybrano); wybranoZapotrzebowanie();	break;
		 case 'WYDANIE': $('#box_1').html('klik '+wybrano); wybranoWydanie();	break;	
		 case 'RAPORT': $('#box_1').html('klik '+wybrano); wybranoRaport();	break;
		 default: $('#box_1').html('default... '); alert("default"); break;
		}
	

}//zaladojOpcjeUbran(wybrano)
	
function wybranoLudzie(){

	$('#poziom2').empty();	
		
	var $box_2 = $('<div></div>').attr("id","box_2").attr("name","box_2").addClass('pasek00');
		
	var $box_funkcje = $('<div></div>').attr("id","box_funkcje");

	$('<div class="guzik01" name="DODAJ" id="F_DODAJ"></div>').text('DODAJ').appendTo($box_funkcje);
	$('<div class="guzik01" name="WYSWIETL" id="F_WYSWIETL"></div>').text('WYSWIETL').appendTo($box_funkcje);
	//$('<div class="guzik01" name="ZMIEN" id="F_ZMIEN"></div>').text('ZMIEN').appendTo($box_funkcje);

	$box_funkcje.click(function(event){
		$('#box_funkcje .guzik01').removeClass().addClass('guzik01');
		$(event.target).toggleClass('guzik01_ch');
		funkcja=$(event.target).text();
		$('#box_1').html(funkcja);
		
		switch(funkcja) //tak zaczyna się zawsze taki blok
		{ //nawiasy są konieczne
		 case 'DODAJ': $('#box_1').html('klik DODAJ'); 	wybranoDodaj();	break;	
		 case 'WYSWIETL': $('#box_1').html('klik WYSWIETL'); wybranoWyswietl();	break;	
		 //case 'ZMIEN': $('#box_1').html('klik ZMIEN'); wybranoZmien();	break;
		 //case 'F_09': $('#box_1').html('klik '+wybrano); break;
		 default: $('#box_1').html('default... '); alert("default"); break;
		}
		
	}).appendTo($box_2);
	
	$box_2.appendTo('#poziom2');
	
}//wybranoLudzie()

function wybranoLogowanie(){
	
	//$('#poziom4').load('haczyk/php/logowanie.php');
		
}//wybranoUbrania()

function wybranoZapotrzebowanie(){
	
	$('#poziom2').empty();
	
	$('#poziom3').load('haczyk/php/ubrania4.php', function(){$('#box_1').html('... ');
		$('td.id_ubr').hide();	//ukrywanie id ubrania
		//var $tabela4
	
	}).show();
		
}//wybranoZapotrzebowanie()

function wybranoRaport(){
	$('#poziom2').empty();
	$('#poziom2').html(
		"<div class='formAG' id='daneRaportu'>"
		+"<form id='daneRaportuF' method='post'>"
			+"<fieldset>"
			+"<legend>Dane raportu</legend>"
				+"<ol>"
				+"<li><label for='name'>Imię</label><input id='imie' name='imie' /></li>"
				+"<li><label for='nazwisko'>Nazwisko</label><input id='nazwisko' name='nazwisko' /></li>"
				+"<li><label for='miesiac'>Ilość miesięcy</label><input min='1' step='1' max='48' type='number' id='miesiac' name='miesiac' /></li>"
				+"</ol>"
			+"</fieldset>"
			+"<input type='submit' value='Wyświetl' />"
		+"</form>"
		+"</div>"
	
	);
	
	$('#daneRaportuF').submit(function(){

			var coposzlo=$(this).serialize();
			
			$.post('haczyk/php/ubrania6.php', coposzlo, function(data){
				$('#poziom4').html("wysłane do serwera: "+coposzlo);
				$('#poziom3').html(data);
					
			});
		
			return false;
		
	});	
}//wybranoRaport()


function wybranoWydanie(){
	$('.vision').empty().show();
	
	$('#poziom3').load('haczyk/php/ubrania5.php', function(){
		
		$('input.dodajUbr').click(function(event) {
			var $tmpDta=$('<tr class="ubrDod"><td>......</td></tr>');
		
			$tmpDta.load('haczyk/php/ubrania51.php',{'idLudz':$(this).parents('div').attr('id')}, function(){
							$('td.opis select').change(function(event){
						//debugger;

						//var wybrano=$(':selected',this).attr('data0');

						//var nastepny=$(this).parents('td').next().text(wybrano);
						$(this).parents('td').next().text($(':selected',this).attr('data0'));
						
						}).change();
						
						$('td.plus', this).each(function() {
						  $plusButton = $('<img />').attr({
							 'width': '16',
							 'height': '16',
							 'src': 'img/dodaj.png',
							 'alt': 'dodaj',
							 'title': 'dodaj'
							 //'class': 'clickable'
						  }).css({'cursor': 'pointer'
						  }).click(function() { 
							 
							 var ile = parseInt($(this).parents('td').prev().children().val());
							 ile++;
							 if(ile>9) ile=9;
							 $(this).parents('td').prev().children().val(ile);
							 
							 //var ile =('td.ilosc',this).children().val();

						  });
						  $(this).html($plusButton);
						});
						
						$('table tbody td.minus').each(function() {
						  $minusButton = $('<img />').attr({
							 'width': '16',
							 'height': '16',
							 'src': 'img/minus.png',
							 'alt': 'usuń',
							 'title': 'usuń'
							 //'class': 'clickable'
						  }).css({'cursor': 'pointer'
						  }).click(function() { 

							 //alert('minus');
								var ile = parseInt($(this).parents('td').next().children().val());
								ile--;
								if(ile<0) ile=0;
								$(this).parents('td').next().children().val(ile);
			 
				});
				$(this).html($minusButton);
				});

				
			});
			$(event.target).parents('table').append($tmpDta);

		});
		
		
		
		
		$('#box_1').html('... ');
		
		$('#poziom3 div.formAG form label').click(function(event){
			$('div.formAG').hide();
			var tekst=$(event.target).text();
			//alert (tekst);
			//debugger;
			var $divy=$('div.formAG form label');
			//$divy.filter('label:contains('+tekst+')').addClass('cliced');
			if($(this).hasClass('cliced')){
				$divy.removeClass();
				$('div.formAG').show();
			}
			else{
			$divy.removeClass().filter(function(){
				if ($(this).text()==tekst) {
					//alert("jest");
					$(this).parents('div.formAG').show();
					return 1; }
					else return 0;
				}).addClass('cliced');
			}
			/*
			$('div.formAG').filter(function(){
				return $('label', $(this)).text()==tekst;
			}).hide();
			*/
		});
		
		//$('td.id_ubr').hide();	//ukrywanie id ubrania
		//$('table#ubrania41').remove();
		//var $tabela4 = $('table#ubrania40');
		/*
		var rows = $tabela4.find('tbody > tr').get();
		//debugger;
		$.each(rows, function(index,row){
			$('#poziom5').append(row);
		});
		*/
		/*
		$('tr', $tabela4).each(function(index){
			var $row = $(this);
			$('td', $row)
			//if($row.is ('.nazwisko')){$row.css('border','1px solid #ccc')}
		});
		*/
		/*
		$('tr:not(:has(th))',$tabela4).each(function(index){
			$('td.imie',this).css('border','1px solid #ccc');
			//if (index==50){alert();}
		});
		var $ile0=$('tr:not(:has(th))');
		*/
		
		//alert($ile0.length+" bb");
		
		$('table tbody td.minus').each(function() {
		  $minusButton = $('<img />').attr({
			 'width': '16',
			 'height': '16',
			 'src': 'img/minus.png',
			 'alt': 'usuń',
			 'title': 'usuń'
			 //'class': 'clickable'
		  }).css({'cursor': 'pointer'
		  }).click(function() { 

				var ile = parseInt($(this).parents('td').next().children().val());
				ile--;
				if(ile<0) ile=0;
				$(this).parents('td').next().children().val(ile);
			 
		  });
		  $(this).html($minusButton);
		});
		
		$('td.plus', this).each(function() {
		  $plusButton = $('<img />').attr({
		 'width': '16',
		 'height': '16',
		 'src': 'img/dodaj.png',
		 'alt': 'dodaj',
		 'title': 'dodaj'
			 //'class': 'clickable'
		  }).css({'cursor': 'pointer'
		  }).click(function() { 

			 var ile = parseInt($(this).parents('td').prev().children().val());
			 ile++;
			 if(ile>9) ile=9;
			 $(this).parents('td').prev().children().val(ile);

		  });
		  $(this).html($plusButton);
		});
		
	$('form').submit(function (){
		//alert("1");
		var daneDW='';
		var tmp00=0;
		$('tbody tr',this).each(function(index){
			//daneDW+='elem'+index+'='$('td:eq(0)',this).attr('id')+'&';
			tmp00++;
			if($(this).hasClass("ubrDod") ){
			//daneDW+='elemdupa';//+index+'='+$('td:eq(0)',this).attr('id')+'&';
			daneDW+='elem'+index+'='+$('td:eq(0) select option:selected',this).val()+'&rozElem'+index+'='+$('td:eq(1)',this).text()+'&cechElem'+index+'='+$('td:eq(2) select option:selected',this).val()+'&iloElem'+index+'='+$('td:eq(4) input',this).val()+'&';
			}
			
			else{
			daneDW+='elem'+index+'='+$('td:eq(0)',this).attr('id')+'&rozElem'+index+'='+$('td:eq(1)',this).text()+'&cechElem'+index+'='+$('td:eq(2)',this).text()+'&iloElem'+index+'='+$('td:eq(4) input',this).val()+'&';
			}
			//alert(rrrt);
		});

		daneDW+='ilosc='+tmp00+'&idLudz='+$(this).parents('div').attr('id')+'&dataR='+$('tfoot tr:eq(1) td:eq(0) input',this).val();

		$.post('haczyk/php/ubrania52.php',daneDW, function(data){

			$('#poziom2').empty();
			$('#poziom2').text(data);
			
		});
		
		var $ob1=$(this).parent();
		$ob1.fadeOut().remove();

		//debugger;
		return false;
		
	});
		
	}).show();
	
	
}//wybranoWydanie()


function wybranoUbrania(){

	$('.vision').empty().show();
		
	var $box_2 = $('<div></div>').attr("id","box_2").attr("name","box_2").addClass('pasek00');
	var $box_funkcje = $('<div></div>').attr("id","box_funkcje");


	$('<div class="guzik01" name="DODAJ_UBRANIA" id="F_DODAJ_U"></div>').text('DODAJ UBRANIA').appendTo($box_funkcje);
	$('<div class="guzik01" name="WYSWIETL_UBRANIA" id="F_WYSWIETL_U"></div>').text('WYSWIETL UBRANIA').appendTo($box_funkcje);
	$('<div class="guzik01" name="DODAJ_ZESTAW" id="F_DODAJ_Z"></div>').text('DODAJ ZESTAW').appendTo($box_funkcje);
	$('<div class="guzik01" name="WYSWIETL_ZESTAW" id="F_WYSWIETL_Z"></div>').text('WYSWIETL ZESTAW').appendTo($box_funkcje);
	$('<div class="guzik01" name="PRZYDZIEL_ZESTAW" id="F_PRZYDZIEL_Z"></div>').text('PRZYDZIEL ZESTAW').appendTo($box_funkcje);
	//$('<div class="guzik01" name="WYSWIETL" id="F_WYSWIETL"></div>').text('WYSWIETL').appendTo($box_funkcje);
	//$('<div class="guzik01" name="ZMIEN" id="F_ZMIEN"></div>').text('ZMIEN').appendTo($box_funkcje);

	$box_funkcje.click(function(event){
		$('#box_funkcje .guzik01').removeClass().addClass('guzik01');
		$(event.target).toggleClass('guzik01_ch');
		funkcja=$(event.target).text();
		$('#box_1').html(funkcja);
		
		switch(funkcja) //tak zaczyna się zawsze taki blok
		{ //nawiasy są konieczne
		 case 'DODAJ ZESTAW': $('#box_1').html('klik DODAJ'); 	wybranoDodajZest();	break;	//$.getScript("haczyk/js/F_00.js", function(){F_00()}); break;
		 case 'WYSWIETL ZESTAW': $('#box_1').html('klik WYSWIETL'); wybranoWyswietlZest();	break;	//$.getScript("haczyk/js/F_01.js", function(){F_01()}); break;
		 case 'DODAJ UBRANIA': $('#box_1').html('klik DODAJ'); 	wybranoDodajUbranie();	break;	//$.getScript("haczyk/js/F_00.js", function(){F_00()}); break;
		 case 'WYSWIETL UBRANIA': $('#box_1').html('klik WYSWIETL'); wybranoWyswietlUbranie();	break;	//$.getScript("haczyk/js/F_01.js", function(){F_01()}); break;
		 case 'PRZYDZIEL ZESTAW': $('#box_1').html('klik DODAJ'); 	wybranoPrzydzielZest();	break;	//$.getScript("haczyk/js/F_00.js", function(){F_00()}); break;
		 //case 'WYSWIETL ZESTAW': $('#box_1').html('klik WYSWIETL'); wybranoWyswietlZest();	break;	//$.getScript("haczyk/js/F_01.js", function(){F_01()}); break;
		 
		 
		 //case 'ZMIEN': $('#box_1').html('klik ZMIEN'); wybranoZmien();	break;
		 //case 'F_09': $('#box_1').html('klik '+wybrano); break;
		 default: $('#box_1').html('default... '); alert("default"); break;
		}
	
	}).appendTo($box_2);
	
	
	$box_2.appendTo('#poziom2');
	
	
}//wybranoUbrania()



function wybranoPrzydzielZest(){
	$('.vision').empty().show();

	$('#poziom3').load('haczyk/php/ubrania11_0.php', function(data){

		$('table tbody tr').each(function() {
			$zmienButton = $('<img />').attr({
				'width': '16',
				'height': '16',
				'src': 'img/pencil_go.png',
				'alt': 'aktualizacja',
				'title': 'aktualizacja'
		 
			}).css({'cursor': 'pointer'
			}).click(function() { 
				 var idCzlow = $(this).parents('tr').attr('id');
				 var zestID = $('td:eq(2) input',$(this).parents('tr')).val();
				 
				 var toSend = "&idCzlow="+idCzlow+"&zestID="+zestID;
				 
				 $.post('haczyk/php/ubrania11_1.php', toSend, function(data){

						$('#box_1').html(data);
					//wybranoPrzydzielZest();
				});
			});
		
		});
		//debugger;
		$('<td></td>').insertAfter($('td:nth-child(4)', this)).append($zmienButton);
		
		$('.zest').change(function(){
			//debugger;
				var idCzlow = $(this).parents('tr').attr('id');
				 var zestID = $('td:eq(2) input',$(this).parents('tr')).val();
				 
				 var toSend = "&idCzlow="+idCzlow+"&zestID="+zestID;
			 $('#box_1').html(zestID);
			 
			 $.post('haczyk/php/ubrania11_1.php', toSend, function(data){

					$('#box_1').html(data);
					//wybranoPrzydzielZest();
				});
		
		});
		
		
		
		
	});
	
	
	//alert("b");
		
}//wybranoPrzydzielZest()
	
	

function wybranoWyswietlUbranie(){
	
	$('.vision').empty().show();
	$('#poziom3').load('haczyk/php/ubrania9.php', function(){
		//dodajPrzyciskiDoTabeli();
		});

		
}//wybranoWyswietlUbranie(){

function wybranoDodajZest(){
	
	$('.vision').empty().show();
	//alert("a");
	
	$('#poziom3').html(	
		'<div class="formAG" id="dodajZestawUbr">'
		+'<form method="post">'
		+'<fieldset>'
        +'<legend>Nowy zestaw ubraniowy</legend>'
		+'<br>'
		+'<label for="nazwa_zst">Oznaczenie zestawu: </label> <input class="required" type="text" maxlength="4" name="nazwa_zst" id="nazwa_zst" />'
		+'&nbsp'
		+'<label for="opis_zst">Opis zestawu: </label> <input class="required" type="text" name="opis_zst" id="opis_zst" />'
		+'<br>'
		+'<br>'
		+'<br>'
		+'<span>Elementy zestawu:</span>'
			
		+'<table class="ubrania10">'
		+	'<thead> '
		+		'<tr>'
		+			'<th>Ubranie</th><th>Kolor</th><th>Ilość[szt]</th><th>Czas[miesięcy]</th><th>Usuń</th> '
		+		'</tr>'
		+	'</thead>'
		+	'<tfoot> '
		+		'<tr>'
		+			'<td><input type="button" name="dodajUbrZst" value="DODAJ" class="dodajUbrZst"/></td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>'
		+		'</tr>'
		+	'</tfoot>'							
		+'<tbody>'
		+'</tbody></table>'
			
		+'</fieldset>'
		+'<br>'
		+'<br>'
		+'<br>'
		+'<input type="submit" value="DODAJ ZESTAW">'
		
		+'</form>'
		+'</div>');
		
				
		
		$('input.dodajUbrZst').click(function(event) {
			var $tmpDta=$('<tr class="ubrDodZst"><td>......</td></tr>');
			$tmpDta.load('haczyk/php/ubrania10_1.php', function(){
				
				$deleteButton = $('<img />').attr({
				 'width': '16','height': '16','src': 'img/cross.png','alt': 'usuń','title': 'usuń'
				}).css({'cursor': 'pointer'
				}).click(function() {
					var doZmianyId=$(this).parents('tr').attr('id');
					//	alert(doZmianyId);		
					 $(this).parents('tr').remove();

				});
			
				($('td:nth-child(5)', this)).append($deleteButton);
				
			});
			
			$(event.target).parents('table').append($tmpDta);
			
		}).click();
	
		$('#dodajZestawUbr form').submit(function(){
			
			if($('input[name="nazwa_zst"]').val()==''){
				//$('#poziom5').html('BRAK NAZWY ZESTAWU!');
				$('#box_1').html('BRAK NAZWY ZESTAWU!');
			}
			
			else{
					var daneDW='&idZestawu='+$('input[name="nazwa_zst"]').val()+'&opisZestawu='+$('input[name="opis_zst"]').val();

					$('tbody tr',this).each(function(index){
						daneDW+='&elemID'+index+'='+$('td:eq(0) select option:selected',this).val()+'&kolorElem'+index+'='+$('td:eq(1) input',this).val()+'&ilElem'+index+'='+$('td:eq(2) input',this).val()+'&czasElem'+index+'='+$('td:eq(3) input',this).val();
					});
					//$('#poziom4').html(daneDW);
					$.post('haczyk/php/ubrania10_0.php', daneDW, function(data){
						$('#box_1').html(data);
						wybranoDodajZest();
					});
			}
		return false;			
		});
		
}//wybranoDodajZest(){



function wybranoDodajUbranie(){
	
	$('#poziom3').empty().show();
	$('#poziom4').empty().show();
	$('#poziom5').empty().show();
	//alert("a");
	//----------------------
	$('#poziom3').html(
		
		"<div class='formAG' id='dodajUbranie'>"
			+"<form method='post'>"
			+"<fieldset>"
            +"<legend>Dane ubrania</legend>"	
			+"<ol>"
			+"<li><label for='nazwa_ubr'>Ubranie: </label> <input class='required' type='text' name='nazwa_ubr' id='nazwa_ubr' /></li>"
			+"</ol>"
			
			+"<ul>"
			+"<label for='sposob_ubr'>Sposób wymiarowania:</label>"
			+"<li><label><input type='radio' name='spsPom' value='0' id='spsPom0' /> xxx/yyy</label></li>"
			+"<li><label><input type='radio' name='spsPom' value='1' id='spsPom1' /> S - XXL</label></li>"
			+"<li><label><input type='radio' name='spsPom' value='2' id='spsPom2' /> xxx/yyy/zzz</label></li>"
			+"<li><label><input type='radio' name='spsPom' value='3' id='spsPom3' /> 35 - 50</label></li>"
			+"<li><label><input type='radio' name='spsPom' value='4' id='spsPom4' checked/> BRAK</label></li>"
			
			+"</ul>"
			//<span class='fieldname'>Nazwa</span> <input type='text' 	maxlength='16' name='nazwa_ubr' value=''></li><br>"
			
			//+"<span class='fieldname'>Sposób wymiarowania:</span><br>"
				
			//+"<span class='fieldname'>xxx/yyy</span>   <input type='radio' name='spsPom' value='0'><br>"
			//+"<span class='fieldname'>S - XXL</span>   <input type='radio' name='spsPom' value='1'><br>"
			//+"<span class='fieldname'>xxx/yyy/zzz</span>   <input type='radio' name='spsPom' value='2'><br>"
			//+"<span class='fieldname'>35 - 50</span>   <input type='radio' name='spsPom' value='3'><br>"
			//+"<span class='fieldname'>BRAK</span>   <input type='radio' name='spsPom' value='4'><br>"
				
			
			+"</fieldset>"
			+"<input type='submit' value='DODAJ'>"
			//+"<span class='fieldname'>STS</span> <input type='text' maxlength='3' name='sts' value='off'><br>"
			+"</form>"
			+"</div>"	
			
			//console.log(plec);
			
		);
		
		$('#dodajUbranie form').submit(function(){

			//$('#poziom4').html($(this).serialize());
			
			$.post('haczyk/php/ubrania8.php', $(this).serialize(), function(data){
				
				if (data==1){
					$('#poziom5').html("Dane zapisano");
				}else{
					$('#poziom5').html("Brak połączenia....");
				}

			});
			return false;
				
		});
	
		
}//wybranoDodajUbranie(){

function wybranoDodaj(){
	
	$('.vision').empty().show();
	
	$('#poziom4').html(
		//<div><div class='labelFrm'><label for='rapHerbataForm'>Ilość [L]:</label>	</div><input type='number' name='zehIlosc' min='1' max='2000' step='1' value='1000'></div>
		"<div class='formAG' id='dodajLudzia'>"
			+"<form method='post'>"
			+"<div><div class='labelFrm'><span class='fieldname'>Imie</span></div> <input type='text' 	maxlength='16' name='imie' value='John'></div><br>"
			+"<div><div class='labelFrm'><span class='fieldname'>Nazwisko</span></div> <input type='text' maxlength='16' name='nazwisko' value='Doe'></div><br>"
			//+"<div><div class='labelFrm'><span class='fieldname'>SAP ID</span></div> <input type='number' maxlength='16' name='sapId' value=''></div><br>"
			+"<div><div class='labelFrm'><span class='fieldname'>KOBIETA</span></div>   <input type='radio' name='plec' value='k' required></div>"
			+"<div><div class='labelFrm'><span class='fieldname'>MĘŻCZYZNA</span></div> <input type='radio' name='plec' value='m'></div><br>"
			+"<div><div class='labelFrm'><span class='fieldname'>Rozmiar podkoszulka</span></div> <select name = 'rozPod' size='1'>"
			+"<option value='S'>S</option>"
			+"<option value='M'>M</option>"
			+"<option value='L'>L</option>"
			+"<option value='XL'>XL</option>"
			+"<option value='XXL'>XXL</option>"
			+"</select></div><br>"
			+"<div><div class='labelFrm'><span class='fieldname'>Ubranie: </span></div>"
			//<input min='1' step='1' max='48' type='number' id='miesiac' name='miesiac' />
			+"<span class='fieldname'></span> <input type='number' maxlength='3' name='rozUbr0' value='175' min='0' step='1' max='256'>"
			+"<span class='fieldname'>/</span> <input type='number' maxlength='3' name='rozUbr1' value='100' min='0' step='1' max='256'>"
			+"<span class='fieldname'>/</span> <input type='number' maxlength='3' name='rozUbr2' value='100' min='0' step='1' max='256'></div><br>"
			+"<div><div class='labelFrm'><span class='fieldname'>Rozmiar butów: </span></div><input type='number' maxlength='3' name='rozBut0' value='40' min='0' step='1' max='99'></div><br>"
			+"<div><div class='labelFrm'><span class='fieldname'>Rozmiar kasku: </span></div><input type='number' maxlength='3' name='rozKsk0' value='0' min='0' step='1' max='99'></div><br>"
			+"<div><div class='labelFrm'><span class='fieldname'>Dział: </span></div>"
			+"<select name = 'dzial' size='1'>"
			+"<option value='ZSK'>ZSK</option>"
			+"<option value='ZSB'>ZSB</option>"
			+"<option value='Proszki'>Proszki</option>"
			+"<option value='Tlocznia'>Tłocznia</option>"
			+"<option value='Inne'>Inne</option>"
			+"</select></div><br>"
			+"<div><div class='labelFrm'><span class='fieldname'>Zestaw</span></div><br>"
			//<input type='text' 	maxlength='16' name='imie' value='John'></div><br>"
			+"<div id='zestawyUbraniowe'>"
			+"<input type='radio' name='zestUbr' value='BRAK' required checked> BRAK<br>"
			
			+"</div><br>"
			+"</div>"

			+"<span class='fieldname'>&nbsp;</span>"
			
			+"<input type='submit' value='DODAJ'>"
			+"<input type='reset'>"
			//+"<span class='fieldname'>STS</span> <input type='text' maxlength='3' name='sts' value='off'><br>"
			+"</form>"
			+"</div>"	
			
			//console.log(plec);
			
		);
		//$tmpDta.load('haczyk/php/ubrania51.php',{'idLudz':$(this).parents('div').attr('id')}, function(){
		$('#zestawyUbraniowe').load('haczyk/php/dodajLudziaZestaw.php');
		
		$('.labelFrm').css({"min-width": "135px", "float": "left", "margin-top":"0px"});
		$('input').css({"min-width": "4em", "margin-top":"0px"});//, "border-left":"20em"});
		
		$('#dodajLudzia form').submit(function(){

			$.post('haczyk/php/dodajLudzia.php', $(this).serialize(), function(data){
				
				$('#poziom3').html(data);
				//dodajPrzyciskiDoTabeli();
				//$('#poziom2').html('qwerty qaz<br>');
			});
			return false;
				
		});

}//wybranoDodaj()
function wybranoWyswietl(){
	$('.vision').empty().show();
	$('#poziom3').load('haczyk/php/ubrania0.php', function(){dodajPrzyciskiDoTabeli();});

}//wybranoWyswietl()

function wybranoWyswietlZest(){
	
	$('#poziom3').empty().show();
	$('#poziom4').empty().show();
	$('#poziom5').empty().show();
	$('#poziom3').load('haczyk/php/ubrania1.php', function(){dodajPrzyciskiDoTabeli_1();}).show().css({"margin-bottom":"4em"});
	//$('input').css({"margin-top":"1px"});
	//alert("b");
		
}//wybranoWyswietlZest()


function wybranoZmien(){
	alert("!ok");
	
	
}//wybranoZmien()

function dodajPrzyciskiDoTabeli(){
	
	$('<th>&nbsp;</th>').insertAfter('table thead th:nth-child(7)');
   $('table tbody tr').each(function() {
      $deleteButton = $('<img />').attr({
         'width': '16',
         'height': '16',
         'src': 'img/cross.png',
         'alt': 'usuń',
         'title': 'usuń'
         //'class': 'clickable'
      }).css({'cursor': 'pointer'
	  }).click(function() {

		var doZmianyId=$(this).parents('tr').attr('id');
	
		
		//	alert(doZmianyId);		
         $(this).parents('tr').hide();
		 
		 $.post('haczyk/php/usunLudzia.php', {'id_ludz':doZmianyId}, function(data){
				//$('#poziom4').html(data);
				//$('#poziom3').show();
				//dodajPrzyciskiDoTabeli();
				$('#poziom5').html(data);
				//wybranoWyswietl();
			});
         //   .val(0).trigger('change')
         //   .end().hide();
         //stripe();
      });
      $('<td></td>').insertAfter($('td:nth-child(7)', this)).append($deleteButton);
   });
  //$('<td>&nbsp;</td>').insertAfter('table tfoot td:nth-child(5)');
	  
	  $('<th>&nbsp;</th>').insertAfter('table thead th:nth-child(8)');
   $('table tbody tr').each(function() {
      $zmienButton = $('<img />').attr({
         'width': '16',
         'height': '16',
         'src': 'img/pencil_go.png',
         'alt': 'aktualizacja',
         'title': 'aktualizacja'
		  //'class': 'clickable'
      }).css({'cursor': 'pointer'
	  }).click(function() { 
        var doZmianyId=$(this).parents('tr').attr('id');
		//var ileElm=$('td:eq(1)',$coToZaOb).text();
		var doZmianyImie=$('td:eq(0)',$(this).parents('tr')).text();
		var doZmianyNazwisko=$('td:eq(1)',$(this).parents('tr')).text();
		var doZmianyA=$('td:eq(2)',$(this).parents('tr')).text();//
		var doZmianyBB=$('td:eq(3)',$(this).parents('tr')).text();//
		var doZmianyC=$('td:eq(4)',$(this).parents('tr')).text();//
		var doZmianyD=$('td:eq(5)',$(this).parents('tr')).text();//
		var doZmianyE=$('td:eq(6)',$(this).parents('tr')).text();//
		
		var doZmianyB = doZmianyBB.split("/");
		//alert(doZmianyImie+'_'+doZmianyNazwisko+'_'+doZmianyA+'_'+doZmianyB+'_'+doZmianyC);
		 //var doZmianyIm=$(this).parents('tr').find('td:nth-child(2)').text();
		 
		 $('#poziom3').hide();
		 
		 $('#poziom4').html(
		
		"<div class='formAG' id='zmienLudzia'>"
			+"<form method='post'>"
			+"<input type='hidden' name='id_ludz' value='"+doZmianyId+"'>"
			+"<span class='fieldname'>Rozmiar podkoszulka</span> <select name = 'rozPod' size='1'>"
			+"<option value='"+doZmianyA+"'>"+doZmianyA+"</option>"
			+"<option value='S'>S</option>"
			+"<option value='M'>M</option>"
			+"<option value='L'>L</option>"
			+"<option value='XL'>XL</option>"
			+"<option value='XXL'>XXL</option>"
			+"</select><br>"
			
			+"<span class='fieldname'>Ubranie: </span>"
			+"<span class='fieldname'></span> <input type='number' value ='"+doZmianyB[0]+"' maxlength='3' name='rozUbr0'  min='0' step='1' max='256'>"
			+"<span class='fieldname'>/</span> <input type='number' value ='"+doZmianyB[1]+"' maxlength='3' name='rozUbr1'  min='0' step='1' max='256'>"
			+"<span class='fieldname'>/</span> <input type='number' value ='"+doZmianyB[2]+"' maxlength='3' name='rozUbr2'  min='0' step='1' max='256'><br>"
			+"<span class='fieldname'>Rozmiar butów: </span><input type='number' value ='"+doZmianyC+"' maxlength='3' name='rozBut0'  min='0' step='1' max='99'><br>"
			+"<span class='fieldname'>Rozmiar kasku: </span><input type='number' value ='"+doZmianyD+"' maxlength='3' name='rozKsk0'  min='0' step='1' max='99'><br>"			
			+"<span class='fieldname'>Dział: </span>"
			+"<select name = 'dzial' size='1' required>"
			+"<option value='"+doZmianyE+"'>"+doZmianyE+"</option>"
			+"<option value='ZSK'>ZSK</option>"
			+"<option value='ZSB'>ZSB</option>"
			+"<option value='Proszki'>Proszki</option>"
			+"<option value='Tlocznia'>Tłocznia</option>"
			+"<option value='Inne'>Inne</option>"
			+"</select><br>"
			
			+"<span class='fieldname'>&nbsp;</span>"
			
			+"<input type='submit' value='Zmień'>"
			//+"<span class='fieldname'>STS</span> <input type='text' maxlength='3' name='sts' value='off'><br>"
			+"</form>"
			+"</div>"
			+"<button type='button' onclick='wybranoWyswietl();'>Wstecz</button>"
			
			//console.log(plec);
			
		);
		
		  $('#zmienLudzia form').submit(function(){
			//alert("coposzlo....");
			//var coposzlo=$('#dodajLudzia form').serialize();
			//alert(coposzlo);
			//alert(plec);
			//$('#poziom4').html(plec1);
			
			$.post('haczyk/php/zmienLudzia.php', $(this).serialize(), function(data){
				//$('#poziom4').html(data);
				//$('#poziom3').show();
				//dodajPrzyciskiDoTabeli();
				$('#poziom5').html(data);
				wybranoWyswietl();
			});

			return false;
			
				
		});

      });
      $('<td></td>').insertAfter($('td:nth-child(8)', this)).append($zmienButton);
	  
   });
   

			
	
}//dodajPrzyciskiDoTabeli

function dodajPrzyciskiDoTabeli_1(){
	
		
	$('table.tabZst0').css({
        //'border':'2px solid',
		'border-radius':'5px',
		'margin':'10px',
		'box-shadow': '10px 10px 5px #888888',
		'padding': '2px'
		
      });
	  
	   $('table.tabZst0 tfoot tr').each(function() {
	   
      $dodajButton = $('<img />').attr({
         'width': '16',
         'height': '16',
		 
         'src': 'img/dodaj.png',
         'alt': 'dodaj',
         'title': 'Dodaj element'
		 
         //'class': 'clickable'
      }).css({'cursor': 'pointer'}).click(function() { 
	  
		var idThisTable = $(this).parents('table').attr('id');
        
		 
		 $('#poziom3').hide();
		 
		 $.post('haczyk/php/ubrania2.php', {'tab_id':idThisTable},function(data){
				$('#poziom5').html(data);
			});
		 
		
			
				
		});
      //($('td:nth-child(0)', this)).append($dodajButton);
   }).prepend($dodajButton);
   
	
	$('<th>&nbsp</th>').insertAfter('table.tabZst0 thead th:nth-child(4)');
   $('table.tabZst0 tbody tr').each(function() {
      $deleteButton = $('<img />').attr({
         'width': '16',
         'height': '16',
         'src': 'img/cross.png',
         'alt': 'usuń',
         'title': 'usuń'
         //'class': 'clickable'
		}).css({'cursor': 'pointer'
		}).click(function() {
		
			var idThisTable = $(this).parents('table').attr('id');
			var idThisRow = $(this).parents('tr').attr('class');
			var $coToZaOb = $(this).parents('tr');
			var ileElm=$('td:eq(1)',$coToZaOb).text();
			var czasUz=$('td:eq(2)',$coToZaOb).text();
			//var cechElem=$('td:eq(3)',$(this).parents('tr')).text();
			//debugger;
			var toSend = "&idZestawu="+idThisTable+"&elemID="+idThisRow+"&ileElm="+ileElm+"&czasUz="+czasUz+"&cechElem="+$('td:eq(3)',$(this).parents('tr')).text();
			//$(this).parents('tr').hide();
			//alert(idThisTable + " >>> " + idThisRow + " >>> " + ileElm + ">>>>");
		
			$(this).parents('tr').remove();
		 
			$.post('haczyk/php/ubrania1_0.php', toSend, function(data){
				
				$('#poziom5').html(data);
				//dodajPrzyciskiDoTabeli();
			
			});
		 

		});
      $('<td></td>').insertAfter($('td:nth-child(4)', this)).append($deleteButton);
   });
   //alert("przycisk");
  //$('<td>&nbsp;</td>').insertAfter('table tfoot td:nth-child(5)');
	  
	 $('<th>&nbsp</th>').insertAfter('table.tabZst0 thead th:nth-child(5)');
   $('table.tabZst0 tbody tr').each(function() {
      $zmienButton = $('<img />').attr({
         'width': '16',
         'height': '16',
         'src': 'img/pencil_go.png',
         'alt': 'aktualizacja',
         'title': 'aktualizacja'
		  //'class': 'clickable'
      }).css({'cursor': 'pointer'
	  }).click(function() { 
         
			var idThisRow = $(this).parents('tr').attr('id');
			var opisEl = $('td:eq(0)',$(this).parents('tr')).text();
			
		 
			$('#poziom3').hide();
		 
		 $.post('haczyk/php/ubrania1_1.php', {'row_id':idThisRow, 'opis_El':opisEl},function(data){

				$('#poziom4').html(data);

			});			
		 
			
      });
      $('<td></td>').insertAfter($('td:nth-child(5)', this)).append($zmienButton);
	  
	
   });
   
	
}//dodajPrzyciskiDoTabeli_1



	
