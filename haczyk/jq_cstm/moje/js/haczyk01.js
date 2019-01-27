// JavaScript Document
//
function loadXMLDoc(dname) {

	//--------------
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		// alert("a");
		xmlhttp = new XMLHttpRequest();
		//alert("b");
	} else {// code for IE6, IE5
		//alert("c");
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		// alert("d");
	}

	if (xmlhttp != null) {
		//alert("jest if");
		xmlhttp.open("GET", dname, false);
		xmlhttp.send(null);
		xmlDoc = xmlhttp.responseXML;
		//alert("jest if 2");

		return xmlDoc;
	} else {

		alert("The XMLHttpRequest not supported");
		return 0;
	}
	
}//koniec funkcji ladujacej xml

//--------------


function zladujStroby() {

	var tmp0 = 0;
	var tmp1 = 0;
	var strob = "";
	var dni = new Array();
	var stroby = new Array();
	var dzien = "";
	//$('body').html('ładuję....');
	
	xmlDoc = loadXMLDoc(_dane_we);
	
	//xmlDoc = loadXMLDoc("meldy.xml");

//alert('pierwszy c: ');

	//document.write("XML document loaded into an XML DOM Object." + "<br>");

	x = xmlDoc.documentElement.getElementsByTagName("Row");

	for (var i = 0; i < x.length; i++) {//pierwszy obieg petli, zbiera dane o strobach i dniach
		try {
			x0 = x[i].getElementsByTagName("STROB");
			nazwaStRba = x0[0].firstChild.nodeValue;
			tmp0 = stroby.indexOf(nazwaStRba);
			if (tmp0 == -1) {
				stroby.push(nazwaStRba);
				// document.write(strob+ " "+tmp + "<br>") ;
			}//if

		}//try
		catch (er) {
			nazwaStRba = "";
		}//catch

		try {
			x0 = x[i].getElementsByTagName("DATA2");
			_data = parseInt(x0[0].firstChild.nodeValue);
			tmp0 = dni.indexOf(_data);
			if (tmp0 == -1) {
				dni.push(_data);
				// document.write(strob+ " "+tmp + "<br>") ;
			}//if
			else {
				//  document.write(strob+ " "+tmp + "<br>") ;
			}//else
		}//try
		catch (er) {
			_data = 0;
		}//catch

	}//for

	//	document.write(stroby+ " "+ "<br>") ;
	stroby.sort();
	//document.write(stroby + " " + "<br>");

	//	document.write(dni+ " "+ "<br>") ;
	dni.sort();
	//document.write(dni + " " + "<br>");

	stnRb = new Array(stroby.length);

	//document.write(stnRb.length + " <<< " + "<br>");
	

	for (var i = 0; i < x.length; i++) {//drugi obieg petli, dane szczegolowe
		try {
			x0 = x[i].getElementsByTagName("ZM_DB");
			_zmiana = parseInt(x0[0].firstChild.nodeValue,10);
		}//try
		catch (er) {
			_zmiana = 0;
		}//catch
		try {
			x0 = x[i].getElementsByTagName("UZYSK");
			_uzysk = parseInt(x0[0].firstChild.nodeValue,10);
		}//try
		catch (er) {
			_uzysk = 0;
		}//catch
		try {
			x0 = x[i].getElementsByTagName("MNOZNIK");
			_mnoznik = parseFloat(x0[0].firstChild.nodeValue);
		}//try
		catch (er) {
			_mnoznik = 0;
		}//catch
		try {
			x0 = x[i].getElementsByTagName("STROB");
			nazwaStRba = x0[0].firstChild.nodeValue;
		}//try
		catch (er) {
			nazwaStRba = "";
		}//catch
		try {
			x0 = x[i].getElementsByTagName("LICZNIK");
			_licznik = x0[0].firstChild.nodeValue;
		}//try
		catch (er) {
			nazwaStRba = "";
		}//catch
		try {
			x0 = x[i].getElementsByTagName("ZLECENIE");
			_zlecenie = parseInt(x0[0].firstChild.nodeValue,10);
		}//try
		catch (er) {
			_zlecenie = 0;
		}//catch
		try {
			x0 = x[i].getElementsByTagName("DATA2");
			_data = parseInt(x0[0].firstChild.nodeValue,10);
		}//try
		catch (er) {
			_data = 0;
		}//catch
		try {
			x0 = x[i].getElementsByTagName("WAH");
			_awh = parseFloat(x0[0].firstChild.nodeValue);
		}//try
		catch (er) {
			_awh = 0;
		}//catch
		try {
			x0 = x[i].getElementsByTagName("MH");
			_mh = parseFloat(x0[0].firstChild.nodeValue);
		}//try
		catch (er) {
			_mh = 0;
		}//catch
		try {
			x0 = x[i].getElementsByTagName("RH");
			_rh = parseFloat(x0[0].firstChild.nodeValue);
		}//try
		catch (er) {
			_rh = 0;
		}//catch
		try {
			x0 = x[i].getElementsByTagName("AH");
			_ah = parseFloat(x0[0].firstChild.nodeValue);
		}//try
		catch (er) {
			_ah = 0;
		}//catch
		try {
			x0 = x[i].getElementsByTagName("WH");
			_wh = parseFloat(x0[0].firstChild.nodeValue);
		}//try
		catch (er) {
			_wh = 0;
		}//catch
		try {
			x0 = x[i].getElementsByTagName("SH");
			_sh = parseFloat(x0[0].firstChild.nodeValue);
		}//try
		catch (er) {
			_sh = 0;
		}//catch

		//tworzymy obiekt stanowisko robocze

		tmp0 = stroby.indexOf(nazwaStRba);
		tmp1 = dni.indexOf(_data);
		//test3=typeof(stnRb[tmp0]);
		//document.write(" test3: "+test3+" "+stnRb[tmp0]+"<br>" ) ;

		if (stnRb[tmp0] == undefined) {
			//document.write(" zapisane: "+i+" >> " ) ;
			var stanRobObj = new StRb(nazwaStRba, dni.length);
			//stnRb[stroby.indexOf(nazwaStRba)]=new StRb(nazwaStRba, dni.length);
			stnRb[tmp0] = stanRobObj;

		}//if
		//------------------------

		//tworzymy obiekt zmiana i dokladamy do stan rob.

		//test=stnRb[tmp0].SRdni[tmp1][_zmiana-1];
		//document.write(" test "+test+"<br>") ;

		if (stnRb[tmp0].SRdni[tmp1][_zmiana - 1] != 0) {//jeżeli ma zmiany, to je dodajemy

			stnRb[tmp0].SRdni[tmp1][_zmiana - 1].dodajZmiane(_mnoznik, _uzysk, _zlecenie, _awh, _mh, _rh, _ah, _wh, _sh, _licznik);
			/*
			 if(i<40){
			 document.write("zmi if "+ _zmiana
			 +" uzy "+ _uzysk
			 +" mno "+ _mnoznik
			 +" str "+ nazwaStRba
			 +" zlc "+ _zlecenie
			 +" dta "+ _data
			 +" awh "+ _awh
			 +" mh "+ _mh
			 +" rh "+ _rh
			 +" ah "+ _ah
			 +" wh "+ _wh
			 +" sh "+ _sh
			 +" tablica: "+ stnRb[tmp0].SRnazwa
			 +"<br>") ;

			 }//if
			 */
		}//if
		else {
			var zmianaSR = new zmianyRb(_zmiana, _data);
			//jezeli nie ma zmian, to odpalamy konstruktora i je dodajemy
			//document.write(" a ") ;
			
			//document.write(" b ") ;
			//zmianaSR.wyswietl();
			zmianaSR.dodajZmiane(_mnoznik, _uzysk, _zlecenie, _awh, _mh, _rh, _ah, _wh, _sh, _licznik);
			//document.write(" c ") ;
			stnRb[tmp0].SRdni[tmp1][_zmiana - 1] = zmianaSR;
			//document.write(" d ") ;

			//document.write(" d "+ "<br>") ;

		}//else

		//test=stnRb[tmp0].SRdni[tmp1][_zmiana-1].zmiana;
		//document.write(" test2: "+test+"<br>" ) ;
		//------------------------

		/*
		 for (a=0;a<stnRb.length;a++)
		 {
		 tmp = stnRb.indexOf(nazwaStRba);
		 if(tmp==-1){

		 //dni.push(_data);
		 // document.write(strob+ " "+tmp + "<br>") ;
		 }//if
		 else{
		 //  document.write(strob+ " "+tmp + "<br>") ;
		 }//else
		 }//for
		 */

		/*
		 if(stnRb.length){
		 for (a=0;a<stnRb.length;a++)
		 {
		 if(stnRb[a]==nazwaStRba){
		 document.write("mam stroba! "+nazwaStRba+"<>"+a+"<br>") ;
		 break;
		 }//if
		 else if(a==stnRb.length-1){
		 stnRb.push(nazwaStRba);
		 }// else if
		 }//for
		 }//if
		 else{
		 stnRb.push(nazwaStRba);
		 }//else
		 */

	}//for

	//document.write("strobow " + stroby.length + " dni " + dni.length + "<br>");
	//pokazMeldStrob("TTAS");
	
	//==================================
	
	//$('body').html('<div id="box030">z</div>');
	//$('body').html('');
	//$('<div id="box_01">aa</div>').appendTo('#box_0');
	//$('#fileAttributes').fadeIn('slow');
	//alert('OK');
	daty=dni;
	
	wyswietlStRob();


}//function zladujStroby


