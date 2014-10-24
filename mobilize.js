(function(){

	var v = "2.1.1";

	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
                window.$pvjQuery = $.noConflict(true);
				initpvbggBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
        window.$pvjQuery = window.jQuery;
		initpvbggBookmarklet();
	}
	
	function initpvbggBookmarklet() {
		(window.pvbggMobilize = function() {
            $pvjQuery('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
		})();
	}

})();