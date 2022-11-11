function calcRectangleArea(width, height){
	let S;
	try{
	if (isNaN(width) || isNaN(height)){
		throw new Error('value is not a number');
	} else if (width < 1 || height < 1) {
		throw new Error('incorrect value');
	}
	S = width*height;
} catch(e){
	console.log(e.stack);
} finally{
	console.log("S= "+S);
}

	
}

function t1(func){
	console.log("task 1");
	let w = prompt('enter width');
	let h = prompt('enter height');
	calcRectangleArea(w,h);
	console.log("  ");
}


function checkAge(){
	let age = prompt('enter your age')
	try{
		if (age == '') {
			throw new Error('The field is empty! Please enter your age')
		}
		else if (isNaN(age)){
			throw new Error('value is not a number')
		}
		else if (age < 14){
			throw new Error('You are not allowed')
		}
		console.log('You are allowed')
	} catch(e){
		console.log(e.name + ': '+ e.message);
	}
}

function t2(func){  
	console.log("task 2");
	checkAge();
	console.log("  ");
}

class MonthException {
	    constructor(message) {
			this.name = 'MonthException';
	         this.message = message;
	    }
	}

	function showMonthName(month) {
	    let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	    try {
	        if (month < 1 || month > 12) {
	            throw new MonthException('Incorrect month number');
	        } else if (isNaN(month) ){
				throw new MonthException('Incorrect value');
			}
	    } catch(e) {
	        return e.name + ': ' + e.message;
	    }
		
	    console.log( monthList[month-1]);
	}
	
function t3(func){
	console.log("task 3");
	showMonthName(prompt('insert month number'));
	console.log("  ");
}



function showUser(id) {
    if (id < 0) {
        throw new Error('ID is negative');
    }
    return {id: id};
}
function showUsers(ids) {
    let arrId = [];
    try {
        for (let i = 0; i < ids.length; i++) {
            try {
                arrId.push(showUser(ids[i]));
            } catch (e) {
                console.log(`${e}: ${ids[i]} `);
            }
        }
    } catch (e) {
        console.log(e);
    }
    return arrId;
}




function t4(func){
	console.log("task 4");
	console.log(showUsers([7, -12, 44, 22]));
	
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


   