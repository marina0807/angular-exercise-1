app.factory("convert", function() {
    
     
      
      function convertMINTOHOUR (leng) {
        var hour, min;
        hour = Math.floor(leng / 60);
        min = leng % 60;
        return hour.toString() + "h "  + min.toString()  + "min ";
      }
      
      return {
        
        minhour: convertMINTOHOUR
      }
    });