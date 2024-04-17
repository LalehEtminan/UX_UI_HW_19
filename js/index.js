console.log("Your index.js file is loaded correctly!");
$(document).ready(function(){
	$("header.navigation").fadeIn(1000);
	$("section.about").slideDown(1000);
	$("section.portfolio").slideDown(1000);
	$("section.skills").slideDown(1000);
	$("footer").fadeIn(1000);
	
	$("button.show_email").click(function(){
    $("p.email").toggle("slow");
  });
});
