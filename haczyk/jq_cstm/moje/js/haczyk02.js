// JavaScript Document
//
jQuery.fn.alternateRowColors=function(){
	$('tbody tr:odd', this).removeClass('even00').addClass('odd00');
	$('tbody tr:even', this).removeClass('odd00').addClass('even00');
	return this;
};



//$(document).ready(function(){
function funObslTablic(){
	//$('table.sortable tbody tr:odd').addClass('odd00');
	//$('table.sortable tbody tr:even').addClass('even00');
	
	
	$('table.sortable').each (function(){
		//alert('sem ja');
		var $table=$(this);
		$table.alternateRowColors();
		$('th', $table).each(function(column){
			var $header=$(this);
			var findSortKey;
			if ($header.is('.sort-alpha')){
				findSortKey=function($cell){
					return $cell.find('.sort-key').text().toUpperCase()+''+$cell.text().toUpperCase();
				};
			}
			else if($header.is('.sort-numeric')){
				findSortKey=function($cell){
					var key=$cell.text().replace(/[^\d.]*$/,'').replace(',','.');
					key=parseFloat(key,10);
					return isNaN(key)?0:key;
				};
			}
			else if($header.is('.sort-date')){
				findSortKey=function($cell){
					var key=$cell.text().substr(3,4)+$cell.text().substr(0,2);
					return parseInt(key);
				};
			}
			if(findSortKey){
				$header.addClass('clickable').hover(function(){
					$header.addClass('kimono');
					//alert("jest");
				}, function(){
					$header.removeClass('kimono');
					//alert("mima");
				}).click(function(){
					var sortDirection =1;
					if ($header.is('.sorted-asc')){
						sortDirection = -1;
					}
					var rows=$table.find('tbody>tr').get();
					$.each(rows,function(index,row){
						//row.sortKey=parseFloat($(row).children('td').eq(column).text(),10);
						var $cell=$(row).children('td').eq(column);
						row.sortKey=findSortKey($cell);
					});
					rows.sort(function(a,b){
					if(a.sortKey<b.sortKey){return -sortDirection;}
					if(a.sortKey>b.sortKey){return sortDirection;}
					return 0;
				});
				$.each(rows,function(index,row){
					$table.children('tbody').append(row);
					row.sortKey=null;
				});
				$table.find('th').removeClass('sorted-asc').removeClass('sorted-desc');
				if(sortDirection==1){$header.addClass('sorted-asc');}
				else{$header.addClass('sorted-desc');}
				$table.find('td').removeClass('sorted')
								.filter(':nth-child('+(column+1)+')')
								.addClass('sorted');
				$table.alternateRowColors();
				
				
				});
			}
		});
	});
}
//});