function wyswietlStRob()
{
	
	
	var $box_00 = $('<div>FN:</div>');
	$box_00.attr("id","box_00");
	for (var i = 0; i < 10; i++) {
	
		$('<div class="guzik00" name=F '+i+' id="g_'+i+'"></div>').text('FN_'+i).appendTo($box_00);

	}//for i
	
	
	
	
	var $box_01 = $('<div>stnRb:</div>');
	$box_01.attr("id","box_01");

	for (var i = 0; i < stnRb.length; i++) {
	
		$('<div class="guzik00" name= '+stnRb[i].SRnazwa+' id="g00_'+stnRb[i].SRnazwa+'"></div>').text(stnRb[i].SRnazwa).appendTo($box_01);

	}//for i
	



$box_00.appendTo('#box_0').hide().fadeIn();
$box_01.appendTo('#box_0').hide().fadeIn();

//alert("gg");

obslugaGuz00();

}//funksja wyswietlStRob()

function obslugaGuz00()
{
		//var elem_box031=document.getElementById("box031");
		//var tekst031="";
	//alert("sem ja");
	$('#box_01 .guzik00').click(function(){
		$(this).toggleClass('guzik01');
	
		//elem_box031.innerHTML=elem_box031.innerHTML+" "+$(this).attr('id');
		var wybrano=$('#box_00 .guzik01_ch').text();
		$('#box_1').html(wybrano);
		
		switch(wybrano) //tak zaczyna się zawsze taki blok
		{ //nawiasy są konieczne
		 case 'FN_0': $('#box_1').html('klik '+wybrano); pokazMeldF00(); break; 
		 case 'FN_1': $('#box_1').html('klik '+wybrano); pokazBldyF01(); break;
		 case 'FN_2': $('#box_1').html('klik '+wybrano); pokazMarszrutyF02(); break;
		 case 'FN_3': $('#box_1').html('klik '+wybrano); funF03();break;
		 case 'FN_4': $('#box_1').html('klik '+wybrano); funF04();break;
		 case 'FN_5': $('#box_1').html('klik '+wybrano); break;
		 case 'FN_6': $('#box_1').html('klik '+wybrano); break;
		 case 'FN_7': $('#box_1').html('klik '+wybrano); break;
		 case 'FN_8': $('#box_1').html('klik '+wybrano); break;
		 case 'FN_9': $('#box_1').html('klik '+wybrano); pobierzMaterialy(); break;
		 default: $('#box_1').html('default... '); break;
		}
		
		
		
		//pokazMeldF00();
		//alert("1: "+tekst031);
		//alert("2: "+$(this).attr('id'));
		//tekst031=tekst031+$(this).attr('id');
		//alert("3: "+tekst031);
		//elem_box031.innerHTML=tekst031;
	});
	
	
	
	$('#box_00 .guzik00').click(function(){
		$('#box_00 .guzik00').removeClass().addClass('guzik00');
		
		$(this).toggleClass('guzik01_ch');
		var wybrano=$(this).text();
		$('#box_1').html(wybrano);
		
		
		switch(wybrano) //tak zaczyna się zawsze taki blok
		{ //nawiasy są konieczne
		 case 'FN_0': $('#box_1').html('klik '+wybrano); pokazMeldF00(); break; 
		 case 'FN_1': $('#box_1').html('klik '+wybrano); pokazBldyF01(); break;
		 case 'FN_2': $('#box_1').html('klik '+wybrano); pokazMarszrutyF02(); break;
		 case 'FN_3': $('#box_1').html('klik '+wybrano); funF03();break;
		 case 'FN_4': $('#box_1').html('klik '+wybrano); funF04();break;
		 case 'FN_5': $('#box_1').html('klik '+wybrano); break;
		 case 'FN_6': $('#box_1').html('klik '+wybrano); break;
		 case 'FN_7': $('#box_1').html('klik '+wybrano); break;
		 case 'FN_8': $('#box_1').html('klik '+wybrano); break;
		 case 'FN_9': $('#box_1').html('klik '+wybrano); pobierzMaterialy(); break;
		 default: $('#box_1').html('default... '); break;
		}
		
		});
		
		

	
}//funkcja obslugaGuz00()

