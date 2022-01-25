function include(scriptUrl){
	document.write('<script src="'+scriptUrl+'"></script>');
}

function isIE(){
	var myNav=navigator.userAgent.toLowerCase();
	return(myNav.indexOf('msie')!=-1)?parseInt(myNav.split('msie')[1]):false;
};

;(function($){
	var o=$('.thumb');

	if(o.length>0){
		include('../css/jquery.fancybox.js');
		include('../css/helpers/jquery.fancybox-media.js');
		include('../css/helpers/jquery.fancybox-buttons.js');
		$(document).ready(function(){
			o.fancybox();
		});
}})(jQuery);