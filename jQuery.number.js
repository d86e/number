;(function($){
  $.fn.number = function(){
	$(this).keydown(function(event,value){
        if( (event.keyCode<48 || event.keyCode>57) 
            && event.keyCode!=46 
            && event.keyCode!=8 
            && (event.keyCode!=190 || event.key != '.' || event.target.value.split('.').length-1>=1)
            && event.keyCode!=110  
            && event.keyCode!=13  
            || (/\.\d\d$/.test(event.target.value) &&  event.keyCode!=8) ){
                event.preventDefault(),event.returnValue=false;
        }
    })
  }
})(jQuery);
