function pobierzMaterialy(){
	xmlDoc = loadXMLDoc("straty.xml");
	x = xmlDoc.documentElement.getElementsByTagName("Row");

		var _NR_ZLEC=9;
		var _WGOT="WGOT";
		var _SKLADNIK="SKLADNIK";
		var _ILOSC_RZECZ=9.9;
		var _WART_ZUZ=9.9;
		var _ILOSC_PODSAWOWA=9;
		var _ILOSC_NORM=9.9;
		var _ILOSC_POST=9.9;
		var _ILOSC_NORM_BB=9.9;
		var _ILOSC_POST_BB=9.9;
		var _WART_POST=9.9;
		var _AGREGAT="AGREGAT";
		var cena=9.9;
		
		
		
		var matTab = new Array();
		var zlecTab = new Array();
		
		var tmp0 = 0;
		
		/*
				<NR_ZLEC>100211738</NR_ZLEC>
		<WGOT>NATYPLB250JBR24A01</WGOT>
		<WGOT_OPIS>TYMBARK nap jab-brz 24szt*0,25L BUT /SiF</WGOT_OPIS>
		<SKLADNIK>0BJA250UNTYGRPL</SKLADNIK>
		<SKLADNIK_OPIS>BUT TYMBARK 0,25L GRAWER NOWA</SKLADNIK_OPIS>
		<ILOSC_RZECZ>143577</ILOSC_RZECZ>
		<JDN>SZT</JDN>
		<WART_ZUZ>29358.62</WART_ZUZ>
		<ILOSC_PODSAWOWA>141456</ILOSC_PODSAWOWA>
		<ILOSC_NORM>144286</ILOSC_NORM>
		<ILOSC_POST>144286</ILOSC_POST>
		<ILOSC_NORM_BB>141456.863</ILOSC_NORM_BB>
		<ILOSC_POST_BB>141456</ILOSC_POST_BB>
		<WART_POST>28924.92</WART_POST>
		<AGREGAT>0BJA250UNTYGRPL</AGREGAT>
		*/
		//alert("Tabela x ma: "+x.length);
		
		for (var ix = 0; ix < x.length; ix++) {//obieg petli, dane szczegolowe, zbieramy dane o materialach
			try {x0 = x[ix].getElementsByTagName("NR_ZLEC");_NR_ZLEC = parseInt(x0[0].firstChild.nodeValue,10);}//try
			catch (er) {_NR_ZLEC = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("WGOT");_WGOT = x0[0].firstChild.nodeValue;}//try
			catch (er) {_WGOT = "";}//catch
			try {x0 = x[ix].getElementsByTagName("SKLADNIK");_SKLADNIK = x0[0].firstChild.nodeValue;}//try
			catch (er) {_SKLADNIK = "";}//catch
			try {x0 = x[ix].getElementsByTagName("ILOSC_RZECZ");_ILOSC_RZECZ = parseFloat(x0[0].firstChild.nodeValue);}//try
			catch (er) {_ILOSC_RZECZ = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("WART_ZUZ");_WART_ZUZ = parseFloat(x0[0].firstChild.nodeValue);}//try
			catch (er) {_WART_ZUZ = 0;}//catch			
			try {x0 = x[ix].getElementsByTagName("ILOSC_PODSAWOWA");_ILOSC_PODSAWOWA = parseInt(x0[0].firstChild.nodeValue,10);}//try
			catch (er) {_ILOSC_PODSAWOWA = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("ILOSC_NORM");_ILOSC_NORM = parseFloat(x0[0].firstChild.nodeValue);}//try
			catch (er) {_ILOSC_NORM = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("ILOSC_POST");_ILOSC_POST = parseFloat(x0[0].firstChild.nodeValue);}//try
			catch (er) {_ILOSC_POST = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("ILOSC_NORM_BB");_ILOSC_NORM_BB = parseFloat(x0[0].firstChild.nodeValue);}//try
			catch (er) {_ILOSC_NORM_BB = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("ILOSC_POST_BB");_ILOSC_POST_BB = parseFloat(x0[0].firstChild.nodeValue);}//try
			catch (er) {_ILOSC_POST_BB = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("WART_POST");_WART_POST = parseFloat(x0[0].firstChild.nodeValue);}//try
			catch (er) {_WART_POST = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("AGREGAT");_AGREGAT = x0[0].firstChild.nodeValue;}//try
			catch (er) {_AGREGAT = "";}//catch
			//koniec pobierania danych wezla
			//if(!(ix%100)){alert(ix+" "+_NR_ZLEC+" "+_SKLADNIK+" "+_AGREGAT);}
			//materialObj(_SKLADNIK, _ILOSC_RZECZ, _ILOSC_POST_BB, _WART_POST, _AGREGAT)
			
			if(!(_ILOSC_RZECZ+_ILOSC_POST_BB)){continue;}
			
			//mamy dane, wypełniamy tabele
			tmp0=-1;
			for (var i5 = 0; i5 < matTab.length; i5++) {
				if (matTab[i5].skladnik == _SKLADNIK){
					tmp0=i5;
					matTab[tmp0].dodajDane(_ILOSC_RZECZ, _ILOSC_POST_BB, _NR_ZLEC);
					break;
				}
			}//for i5
			
			if (tmp0 == -1) {
				if(_ILOSC_RZECZ){cena=(_WART_ZUZ/_ILOSC_RZECZ).toFixed(4);}
				else if(_ILOSC_POST_BB){cena=(_WART_POST/_ILOSC_POST_BB).toFixed(4);}
				else{cena=0.0;}
				
				//if(!(ix%100)){alert(ix+" "+_NR_ZLEC+" "+_SKLADNIK+" "+cena+" "+_WART_ZUZ+" "+_ILOSC_RZECZ);}
				
				var materialObjTmp = new materialObj(_SKLADNIK, cena, _AGREGAT);
				materialObjTmp.dodajDane(_ILOSC_RZECZ, _ILOSC_POST_BB, _NR_ZLEC);
				matTab.push(materialObjTmp);
			}//if
			tmp0=-1;
			
			$('#box_1').html('materiały wczytuje... ' + (ix+1) + ' z ' + x.length);

		}//for (var ix = 0; ix < x.length; ix++)
		
		$('#box_1').html('ilość materiałów: ' + matTab.length);
		
		agregujMaterialy(matTab);
		
}//funkcja ...pobierzMaterialy()

