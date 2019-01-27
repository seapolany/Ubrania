function handleFiles(files) {

   // ustawienia domyślne
   _dane_we='';
   var fileLimit = 1;         // maksymalna liczba plików przetwarzanych jednocześnie
   var sizeLimit = 5000;        // ograniczenie rozmiaru plików w KB
   var fileType = /xml.*/;  // typ MIME obrazków — wyrażenie regularne

   // odwołaj się do panelu obrazków i wyczyść go
   var imgPanel = document.getElementById('imgPanel');
   imgPanel.innerHTML = 'cfv';

   // oblicz ograniczenie rozmiaru plików w bajtach
   var sizeLimitBytes = sizeLimit*1024;

   // sprawdź, czy liczba plików jest mniejsza od ograniczenia
   if (files.length<=fileLimit) {

      // przejdź w pętli przez listę plików
      for (var i = 0; i < files.length; i++) {

         // odwołanie do bieżącego pliku
         var file = files[i];

         // sprawdź, czy plik jest obrazkiem
         if (file.type.match(fileType)) {

            // sprawdź, czy plik nie przekracza maksymalnego rozmiaru
            if (file.size<sizeLimitBytes) {

               // utwórz pojemnik obrazka z pliku
               /*
               var img = document.createElement("img");
               img.file = file;
               img.className = 'unhighlight';
               img.addEventListener('mouseover', showFile, false);
               img.addEventListener('mouseout', clearFile, false);
               imgPanel.appendChild(img);
               
               // utwórz obiekt reader do odczytu pliku
               var reader = new FileReader();
               // ustaw zdarzenie onload obiektu reader
               reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);

               // przeczytaj plik obrazka i zapisz w formacie data url
               reader.readAsDataURL(file);
               */
               //-------------------
               //showFile();
               // pobierz odwołanie do panelu atrybutów i do pliku
			   var fileAttributes = document.getElementById('fileAttributes');
			   //var file = this.file;
			
			   // utwórz informację o pliku
			   var fileinfo = 'Informacja o pliku:<br>';
			   fileinfo += file.name + '<br>';
			   fileinfo += file.type + '<br>';
			   fileinfo += (file.size/1024).toFixed(2) + 'KB<br>';
			   fileinfo += file.lastModifiedDate + '<br>';
			
			   // wyświetl informację o pliku
			   fileAttributes.innerHTML = fileinfo;
               
               _dane_we=file.name;
               //var fileAttributes2 = document.getElementById('fileAttributes2');
               //fileAttributes2.innerHTML = _dane_we;
               
            // $('#fileAttributes2').fadeOut('fast', function(){
            // $('#fileAttributes').fadeOut('fast', function(){
            // $('#imgPanel').fadeOut('fast', function(){
            // $('#input').fadeOut('fast', function(){
             	//$('#fileAttributes2').remove();
				//$('#fileAttributes').remove();        
				//$('#imgPanel').remove();
				//$('#input').remove();
               			//	$('body').html('');//, function(){zladujStroby();});
               			//	zladujStroby();
               		//	});});});});
               //.fadeOut('slow');
              // $('#fileAttributes').fadeOut('slow');        
				//$('#imgPanel').fadeOut('slow'); 
				//$('#input').fadeOut('slow');
				
				$('#fileAttributes2').remove();
				$('#fileAttributes').remove();        
				$('#imgPanel').remove();
				$('#input').remove();
				
               
              // $('#fileAttributes').fadeIn('slow');
                            
               zladujStroby();

            } else {
               // plik jest za duży
               alert(file.name+' ma rozmiar większy niż '+sizeLimit+'KB.');
            }
         } else {
            // plik nie jest obrazkiem
            alert(file.name+' nie jest plikiem XML.');
         }
      }
   } else {
      // wybrano zbyt wiele plików
      imgPanel.innerHTML = 'Wybrano zbyt wiele plików. Maksymalna dozwolona liczba plików to '+fileLimit+'.';
   }
}
