function excelFileToJSON(file){
  try {
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function(e) {

        var data = e.target.result;
        var workbook = XLSX.read(data, {
            type : 'binary'
        });
        var result = {};
        workbook.SheetNames.forEach(function(sheetName) {
        var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        if (roa.length > 0) {
            result[sheetName] = roa;
        }
      });
        //displaying the json result
        var resultEle=document.getElementById("json-result");
        resultEle.value=JSON.stringify(result, null, 4);
        resultEle.style.display='block';
        }
    } catch(e){
        console.error(e);
    }
}

excelFileToJSON('../costumerData.xlsx')