function pokazMeldF00(){
	
		$('.box_03').remove();

		var $box_03 = $('<div class="box_03"></div>');
		var _dzien=1;
		var szer=48;
		var awarii=9.9;
		var mycie=9.9;
		var praca=9.9;
		var brak=9.9;
		var ludzi=9.9;
		var razem=9.9;
		var zostalo=48;
		
		var nazwaStr='';
		var dataMeld='';

		
		$('#box_01 .guzik01').each(function(){

			
			for (var i = 0; i < stnRb.length; i++) {
				if (stnRb[i].SRnazwa == $(this).attr('name')) {

					var $box_030=$('<div class="box_030"></div>');
					$box_030.html($(this).attr('name')+'<br>');			

					for (var ii = 0; ii < stnRb[i].SRdni.length; ii++) {

						var $box_dta=$('<div class="pasek"></div>');
						$box_dta.html(daty[ii]);
						$box_dta.appendTo($box_030);

						for (var iii = 0; iii < 3; iii++) {
							var $box_0300=$('<div class="box_0300"></div>');
														
							awarii=0;
							mycie=0;
							praca=0;
							brak=0;
							ludzi=0;
							razem=0;

							if (stnRb[i].SRdni[ii][iii]) {
								awarii=parseFloat(stnRb[i].SRdni[ii][iii].awh+stnRb[i].SRdni[ii][iii].ah);
								mycie=stnRb[i].SRdni[ii][iii].wh;
								praca=stnRb[i].SRdni[ii][iii].mh;
								brak=stnRb[i].SRdni[ii][iii].sh;
								ludzi=stnRb[i].SRdni[ii][iii].rh;
								razem=awarii+mycie+praca+brak;
								
								if(razem<8.15){
									
									awarii=parseInt(awarii/8*szer,10);
									mycie=parseInt(mycie/8*szer,10);
									praca=parseInt(praca/8*szer,10);
									brak=parseInt(brak/8*szer,10);
									zostalo=szer-awarii-mycie-praca-brak;
									ludzi=ludzi/8;
									
								var $box_AH=$('<div class="pasek" style="background-color: #903;width: 0px;">&ensp;</div>');
								var $box_WH=$('<div class="pasek" style="background-color: #069;width: 0px;">&ensp;</div>');
								var $box_MH=$('<div class="pasek" style="background-color: #390;width: 0px;">&ensp;</div>');
								var $box_SH=$('<div class="pasek" style="background-color: #000000;width: 0px;">&ensp;</div>');
								var $box_AL=$('<div class="pasek" style="background-color: #FFFFFF;width: 0px;">&ensp;</div>');
									
									
								$box_AH.css('width',awarii+'px').appendTo($box_0300);
								$box_WH.css('width',mycie+'px').appendTo($box_0300);
								$box_MH.css('width',praca+'px').appendTo($box_0300);
								$box_SH.css('width',brak+'px').appendTo($box_0300);
								$box_AL.css('width',zostalo+'px').appendTo($box_0300);
								
								$box_0300.appendTo($box_030);

									
									}//if 8,15
									
								else{
									var $box_E0=$('<div class="pasek" style="background-color: #FF0000;width: 48px;">&ensp;</div>');
									$box_E0.appendTo($box_0300);
									$box_0300.appendTo($box_030);
									
										}//else

							}//if stnRb[i].SRdni[ii][iii]
							
							
							else {
								var $box_E1=$('<div class="pasek" style="background-color: #FFFFFF;width: 48px;">&ensp;</div>');
								$box_E1.appendTo($box_0300);
								$box_0300.appendTo($box_030);
								//$('<div class="pasek" style="background-color: #FFFFFF;width: 48px;">&ensp;</div>').appendTo('.box03100');//'<div class="pasek" > Brak meldunku </div></div><!--box03100//--><div class="kasuj" id="kasuj"></div><!--kasuj//-->';
							}//else
					
						}//for iii
						
						var $box_KS=$('<div class="kasuj" id="kasuj"></div>');
						
						$box_KS.appendTo($box_0300);
						$box_0300.appendTo($box_030);
						$box_KS.appendTo($box_030);
						//$('<div class="kasuj" id="kasuj"></div>').appendTo('.box03100'); //<!--kasuj//--></div><!--box03100//--><div class="kasuj" id="kasuj"></div><!--kasuj//-->';
						//$('<div class="kasuj" id="kasuj"></div>').appendTo('.box0310');
					}//for ii
			//textDodany=textDodany+'</div>';
			//elem_box031.innerHTML=elem_box031.innerHTML+textDodany;
			$box_030.appendTo($box_03);
			
				}//if stnRb[i].SRnazwa==_nazwaStRob
			}//for i
	});
//$('<div>&ensp;<br>&ensp;<br>&ensp;<br>&ensp;<br></div>').appendTo('#box_0');
$box_03.appendTo('#box_0').hide().fadeIn();
	
}//funksja pokazMeldF00()

function pokazBldyF01(){
	
		$('.box_03').remove();
		var $box_03 = $('<div class="box_03"></div>');
		var _dzien=1;
		var szer=48;
		var awarii=9.9;
		var mycie=9.9;
		var praca=9.9;
		var brak=9.9;
		var ludzi=9.9;
		var razem=9.9;
		var zostalo=48;
		xmlDoc = loadXMLDoc("meldy.xml");
		x = xmlDoc.documentElement.getElementsByTagName("Row");

		//$('#box_01 .guzik01').each(function(){
			
			for (var i = 0; i < stnRb.length; i++) {
		//		if (stnRb[i].SRnazwa == $(this).attr('name')) {
					$('#box_1').html(i+1 + ' z  '+ stnRb.length);
					
					var $box_031=$('<div class="box_031"></div>');
		//			$box_031.html($(this).attr('name')+'<br>');	
					$box_031.html(stnRb[i].SRnazwa+'<br>');		
					
					for (var ii = 0; ii < stnRb[i].SRdni.length; ii++) {
						for (var iii = 0; iii < 3; iii++) {
							awarii=0;
							mycie=0;
							praca=0;
							brak=0;
							ludzi=0;
							razem=0;
							if (stnRb[i].SRdni[ii][iii]) {
								awarii=parseFloat(stnRb[i].SRdni[ii][iii].awh+stnRb[i].SRdni[ii][iii].ah);
								mycie=stnRb[i].SRdni[ii][iii].wh;
								praca=stnRb[i].SRdni[ii][iii].mh;
								brak=stnRb[i].SRdni[ii][iii].sh;
								ludzi=stnRb[i].SRdni[ii][iii].rh;
								razem=awarii+mycie+praca+brak;
								
								if(razem>=8.1 || razem<=7.9){
									var $box_0310=$('<div class="box_0310"></div>');

									
									$box_0310.html('<p> <br> godzin: '+ razem.toFixed(2)+ 
									' data: '+stnRb[i].SRdni[ii][iii].data+
									' zmiana: '+stnRb[i].SRdni[ii][iii].zmiana+ 
									' zlecenia: '+stnRb[i].SRdni[ii][iii].zlecenia+
									' <br></p>');
									
									//----------------------------
									var zlcTB = stnRb[i].SRdni[ii][iii].zlecenia;
									zlcTB.sort(function(a,b){return a-b;});
									
									var tak=-1;									
									var temp=new Array();
									
									
									for (var zl=0;zl<zlcTB.length;zl++){
									//alert(zlcTB[zl]);
									tak=temp.indexOf(zlcTB[zl]);
									//alert(tak);
									    if(tak==-1){
									     temp.push(zlcTB[zl]);
									     }
									     //else{zl++;}
									
									}
									
									zlcTB=temp;
									
									

									for (var zl=0;zl<zlcTB.length; zl++){
										if(1){
										for (var ix = 0; ix < x.length; ix++) {//obieg petli, dane szczegolowe, zbieramy dane o marszrutach
											try {
												x0 = x[ix].getElementsByTagName("ZLECENIE");
												_zlecenie = parseInt(x0[0].firstChild.nodeValue,10);
												}//try
												catch (er) {_zlecenie = 0;
											}//catch
											try {
													x0 = x[ix].getElementsByTagName("ZM_DB");
													_zmiana = parseInt(x0[0].firstChild.nodeValue,10);
												}//try
												catch (er) {
													_zmiana = 0;
												}//catch
											try {
													x0 = x[ix].getElementsByTagName("DATA2");
													_data = parseInt(x0[0].firstChild.nodeValue,10);
												}//try
												catch (er) {
													_data = 0;
												}//catch
												
											
											
											
											if(_zlecenie==zlcTB[zl] && _zmiana==stnRb[i].SRdni[ii][iii].zmiana && _data==stnRb[i].SRdni[ii][iii].data){
													try {
													x0 = x[ix].getElementsByTagName("WAH");
													_awh = parseFloat(x0[0].firstChild.nodeValue);
														}//try
													catch (er) {
														_awh = 0;
													}//catch
													try {
														x0 = x[ix].getElementsByTagName("MH");
														_mh = parseFloat(x0[0].firstChild.nodeValue);
													}//try
													catch (er) {
														_mh = 0;
													}//catch
													try {
														x0 = x[ix].getElementsByTagName("RH");
														_rh = parseFloat(x0[0].firstChild.nodeValue);
													}//try
													catch (er) {
														_rh = 0;
													}//catch
													try {
														x0 = x[ix].getElementsByTagName("AH");
														_ah = parseFloat(x0[0].firstChild.nodeValue);
													}//try
													catch (er) {
														_ah = 0;
													}//catch
													try {
														x0 = x[ix].getElementsByTagName("WH");
														_wh = parseFloat(x0[0].firstChild.nodeValue);
													}//try
													catch (er) {
														_wh = 0;
													}//catch
													try {
														x0 = x[ix].getElementsByTagName("SH");
														_sh = parseFloat(x0[0].firstChild.nodeValue);
													}//try
													catch (er) {
														_sh = 0;
													}//catch
													$('<p> zlecenie: '+ _zlecenie+ 
													//' data: '+stnRb[i].SRdni[ii][iii].data+
													//' zmiana: '+stnRb[i].SRdni[ii][iii].zmiana+ 
													' mycie aw: '+_awh.toFixed(2)+
													' mh: '+_mh.toFixed(2)+
													' rh: '+_rh.toFixed(2)+
													' awaria: '+_ah.toFixed(2)+
													' mycie: '+_wh.toFixed(2)+
													' stop: '+_sh.toFixed(2)+
													' <br></p>').appendTo($box_0310);		
												
												
											}//if _zlecenie==stnRb[i].SRdni[ii][iii].zlecenia[zl]
											
										
										}// for ix < x.length
									 }	
										
									}//for zl<stnRb[i].SRdni[ii][iii].zlecenia.length
							
									
										
									
									
									//----------------------------
									//textDodany=textDodany+'<div class="kasuj" id="kasuj"></div><!--kasuj//--></div><!--box03100//--><div class="kasuj" id="kasuj"></div><!--kasuj//-->';
									$box_0310.appendTo($box_031);
				
									}//if 8,15		var n=str.slice(1,5);   var n = num.toString();
	
							}//if stnRb[i].SRdni[ii][iii]
						}//for iii
						
					}//for ii
			//textDodany=textDodany+'</div>';
			//elem_box031.innerHTML=elem_box031.innerHTML+textDodany;
			$box_031.appendTo($box_03);
	//			}//if stnRb[i].SRnazwa==_nazwaStRob
			}//for i
			
					
	//});
		
$box_03.appendTo('#box_0').hide().fadeIn();
$('#box_0').css("padding-bottom",'45px');
	
}//funkcja ...F01()



