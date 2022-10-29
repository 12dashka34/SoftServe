function t1(){
	console.log("task 1");
	let x = 1;
let y = 2;

let res1 = ""+x + 2 
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 =""+ (y>x) + y;
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x<y;
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = "x"/y;
console.log(res4); // NaN
console.log(typeof res4); // "number"
console.log("");
}


function t2(){  
let a = prompt("insert value");
console.log("task 2");
((a%2)==0)?
(a>0)? console.log("even, positive "):console.log("even, negative "):
(a>0)? console.log("not an even, positive "):console.log("not an even, negative ");
((a%7)==0)? console.log("a multiple of 7 "):console.log("not multiple of 7 ");


	
	console.log("  ");
}

function t3(){
arr = [];
arr[0] = 1;
arr[1] = "Hi";
arr[2] = true;
arr[3] = null;
console.log("task 2");
console.log(arr.length);
arr[4] = prompt("insert value");
console.log(arr[4]);
arr.shift();
console.log(arr);
console.log("  ");
}

function t4(){
let cities = ["Rome", "Lviv", "Warsaw"]
let rez="";
for (let i=0; i<cities.length; i++){
rez=rez+cities[i]+"*";
}
console.log("task 4");
console.log(rez);
console.log(" ");

}

function t5(){
	let isAdult = confirm("Are you older then 18?");
	console.log("task 5");
	isAdult? console.log("you are old"): console.log("you are young");
	console.log(" ");

}

function t6(){
	console.log("task 6");
	let a =Number(prompt("first value"));
	let b =Number(prompt("second value"));
	let c =Number(prompt("third value"));
	let rez2
    if((a<(b+c))&&(b<(a+c))&&(c<(a+b))){
    let p = (a+b+c)/2;
	let rez1 = Math.sqrt(p*(p-a)*(p-b)*(p-c));
	if ((a>b)&&(a>c)){
     rez2 = ((a*a)==(b*b+c*c))
	} else if  ((b>a)&&(b>c)) {rez2 = ((b*b)==(a*a+c*c))}
       else { rez2 = ((c*c)==(b*b+a*a))}
	   console.log("the area of ​​the triangle", rez1.toFixed(2));
	   console.log("is right-angled", rez2);
	
	} else{
		console.log("is not a triangle");
		   }
		   console.log("");
}

function t7(){
	console.log("task 7");
	now= new Date();        
    hours= now.getHours();

	(hours==23)||(hours<5)? console.log("Good night") :
	hours<11? console.log("Good morning"):
	hours<17? console.log("Good day"):
	console.log("Good evening");

	switch(true){
    case (hours==23)||(hours<5) : console.log("Good night"); break;
	case hours<11 : console.log("Good morning"); break;
	case hours<17: console.log("Good day"); break;
	case hours<23: console.log("Good evening"); break;

	}
	console.log("");
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

   
