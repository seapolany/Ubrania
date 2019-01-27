// JavaScript Document
//zmienne globalne

var stnRb = new Array();
var daty = new Array();
var _dane_we='';

function openDialog(selector) {
	$(selector)
		.clone()
		.show()
		.appendTo('#overlay')
		.parent()
		.fadeIn('fast');
}
  
function closeDialog( selector ) {
$(selector)
	.parents('#overlay')
	.fadeOut('fast', function() {
		$(this)
			.find('.dialog')
			.remove();
	});
}

function przesun( _pozY ) {
	window.scrollTo(0,_pozY);
	alert(_pozY);
	
}


function displayResult()
{
var x=document.getElementById("plik00").value;
alert(x);
}//funksja displayResult()

function StRb(nazwaStRba, ileDni) {
	this.SRnazwa = nazwaStRba;
	this.SRdni = new Array();

	for (var ib = 0; ib < ileDni; ib++) {
		var zmiany = new Array(3);
		this.SRdni.push(zmiany);

		for (var iib = 0; iib < 3; iib++) {
			this.SRdni[ib][iib] = 0;
		}//for
	}//for

	/*
	 for (i=0;i<ileDni;i++)
	 {
	 for (ii=0;ii<3;ii++)
	 {
	 document.write("tablica "+this.dni[i][ii]+ " " + i+" "+ii+"<br>") ;
	 }//for
	 }//for
	 */

}//obiekt

function zmianyRb(_zmiana, _data) {
	this.zmiana = _zmiana;
	this.data = _data;
	this.mnoznik = new Array();
	this.licznik = new Array();
	//this.mnoznik.push(_mnoznik);
	this.uzysk = 0;
	this.zlecenia = new Array();
	this.awh = 0;
	this.mh = 0;
	this.rh = 0;
	this.ah = 0;
	this.wh = 0;
	this.sh = 0;

	this.dodajZmiane = function zRBdodajZmiane(_mnoznik, _uzysk, _zlecenie, _awh, _mh, _rh, _ah, _wh, _sh, _licznik) {
		//document.write("1 ") ;
		this.mnoznik.push(_mnoznik);
		this.licznik.push(_licznik);
		//document.write("2 ") ;
		this.uzysk += _uzysk;
		//document.write("3 ") ;
		this.zlecenia.push(_zlecenie);
		//document.write("4 ") ;
		this.awh += _awh;
		//document.write("5 ") ;
		this.mh += _mh;
		//document.write("6 ") ;
		this.rh += _rh;
		//document.write("7 ") ;
		this.ah += _ah;
		//document.write("8 ") ;
		this.wh += _wh;
		//document.write("9 ") ;
		this.sh += _sh;
		//document.write("0 "+"<br>") ;
		return 0;
		//this.dodajZmiane(_zmiana, _data, _mnoznik, _uzysk, _zlecenie, _awh, _mh, _rh, _ah, _wh, _sh);

	};//metoda

	this.wyswietl = function wyswietlTo() {
		document.write("1 ");

		//return 0;
		//this.dodajZmiane(_zmiana, _data, _mnoznik, _uzysk, _zlecenie, _awh, _mh, _rh, _ah, _wh, _sh);

	};//metoda
	//this.dodajZmiane=_dodajZmiane(_uzysk, _zlecenie, _awh, _mh, _rh, _ah, _wh, _sh);

}//obiekt


