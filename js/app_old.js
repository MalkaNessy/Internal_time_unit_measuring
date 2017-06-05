
	function timedText() 
	{
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
	
	function tau_show ()
	{
		$("#page #p_tau").toggle();
	}
	
	function tau_temp ()
	{
		var input=$("#search_input").val().toString();
	}
	
	var start;
	var end;
	function start_click () 
	{
		start = new Date(); // засекли время
		start_ms = start.getMilliseconds(); 
		console.log("start-ms: " + start_ms);
	}

	function end_click () 
	{
		end = new Date; // конец измерения
		end_ms = end.getMilliseconds(); 
		console.log("end: " + end_ms);
		document.getElementById("demo").innerHTML = "интервал равен" + (end - start) + " ms" ;
	
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
	
	/* function count_temp_result(id)
	{
		var time = document.getElementById(id).value;
		var interval = document.getElementById(id).value;
		var tau_i = 
	} */
 /* function setBet() {
		bet = document.getElementById("toBet").value;
		console.log('bet: ' + bet + ' inNaN: '+ isNaN(bet));
		if(isNormalInteger(bet)){
			
			document.getElementById("toBet").value = "";
			document.getElementById("innerBet").innerHTML = bet;
			document.getElementById("setBet").style.display = "none";
			bet = parseInt(bet);
			setScore((score - bet));
		}
	}

	 */
	function isNormalInteger(str) 
	{
		var n = Math.floor(Number(str));
		return String(n) === str && n >= 0;
	}
	
$(document).ready(function()
{
	$("#p_about").hide();
	$("#p_todo").hide();
	$("#button").hide();
	$("#signal").hide();
	$("#p_tau").hide();
	 
});

/*<!DOCTYPE html>
<html><head></head>
<body>
<div id="target"></div>
<script>
var period = '9.00 - 11.29';
var expr = /\d?\d/g;
var startDate = new Date();
startDate.setHours(expr.exec(period), expr.exec(period), 0);
var stopDate = new Date();
stopDate.setHours(expr.exec(period), expr.exec(period), 0);
var out = '';
while(startDate < stopDate) {
    var str = humanHour(startDate.getHours()) + '.' + humanHour(startDate.getMinutes());
    out += '<input type="radio" id="' + str + '" name="time" value="' + str + '"><label for="' + str + '"> ' + str + ' - ';
    startDate.setMinutes(startDate.getMinutes() + 15);
    out += humanHour(thatBefore(startDate, stopDate).getHours()) + '.' + humanHour(thatBefore(startDate, stopDate).getMinutes()) + '</label><br />';
}
document.getElementById('target').innerHTML = out;
function humanHour(h){ return h < 10 ? '0' + h : h; }
function thatBefore(a, b){ return a < b ? a : b; }
</script>
</body>
</html>

//////////////////////

Секундомер

Секундомер пишется чуть посложней, но все равно не так сложно как кажется. Мы будем рассматривать пример, где будут присутствовать миллисекунды. Ну, давайте приступим.

Обнулить
 
00:00:00.82
 Запуск/Остановить
 <script language="JavaScript" type="text/javascript">
//объявляем переменные
var base = 60; 
var clocktimer,dateObj,dh,dm,ds,ms; 
var readout=''; 
var h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0; 
//функция для очистки поля
function ClearСlock() { 
	clearTimeout(clocktimer); 
	h=1;m=1;tm=1;s=0;ts=0;ms=0; 
	init=0;
	readout='00:00:00.00'; 
	document.MyForm.stopwatch.value=readout; 
} 
//функция для старта секундомера
function StartTIME() { 
	var cdateObj = new Date(); 
	var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
	if (t>999) { s++; } 
	if (s>=(m*base)) { 
		ts=0; 
		m++; 
	} else { 
		ts=parseInt((ms/100)+s); 
		if(ts>=base) { ts=ts-((m-1)*base); } 
	} 
	if (m>(h*base)) { 
		tm=1; 
		h++; 
	} else { 
		tm=parseInt((ms/100)+m); 
		if(tm>=base) { tm=tm-((h-1)*base); } 
	} 
	ms = Math.round(t/10); 
	if (ms>99) {ms=0;} 
	if (ms==0) {ms='00';} 
	if (ms>0&&ms<=9) { ms = '0'+ms; } 
	if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
	dm=tm-1; 
	if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
	dh=h-1; 
	if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 
	readout = dh + ':' + dm + ':' + ds + '.' + ms; 
	document.MyForm.stopwatch.value = readout; 
	clocktimer = setTimeout("StartTIME()",1); 
} 
//Функция запуска и остановки
function StartStop() { 
	if (init==0){ 
		ClearСlock();
		dateObj = new Date(); 
		StartTIME(); 
		init=1; 
	} else { 
		clearTimeout(clocktimer);
		init=0;
	} 
} 
</script> 
<!--Форма для Секундомера-->
<form name=MyForm>   
	<input type=button value="Обнулить" onclick="ClearСlock()">  
	<input name=stopwatch size=10 value="00:00:00.00">  
	<input type=button value="Запуск/Остановить" onclick="StartStop()"> 
</form>


*/