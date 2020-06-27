function onSearch(obj){//js函式開始  
    setTimeout(function(){//因為是即時查詢，需要用setTimeout進行延遲，讓值寫入到input內，再讀取  
        var storeId = document.getElementById('store');//獲取table的id標識  
        var rowsLength = storeId.rows.length;//表格總共有多少行  
        var key = obj.value;//獲取輸入框的值  
        var searchCol = 0;//要搜尋的哪一列，這裡是第一列，從0開始數起  
        for(var i=1;i<rowsLength;i++){//按表的行數進行迴圈，本例第一行是標題，所以i=1，從第二行開始篩選（從0數起）  
            var searchText = storeId.rows[i].cells[searchCol].innerHTML;//取得table行，列的值  
            if(searchText.match(key)){//用match函式進行篩選，如果input的值，即變數 key的值為空，返回的是ture，  
                storeId.rows[i].style.display='';//顯示行操作，  
            }else{  
                storeId.rows[i].style.display='none';//隱藏行操作  
            }  
        }      
    },200);//200為延時時間  
}