function pokazMarszrutyF02(){
	 	
		
		$('.box_03').remove();
		var $box_03 = $('<div class="box_03"></div>');
		$('#box_1').html(' fn2! ');
		
		var stRobLicz = new Array();
		var zlecTab = new Array();
		var wynik = new Array();
	

		wynik=wyliczMarszt();
		//alert("Tabela wynik ma: "+wynik.length);
		stRobLicz=wynik[0];
		zlecTab=wynik[1];
		//alert("Tabela stRobLicz ma: "+stRobLicz.length);
		//alert("Tabela zlecTab ma: "+zlecTab.length);
		wynik=(0);
		//alert("wynik "+wynik+"teraz Tabela wynik ma: "+wynik.length);
		
		
	
	
	_awh=125.0;
	_ah=100.0;
	_wh=50.0;
	_mh=1000.0;
	_rh=23.0;
	var kosztMarWazNorm=0.0;
	var kosztZlecWazNorm=0.0;
	var dl_paska=0;
	var kolor0=0x0;
	
	var wsp00=0.0;
	//alert("d");
	for (var a5 = 0; a5 < stRobLicz.length; a5++) {
							
				//stRobLicz[a5].daneWazone.normalizujMarsz();
				kosztMarWazNorm=(stRobLicz[a5].daneWazone.awh*_awh+
				stRobLicz[a5].daneWazone.ah*_ah+
				stRobLicz[a5].daneWazone.mh*_mh+
				stRobLicz[a5].daneWazone.wh*_wh+
				stRobLicz[a5].daneWazone.rh*_rh)/stRobLicz[a5].daneWazone.uzysk;
				
				var $tabela_00 = $('<table></table>');
				$tabela_00.addClass('sortable').attr("id","my-data");
				var $tabela_0h = $('<thead></thead>');
				
				$tabela_0h.html('<tr>'+
				'<th class="sort-numeric">Lp.</th>'+	
				'<th class="sort-numeric">Zlecenie </th>'+	
				'<th class="sort-numeric">Produkcja</th>'+	
				'<th class="sort-numeric">Odchylenie</th>'+
				'<th class="sort-numeric">c</th>'+	
				'<th class="sort-numeric">mh_w</th>'+	
				'<th class="sort-numeric">mh_m</th>'+
				'<th class="sort-numeric">ah_w</th>'+
				'<th class="sort-numeric">ah_m</th>'+
				'<th class="sort-numeric">wh_w</th>'+	
				'<th class="sort-numeric">wh_m</th>'+
				'<th class="sort-numeric">rh_w</th>'+
				'<th class="sort-numeric">rh_m</th>'+
				'</tr>');
				
				$tabela_0h.appendTo($tabela_00);
							
				var $tabela_0n = $('<br><div>'+stRobLicz[a5].marszNzw+'->'+stRobLicz[a5].marszSmbl+'</div>'+
				'<div>Uzysk: '+(stRobLicz[a5].daneWazone.uzysk).toFixed(2)+'</div>'+
				'<div>/h: '+(stRobLicz[a5].daneWazone.uzysk/stRobLicz[a5].daneWazone.mh).toFixed(2)+'</div>'+
				'<div>Awh: '+(stRobLicz[a5].daneWazone.awh).toFixed(2)+'</div>'+
				'<div>Ah: '+(stRobLicz[a5].daneWazone.ah).toFixed(2)+'</div>'+
				'<div>Mh: '+(stRobLicz[a5].daneWazone.mh).toFixed(2)+'</div>'+
				'<div>Wh: '+(stRobLicz[a5].daneWazone.wh).toFixed(2)+'</div>'+
				'<div>Rh: '+(stRobLicz[a5].daneWazone.rh).toFixed(2)+'</div>'+
				'<div>Koszt: '+(kosztMarWazNorm).toFixed(3)+'</div>'+
				' <br> ');
				
				
				
				
				
					
				//alert("e");
				
				for (var b5 = 0; b5 < zlecTab.length; b5++) {
					if (stRobLicz[a5].marszNzw==zlecTab[b5].licznik) {
						
					var sumMeld2= new meldunekObj();	
					var normMeld= new meldunekObj();
					sumMeld2=zlecTab[b5].podajDaneMeld();
					normMeld=zlecTab[b5].podajDaneMeld();
					normMeld.normalizujMarsz();
					kosztZlecWazNorm=(normMeld.awh*_awh+
						normMeld.ah*_ah+
						normMeld.mh*_mh+
						normMeld.wh*_wh+
						normMeld.rh*_rh)/normMeld.uzysk;
					dl_paska=(((kosztZlecWazNorm-kosztMarWazNorm)/kosztMarWazNorm)*100);
					
					kolor0=0xeb4a2e;
					
					//				$box_E0.appendTo($box_0300);
					
					if (dl_paska<=-125)
					{
						dl_paska=125;
						kolor0=0x00f;
						//var $box_P0=$('<div class="pasek" style="background-color: #00f; width:'+dl_paska+'px;">&ensp;</div>'); 
						}
					else if (dl_paska<0)
					{ 
						dl_paska*=-1;
						kolor0=0x0097cc;
						//var $box_P0=$('<div class="pasek" style="background-color: #0097cc; width:'+dl_paska+'px;">&ensp;</div>');
						}
					else if (dl_paska>=125)
					{
						dl_paska=125;
						kolor0=0xf00; 
						//var $box_P0=$('<div class="pasek" style="background-color: #f00; width:'+dl_paska+'px;">&ensp;</div>');
						}
						
					else
					{ 
						//var $box_P0=$('<div class="pasek" style="background-color: #eb4a2e; width:'+dl_paska+'px;">&ensp;</div>');
						}
					

					wsp00=sumMeld2.uzysk/stRobLicz[a5].daneWazone.uzysk;
					
					//textDodany=textDodany+
					var $tabela_0r = $(
						'<tr>'+
						'<td>'+b5+'</td>'+
						'<td>'+zlecTab[b5].numer+'</td>'+
						'<td>'+sumMeld2.uzysk+'</td>'+
						'<td>'+(((kosztZlecWazNorm-kosztMarWazNorm)/kosztMarWazNorm)*100).toFixed(3)+'</td>'+
						'<td><div class="pasek" style="background-color:#'+kolor0.toString(16)+'; width:'+dl_paska+'px;">&ensp;</div></td>'+
						'<td>'+(wsp00*stRobLicz[a5].daneWazone.mh).toFixed(2)+'</td>'+
						'<td>'+sumMeld2.mh.toFixed(2)+'</td>'+
						'<td>'+(wsp00*(stRobLicz[a5].daneWazone.ah+stRobLicz[a5].daneWazone.awh)).toFixed(2)+'</td>'+
						'<td>'+(sumMeld2.ah+sumMeld2.awh).toFixed(2)+'</td>'+
						'<td>'+(wsp00*stRobLicz[a5].daneWazone.wh).toFixed(2)+'</td>'+
						'<td>'+sumMeld2.wh.toFixed(2)+'</td>'+
						'<td>'+(wsp00*stRobLicz[a5].daneWazone.rh).toFixed(2)+'</td>'+
						'<td>'+sumMeld2.rh.toFixed(2)+'</td>'+
						'</tr>');
						
						$tabela_0r.appendTo($tabela_00);
										
			}//	stRobLicz[a5].marszNzw==zlecTab[b5].licznik
		}//for b5
			//textDodany=textDodany+'</tbody></table>';
			$tabela_0n.appendTo($box_03);
					$tabela_00.appendTo($box_03);
						
	}//for a5
					
					$box_03.appendTo('#box_0').hide().fadeIn();	
												
							//elem_box031.innerHTML=elem_box031.innerHTML+textDodany;
	funObslTablic();
	//document.write( stRobLicz + "<br>") ;
	
}//funksja ...F02()

