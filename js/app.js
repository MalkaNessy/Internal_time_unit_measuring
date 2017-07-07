///////////////****** главное меню *****//////////////////
	
	//прячет все содержимое страницы, меняет css-класс кнопки на "selected" и обратно
	function hide_unselected () 
	{
		$(".onpage").hide();
		
	}
	
		
	//показывает текст статьи "о методе" и меняет вид нажатой кнопки меню
	 function click_about_show () 
	{
		hide_unselected(); 
		$("#page #p_about").show();
		$( "#about" ).addClass("selected");
	} 
	
		
	//показывает текст статьи "инструкция" и меняет вид нажатой кнопки меню
	 function click_todo_show () 
	{
		hide_unselected (); 
		$("#page #p_todo").show();
		$( "#todo" ).addClass("selected");
	} 
	
	//показывает таблицу результатов
	function results_show ()
	{
		hide_unselected ();
		$("#tau").addClass("selected");
		/* $("#page #table").hide(); */
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
		console.log("playAudio() start" );
		var x = document.getElementById("myAudio");
		console.log("x: " + x);		
		x.play();
	}
	
	
////////****** Демонстрация промежутка ******//////
	
	
	//показывает кнопку "внимание" в заданном промежутке
	function attention_show () 
	{
		console.log("attention_show()start" );
		//hide_unselected ();
		setTimeout(button_show, 1000);
		//timedText(1000);
		setTimeout(attention_hide, 2000);
	}
	
	//показывает кнопку "внимание" 
	function button_show()
	{
		console.log("button_show start" );
		$( "#attention" ).show();
	}
	
	//прячет кнопку "внимание" и запускает звуковой стимул
	function button_hide()
	{
		console.log("button_hide start" );
		$( "#attention" ).hide();
		set_stimul (count);
	}	
	
	//убирает с экрана кнопку "внимание" и запускает звуковой стимул через промежуток	
	function attention_hide() {
		console.log("attention_hide()start" );
		$( "#attention" ).hide();
		setTimeout(button_hide, 1000);
	}
	
	// подает звуковые сигналы в заданном промежутке 
	function set_stimul (count)
	{
		console.log("set_stimul (count) start, count: " + count);
		playAudio();
		setTimeout(playAudio, intervals[count]);
		setTimeout(click_show, (intervals[count]+1000));
	}
	
	
	//показывает кнопку "Воспроизведите промежуток", которую должен нажимать пользователь
	function click_show ()
	{
		console.log("click_show start" );
		$("#click").show();
	}
	
	
	
/////////***** Воспроизведение промежутка ******///////////
	

	
	var data ={1: {"interval": 2000, "start": 0, "end": 0, "temp_result": 0, "result": 0},			   
	};
	////////////////* Object.keys(data).length */
	var intervals = {1:2000, 2:3000, 3:4000, 4:5000, 5:2000, 6:4000, 7:3000, 8:5000, 9:3000,
	10:4000, 11:2000, 12:5000, 13:5000, 14:4000, 15:3000, 16:2000};	
	
	var pressed = false; //означает что кнопка еще не была нажата
	
	var start;
	var end;
	var temp_result;
	var result;
	
	var error = 0; //количество сделанных ошибок
	var max_errors = 2; //количество максимально допустимых ошибок
	
	var thisIsSimulation = false; //показывает, проходим мы сейчас симуляцию или тест
	
	var count=1; //количество проходов теста
	var try_count = 0; //сколько раз должен проходить тест (дефолтное: 16)
	
	//запускает всю процедуру тестирования после нажатия на пункт меню "Начать тест"
	function click_test(try_howmuch)
	{
		try_count = try_howmuch;
		console.log("click_test try_howmuch: " + try_howmuch + "try_count: "+ try_count);
		
		hide_unselected ();	
		attention_show ();
	} 
	
	//фиксирует время в момент начала воспроизводимого промежутка, первый клик
	function start_click () 
	{
		console.log("start_click start");
		if(!pressed)
		{
			$( "#click" ).addClass("clicked");
			var start_date = new Date(); // засекли время
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
			//$( "#click" ).removeClass("clicked");
			var end_date = new Date(); // конец измерения
			end = end_date.valueOf(); 
			console.log("end: " + end);
						
			temp_result = end - start;
			console.log("temp_result: " + temp_result);
			console.log("intervals.count: " + intervals[count]);
			result = temp_result/intervals[count];
			result = Math.round(result * 1000) / 1000 ;
			console.log("result: " + result);
			
			if (!(result<0.55 || result>1.25)){
				//document.getElementById("demo").innerHTML = "start = " + data[count].start+ " ms, " + "end = " + data[count].end+ " ms, " + "temp_result = " + data[count].temp_result+ " ms " + "result = " + data[count].result+ " ms ";
				add_row_to_data (count);
				set_time (count);
				
				pressed = false;
				console.log("result normal: " + result + "pressed = " + pressed);
			}/////////
			else {
				error++;
				console.log("result normal: " + result + "error = " + error);
			}	
			if (thisIsSimulation){
				pressed = false;
				console.log ("thisIsSimulation pressed = " + pressed)
				if (result < 0.55){
					$(".onpage").hide();
					document.getElementById("error").innerHTML = "Вы слишком быстро нажали на кнопку. Будьте внимательнее. <h4>продолжить тренировку</h4> "
					$("#error").show();
				}
				else if (result > 1.25){
					$(".onpage").hide();
					document.getElementById("error").innerHTML = "Вы слишком долго ждали, чтобы нажать на кнопку. Будьте внимательнее. <h4>продолжить тренировку </h4>"
					$("#error").show();
				}
				else end_click_continues ();
			}
			else {
				console.log("not simulation, error = " + error);
				pressed = false;
				if (error<max_errors){
					console.log("error<max_errors");
					end_click_continues ();
				}
				else {
					console.log("error>=max_errors");
					count = 1;
					error = 0;
					$(".onpage").hide();
					document.getElementById("no").innerHTML = 'Упс, что-то пошло не так. Успокойтесь и попробуйте еще раз <h4 onclick="click_simulation(3)">потренироваться</h4> <h4 onclick = "click_test(4)">пройти тест</h4>'
					$("#no").show();
				}
			}
		}	
	}
	
	//продолжает процедуру тренировки или тестирования
	function end_click_continues (){
		console.log ("end_click_continues start, try_count = " + try_count + "count = " + count);
		if (count<try_count){
			if (thisIsSimulation) {
				click_simulation(3);
			}
			else {
				click_test(4);
			}
			count++;
				
		}
		else 
		{
			count = 1;
			error = 0;
			console.log("to results, count= " + count);
			$(".onpage").hide();
			to_result_show();
		}
		
	} 
	
	
	
	
	//добавляет строку в массив промежуточных результатов
	function add_row_to_data (count)
	{
		console.log("add_row_to_data start");
		var new_result = {"interval":intervals[count] ,"start": start, "end": end, "temp_result": temp_result, "result": result};
		console.log("new_result:start " + new_result.start.valueOf());
		console.log("new_result:end " + new_result.end.valueOf());
		data[count]=new_result; 
	}
	
	
	//показывает кнопки после окончания симуляции и тренировки, отключает симуляцию
	function to_result_show()
	{
		if (thisIsSimulation){
			$("#ok").show();
			//$("#totest").show();
			thisIsSimulation = false;
		}
		else {
		$("#toresult").show();}
		
	}
	
	
	
	
