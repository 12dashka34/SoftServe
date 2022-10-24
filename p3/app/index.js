function t1(){
	arr = [2, 3, 4, 5];
	let rez1 = 1;
	let rez2 = 1;
	for (let i of arr){
     rez1 *= i;
	}
	let j=0;
	while(j<arr.length){
		rez2 *= arr[j];
		j++;
	}
	console.log("task 1");
	console.log(rez1);
	console.log(rez2);
	console.log("  ");
}


function t2(){  
	console.log("task 2");
	for(let i=0; i<15; i++){
		((i%2)==0) ? console.log(i, "is even"): console.log(i, "is odd") ;
	}
	console.log("  ");
}

function randArray(k){
arr =[];
for(let i=0; i<k; i++){
	arr[i]=Math.floor(Math.random()*499+1);
}
console.log("task 3");
	console.log(arr);
	console.log("  ");
}

function raiseToDegree(a,b){
console.log(a**b);
console.log(" ");

}
function t4(func){
	console.log("task 4");
	let a = prompt("insert a");
	let b = prompt("insert b");
	func(a,b);
	
}

function findMin(){
	let min = arguments[0];
	for (i in arguments){
		arguments[i]<min? min = arguments[i] : 1
	}
	console.log("task 5");
	console.log(min);
	console.log("  ");
}

function findUnique(arr){
	
	let check = true;
	for (i in arr){
		for (j in arr){
		if(i==j){} else {
			if(arr[i]==arr[j]){
				check = false;
			}
		}
	}}
	
	console.log(check);
	
}

function t6(func){
	console.log("task 6");
	func([1, 2, 3, 5, 3]);  
	func([1, 2, 3, 5, 11]); 
	console.log("  ");

}

function lastElements(arr,k){
	rez = []
	let j=0;
	let n= arr.length;
	if(k==undefined){k=1}
	if((n-k)<1) {rez=arr;} else {
	for(let i=(n-k); i<n; i++){
    rez[j] = arr[i]; j++;
	}}
	console.log(rez);
}

function t7(func){
	console.log("task 7");
	func([3, 4, 10, -5]);      
	func([3, 4, 10, -5],2);   
	func([3, 4, 10, -5],8);

	console.log("  ");

}

function t8(str){
	let rez =str[0].toUpperCase();
	for(let i=1; i<str.length; i++){
		if(str[i-1]==" "){
			rez+=str[i].toUpperCase() ;
		}  else{
			rez+=str[i]
		}
	}
       
	console.log("task 8");
	console.log(rez);
	console.log("  ");
        
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


   