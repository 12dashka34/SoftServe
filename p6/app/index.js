let flag1 = true;
let flag2 = true;



function t1(){ 
	if(flag1){
	document.getElementById("test").innerHTML = "Last" ;
	flag1 = false;} else{
	document.querySelector("#test").innerHTML = "First";
	flag1 = true; }
}


function t2(){  
	if(flag2){
		document.querySelector(".image").src = 'cat.jpg';
		flag2 = false;} else{
			document.querySelector(".image").src = 'dog.jpg';
		flag2 = true; }
	
}

function t3(){
document.querySelectorAll("div#text p").forEach((item,index) => {
	console.log('Selector text' + index + ': '+ item.innerText)
} )

}

function t4(){
 let arr = [];
 arr[0] = document.getElementById("list").children[0].innerText;
 arr[1] = document.getElementById("list").children[4].innerText;
 arr[2] = document.getElementById("list").children[1].innerText;
 arr[3] = document.getElementById("list").children[3].innerText;
 arr[4] = document.getElementById("list").children[2].innerText;
 console.log(arr);

 arr[0] = document.querySelector("#list").childNodes[1].innerText;
 arr[1] = document.querySelector("#list").childNodes[9].innerText;
 arr[2] = document.querySelector("#list").childNodes[3].innerText;
 arr[3] = document.querySelector("#list").childNodes[7].innerText;
 arr[4] = document.querySelector("#list").childNodes[5].innerText;
 console.log(arr);
}

function t5(){
document.querySelector("h1").style.backgroundColor = "lightgreen";
document.getElementById("myDiv").children[0].style.fontWeight = "bold";
document.getElementById("myDiv").children[1].style.color = "red";
document.getElementById("myDiv").children[2].style.textDecoration = "underline";
document.getElementById("myDiv").children[3].style.fontStyle = "italic";
document.querySelectorAll("#myList li").forEach((item) => item.style.float = "left");
document.querySelectorAll("#myList li").forEach((item) => item.style.listStyle = "none");
document.querySelector("span").style.display = "none";

}


function t6(){
	document.getElementById("input1").value = prompt("first input");
	document.getElementById("input2").value = prompt("second input")
	let s = document.getElementById("input2").value;
	document.getElementById("input2").value = document.getElementById("input1").value;
	document.getElementById("input1").value = s;
}


function t7(){
	let mainClass = document.createElement('main');
	mainClass.className = "mainClass";
	let myDivv = document.createElement('div');
	myDivv.id = "myDivv";
	let pp = document.createElement('p');
	pp.innerHTML = "First paragraph"
	document.body.appendChild(mainClass);
	document.querySelector(".mainClass").appendChild(myDivv);
	document.querySelector("#myDivv").appendChild(pp);

}


   