function funF03w(){
		$('.box_03').remove();
		var $box_03 = $('<div class="box_03"></div>');
		$('#box_1').html(' fn2! ');
		
		var stRobLicz = new Array();
		var zlecTab = new Array();
		var wynik = new Array();
	
		var tabKoszt_=new Array();
	
	
		tabKoszt_=funLadMarSys();
	

		wynik=wyliczMarszt();
		//alert("Tabela wynik ma: "+wynik.length);
		stRobLicz=wynik[0];
		zlecTab=wynik[1];
		//alert("Tabela stRobLicz ma: "+stRobLicz.length);
		//alert("Tabela zlecTab ma: "+zlecTab.length);
		wynik=(0);
		//alert("wynik "+wynik+"teraz Tabela wynik ma: "+wynik.length);

	var kosztMarWazNorm=0.0;
	var kosztZlecWazNorm=0.0;
	var dl_paska=0;
	var kolor0=0x0;
	
	var wsp00=0.0;
	var wsp01=0.0;
	var pasMH=0;
	var pasAH=0;
	var pasWH=0;
	var pasRH=0;
	var pasR=0;
	var pasP=0;
	var lPasMH=0.0;
	var lPasAH=0.0;
	var lPasWH=0.0;
	var lPasRH=0.0;
	var lPaswsp01=0.0;
	
	
	var marSysSAP=new mrszrtKsztObj("_ID00", 0,0,0,0,0,0,0,0,0,0,0);
	//alert("d");
	for (var a5 = 0; a5 < stRobLicz.length; a5++) {//1;a5++){
							
				//stRobLicz[a5].daneWazone.normalizujMarsz();
								
				for(var c5 = 0; c5 < tabKoszt_.length; c5++){
					if(tabKoszt_[c5].ID00==stRobLicz[a5].marszNzw){
						 marSysSAP=tabKoszt_[c5];
						// alert(marSysSAP.ID00);
						break;
					}
				}
				
				kosztMarWazNorm=marSysSAP.KOSZTUK;
				
				var kosztMarWazNorm2=(stRobLicz[a5].daneWazone.awh*marSysSAP.KOSZT_AH+
				stRobLicz[a5].daneWazone.ah*marSysSAP.KOSZT_AH+
				stRobLicz[a5].daneWazone.mh*marSysSAP.KOSZT_MH+
				stRobLicz[a5].daneWazone.wh*marSysSAP.KOSZT_WH+
				stRobLicz[a5].daneWazone.rh*marSysSAP.KOSZT_RH)/stRobLicz[a5].daneWazone.uzysk;
				
				
				
				var $tabela_0n = $('<br><div>'+stRobLicz[a5].marszNzw+'->'+stRobLicz[a5].marszSmbl+' ze zleceń</div>'+
				'<div>Uzysk: '+(stRobLicz[a5].daneWazone.uzysk).toFixed(2)+' /h: '+(stRobLicz[a5].daneWazone.uzysk/stRobLicz[a5].daneWazone.mh).toFixed(2)+'</div>'+
				'<div>Awh: '+(stRobLicz[a5].daneWazone.awh).toFixed(2)+' Ah: '+(stRobLicz[a5].daneWazone.ah).toFixed(2)+' Mh: '+(stRobLicz[a5].daneWazone.mh).toFixed(2)+' Wh: '+(stRobLicz[a5].daneWazone.wh).toFixed(2)+' Rh: '+(stRobLicz[a5].daneWazone.rh).toFixed(2)+'</div>'+
				'<div>Koszt: '+(kosztMarWazNorm2).toFixed(3)+'</div>'+
				'  ');
				
				var $tabela_1n = $('<div> ->'+marSysSAP.ID00+'->'+stRobLicz[a5].marszSmbl+' ustawione</div>'+
				'<div>Uzysk: '+(marSysSAP.UZ_Z)+' /h: '+(marSysSAP.UZ_Z/marSysSAP.MH).toFixed(2)+'</div>'+
				//'<div>Awh: '+(stRobLicz[a5].daneWazone.awh).toFixed(2)+'</div>'+
				'<div>Awh: 0.00 Ah: '+(marSysSAP.AH)+' Mh: '+(marSysSAP.MH)+' Wh: '+(marSysSAP.WH)+' Rh: '+(marSysSAP.RH)+'</div>'+
				'<div>Koszt: '+(marSysSAP.KOSZTUK)+'</div>'+
				'<div> '+marSysSAP.KOSZT_MH+' : '+marSysSAP.KOSZT_AH+' : '+marSysSAP.KOSZT_WH+' : '+marSysSAP.KOSZT_RH+'</div>'+
				' <br> ');
				
				var $tabela_00 = $('<table></table>');
				$tabela_00.addClass('sortable').attr("id","my-data");
				var $tabela_0h = $('<thead></thead>');
				
				$tabela_0h.html('<tr>'+
				'<th class="sort-numeric">Lp.</th>'+	
				'<th class="sort-numeric">Zlecenie </th>'+	
				'<th class="sort-numeric">Produkcja</th>'+	
				
					
				'<th class="sort-numeric">mh_w</th>'+	
				'<th class="sort-numeric">mh_m</th>'+
				'<th class="sort-numeric">ah_w</th>'+
				'<th class="sort-numeric">ah_m</th>'+
				'<th class="sort-numeric">wh_w</th>'+	
				'<th class="sort-numeric">wh_m</th>'+
				'<th class="sort-numeric">rh_w</th>'+
				'<th class="sort-numeric">rh_m</th>'+
				//'<th class="sort-numeric">a</th>'+
				//'<th class="sort-numeric">b</th>'+
				//'<th class="sort-numeric">c</th>'+
				//'<th class="sort-numeric">d</th>'+
				//'<th class="sort-numeric">e</th>'+
				//'<th class="sort-numeric">f</th>'+
				'<th class="sort-numeric">Odchylenie</th>'+
				'<th class="sort-alpha">graf</th>'+
				'</tr>');
				
				$tabela_0h.appendTo($tabela_00);	
				
				
				
					
				//alert("e");
				
				for (var b5 = 0; b5 < zlecTab.length; b5++) {
					if (stRobLicz[a5].marszNzw==zlecTab[b5].licznik) {
						
					var sumMeld2= new meldunekObj();	
					var normMeld= new meldunekObj();
					sumMeld2=zlecTab[b5].podajDaneMeld();
					normMeld=zlecTab[b5].podajDaneMeld();
					normMeld.normalizujMarsz();
					
					
					
					kosztZlecWazNorm=(normMeld.awh*marSysSAP.KOSZT_AH+
						normMeld.ah*marSysSAP.KOSZT_AH+
						normMeld.mh*marSysSAP.KOSZT_MH+
						normMeld.wh*marSysSAP.KOSZT_WH+
						normMeld.rh*marSysSAP.KOSZT_RH)/normMeld.uzysk;
					dl_paska=(((kosztZlecWazNorm-kosztMarWazNorm)/kosztMarWazNorm)*100);
					
					
					
					//alert('normMeld.uzysk '+normMeld.uzysk+' marSysSAP.uzysk '+marSysSAP.uzysk);
					wsp00=sumMeld2.uzysk/marSysSAP.UZ_Z;
					//wsp00=1;
					pasR=((sumMeld2.mh*marSysSAP.KOSZT_MH)+((sumMeld2.ah+sumMeld2.awh)*marSysSAP.KOSZT_AH)+(sumMeld2.wh*marSysSAP.KOSZT_WH)+(sumMeld2.rh*marSysSAP.KOSZT_RH));
					pasP=marSysSAP.MH*marSysSAP.KOSZT_MH+(marSysSAP.AH)*marSysSAP.KOSZT_AH+marSysSAP.WH*marSysSAP.KOSZT_WH+marSysSAP.RH*marSysSAP.KOSZT_RH;
					pasP*=wsp00;
					wsp01=(((pasR-pasP)/pasP)*100).toFixed(2);
					
					if(wsp01<-100){wsp01=100; lPaswsp01=0;}
					else if(wsp01<0){wsp01*=-1; lPaswsp01=(100-wsp01);  }
					else if(wsp01<100){lPaswsp01=100;}
					else {lPaswsp01=100;wsp01=100;}
					//alert(wsp01+' '+lPaswsp01+' '+pasR+' '+pasP);
					
					pasMH=(((sumMeld2.mh-(wsp00*marSysSAP.MH))/(wsp00*marSysSAP.MH))*100).toFixed(0);
					if(pasMH<-100){pasMH=100; lPasMH=0;}
					else if(pasMH<0){pasMH*=-1; lPasMH=(100-pasMH);  }
					else if(pasMH<100){lPasMH=100;}
					else {lPasMH=100;pasMH=100;}
					pasAH=((((sumMeld2.ah+sumMeld2.awh)-(wsp00*marSysSAP.AH))/(wsp00*marSysSAP.AH))*100).toFixed(0);
					if(pasAH<-100){pasAH=100; lPasAH=0;}
					else if(pasAH<0){pasAH*=-1; lPasAH=(100-pasAH);  }
					else if(pasAH<100){lPasAH=100;}
					else {lPasAH=100;pasAH=100;}
					pasWH=(((sumMeld2.wh-(wsp00*marSysSAP.WH))/(wsp00*marSysSAP.WH))*100).toFixed(0);
					if(pasWH<-100){pasWH=100; lPasWH=0;}
					else if(pasWH<0){pasWH*=-1; lPasWH=(100-pasWH);  }
					else if(pasWH<100){lPasWH=100;}
					else {lPasWH=100;pasWH=100;}
					pasRH=(((sumMeld2.rh-(wsp00*marSysSAP.RH))/(wsp00*marSysSAP.RH))*100).toFixed(0);
					if(pasRH<-100){pasRH=100; lPasRH=0;}
					else if(pasRH<0){pasRH*=-1; lPasRH=(100-pasRH);  }
					else if(pasRH<100){lPasRH=100;}
					else {lPasRH=100;pasRH=100;}
					//alert(pasRH+' '+lPasRH);
					
					//textDodany=textDodany+
					var $tabela_0r = $(
						'<tr>'+
						'<td>'+b5+'</td>'+
						'<td>'+zlecTab[b5].numer+'</td>'+
						'<td>'+sumMeld2.uzysk+'</td>'+

						'<td>'+(wsp00*marSysSAP.MH).toFixed(2)+'</td>'+
						'<td>'+sumMeld2.mh.toFixed(2)+'</td>'+
						'<td>'+(wsp00*(marSysSAP.AH)).toFixed(2)+'</td>'+
						'<td>'+(sumMeld2.ah+sumMeld2.awh).toFixed(2)+'</td>'+
						'<td>'+(wsp00*marSysSAP.WH).toFixed(2)+'</td>'+
						'<td>'+sumMeld2.wh.toFixed(2)+'</td>'+
						'<td>'+(wsp00*marSysSAP.RH).toFixed(2)+'</td>'+
						'<td>'+sumMeld2.rh.toFixed(2)+'</td>'+
						'<td>'+(((kosztZlecWazNorm-kosztMarWazNorm)/kosztMarWazNorm)*100).toFixed(3)+'</td>'+
						
				//		'<td>'+sumMeld2.rh+'</td>'+
				//		'<td>'+wsp00+'</td>'+
				//		'<td>'+(wsp00*marSysSAP.RH)+'</td>'+
				//		'<td>'+(sumMeld2.rh-(wsp00*marSysSAP.RH))+'</td>'+
				//		'<td>'+(((sumMeld2.rh-(wsp00*marSysSAP.RH))/(wsp00*marSysSAP.RH))*100).toFixed(2)+'</td>'+
				//		'<td>'+wsp00.toFixed(3)+'</td>'+
						
						'<td>'+
							'<div class="pasek0" style=" width:202px;height: 20px">'+
 								'<div class="pasek5" style=" width:'+wsp01+'px;height: 20px; left:'+lPaswsp01+'px;"></div>'+
 								'<div class="pasek1" style=" width:'+pasMH+'px;height: 5px; left:'+lPasMH+'px;"></div>'+
 								'<div class="pasek2" style=" width:'+pasAH+'px;height: 5px; left:'+lPasAH+'px;"></div>'+
 								'<div class="pasek3" style=" width:'+pasWH+'px;height: 5px; left:'+lPasWH+'px;"></div>'+
 								'<div class="pasek4" style=" width:'+pasRH+'px;height: 5px; left:'+lPasRH+'px;"></div>'+
 							'</div>'+
			
						'</td>'+
						'</tr>');
						
						$tabela_0r.appendTo($tabela_00);
										
			}//	stRobLicz[a5].marszNzw==zlecTab[b5].licznik
		}//for b5
			//textDodany=textDodany+'</tbody></table>';
			$tabela_0n.appendTo($box_03);
			$tabela_1n.appendTo($box_03);
					$tabela_00.appendTo($box_03);
						
	}//for a5
					
					$box_03.appendTo('#box_0').hide().fadeIn();	
												
							//elem_box031.innerHTML=elem_box031.innerHTML+textDodany;
	funObslTablic();
	//document.write( stRobLicz + "<br>") ;
}//funkcja ...F03()

