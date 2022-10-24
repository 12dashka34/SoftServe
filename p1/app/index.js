
function t2(){  
	console.log("task 2");
	console.log("Hryniuk");
	console.log("  ");
}

function t3(){
let s="hello"
let ss="world"
console.log("task 3");
console.log(s);
console.log(ss);
console.log("after copy");
ss=s;
console.log(s);
console.log(ss);
console.log("  ");
}

function t4(){
newObj = {
	text: "text",
	number: 10,
	bool: true,
	undef: undefined,
	nul: null,
}
console.log("task 4");
console.log(newObj);
console.log(" ");

}

function t5(){
	let isAdult = confirm("Are you older then 18?");
	console.log("task 5");
	console.log(isAdult);
	console.log(" ");

}

function t6(){
	
	let name ="Dasha";
	let lastName= "Hryniuk";
	let group= 1;
	let yearOfBirth= 2003;
	let married= true;
	let numberOfKids = null;
	let undef;

console.log("task 6");
console.log(typeof yearOfBirth,yearOfBirth);
console.log(typeof group, group);
console.log(typeof married, married);
console.log(typeof lastName, lastName);
console.log(typeof name, name)
console.log(typeof numberOfKids, numberOfKids);
console.log(typeof undef, undef);
console.log(" ");
}

function t7(){
	let name = prompt("What is your name?", "");
	let email = prompt("What is your email?", "");
	let password = prompt("What is your password?", "");
	alert("Dear " + name + ", your email is " + email + ", your password is " + password);

}

function t8(){
	now= new Date();        
        hours= 24 - now.getHours();
		minutes= 60 - now.getMinutes();
		seconds = now.getSeconds();
		date= 30 - now.getDate();
        month= 12 - now.getMonth()-1;
		year = now.getYear()+1901;
		hours*= 60*60;
		minutes*=60;
		date*= 24 * 60 * 60 
		month*= 30*24*60*60
        let time = month + date + hours + minutes + seconds
		
console.log("task 8");
console.log(time + " seconds left until the new " + year + " year");

console.log(" ");
        
        
}









function t1_txt(){
	
	var s = document.getElementById("t1_but").value;
	if(s == "close task"){
		document.getElementById("t1_but").value = "open task"
	    document.getElementById("t1_text").style.display =  "none";
	} else{
		document.getElementById("t1_text").style.display =  "block";
		document.getElementById("t1_but").value = "close task";
	}
	
}
function t2_txt(){
	
	var s = document.getElementById("t2_but").value;
	if(s == "close task"){
		document.getElementById("t2_but").value = "open task"
	    document.getElementById("t2_text").style.display =  "none";
	} else{
		document.getElementById("t2_text").style.display =  "block";
		document.getElementById("t2_but").value = "close task";
	}
	
}
function t3_txt(){
	
	var s = document.getElementById("t3_but").value;
	if(s == "close task"){
		document.getElementById("t3_but").value = "open task"
	    document.getElementById("t3_text").style.display =  "none";
	} else{
		document.getElementById("t3_text").style.display =  "block";
		document.getElementById("t3_but").value = "close task";
	}
	
}
function t4_txt(){
	
	var s = document.getElementById("t4_but").value;
	if(s == "close task"){
		document.getElementById("t4_but").value = "open task"
	    document.getElementById("t4_text").style.display =  "none";
	} else{
		document.getElementById("t4_text").style.display =  "block";
		document.getElementById("t4_but").value = "close task";
	}
	
}
function t5_txt(){
	
	var s = document.getElementById("t5_but").value;
	if(s == "close task"){
		document.getElementById("t5_but").value = "open task"
	    document.getElementById("t5_text").style.display =  "none";
	} else{
		document.getElementById("t5_text").style.display =  "block";
		document.getElementById("t5_but").value = "close task";
	}
	
}
function t6_txt(){
	
	var s = document.getElementById("t6_but").value;
	if(s == "close task"){
		document.getElementById("t6_but").value = "open task"
	    document.getElementById("t6_text").style.display =  "none";
	} else{
		document.getElementById("t6_text").style.display =  "block";
		document.getElementById("t6_but").value = "close task";
	}
	
}
function t7_txt(){
	
	var s = document.getElementById("t7_but").value;
	if(s == "close task"){
		document.getElementById("t7_but").value = "open task"
	    document.getElementById("t7_text").style.display =  "none";
	} else{
		document.getElementById("t7_text").style.display =  "block";
		document.getElementById("t7_but").value = "close task";
	}
	
}
function t8_txt(){
	
	var s = document.getElementById("t8_but").value;
	if(s == "close task"){
		document.getElementById("t8_but").value = "open task"
	    document.getElementById("t8_text").style.display =  "none";
	} else{
		document.getElementById("t8_text").style.display =  "block";
		document.getElementById("t8_but").value = "close task";
	}
	
}


   