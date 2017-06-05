	/////////// главное меню /////////////////////////////
	
	//показывает текст статьи о методе
	function about_show ()
	{
		$("#page #p_about").toggle();
	}
	
	//показывает текст инструкции
	function todo_show ()
	{
		$("#page #p_todo").toggle();
	}
	
	//показывает таблицу результатов
	function tau_show ()
	{
		$("#page #p_tau").toggle();
	}
	
	//меняет css-класс кнопки на "selected" и обрано
	function selected (id) 
	{
		$( id ).toggleClass("selected");
	}
	
	//показывает текст статьи "о методе" и меняет вид нажатой кнопки меню
	 function click_about_show () //??? требуется дабл-клик вместо клика
	{
		$("#about").click(function(){
			selected (this);
			about_show ();
			
		});			
	} 
	
	//показывает текст статьи "о методе" и меняет вид нажатой кнопки меню
	 function click_todo_show () //??? требуется дабл-клик вместо клика
	{
		$("#todo").click(function(){
			selected (this);
			todo_show ();
			//$( this ).toggleClass("selected"); 
		});			
	} 
	
	
	
	
	
	
	/////////////кнопка "Внимание"//////////////
	
	//показывает кнопку "внимание" 
	function attention_show () 
	{
		//put_button_text ();
		$( "#button" ).show();
		timedText(3000);
	}
		
	//откладывает исчезновение кнопки "внимание" на время
	function timedText(interval) 
	{ 
		setTimeout(myTimeoutAttention, interval)  
	}
	
	//убирает с экрана кнопку "внимание"	
	function myTimeoutAttention() {
		$( "#button" ).hide();
		document.getElementById("demo").innerHTML = "надпись исчезла через 3 seconds";
	}
	
	
	 
	 
	 
	/////////////Воспроизведение промежутка//////////////
	
	var start;
	var end;
	var temp_result;
	//фиксирует время в момент начала воспроизводимого промежутка, первый клик
	
	function start_click () 
	{
		start = new Date(); // засекли время
		start_ms = start.getMilliseconds(); 
		console.log("start-ms: " + start_ms);
	}

	//фиксирует время в момент конца воспроизводимого промежутка, второй клик
	function end_click () 
	{
		end = new Date; // конец измерения
		end_ms = end.getMilliseconds(); 
		console.log("end: " + end_ms);
		temp_result = end - start;
		console.log("temp_result: " + temp_result);
		document.getElementById("demo").innerHTML = "интервал равен " + (end - start) + " ms" ;
	
	}
	
	//показывает кнопку "воспроизведите промежуток"	
	function repeat_show () 
	{
		put_button_text ();
		$( "#repeat" ).show();
		timedText();
	}
	
	//показывает кнопку, которую должен нажимать пользователь
	function person_time_button ()
	{
		$("#click").show();
	}
	
	function starter() 
		{ 
			setTimeout(start_button_show, 3000);
			setTimeout(end_button_show, 3000)
		}
	
	
	function user_signal ()
	{
		attention_show ();
		starter();
	}
	
	function start_button_show()
	{
		$("#start").show();
	}
		
	function end_button_show()
	{
		$("#end").show();
	}
	
	/* //меняет надпись на кнопке
	function put_button_text (message)
	{
		$( "#button" ).text(message);
	}
	 */
	
	
	
	
	
	
	
	
	
	
	
	

	function tau_temp ()
	{
		var input=$("#search_input").val().toString();
	}
	
	
	
	function set_time (id) 
	{
		/* document.getElementById(id+id).value = ""; */
		var time = document.getElementById("time"+id).value;
		console.log('time+id: ' + ("time"+id));
		console.log('time: ' + time);
		var interval = document.getElementById(id).value;
		console.log('interval: ' + interval);
		var tau_temp = time/interval;
		console.log('tau_temp: ' + tau_temp);
		document.getElementById("result"+id).value = tau_temp;
		
	}
	

	/* function isNormalInteger(str) 
	{
		var n = Math.floor(Number(str));
		return String(n) === str && n >= 0;
	} */
	
$(document).ready(function()
{
	$("#p_about").hide();
	$("#p_todo").hide();
	$("#button").hide();
	$("#start").hide();
	$("#end").hide();
	$("#repeat").hide();
	
	
	$("#signal").hide();
	$("#p_tau").hide();
	 
});

