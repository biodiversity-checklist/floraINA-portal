
/* server side datatables */

	function dTableParam(idTable, urlApi, total)
    {

        if (idTable) idTable = idTable;
        if (urlApi) urlApi = urlApi;
        
        var data ="";
        var hasil ;

        // console.log(peerkalbar_domain+"services/"+urlApi);
        setTimeout(function(){ 

            for (i = 0; i<=total; i++){
                data = data+'{"bSortable": true},';
                // console.log(data);
            }
            var i;
            $('#'+idTable).dataTable({

                "bProcessing": true,
                "bServerSide": true,
                "sAjaxSource": peerkalbar_domain+"services/"+urlApi,
                /*"fnServerData": function( sUrl, aoData, fnCallback ) {
					$.ajax( {
						"url": sUrl,
						"data": aoData,
						"success": fnCallback,
						"dataType": "jsonp",
						"cache": false
					} );
				}*/

            });
            
        }, 1000);

    }

    function setParamdataTables(controller, paramFunc, limitData, idTable)
    {
    	var param = controller+"/handleRequest/?function="+paramFunc;
        // console.log(param);
	    dTableParam(idTable, param, limitData);
    }
	
    function AreAnyCheckboxesChecked(data)
    {

        var taxon = $('.taxonid_'+data).is(":checked");

        setTimeout(function() {
            if ($("#dataTaxon input:checkbox:checked").length > 10){

                
                $('#generate').attr("disabled","disabled");
            
            } else {
                
                
                $.post(basedomain+"browse/ajax", { taxonid: data, check:taxon}, function(data){
                
                }, "JSON");
                   
                
                $("#generate").removeAttr("disabled");
               
            }
        }, 100);
    }
    