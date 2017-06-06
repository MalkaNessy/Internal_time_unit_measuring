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
		timedText(2000);
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
	var data ={1: {"start": 0, "end": 0, "temp_result": 0},
			   2: {"start": 0, "end": 0, "temp_result": 0}

	};
	
	
	var start;
	var end;
	var temp_result;
	//фиксирует время в момент начала воспроизводимого промежутка, первый клик
	var count=1;
	function start_click () 
	{
		start = new Date(); // засекли время
		start_ms = start.getMilliseconds(); 
		console.log("start-ms: " + start_ms);
		data[count].start = start_ms;
		console.log("data[0].start: " + data[count].start);
	}
	
	
	//фиксирует время в момент конца воспроизводимого промежутка, второй клик
	function end_click () 
	{
		end = new Date; // конец измерения
		end_ms = end.getMilliseconds(); 
		console.log("end: " + end_ms);
		data[count].end = end_ms;
		console.log("data[0].end: " + data[count].end);
		temp_result = end - start;
		data[count].temp_result = temp_result;
		console.log("temp_result: " + temp_result);
		console.log("data[0].temp_result: " + data[count].temp_result);
		
		console.log("count: " + count);
		document.getElementById("demo").innerHTML = "start = " + data[count].start+ " ms, " + "end = " + data[count].end+ " ms, " + "temp_result = " + data[count].temp_result+ " ms ";
		set_time (1);
		count++;
	}
	
	//показывает кнопку "воспроизведите промежуток"	
	function repeat_show () 
	{
		put_button_text ();
		$( "#repeat" ).show();
		timedText();
	}
	
	//показывает кнопку "клик", которую должен нажимать пользователь
	function person_time_button ()
	{
		$("#click").show();
	}
	
	//откладывает появление кнопки "клик", которую должен нажимать пользователь
	function starter() 
		{ 
			setTimeout(start_button_show, 3000);
			setTimeout(end_button_show, 3000)
		}
	
	//запускает всю процедуру отмеривания после нажатия на пункт меню
	
	function user_signal ()
	{
		
			console.log("user_signal for start: " );
		
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
		console.log ("set_time start");
		console.log ("data[id].start: " + data[id].start);
		document.getElementById("start"+id).value = data[id].start;
		document.getElementById("end"+id).value = data[id].end;
		document.getElementById("temp_result"+id).value = data[id].temp_result;
	}
	
	
	
	/* function set_time (id) 
	{
		
		var time = document.getElementById("time"+id).value;
		console.log('time+id: ' + ("time"+id));
		console.log('time: ' + time);
		var interval = document.getElementById(id).value;
		console.log('interval: ' + interval);
		var tau_temp = time/interval;
		console.log('tau_temp: ' + tau_temp);
		document.getElementById("result"+id).value = tau_temp;
		
	}
	 */

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