function funF04(){
	var tabKoszt_=new Array();
	var stRobLicz_ = new Array();
	var zlecTab_ = new Array();
	var wynik = new Array();
	
		tabKoszt_=funLadMarSys();
		//alert("Tabela koszt ma: "+tabKoszt_.length);
		wynik=wyliczMarszt();
		//alert("Tabela wynik ma: "+wynik.length);
		stRobLicz=wynik[0];
		zlecTab=wynik[1];
		//alert("Tabela stRobLicz ma: "+stRobLicz.length);
		//alert("Tabela zlecTab ma: "+zlecTab.length);
		wynik=(0);
		//alert("wynik "+wynik+"teraz Tabela wynik ma: "+wynik.length);
		
}//funkcja ...F04()


function wyliczMarszt(){
	xmlDoc = loadXMLDoc("meldy.xml");
	x = xmlDoc.documentElement.getElementsByTagName("Row");

		var _awh=9.9;
		var _ah=9.9;
		var _wh=9.9;
		var _mh=9.9;
		var _sh=9.9;
		var _rh=9.9;
		var razem=9.9;
		var _uzysk=9.9;
		var stRobLicz = new Array();
		var zlecTab = new Array();
		var wynikRet = new Array();
		var tmp0 = 0;
		
		//alert("Tabela x ma: "+x.length);
		
		for (var ix = 0; ix < x.length; ix++) {//obieg petli, dane szczegolowe, zbieramy dane o marszrutach
			try {x0 = x[ix].getElementsByTagName("STROB");_strob = x0[0].firstChild.nodeValue;}//try
			catch (er) {_strob = "";}//catch
			try {x0 = x[ix].getElementsByTagName("ZM_DB");_zmiana = parseInt(x0[0].firstChild.nodeValue,10);}//try
			catch (er) {_zmiana = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("MNOZNIK");_mnoznik = parseFloat(x0[0].firstChild.nodeValue);}//try
			catch (er) {_mnoznik = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("ZLECENIE");_zlecenie = parseInt(x0[0].firstChild.nodeValue,10);}//try
			catch (er) {_zlecenie = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("DATA2");_data = parseInt(x0[0].firstChild.nodeValue,10);}//try
			catch (er) {_data = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("UZYSK");_uzysk = parseInt(x0[0].firstChild.nodeValue,10);}//try
			catch (er) {_uzysk = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("LICZNIK");_licznik = x0[0].firstChild.nodeValue;}//try
			catch (er) {_licznik = "";}//catch
			try {x0 = x[ix].getElementsByTagName("MATERIAL");_wgot = x0[0].firstChild.nodeValue;}//try
			catch (er) {_wgot = "";}//catch
			try {x0 = x[ix].getElementsByTagName("WAH");_awh = parseFloat(x0[0].firstChild.nodeValue);}//try
			catch (er) {_awh = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("MH");_mh = parseFloat(x0[0].firstChild.nodeValue);}//try
			catch (er) {_mh = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("RH");_rh = parseFloat(x0[0].firstChild.nodeValue);}//try
			catch (er) {_rh = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("AH");_ah = parseFloat(x0[0].firstChild.nodeValue);}//try
			catch (er) {_ah = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("WH");_wh = parseFloat(x0[0].firstChild.nodeValue);}//try
			catch (er) {_wh = 0;}//catch
			try {x0 = x[ix].getElementsByTagName("SH");_sh = parseFloat(x0[0].firstChild.nodeValue);}//try
			catch (er) {_sh = 0;}//catch
							
			tmp0=-1;
			for (var i5 = 0; i5 < stRobLicz.length; i5++) {
				if (stRobLicz[i5].marszNzw == _licznik){
					tmp0=i5;
					stRobLicz[tmp0].dodajDaneMarsz(_uzysk, _awh, _mh, _rh, _ah, _wh, _sh);
										//erdata=new Date('20'+_data.toString().slice(0,2),_data.toString().slice(2,4),_data.toString().slice(4,6));
										//alert(_data.toString().slice(0,2)+' '+_data.toString().slice(2,4)+' '+_data.toString().slice(4,6)+' '+_data.toString() +' '+erdata);
					break;
				}
			}//for i5
					
			if (tmp0 == -1) {
				var mrszrtTmp = new mrszrtObj(_licznik);
				mrszrtTmp.marszSmbl = _wgot.slice(6,10)+"_"+_wgot.slice(13,18);
				mrszrtTmp.dodajDaneMarsz(_uzysk, _awh, _mh, _rh, _ah, _wh, _sh);		
				stRobLicz.push(mrszrtTmp);
			}//if
								
			
			tmp0=-1;
			var meldXi=new meldunekObj();
			meldXi.zmiana = _zmiana;
			meldXi.dataz.setFullYear(parseInt(_data.toString().slice(0,2),10)+2000,parseInt(_data.toString().slice(2,4),10)-1,parseInt(_data.toString().slice(4,6),10));											
			meldXi.uzysk = _uzysk;meldXi.awh = _awh;meldXi.mh = _mh;meldXi.rh = _rh; meldXi.ah = _ah;meldXi.wh = _wh;meldXi.sh = _sh;
							
							//alert(meldXi.dataz+' > '+_data);
							
			for (var i5 = 0; i5 < zlecTab.length; i5++) {
				if (zlecTab[i5].numer == _zlecenie){
					tmp0=i5;
			    	zlecTab[i5].meldunki.push(meldXi);
					break;
				}
			}//for i5
									
			if (tmp0 == -1) {
				var zlecenTmp = new zlecenieObj(_zlecenie, _wgot, _licznik);
				zlecenTmp.meldunki.push(meldXi);		
				zlecTab.push(zlecenTmp);

			}//if
			
			$('#box_1').html('wczytuje... ' + (ix+1) + ' z ' + x.length);
				
		}//for (var ix = 0; ix < x.length; ix++)
		
		//alert("Tabela stRobLicz ma: "+stRobLicz.length+" tabela zlecTab ma: "+zlecTab.length);			

			
	var procent00=0.0;
	var sumMeld=new meldunekObj();
								
	for (var a5 = 0; a5 < stRobLicz.length; a5++) {
		for (var b5 = 0; b5 < zlecTab.length; b5++) {
			if (stRobLicz[a5].marszNzw==zlecTab[b5].licznik) {
				sumMeld=zlecTab[b5].podajDaneMeld();
				procent00=sumMeld.uzysk/stRobLicz[a5].uzysk;
				stRobLicz[a5].daneWazone.uzysk+=procent00*sumMeld.uzysk;
				stRobLicz[a5].daneWazone.awh+=procent00*sumMeld.awh;
				stRobLicz[a5].daneWazone.mh+=procent00*sumMeld.mh;
				stRobLicz[a5].daneWazone.rh+=procent00*sumMeld.rh;
				stRobLicz[a5].daneWazone.ah+=procent00*sumMeld.ah;
				stRobLicz[a5].daneWazone.wh+=procent00*sumMeld.wh;
				stRobLicz[a5].daneWazone.sh+=procent00*sumMeld.sh;
				if(!procent00){zlecTab[b5]=0;}
				
				//textDodany=textDodany+'a_'+stRobLicz[a5].marszNzw+' _ '+sumMeld.uzysk+' _ '+stRobLicz[a5].uzysk+' prc: ' + procent00 
				//+' _ '+stRobLicz[a5].daneWazone.uzysk+' _ '+stRobLicz[a5].daneWazone.mh+' _ '+' > ' + ' <br> ';
			}//	stRobLicz[a5].marszNzw==zlecTab[b5].licznik
		}//for b5
	}//for a5
	
	for (var a5 = 0; a5 < stRobLicz.length; a5++) {
							
				stRobLicz[a5].daneWazone.normalizujMarsz();
			}
	
	wynikRet[0]=stRobLicz;
	wynikRet[1]=zlecTab;
	//alert("Tabela wynikRet ma: "+wynikRet.length);
	return wynikRet;
	
	
}//funkcja ...wyliczMarszt()


