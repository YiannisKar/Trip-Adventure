jQuery(init);

function init($){

    let options = {

        url: "data.json",
        success: jsonHandler
    
        function jsonHandler(data){

            console.log(data);
        }
    }
   $.ajax(options);
}