function agregujMaterialy(_matTab){
	
	//usuwanie starej zawartosci
	$('.box_03').remove();
	var $box_03 = $('<div class="box_03"></div>');
	//polaczenie agregatow:
	
	var _matTabAgrTmp = new Array();//tymczasowa tablica z indeksami
	var tmp00 = -1;
	
	for (var cvx = 0; cvx < _matTab.length; cvx++){
		tmp00=_matTabAgrTmp.indexOf(_matTab[cvx].agregat);
		if (tmp00==-1){_matTabAgrTmp.push(_matTab[cvx].agregat);}
		
		//var $box_030 = $('<p></p>');
	
		//$box_030.html('materiał: ' + _matTab[cvx].skladnik + ' cena: '+_matTab[cvx].cena+' w '+_matTab[cvx].zlecenia.length + ' zleceniach');
		
		//$box_030.appendTo($box_03);
	}//for (var cvx = 0; cvx < x.length; cvx++)
	
	
	
	_matTabAgrTmp.sort();
	//alert(_matTabAgrTmp);
	var _matTabAgr = new Array(_matTabAgrTmp.length);//docelowa tablica z indeksami
	
	for (var cvx = 0; cvx < _matTab.length; cvx++){
		tmp00=_matTabAgrTmp.indexOf(_matTab[cvx].agregat);
		if (tmp00!=-1){
				if(_matTabAgr[tmp00] == undefined){
					//alert("undefined");
					_matTabAgr[tmp00] = new materialAgregatObj(_matTab[cvx].agregat);//jeżeli materiał do tej pory nie został zdefiniowany, zostanie dodany
				}//if(_matTabAgr[tmp00] == undefined)
			_matTabAgr[tmp00].ilosc_zuz=_matTabAgr[tmp00].ilosc_zuz.concat(_matTab[cvx].ilosc_zuz);
			_matTabAgr[tmp00].ilosc_pos=_matTabAgr[tmp00].ilosc_pos.concat(_matTab[cvx].ilosc_pos);
			_matTabAgr[tmp00].zlecenia=_matTabAgr[tmp00].zlecenia.concat(_matTab[cvx].zlecenia);
			
			//alert(_matTab[cvx].zlecenia+ '>' +_matTab[cvx].ilosc_zuz+'>'+_matTab[cvx].ilosc_pos);
			//alert(_matTabAgr[tmp00].zlecenia+ '>' +_matTabAgr[tmp00].ilosc_zuz+ '>' +_matTabAgr[tmp00].ilosc_pos);			
			}//if (tmp00!=-1)
		else{alert("errrrorrrrr");}

	}//for (var cvx = 0; cvx < x.length; cvx++)
	_matTabAgrTmp=null; //usuwamy tablice tymczasowa
	
	for (var cvx = 0; cvx < _matTabAgr.length; cvx++){
		
		_matTabAgr[cvx].konsolidujDane();
		
	}//for (var cvx = 0; cvx < _matTabAgr.length; cvx++)
	

	//var zlc = new Array();
	//var rzcz = new Array();
	//var pstw = new Array();
	//var tak=-1;									
	//var temp=new Array();	
	
	
	//for (var cvx = 0; cvx < _matTabAgr.length; cvx++){
		//zabronione = new Array();
		//zlc = new Array();
		//rzcz = new Array();
		//pstw = new Array();
		//temp = new Array();
		
		//zlc = _matTabAgr[cvx].zlecenia;//pobieramy zlecenia do ktorych zostały zuzyte materialy
		//zlc.sort(function(a,b){return a-b;});	
									
		//	for (var zl=0;zl<zlc.length;zl++){
				//alert(zlcTB[zl]);
		//		tak=temp.indexOf(zlc[zl]);
					//alert(tak);
		//		if(tak==-1){
		//		temp.push(zlc[zl]);
				
		//		}//tak==-1
				
		//		else{
		//			if(rzcz[tak] == undefined){rzcz[tak]=0;pstw[tak]=0;}//jezeli w tym miejscu bylo pusto
		//			rzcz[tak]+= _matTabAgr[cvx].ilosc_zuz[cvy];
		//			pstw[tak]+= _matTabAgr[cvx].ilosc_pos[cvy];
				
		//		}
						     //else{zl++;}
		//		}
		//zlc=temp;
		//temp=[0];
		
		//mamy zlecenia do ktorych zuzyto material	
		//teraz na tych pozycjach dodajemy zuzycia i postulaty
		
		//rzcz = _matTabAgr[cvx].ilosc_zuz;
		//pstw = _matTabAgr[cvx].ilosc_pos;
		//for (var cvy = 0; cvy < _matTabAgr[cvx].zlecenia.length; cvy++){
		//	tak = zlc.indexOf(_matTabAgr[cvx].zlecenia[cvy]);
			

			
		//}//for (var cvy = 0; cvy < _matTabAgr.zlecenia.length; cvy++){

			
		//_matTabAgr[cvx].zlecenia=zlc;
		//_matTabAgr[cvx].ilosc_pos=pstw;
		//_matTabAgr[cvx].ilosc_zuz=rzcz;
				
	//}//for (var cvx = 0; cvx < x.length; cvx++)
	
	
	
	//alert("errrrorrrrr" + _matTabAgrTmp);
	///-------------------------------------
	/*
	for (var cvx = 0; cvx < _matTab.length; cvx++){
		
		if (_matTab[cvx].agregat=="KNPOMSI"){
		
		var $box_030 = $('<p></p>');
	
		$box_030.html('materiał: ' + _matTab[cvx].skladnik + _matTab[cvx].zlecenia);
		
		$box_030.appendTo($box_03);
		}
	}//for (var cvx = 0; cvx < x.length; cvx++)
	*/
	
	/* elementy tabeli
	var $tabela_00 = $('<table></table>');
	var $tabela_0h = $('<thead></thead>');
	var $tabela_0tr = $('<tr></tr>');
	var $tabela_0th = $('<th></th>');
	var $tabela_0b = $('<tbody></tbody>');
	var $tabela_0td = $('<td></td>');
	*/	
	
	var odchylenie=0.0;
	
	var $tabela_00 = $('<table></table>');
	var $tabela_0h = $('<thead></thead>');
		var $tabela_0tr0 = $('<tr></tr>');
		var $tabela_0th0 = $('<th></th>');
		var $tabela_0th1 = $('<th></th>');
		var $tabela_0th2 = $('<th></th>');
		var $tabela_0th3 = $('<th></th>');
		var $tabela_0th4 = $('<th></th>');
		$tabela_0th0.html('ZLECENIE').appendTo($tabela_0tr0);
		$tabela_0th1.html('RZECZYWISTA').appendTo($tabela_0tr0);
		$tabela_0th2.html('POSTULOWANA').appendTo($tabela_0tr0);
		$tabela_0th3.html('ODCHYLENIE').appendTo($tabela_0tr0);
		$tabela_0th4.html('ROZWIŃ').appendTo($tabela_0tr0);
		$tabela_0tr0.appendTo($tabela_0h);
		$tabela_0h.appendTo($tabela_00);	
	
	
	
	for (var cvx = 0; cvx < _matTabAgr.length; cvx++){
		var $tabela_0b = $('<tbody></tbody>');
		var $tabela_0tr1 = $('<tr></tr>').html(_matTabAgr[cvx].agregat).appendTo($tabela_0b);
		
		for(var cvx0=0;cvx0<_matTabAgr[cvx].zlecenia.length;cvx0++){
				
				var $tabela_0tr2 = $('<tr></tr>');
				var $tabela_0td0 = $('<td></td>').html(_matTabAgr[cvx].zlecenia[cvx0]).appendTo($tabela_0tr2);
				var $tabela_0td1 = $('<td></td>').html(_matTabAgr[cvx].ilosc_zuz[cvx0]).appendTo($tabela_0tr2);
				var $tabela_0td2 = $('<td></td>').html(_matTabAgr[cvx].ilosc_pos[cvx0]).appendTo($tabela_0tr2);
			
			
			
			if(_matTabAgr[cvx].ilosc_pos[cvx0]){
			odchylenie=((_matTabAgr[cvx].ilosc_zuz[cvx0]-_matTabAgr[cvx].ilosc_pos[cvx0])*100/_matTabAgr[cvx].ilosc_pos[cvx0]).toFixed(2);
					if(odchylenie==-100){
						var $tabela_0td3 = $('<td></td>').html('BRAK').appendTo($tabela_0tr2);
					}
					else{
						var $tabela_0td3 = $('<td></td>').html(odchylenie).appendTo($tabela_0tr2);
					}				
				}
			else{
				var $tabela_0td3 = $('<td></td>').html('ZMIENNIK').appendTo($tabela_0tr2);
				}
				
			var $tabela_0td4 = $('<td></td>').html('->').attr("class",'pokZlec').attr("zlc",_matTabAgr[cvx].zlecenia[cvx0]).appendTo($tabela_0tr2);
			$tabela_0tr2.appendTo($tabela_0b);
		}
		
		//.addClass('pokZlec')
		
		$tabela_0b.appendTo($tabela_00);
		
		//if (_matTabAgr[cvx].agregat=="KNPOMSI"){
			//rysujemy tabelę
		
		
		//var $box_030 = $('<p></p>');
	
		//$box_030.html('mat: ' + _matTabAgr[cvx].agregat +" <br> " +_matTabAgr[cvx].zlecenia+" <br> " +_matTabAgr[cvx].ilosc_pos+" <br> " +_matTabAgr[cvx].ilosc_zuz+
		//" <br>z " +_matTabAgr[cvx].zlecenia.length+" <br>p " +_matTabAgr[cvx].ilosc_pos.length+" <br>r " +_matTabAgr[cvx].ilosc_zuz.length);
		
		//$box_030.appendTo($box_03);
		//}
	}//for (var cvx = 0; cvx < x.length; cvx++)
	
	$tabela_00.appendTo($box_03);
	$box_03.appendTo('#box_0').hide().fadeIn();
	
	var textPoprzedni=$('#box_1').html();
	$('#box_1').html(textPoprzedni+ ' ilość agregatow: ' + _matTabAgr.length);
	
	obslugaGuz01(_matTabAgr);
	
	
	
}//funkcja ...wyswietlMaterialy()