function funLadMarSys(){
	xmlDoc = loadXMLDoc("koszt.xml");
	x = xmlDoc.documentElement.getElementsByTagName("Row");
	
	var _ID00="";//>TTAS_1</ID00>
	var _KOSZT_MH=1;//>1370</KOSZT_MH>
	var	_KOSZT_RH=1;//>23</KOSZT_RH>
	var	_KOSZT_AH=1;//>70</KOSZT_AH>
	var	_KOSZT_WH=1;//>350</KOSZT_WH>
	var	_UZ_Z=1;//>88500</UZ_Z>
	var	_MH=1.1;//>4</MH>
	var	_RH=1.1;//>72</RH>
	var	_AH=1.1;//>2</AH>
	var	_WH=1.1;//>2</WH>
	var	_LICZNIK=1;//</LICZNIK>
	var	_KOSZTUK=1.1;//901242937853107</KOSZTUK>
	
	var tabKoszt=new Array();//tablica z kosztami marszrut
	var tabBld=new Array();//tablica z błędami wykrytymi w programie
	
	//parseInt(x0[0].firstChild.nodeValue,10);

	//			_mnoznik = parseFloat(x0[0].firstChild.nodeValue);
	
	
	
	for (var ix = 0; ix < x.length; ix++) 
	{//obieg petli, dane szczegolowe, zbieramy dane o marszrutach
		try {x0 = x[ix].getElementsByTagName("ID00");_ID00 = x0[0].firstChild.nodeValue;}//try
		catch (er) {_ID00 = "";}//catch
		try {x0 = x[ix].getElementsByTagName("KOSZT_MH");_KOSZT_MH = parseInt(x0[0].firstChild.nodeValue,10);}//try
		catch (er) {_KOSZT_MH = 0;}//catch
		try {x0 = x[ix].getElementsByTagName("KOSZT_RH");_KOSZT_RH = parseInt(x0[0].firstChild.nodeValue,10);}//try
		catch (er) {_KOSZT_RH = 0;}//catch
		try {x0 = x[ix].getElementsByTagName("KOSZT_AH");_KOSZT_AH = parseInt(x0[0].firstChild.nodeValue,10);}//try
		catch (er) {_KOSZT_AH = 0;}//catch
		try {x0 = x[ix].getElementsByTagName("KOSZT_WH");_KOSZT_WH = parseInt(x0[0].firstChild.nodeValue,10);}//try
		catch (er) {_KOSZT_WH = 0;}//catch
		try {x0 = x[ix].getElementsByTagName("UZ_Z");_UZ_Z = parseInt(x0[0].firstChild.nodeValue,10);}//try
		catch (er) {_UZ_Z = 0;}//catch
		try {x0 = x[ix].getElementsByTagName("MH");_MH = parseFloat(x0[0].firstChild.nodeValue);}//try
		catch (er) {_MH = 0;}//catch
		try {x0 = x[ix].getElementsByTagName("AH");_AH = parseFloat(x0[0].firstChild.nodeValue);}//try
		catch (er) {_AH = 0;}//catch
		try {x0 = x[ix].getElementsByTagName("WH");_WH = parseFloat(x0[0].firstChild.nodeValue);}//try
		catch (er) {_WH = 0;}//catch
		try {x0 = x[ix].getElementsByTagName("RH");_RH = parseFloat(x0[0].firstChild.nodeValue);}//try
		catch (er) {_RH = 0;}//catch
		try {x0 = x[ix].getElementsByTagName("LICZNIK");_LICZNIK = parseInt(x0[0].firstChild.nodeValue,10);}//try
		catch (er) {_LICZNIK = 0;}//catch
		try {x0 = x[ix].getElementsByTagName("KOSZTUK");_KOSZTUK = parseFloat(x0[0].firstChild.nodeValue);}//try
		catch (er) {_KOSZTUK = 0;}//catch
		//koniec wczytywania wezla
		$('#box_1').html('wczytuje... ' + ix + ' z ' + x.length);
		if(_MH){
		var marszKoszt = new mrszrtKsztObj(_ID00, _KOSZT_MH,_KOSZT_RH,_KOSZT_AH,_KOSZT_WH,_UZ_Z,_MH,_RH,_AH,_WH,_LICZNIK,_KOSZTUK);
		if (_MH+_AH+_WH!=8){tabBld.push(1);}//czy zmiana ma 8 godzin?
		tabKoszt.push(marszKoszt);
		}
		else{
		var marszKoszt = new mrszrtKsztObj(_ID00, _KOSZT_MH,_KOSZT_RH,_KOSZT_AH,_KOSZT_WH,(_UZ_Z/_RH),_MH,1,_AH,_WH,_LICZNIK,_KOSZTUK);
		if (_MH+_AH+_WH!=8){tabBld.push(1);}//czy zmiana ma 8 godzin?
		tabKoszt.push(marszKoszt);
		}
	}	
	$('#box_1').html('ilosc wczytanych marszrut: ' + tabKoszt.length);	
	
	//if (tabBld.length){alert("Wykryto błędy w marszrutach z sap'a");}
	
	return tabKoszt; 
		
}//funkcja ...funLadMarSys()