function mrszrtObj(nazwaMarszruty) {
	this.marszNzw = nazwaMarszruty;
	this.marszSmbl = '';
	this.uzysk = 0;
	this.awh = 0;
	this.mh = 0;
	this.rh = 0;
	this.ah = 0;
	this.wh = 0;
	this.sh = 0;
	this.ilZlecen = 0;
	this.daneWazone = new meldunekObj();
	
	this.dodajDaneMarsz = function mrDodajDaneMarsz(_uzysk, _awh, _mh, _rh, _ah, _wh, _sh) {
		
		this.uzysk += _uzysk;
		this.awh += _awh;
		this.mh += _mh;
		this.rh += _rh;
		this.ah += _ah;
		this.wh += _wh;
		this.sh += _sh;
		this.ilZlecen++;
		//document.write("licznik: "+ this.marszNzw + ' ile: '+this.ilZlecen+"<br>") ;
		return 0;
		
	};//metoda dodajDaneMarsz
	
	this.podajDaneMarsz = function mrpodajDaneMarsz() {
		var daneWy = new Array();
		var suma=parseFloat(this.awh+this.mh+this.ah+this.wh);
		var zmiann=parseFloat(suma/8);
		
		if(suma){
		daneWy[0]=(this.awh+this.ah)/suma*8;
		daneWy[1]=(this.mh)/suma*8;
		daneWy[2]=(this.wh)/suma*8;
		daneWy[3]=0;
		daneWy[4]=(this.rh)/zmiann;
		
		return daneWy;
		}
		else{
			daneWy[0]=0;
			daneWy[1]=0;
			daneWy[2]=0;
			daneWy[3]=0;
			daneWy[4]=(this.uzysk/this.rh);
			
			return daneWy;
		}
		
		
	};//metoda podajDaneMarsz

	
}//obiekt


function mrszrtKsztObj(_ID00, _KOSZT_MH,_KOSZT_RH,_KOSZT_AH,_KOSZT_WH,_UZ_Z,_MH,_RH,_AH,_WH,_LICZNIK,_KOSZTUK) {
	
	this.ID00=_ID00;//>TTAS_1</ID00>
	this.KOSZT_MH=_KOSZT_MH;//>1370</KOSZT_MH>
	this.KOSZT_RH=_KOSZT_RH;//>23</KOSZT_RH>
	this.KOSZT_AH=_KOSZT_AH;//>70</KOSZT_AH>
	this.KOSZT_WH=_KOSZT_WH;//>350</KOSZT_WH>
	this.UZ_Z=_UZ_Z;//>88500</UZ_Z>
	this.MH=_MH.toFixed(2);//>4</MH>
	this.RH=_RH.toFixed(2);//>72</RH>
	this.AH=_AH.toFixed(2);//>2</AH>
	this.WH=_WH.toFixed(2);//>2</WH>
	this.LICZNIK=_LICZNIK;//</LICZNIK>
	this.KOSZTUK=_KOSZTUK.toFixed(3);//901242937853107</KOSZTUK>
	

	
	
	this.podajDaneMarsz = function mrpodajDaneMarsz() {
		var daneWy = new Array();
		var suma=parseFloat(this.awh+this.mh+this.ah+this.wh);
		//var zmiann=parseFloat(suma/8);
		daneWy[0]=(this.awh+this.ah)/suma*8;
		daneWy[1]=(this.mh)/suma*8;
		daneWy[2]=(this.wh)/suma*8;
		daneWy[3]=0;
		daneWy[4]=(this.rh);
		
		return daneWy;
		
	};//metoda podajDaneMarsz

	
}//obiekt
	
	function zlecenieObj(_numer, _wgot, _licznik) {
	this.meldunki = new Array();
	this.numer = _numer;
	this.wgot = _wgot;
	this.licznik = _licznik;
	this.podajDaneMeld = function mrpodajDaneMeld() {
	//	alert('1');
		var sumMeldZl=new meldunekObj();
		for (var c5 = 0; c5 < this.meldunki.length; c5++) {
			sumMeldZl.uzysk += this.meldunki[c5].uzysk;
			//document.write( ' u: '+sumMeldZl.uzysk + ' c5 '+this.meldunki[c5].uzysk+"<br>") ;
			sumMeldZl.awh += this.meldunki[c5].awh;
			sumMeldZl.mh += this.meldunki[c5].mh;
			sumMeldZl.rh += this.meldunki[c5].rh;
			sumMeldZl.ah += this.meldunki[c5].ah;
			sumMeldZl.wh += this.meldunki[c5].wh;
			sumMeldZl.sh += this.meldunki[c5].sh;			
			}		
	
		return sumMeldZl;
		
	};//metoda podajDaneMeld
		
}//obiekt