function obslugaGuz01(__matTabAgr)
{
		//var elem_box031=document.getElementById("box031");
		//var tekst031="";
	//alert("sem ja");
	//alert($(this).attr('zlc'));
	//var pozY=$('#box_0').css('top');
	
	
	$('#box_0 .pokZlec').click(function(){
		var pozY=window.pageYOffset;
		//window.scrollTo(0,pozY+200);
		$('#box_A1').remove();
		$('#box_1').html($(this).attr('zlc'));//+ '  >'+$(".box_03").outerWidth());
		//co pokazać:
		//tworzymy tabelke:
		var $tabela_03 = $('<table></table>');
		var $tabela_0h = $('<thead></thead>');
					var $tabela_0tr0 = $('<tr></tr>');
					var $tabela_0th0 = $('<th></th>');
					var $tabela_0th1 = $('<th></th>');
					var $tabela_0th2 = $('<th></th>');
					var $tabela_0th3 = $('<th></th>');
					var $tabela_0th4 = $('<th></th>');
					var $tabela_0th5 = $('<th></th>');
					var $tabela_0th6 = $('<th></th>');
					
					
					$tabela_0th0.html('Lp.').appendTo($tabela_0tr0);
					$tabela_0th1.html('Matriał').appendTo($tabela_0tr0);
					$tabela_0th2.html('IL_RZ').appendTo($tabela_0tr0);
					
					$tabela_0th3.html('IL_PS').appendTo($tabela_0tr0);
					$tabela_0th4.html('ROZ').appendTo($tabela_0tr0);
					$tabela_0th5.html('%').appendTo($tabela_0tr0);
					$tabela_0th6.html('*').appendTo($tabela_0tr0);
					
					$tabela_0tr0.appendTo($tabela_0h);
					$tabela_0h.appendTo($tabela_03);
					
					var $tabela_0b = $('<tbody></tbody>');
		
		
		
		
		
		for (var cvx = 0; cvx < __matTabAgr.length; cvx++){
			for (var cvy = 0; cvy < __matTabAgr[cvx].zlecenia.length; cvy++){
				if(__matTabAgr[cvx].zlecenia[cvy]==$(this).attr('zlc')){
					
					var diff=__matTabAgr[cvx].ilosc_zuz[cvy]-__matTabAgr[cvx].ilosc_pos[cvy];
					var prc=diff/__matTabAgr[cvx].ilosc_pos[cvy]*100;
					
					var $tabela_0tr2 = $('<tr></tr>');
					var $tabela_0td0 = $('<td></td>').html(cvx).appendTo($tabela_0tr2);
					var $tabela_0td1 = $('<td></td>').html(__matTabAgr[cvx].agregat).appendTo($tabela_0tr2);
					var $tabela_0td2 = $('<td></td>').html(__matTabAgr[cvx].ilosc_zuz[cvy]).appendTo($tabela_0tr2);
					
					var $tabela_0td3 = $('<td></td>').html(__matTabAgr[cvx].ilosc_pos[cvy]).appendTo($tabela_0tr2);
					var $tabela_0td4 = $('<td></td>').html(diff.toFixed(2)).appendTo($tabela_0tr2);
					var $tabela_0td5 = $('<td></td>').html(prc.toFixed(2)).appendTo($tabela_0tr2);
					
					var $tabela_0td6 = $('<td></td>').html('66').appendTo($tabela_0tr2);
					
					$tabela_0tr2.appendTo($tabela_0b);
					
					//alert(__matTabAgr[cvx].agregat+" "+__matTabAgr[cvx].ilosc_zuz[cvy]+" "+__matTabAgr[cvx].ilosc_pos[cvy]);
				}
				
				
							
			}//for (var cvy = 0; cvy < _matTabAgr.zlecenia.length; cvy++){
		
		}//for (var cvx = 0; cvx < __matTabAgr.length; cvx++)
		
		$tabela_0b.appendTo($tabela_03);
		
		//$tabela_03.appendTo($box_zlc);
		
		var $box_zlc = $('<div id="box_A1"></div>');
		$box_zlc.css('left', $(".box_03").outerWidth()+'px');
		var guz_0=$('<div class="clickable">Zamknij</div>').appendTo($box_zlc);
		$tabela_03.appendTo($box_zlc);
		$box_zlc.appendTo('#box_0');
		
		$('#box_A1 .clickable').click(function(){
			//$('#box_1').html('usuwam'+ '  >'+pozY);
			$box_zlc.remove();
			//event.preventDefault();
			//window.scrollBy(0,100);
			//przesun(pozY);
		});
		
		/*
		$('#box_A1')
		  .find('.ok, .cancel')
		  .live('click', function() {
		  //	closeDialog(this);
		  	$box_zlc.remove();
		  	//$('#box_0').css('top',pozY+'px');
		  	window.scrollTo(0,pozY);
		  });
		*/
		
		/*
		
		var $box_zlc = $('<div id="eula" class="dialog"></div>');
		
		
		
		$tabela_03.appendTo($box_zlc);
		//pokazywanie:
		var $pojemnik_00 = $(' <div id="overlay"><div id="blanket"></div></div>').appendTo('#box_0');
		
		
		var $guziki=$('<div class="buttons"></div>');
		var guz_0=$('<a href="#" class="ok">Zamknij</a>').appendTo($guziki);
		//var guz_1=$('<a href="#" class="cancel">Nie zgadzam się</a>').appendTo($guziki);
		$guziki.appendTo($box_zlc);
		$box_zlc.appendTo('#box_0');
		//alert("1");
		openDialog('#eula');
		//alert("2");
		$('#eula')
		  .find('.ok, .cancel')
		  .live('click', function() {
		  	closeDialog(this);
		  	$box_zlc.remove();
		  	
		  })
		  .end();
		  //.find('.ok')
		  //.live( 'click', function(){
		  	// Clicked Agree!
		  //  console.log('clicked agree!');
		  //})
		  //.end()
		  //.find('.cancel')
		  //.live('click', function() {
		  	// Clicked disagree!
		  //  console.log('clicked disagree!');
		  //});
		  ;
		//alert("3");
		//$box_zlc.appendTo('#box_0').fadeIn();
		//$('#box_1').html("klik");
		
		*/
		
		//alert($(this).attr('zlc'));

	});
	

	
}//funkcja obslugaGuz00()
