
	function timedText() {
    //setTimeout(myTimeout1, 2000) 
    setTimeout(myTimeoutAttention, 3000)  
	}
	
	/* function myTimeout1() {
		document.getElementById("demo").innerHTML = "2 seconds";
	} */
	
	function myTimeoutAttention() {
		$( "#button" ).hide();
		document.getElementById("demo").innerHTML = "надпись исчезла через 3 seconds";
	}
	 
	function attention_show (message) 
	{
		put_button_text (message);
		$( "#button" ).show();
		timedText();
	}
	
	
	function myTimeoutSignal() {
		$( "#signal" ).hide();
		document.getElementById("demo").innerHTML = "сигнал исчез через 2 seconds";
	}
	
	function interval (seconds)
	{
		setTimeout(end_signal, seconds)
	}
	
	function end_signal ()
	{
		$("#signal").text("end");
		$( "#signal" ).show();
		setTimeout(myTimeoutSignal, 2000)
	}
	
	
	function start_signal ()
	{
		$("#signal").text("start")
		$( "#signal" ).show();
		
		setTimeout(myTimeoutSignal, 2000)
		
		interval (3000);
		
	}
	
	
	
	
	
	
	
	function repeat_show (message) 
	{
		put_button_text (message);
		$( "#button" ).show();
		timedText();
	}
	
	
	function put_button_text (message)
	{
		$( "#button" ).text(message);
	}
	
	
	 function click_about_show () //?? требуется дабл-клик вместо клика
	{
		$("#about").click(function(){
			about_show ();
			$( this ).toggleClass("selected");
		});			
	} 
	
	 function click_todo_show () //?? требуется дабл-клик вместо клика
	{
		$("#todo").click(function(){
			todo_show ();
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
	$("#button").hide();
	$("#signal").hide();
	/* function button_hide ()
	{
		$( "#big-button" ).hide();
	} 	
	
	 $( "ul li" ).click(function() {
			button_hide (); 
		put_button_text ("gfgfgfg");
	});*/
 
});