function pokazMeldStrob(_nazwaStRob) {
	document.write("pokaz mi " + _nazwaStRob + "<br>");
	for (var i = 0; i < stnRb.length; i++) {
		if (stnRb[i].SRnazwa == _nazwaStRob) {

			for (var ii = 0; ii < stnRb[i].SRdni.length; ii++) {
				for (var iii = 0; iii < 3; iii++) {

					if (stnRb[i].SRdni[ii][iii]) {

						document.write("zmi " + stnRb[i].SRdni[ii][iii].zmiana + " uzy " + stnRb[i].SRdni[ii][iii].uzysk + " mno " + stnRb[i].SRdni[ii][iii].mnoznik.length + " str " + stnRb[i].SRnazwa + " zlc " + stnRb[i].SRdni[ii][iii].zlecenia.length + " dta " + stnRb[i].SRdni[ii][iii].data + " awh " + stnRb[i].SRdni[ii][iii].awh + " mh " + stnRb[i].SRdni[ii][iii].mh + " rh " + stnRb[i].SRdni[ii][iii].rh + " ah " + stnRb[i].SRdni[ii][iii].ah + " wh " + stnRb[i].SRdni[ii][iii].wh + " sh " + stnRb[i].SRdni[ii][iii].sh + "<br>");

					}//if stnRb[i].SRdni[ii][iii]
					else {
						document.write("i " + i + "ii " + ii + "iii " + iii + "mm: " + stnRb[i].SRdni[ii][iii] + "<br>");
					}//else

				}//for iii
			}//for ii

		}//if stnRb[i].SRnazwa==_nazwaStRob
	}//for i

	//--------------

	/*
	 else
	 {// code for IE6, IE5
	 //alert("c");
	 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	 // alert("d");
	 }

	 if (xmlhttp!=null)  {
	 //alert("jest if");
	 xmlhttp.open("GET",dname,false);
	 xmlhttp.send(null);
	 xmlDoc=xmlhttp.responseXML;
	 //alert("jest if 2");

	 return xmlDoc;
	 }

	 else {

	 alert("The XMLHttpRequest not supported");
	 return 0;
	 }

	 */
}//koniec funkcji pokazMeldStrob

