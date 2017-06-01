
	function timedText() {
    setTimeout(myTimeout1, 2000) 
     
	}
	function myTimeout1() {
		document.getElementById("demo").innerHTML = "2 seconds";
	}
	
	 function click_about_show () //?? требуется дабл-клик вместо клика
	{
		$("#about").click(function(){
			$( this ).toggleClass("selected");
			$("#page #p_about").toggle();
			 
		});
						
	} 
	
	 function click_todo_show () //?? требуется дабл-клик вместо клика
	{
		$("#todo").click(function(){
			$("#page #p_todo").toggle();
			$( this ).toggleClass("selected"); 
		});
						
	} 
	
	
	function about_show ()
	{
		$("#page #p_about").toggle();
		
	}
	
	function todo_show ()
	{
		$("#page #p_todo").toggle();
	}
	
$(document).ready(function()
{
	$("#p_about").hide();
	$("#p_todo").hide();
	$(".button").hide();
	
	function button_hide ()
	{
		$( "#big-button" ).hide();
	}
	
	function put_button_text (message)
	{
		$( "#big-button" ).text(message);
	}
	
	
	
	
	
	
	
	
	$( "ul li" ).click(function() {
			/* button_hide (); */
		put_button_text ("gfgfgfg");
	});

});