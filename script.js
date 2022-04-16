function myFunction(){
	var principal_amt = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
	var time = document.getElementById("years").value;
	var output = document.getElementById("rate_val");
	output.innerHTML = rate;
	var time = document.getElementById("years").value;
	
}
function compute()
{
    var principal_amt = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
	var time = document.getElementById("years").value;
	
	if ( time < 1 )
	{	
		alert("Please enter valid time !");
		
	}
	else if( principal_amt <= 0)
	{
		var str = "please enter positive principal !";
		alert(str);
		input.focus();
	}
	else
	{	
		simple_int = (principal_amt*rate*time)/100;
		let date =  new Date().getFullYear();
		var show_p = document.getElementById("ogn_amt");
		show_p.innerHTML = principal_amt;
		var show_r = document.getElementById("rate_value");
		show_r.innerHTML = rate;
		var show_n = document.getElementById("new_amt");
		show_n.innerHTML = principal_amt + simple_int;
		var show_t = document.getElementById("total_time");
		show_t.innerHTML = date + time;
		
	}
}
        