function materialObj(_SKLADNIK, _cena, _AGREGAT) {
	
	/*
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
		
	this.skladnik = _SKLADNIK;
	this.ilosc_zuz = new Array();//_ILOSC_RZECZ;
	this.ilosc_pos = new Array();//_ILOSC_POST_BB;
	this.cena = _cena;
	this.agregat = _AGREGAT;
	this.zlecenia = new Array();
	


	this.dodajDane = function mrpodajDane(_ILOSC_RZECZ, _ILOSC_POST_BB, _ZLECENIE) {
	//	alert('1');
		this.ilosc_zuz.push(_ILOSC_RZECZ);
		this.ilosc_pos.push(_ILOSC_POST_BB);
		this.zlecenia.push(_ZLECENIE);
	
		return 0;
		
	};//metoda podajDane
		
}//obiekt

function materialAgregatObj(_AGREGAT) {
	
		
	this.ilosc_zuz = new Array();//_ILOSC_RZECZ;
	this.ilosc_pos = new Array();//_ILOSC_POST_BB;
	this.agregat = _AGREGAT;
	this.zlecenia = new Array();
	


	this.dodajDane = function mrdodajDane(_ILOSC_RZECZ, _ILOSC_POST_BB, _ZLECENIE) {
	//	alert('1');
		this.ilosc_zuz.push(_ILOSC_RZECZ);
		this.ilosc_pos.push(_ILOSC_POST_BB);
		this.zlecenia.push(_ZLECENIE);
	
		return 0;
		
	};//metoda podajDane
	
	
	this.konsolidujDane = function mrkonsolidujDane() {
	//	alert('kD');
		var zlc = new Array();
		var rzcz = new Array();
		var pstw = new Array();
		var tak=-1;									
		var temp=new Array();
	
		//rzcz=this.ilosc_zuz;
		//pstw=this.ilosc_pos;
		zlc=this.zlecenia;
		
		for (var zl=0;zl<zlc.length;zl++){
				//alert(zlcTB[zl]);
				tak=temp.indexOf(zlc[zl]);
					//alert(tak);
				if(tak==-1){
				temp.push(zlc[zl]);
				rzcz.push(this.ilosc_zuz[zl]);
				pstw.push(this.ilosc_pos[zl]);
				
				}//tak==-1
				
				else{
					//if(rzcz[tak] == undefined){rzcz[tak]=0;pstw[tak]=0;}//jezeli w tym miejscu bylo pusto
					rzcz[tak]+= this.ilosc_zuz[zl];
					pstw[tak]+= this.ilosc_pos[zl];
				
				}
						     //else{zl++;}
		}
		
		this.ilosc_zuz=[0];
		this.ilosc_pos=[0];
		this.zlecenia=[0];
		this.ilosc_zuz=rzcz;
		this.ilosc_pos=pstw;
		this.zlecenia=temp;
		
		zlc =[0];
		rzcz =[0];
		pstw =[0];
		temp =[0];
		
		

		
		return 0;
		
	};//metoda podajDane
		
}//obiekt

	function meldunekObj() {
	this.zmiana = 0;
	this.dataz = new Date(0,0,0);
	this.uzysk = 0;
	this.awh = 0;
	this.mh = 0;
	this.rh = 0;
	this.ah = 0;
	this.wh = 0;
	this.sh = 0;
	
	this.normalizujMarsz = function mrnormalizujMarsz() {
		var suma=parseFloat(this.awh+this.mh+this.ah+this.wh);
		var zmiann=parseFloat(suma/8);
		
		if(suma){
		this.awh=this.awh/suma*8;
		this.ah=this.ah/suma*8;
		this.mh=this.mh/suma*8;
		this.wh=this.wh/suma*8;
		this.sh=0;
		this.rh=this.rh/zmiann;
		this.uzysk=this.uzysk/zmiann;
		}
		else{
			this.awh=0;
			this.ah=0;
			this.mh=0;
			this.wh=0;
			this.sh=0;
			
			this.uzysk=this.uzysk/this.rh;
			this.rh=1;//this.rh;
			
		}
				
	};//metoda normalizujMarsz
		
}//obiekt

