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
		for (var i = 1; i <= Object.keys(intervals).length; i++) {
			document.getElementById(i).value = intervals[i];
		}
	}
	
	//подает звуковой сигнал
	function playAudio() {
		console.log("playAudio() start" )
		var x = document.getElementById("myAudio");
		console.log("x: " + x);		
		x.play();
	}
	
	///////// демонстрация промежутка /////////
	
	//показывает кнопку "внимание" в заданном промежутке
	function attention_show () 
	{
		console.log("attention_show()start" )
		setTimeout(button_show, 1000);
		//timedText(1000);
		setTimeout(attention_hide, 2000)
	}
	
	//показывает кнопку "внимание" 
	function button_show()
	{
		console.log("button_show start" );
		$( "#button" ).show();
	}
	
	//прячет кнопку "внимание" и запускает звуковой стимул
	function button_hide()
	{
		console.log("button_hide start" );
		$( "#button" ).hide();
		set_stimul (count);
	}	
	
	//убирает с экрана кнопку "внимание" и запускает звуковой стимул через промежуток	
	function attention_hide() {
		console.log("attention_hide()start" );
		$( "#button" ).hide();
		setTimeout(button_hide, 1000)
		
		
	}
	
	// подает звуковые сигналы в заданном промежутке 
	function set_stimul (count)
	{
		console.log("set_stimul (count) start, count: " + count)
		playAudio();
		setTimeout(playAudio, intervals[count]);
		setTimeout(click_show, (intervals[count]+1000));
	}
	
	
	//показывает кнопку "Воспроизведите промежуток", которую должен нажимать пользователь
	function click_show ()
	{
		console.log("click_show start" )
		$("#click").show();
	}
	
	
	//запускает всю процедуру отмеривания после нажатия на пункт меню "Тренировка"
	function click_simulation()
	{
		console.log("click_simulation start: " );
		$(".onpage").hide();
		attention_show ();
	} 
	
	
	
	 
	
	

		
	 
	 
	 
	///////////// Воспроизведение промежутка //////////////
	var data ={1: {"interval": 2000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
			   /* 2: {"interval": 3000, "start": 0, "end": 0, "temp_result": 0, "result": 0},
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
 */
	};
	////////////////* Object.keys(data).length */
	var intervals = {1:2000, 2:3000, 3:4000, 4:5000, 5:2000, 6:4000, 7:3000, 8:5000, 9:3000,
	10:4000, 11:2000, 12:5000, 13:5000, 14:4000, 15:3000, 16:2000,}	
	
	
	
	
	
	var pressed = false;
	
	var start;
	var end;
	var temp_result;
	var result;
	var count=1;
	
	//фиксирует время в момент начала воспроизводимого промежутка, первый клик
	function start_click () 
	{
		console.log("start_click start");
		if(!pressed)
		{
			start_date = new Date(); // засекли время
			start = start_date.valueOf();
			pressed = true;
			console.log("pressed = " + pressed);
			
		}
		else 
		{
			end_click();
		}
	}
	
	
	//фиксирует время в момент конца воспроизводимого промежутка, второй клик
	function end_click () 
	{
		console.log("end_click start");
		console.log("count: " + count);
		if (pressed)
		{
			end_date = new Date; // конец измерения
			end = end_date.valueOf(); 
			console.log("end: " + end);
						
			temp_result = end - start;
			console.log("temp_result: " + temp_result);
			console.log("intervals.count: " + intervals[count]);
			result = temp_result/intervals[count];
			result = Math.round(result * 1000) / 1000 ;
			console.log("result: " + result);
			//document.getElementById("demo").innerHTML = "start = " + data[count].start+ " ms, " + "end = " + data[count].end+ " ms, " + "temp_result = " + data[count].temp_result+ " ms " + "result = " + data[count].result+ " ms ";
			add_row_to_data (count);
			set_time (count);
			
			pressed = false;
			console.log("pressed = " + pressed);
			
			if (count<=15){
				click_simulation();
				count++;
				
			}
			else {console.log("to results, count= " + count)}
		}
	}
	
	function add_row_to_data (count)
	{
		console.log("add_row_to_data start")
		var new_result = {"interval":intervals[count] ,"start": start, "end": end, "temp_result": temp_result, "result": result};
		console.log("new_result:start " + new_result.start.valueOf());
		console.log("new_result:end " + new_result.end.valueOf());
		data[count]=new_result; 
	}
	
	
	
	
	
	
	
	
	function start_button_show()
	{
		$("#start").show();
	}
		
	function end_button_show()
	{
		$("#end").show();
	}
	
	
	
	
	////////////// подсчет результатов //////////////////
	
	
	var average;
	//считает тау - среднее арифметическое промежуточных результатов
	function tau ()
	{
		console.log("tau start ");
		var taucount = 0;
		var sum = 0;
		
		for (var i = 0; i < Object.keys(data).length; i++) {
			
			sum += data[i+1].result;
			console.log("sum: " + sum);
			taucount++;
			console.log("taucount: " + taucount);
		}
		average = sum/taucount;
		average = Math.round(average * 100) / 100 ;
		document.getElementById("tau_result").value = average;
		
		
		console.log("average: " + average);
		
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
	
	

	/* var n = 3.456;
	alert( Math.round(n * 100) / 100 ); // 3.456 -> 345.6 -> 346 -> 3.46 */


	/* function isNormalInteger(str) 
	{
		var n = Math.floor(Number(str));
		return String(n) === str && n >= 0;
	} */
	
	
		
$(document).ready(function()
{
	$(".onpage").hide();
	set_intervals ();
		
});

