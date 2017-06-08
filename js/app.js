	/////////// главное меню /////////////////////////////
	
	//меняет css-класс кнопки на "selected" и обрано
	function hide_unselected () 
	{
		$(".onpage").hide();
		$(".menu").removeClass("selected");
	}
	
	//показывает текст статьи "о методе" и меняет вид нажатой кнопки меню
	 function click_about_show () 
	{
		
		hide_unselected () 
		$("#page #p_about").show();
		$( "#about" ).addClass("selected");
		/* $("#page #p_about").toggle();
		$( "#about" ).toggleClass("selected"); */
	} 
	
		
	//показывает текст статьи "инструкция" и меняет вид нажатой кнопки меню
	 function click_todo_show () 
	{
		hide_unselected () 
		$("#page #p_todo").show();
		$( "#todo" ).addClass("selected");
	} 
	
	//показывает таблицу результатов
	function click_results ()
	{
		hide_unselected ()
		/* $("#start").hide();
		$("#end").hide(); */
		$("#page #p_tau").show();
	}
	
	//выводит заданные интервалы в таблицу результатов
	function set_intervals ()
	{
		for (var i = 1; i < 17; i++) {
			document.getElementById(i).value = data[i].interval;
		}
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
		document.getElementById("demo").innerHTML = "Воспроизведите промежуток";
		/* repeat_show (2000, "конец промежутка") */
	}
	
	//показывает кнопку "воспроизведите промежуток"	
	/* function repeat_show (interval, message) 
	{
		console.log("repeat_show start");
		$( "#repeat" ).show();
		timedText(interval);
		put_button_text (message);
		timedText(interval/2);
		/* timedText(interval); *
	} */
	 
	
	///////// демонстрация промежутка /////////

	//подает звуковой сигнал
	function playAudio() {
		var x = document.getElementById("myAudio");
		console.log("x: " + x);		
		x.play(); 
	}	

	/* //показывает кнопку "клик", которую должен нажимать пользователь
	function person_time_button ()
	{
		$("#click").show();
	}
	*/
	
	
	//откладывает появление кнопки "клик", которую должен нажимать пользователь
	function starter() 
	{ 
		setTimeout(start_button_show, 3000);
		setTimeout(end_button_show, 3000)
	}
 
	
	 
	///////////// Воспроизведение промежутка //////////////
	var data ={1: {"interval": 2000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   2: {"interval": 3000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   3: {"interval": 4000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   4: {"interval": 5000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   5: {"interval": 2000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   6: {"interval": 4000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   7: {"interval": 3000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   8: {"interval": 5000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   9: {"interval": 3000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   10: {"interval": 4000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   11: {"interval": 2000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   12: {"interval": 5000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   13: {"interval": 5000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   14: {"interval": 4000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   15: {"interval": 3000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   16: {"interval": 2000, "start": 0, "end": 0, "temp_result": 0, "result": 0}

	};
	////////////////* Object.keys(data).length */
	var intervals = {1:2000, 2:3000, 3:4000, 4:5000, 5:2000, 6:4000, 7:3000, 8:5000, 9:3000,
	10:4000, 11:2000, 12:5000, 13:5000, 14:4000, 15:3000, 16:2000,}	
	
	
	
	/* function add_row_to_data (count)
	{
		var new_result = {"interval":intervals[count] ,"start": start, "end": end, "temp_result": temp_result};
		data[count]=new_result; 
	} */
	
	var start;
	var end;
	var temp_result;
	var result;
	//фиксирует время в момент начала воспроизводимого промежутка, первый клик
	var count=1;
	function start_click () 
	{
		/* add_to_data (count); */
		start = new Date(); // засекли время
		start_ms = start.getMilliseconds(); 
		console.log("start-ms: " + start_ms);
		data[count].start = start_ms;
		console.log("data[0].start: " + data[count].start);
	}
	
	
	//фиксирует время в момент конца воспроизводимого промежутка, второй клик
	function end_click () 
	{
		console.log("count: " + count);
		
		end = new Date; // конец измерения
		end_ms = end.getMilliseconds(); 
		////////////console.log("end: " + end_ms);
		data[count].end = end_ms;
		////////////console.log("data[0].end: " + data[count].end);
		
		temp_result = end - start;
		data[count].temp_result = temp_result;
		/////////////console.log("temp_result: " + temp_result);
		/////////////console.log("data[0].temp_result: " + data[count].temp_result);
		/////////////console.log("data[count].interval: " + data[count].interval);
		result = temp_result/data[count].interval;
		result = Math.round(result * 1000) / 1000 ;
		data[count].result = result;
		/////////////console.log("result: " + result);
		document.getElementById("demo").innerHTML = "start = " + data[count].start+ " ms, " + "end = " + data[count].end+ " ms, " + "temp_result = " + data[count].temp_result+ " ms " + "result = " + data[count].result+ " ms ";
		set_time (count);
		count++;
	}
	
	/* var n = 3.456;
	alert( Math.round(n * 100) / 100 ); // 3.456 -> 345.6 -> 346 -> 3.46 */
	
	
	
	//запускает всю процедуру отмеривания после нажатия на пункт меню "Тренировка"
	function click_simulation()
	{
		console.log("click_simulation start: " );
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
	
	//меняет надпись на кнопке
	function put_button_text (message)
	{
		$( "#repeat" ).text(message);
	}
	
	
	
	////////////// подсчет результатов //////////////////
	
	
	
	//считает тау - среднее арифметическое промежуточных результатов
	function tau ()
	{
		console.log("tau start ");
		var taucount = 0;
		var sum = 0;
		var average;
		for (var i = 1; i < Object.keys(data).length; i++) {
			
			sum += data[i].result;
			taucount++;
			
		}
		average = sum/taucount;
		average = Math.round(average * 100) / 100 ;
		console.log("taucount: " + taucount);
		console.log("sum: " + sum);
		console.log("average: " + average);
		document.getElementById("tau").innerHTML = average;
	}
	
		
	//берет данные теста из массива и помещает в таблицу результатов
	function set_time (id)
	{
		console.log ("set_time start");
		console.log ("data[id].start: " + data[id].start);
		document.getElementById("start"+id).value = data[id].start;
		document.getElementById("end"+id).value = data[id].end;
		document.getElementById("temp_result"+id).value = data[id].temp_result;
		document.getElementById("result"+id).value = data[id].result;
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
/*





*/


	/* function isNormalInteger(str) 
	{
		var n = Math.floor(Number(str));
		return String(n) === str && n >= 0;
	} */
	
	
		
$(document).ready(function()
{
		
	$(".onpage").hide();
	set_intervals ();
	
	 
	/* console.log("myAudio: " + x); */
	
	
});

