function funF03(){
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
				
				
				

				
				
			
				
				
					//var $tabela_0th11 = $('<th></th>').html('TYP').appendTo($tabela_0tr3);
				
				
				
				/* elementy tabeli
				var $tabela_00 = $('<table></table>');
				var $tabela_0h = $('<thead></thead>');
				var $tabela_0tr = $('<tr></tr>');
				var $tabela_0th = $('<th></th>');
				var $tabela_0b = $('<tbody></tbody>');
				var $tabela_0td = $('<td></td>');
				*/	
				
				
				var $tabela_01 = $('<table></table>');
				//------------------
				var $tabela_1h = $('<thead></thead>');
				var $tabela_0tr3 = $('<tr></tr>');
					var $tabela_0th0 = $('<th></th>').html('').appendTo($tabela_0tr3);
					var $tabela_0th1 = $('<th></th>').html('LINIA').appendTo($tabela_0tr3);
					var $tabela_0th2 = $('<th></th>').html('PRODUKT').appendTo($tabela_0tr3);
					var $tabela_0th3 = $('<th></th>').html('UZ/ZM').appendTo($tabela_0tr3);
					var $tabela_0th4 = $('<th></th>').html('UZ/H').appendTo($tabela_0tr3);
					var $tabela_0th5 = $('<th></th>').html('AWH').appendTo($tabela_0tr3);
					var $tabela_0th6 = $('<th></th>').html('MH').appendTo($tabela_0tr3);
					var $tabela_0th7 = $('<th></th>').html('RH').appendTo($tabela_0tr3);
					var $tabela_0th8 = $('<th></th>').html('AH').appendTo($tabela_0tr3);
					var $tabela_0th9 = $('<th></th>').html('WH').appendTo($tabela_0tr3);
					var $tabela_0th10 = $('<th></th>').html('KOSZTUK').appendTo($tabela_0tr3);
				$tabela_0tr3.appendTo($tabela_1h);
				$tabela_1h.appendTo($tabela_01);
				
				var $tabela_1b = $('<tbody></tbody>');
				
				var $tabela_0tr3 = $('<tr></tr>');
					var $tabela_0tda0 = $('<td></td>').html('ustawione').appendTo($tabela_0tr3);
					var $tabela_0tda1 = $('<td></td>').html(marSysSAP.ID00).appendTo($tabela_0tr3);
					var $tabela_0tda2 = $('<td></td>').html(stRobLicz[a5].marszSmbl).appendTo($tabela_0tr3);
					var $tabela_0tda3 = $('<td></td>').html(marSysSAP.UZ_Z).appendTo($tabela_0tr3);
					var $tabela_0tda4 = $('<td></td>').html((marSysSAP.UZ_Z/marSysSAP.MH).toFixed(2)).appendTo($tabela_0tr3);
					var $tabela_0tda5 = $('<td></td>').html('0').appendTo($tabela_0tr3);
					var $tabela_0tda6 = $('<td></td>').html(marSysSAP.MH).appendTo($tabela_0tr3);
					var $tabela_0tda7 = $('<td></td>').html(marSysSAP.RH).appendTo($tabela_0tr3);
					var $tabela_0tda8 = $('<td></td>').html(marSysSAP.AH).appendTo($tabela_0tr3);
					var $tabela_0tda9 = $('<td></td>').html(marSysSAP.WH).appendTo($tabela_0tr3);
					var $tabela_0tda10 = $('<td></td>').html(marSysSAP.KOSZTUK).appendTo($tabela_0tr3);
				$tabela_0tr3.appendTo($tabela_1b);
				
				var $tabela_0tr4 = $('<tr></tr>');
					var $tabela_0tdb0 = $('<td></td>').html('ze zlecen').appendTo($tabela_0tr4);
					var $tabela_0tdb1 = $('<td></td>').html(stRobLicz[a5].marszNzw).appendTo($tabela_0tr4);
					var $tabela_0tdb2 = $('<td></td>').html(stRobLicz[a5].marszSmbl).appendTo($tabela_0tr4);
					var $tabela_0tdb3 = $('<td></td>').html((stRobLicz[a5].daneWazone.uzysk).toFixed(2)).appendTo($tabela_0tr4);
					var $tabela_0tdb4 = $('<td></td>').html((stRobLicz[a5].daneWazone.uzysk/stRobLicz[a5].daneWazone.mh).toFixed(2)).appendTo($tabela_0tr4);
					var $tabela_0tdb5 = $('<td></td>').html((stRobLicz[a5].daneWazone.awh).toFixed(2)).appendTo($tabela_0tr4);
					var $tabela_0tdb6 = $('<td></td>').html((stRobLicz[a5].daneWazone.mh).toFixed(2)).appendTo($tabela_0tr4);
					var $tabela_0tdb7 = $('<td></td>').html((stRobLicz[a5].daneWazone.rh).toFixed(2)).appendTo($tabela_0tr4);
					var $tabela_0tdb8 = $('<td></td>').html((stRobLicz[a5].daneWazone.ah).toFixed(2)).appendTo($tabela_0tr4);
					var $tabela_0tdb9 = $('<td></td>').html((stRobLicz[a5].daneWazone.wh).toFixed(2)).appendTo($tabela_0tr4);
					var $tabela_0tdb10 = $('<td></td>').html((kosztMarWazNorm2).toFixed(3)).appendTo($tabela_0tr4);
				$tabela_0tr4.appendTo($tabela_1b);
				
				$tabela_1b.appendTo($tabela_01);
				
				//------------------
				var $tabela_00 = $('<table></table>').addClass('sortable').attr("id","my-data");
				var $tabela_0h = $('<thead></thead>');
					var $tabela_0tr0 = $('<tr></tr>');
					var $tabela_0th0 = $('<th></th>');
					var $tabela_0th1 = $('<th></th>');
					var $tabela_0th2 = $('<th></th>');
					var $tabela_0th3 = $('<th></th>');
					var $tabela_0th4 = $('<th></th>');
					var $tabela_0th5 = $('<th></th>');
					var $tabela_0th6 = $('<th></th>');
					var $tabela_0th7 = $('<th></th>');
					var $tabela_0th8 = $('<th></th>');
					var $tabela_0th9 = $('<th></th>');
					var $tabela_0th10 = $('<th></th>');
					var $tabela_0th11 = $('<th></th>');
					var $tabela_0th12 = $('<th></th>');
					var $tabela_0th13 = $('<th></th>');
					var $tabela_0th14 = $('<th></th>');
					var $tabela_0th15 = $('<th></th>');
					$tabela_0th0.html('Lp.').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0th1.html('Zlecenie').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0th2.html('Produkcja').appendTo($tabela_0tr0).addClass('sort-numeric');
					
					$tabela_0th3.html('MH P').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0th4.html('MH R').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0th5.html('MH %').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0th6.html('RH P').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0th7.html('RH R').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0th8.html('RH %').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0th9.html('AH P').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0th10.html('AH R').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0th11.html('AH %').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0th12.html('WH P').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0th13.html('WH R').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0th14.html('WH %').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0th15.html('Odchylenie').appendTo($tabela_0tr0).addClass('sort-numeric');
					$tabela_0tr0.appendTo($tabela_0h);
					$tabela_0h.appendTo($tabela_00);
					
					var $tabela_0b = $('<tbody></tbody>');	
					
					
				
				
					
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
					
					
					//pasMH=pasAH=pasWH=pasRH=0.0*1;
					//alert('normMeld.uzysk '+normMeld.uzysk+' marSysSAP.uzysk '+marSysSAP.uzysk);
					wsp00=sumMeld2.uzysk/marSysSAP.UZ_Z;
					//wsp00=1;
					pasR=((sumMeld2.mh*marSysSAP.KOSZT_MH)+((sumMeld2.ah+sumMeld2.awh)*marSysSAP.KOSZT_AH)+(sumMeld2.wh*marSysSAP.KOSZT_WH)+(sumMeld2.rh*marSysSAP.KOSZT_RH));
					pasP=marSysSAP.MH*marSysSAP.KOSZT_MH+(marSysSAP.AH)*marSysSAP.KOSZT_AH+marSysSAP.WH*marSysSAP.KOSZT_WH+marSysSAP.RH*marSysSAP.KOSZT_RH;
					pasP*=wsp00;
					wsp01=(((pasR-pasP)/pasP)*100).toFixed(6);
					
					pasMH=(((sumMeld2.mh/(wsp00*marSysSAP.MH))-1)*100).toFixed(2);
										
					pasAH=((((sumMeld2.ah+sumMeld2.awh)/(wsp00*marSysSAP.AH))-1)*100).toFixed(2);   //(wsp00*marSysSAP.AH))*100).toFixed(4);
					
					pasWH=(((sumMeld2.wh/(wsp00*marSysSAP.WH))-1)*100).toFixed(2);   //(wsp00*marSysSAP.WH))*100).toFixed(4);
					
					pasRH=(((sumMeld2.rh/(wsp00*marSysSAP.RH))-1)*100).toFixed(2);    //(wsp00*marSysSAP.RH))*100).toFixed(4);
					
					//alert(pasRH+' '+lPasRH);
					//if(){
					var $tabela_0tr2 = $('<tr></tr>');
					var $tabela_0td0 = $('<td></td>').html(b5).appendTo($tabela_0tr2);
					var $tabela_0td1 = $('<td></td>').html(zlecTab[b5].numer).appendTo($tabela_0tr2);
					//var $tabela_0td1 = $('<td></td>').html(wsp00).appendTo($tabela_0tr2);
					var $tabela_0td2 = $('<td></td>').html(sumMeld2.uzysk).appendTo($tabela_0tr2);
					
					var $tabela_0td3 = $('<td></td>').html((wsp00*(marSysSAP.MH)).toFixed(2)).appendTo($tabela_0tr2);
					var $tabela_0td4 = $('<td></td>').html(sumMeld2.mh.toFixed(2)).appendTo($tabela_0tr2);
					var $tabela_0td5 = $('<td></td>').html(pasMH).appendTo($tabela_0tr2);
					
					var $tabela_0td6 = $('<td></td>').html((wsp00*(marSysSAP.RH)).toFixed(2)).appendTo($tabela_0tr2);
					var $tabela_0td7 = $('<td></td>').html((sumMeld2.rh).toFixed(2)).appendTo($tabela_0tr2);
					var $tabela_0td8 = $('<td></td>').html(pasRH).appendTo($tabela_0tr2);
					
					var $tabela_0td9 = $('<td></td>').html((wsp00*(marSysSAP.AH)).toFixed(2)).appendTo($tabela_0tr2);
					var $tabela_0td10 = $('<td></td>').html((sumMeld2.ah+sumMeld2.awh).toFixed(2)).appendTo($tabela_0tr2);
					var $tabela_0td11 = $('<td></td>').html(pasAH).appendTo($tabela_0tr2);
					
					var $tabela_0td12 = $('<td></td>').html((wsp00*(marSysSAP.WH)).toFixed(2)).appendTo($tabela_0tr2);
					var $tabela_0td13 = $('<td></td>').html(sumMeld2.wh.toFixed(2)).appendTo($tabela_0tr2);
					var $tabela_0td14 = $('<td></td>').html(pasWH).appendTo($tabela_0tr2);
					
					//var $tabela_0td15 = $('<td></td>').html((((kosztZlecWazNorm-kosztMarWazNorm)/kosztMarWazNorm)*100).toFixed(3)).appendTo($tabela_0tr2);
					var $tabela_0td15 = $('<td></td>').html(wsp01).appendTo($tabela_0tr2);
			
				//	}
				//	else{
							//	}
					
					
					$tabela_0tr2.appendTo($tabela_0b);
					
					//textDodany=textDodany+
					
						
						$tabela_0b.appendTo($tabela_00);
										
			}//	stRobLicz[a5].marszNzw==zlecTab[b5].licznik
		}//for b5
			//textDodany=textDodany+'</tbody></table>';
			//$tabela_0n.appendTo($box_03);
			//$tabela_1n.appendTo($box_03);
					$tabela_01.appendTo($box_03);
					$tabela_00.appendTo($box_03);
						
	}//for a5
					
					$box_03.appendTo('#box_0').hide().fadeIn();	
												
							//elem_box031.innerHTML=elem_box031.innerHTML+textDodany;
	funObslTablic();
	//document.write( stRobLicz + "<br>") ;
}//funkcja ...F03()