///////////******* Симуляция *********///////////
	

	//вызывается при нажатии пункта меню "тренировка"
	function click_simulation(try_howmuch)
	{
		try_count = try_howmuch;
		thisIsSimulation = true;
		console.log("click_simulation start: " );
		$(".menu").removeClass("selected");
		$("#simulation").addClass("selected");
		hide_unselected ();		
		attention_show ();
	} 



	
	
	////////////// подсчет результатов //////////////////
	
	
	var average;
	var c;
	var c4;
	
	//считает тау - среднее арифметическое промежуточных результатов
	function tau ()
	{
		console.log("tau start ");
		var taucount = 0;
		var sum = 0;
		var error = 0;
		
		for (var i = 0; i < Object.keys(data).length; i++) {
			
			sum += data[i+1].result;
			console.log("sum: " + sum);
			taucount++;
			console.log("taucount: " + taucount);
		}
		average = sum/taucount;
		average = Math.round(average * 1000) / 1000 ;
		document.getElementById("tau_result").value = average;
		console.log("average: " + average);
		
		if (average <=0.79){
			document.getElementById("temperament").value = "холерик";
		}
		else if(average <=0.87){
			//average >= 0.87
			document.getElementById("temperament").value = "сангвиник";
		}
		else if (average <=0.93){
			//average >= 0.9
			document.getElementById("temperament").value = "равновесный";
		}
		else if (average <=1){
			//average >= 0.9
			document.getElementById("temperament").value = "меланхолик";
		}
		else {
			//average >= 1
			document.getElementById("temperament").value = "флегматик";
		}
	}
	
	//считает Большой Биологический Цикл
	function bbc ()
	{
		console.log("bbc start, average = " + average );
		c = average * 8.51;
		c = Math.round(c * 1000) / 1000 ;
		console.log("c: " + c);
		document.getElementById("c_result").value = c;		
	}
	
	//считает четверть Большого Биологического Цикла
	function bbc_4 ()
	{
		console.log("bbc_4 start" );
		c4 = c/4;
		c4 = Math.round(c4 * 1000) / 1000 ;
		console.log("c4: " + c4);
		document.getElementById("c4_result").value = c4;
	}
	
	//считает и показывает все результаты
	function all_results ()
	{
		hide_unselected ();
		$(".menu").removeClass("selected");
		tau ();
		bbc ();
		bbc_4 ();
		results_show();
	}


	
	//берет данные теста из массива и помещает в таблицу результатов
	function set_time (id)
	{
		console.log ("set_time start");
		console.log ("data[id].start: " + data[id].start);
		//document.getElementById("start"+id).value = data[id].start;
		//document.getElementById("end"+id).value = data[id].end;
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
	
	function default_test (){
		console.log ("default_test start");
		thisIsSimulation = false;
		$(".onpage").hide();
		$(".menu").removeClass("selected");
		$("#test").addClass("selected");
		error = 0;
		max_errors = 2;
		count = 1;
	}
	
	function default_simulation (){
		console.log ("default_simulation start");
		thisIsSimulation = true;
		$(".onpage").hide();
		$(".menu").removeClass("selected");
		$("#simulation").addClass("selected");
	}
		
$(document).ready(function()
{
	//class selected при нажатии на любой пункт меню
	$(".menu").click(function(){
		$(".menu").removeClass("selected");
		$(this).addClass("selected");
		}
	);
	
	//что делает кнопка "можете проходить настоящий тест" (после тренировки)
	$("#ok").click(function(){
			$(".menu").removeClass("selected");
			$("#test").addClass("selected");
			click_test(4);
		}
	);
	
	$(".onpage").hide();
	click_about_show ();
	set_intervals ();
		
});

