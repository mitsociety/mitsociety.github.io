$(function() {
  Highcharts.setOptions({
    chart: {
      backgroundColor: '#fff',
      shadow: false,
      zoomType: 'x'
      //width: null,
      //height: null
    }
  });
  $('#lpcr-data').highcharts({
    chart: {
    	//zoomType: 'xy',
      type: 'column'
    },
    data: {
      googleSpreadsheetKey: '1ylP1aIbxYM5YG4oSuRAIBFyaU0NPLzHXxS4OWz5ZIuA',
      startColumn: 0,
      endColumn: 6,
      startRow: 0,
      endRow:34,
      googleSpreadsheetWorksheet: 1
    },
    title: {
      text: 'LPCR DATA PCM/PRM'
    },
    
    yAxis: {
						minRange:1000,						
						title: {
							text: 'Jumlah'
						}
					},
	 series:{
			type:'column'	     
	     }
			    });
	
 	
			});