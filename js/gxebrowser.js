$(document).ready(function(){

	// Grab the navbar code from navigation.html and insert it into the page
	$.get("navigation.html", function(data){
    $("#nav-placeholder").replaceWith(data);
  });

})