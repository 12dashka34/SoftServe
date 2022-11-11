let Me = { 
	course: "JS fundamental", 
	age: 19,
	name: "Dasha" ,
	lastName: "Gryniuk",
	sex: "Fm"
};

function propsCount(obj){
console.log(Object.keys(obj).length);
}


function t1(func){  
	console.log("task 1");
	propsCount(Me);
	console.log("  ");
}

function showProps(obj){
	let arrKey = []
	let arrProp = []
	for (let i in obj) {
    arrKey.push(i);
	arrProp.push(obj[i]);
	}
	console.log(arrKey);
	console.log(arrProp);
}


function t2(func){  
	console.log("task 2");
	showProps(Me);
	console.log("  ");
}

class Person {
	constructor(name, surname){
		this.name = name;
		this.surname = surname;
	}
	showFullName(){
		console.log(this.name+' '+ this.surname);
	}
}

class Student extends Person{
	constructor(name, surname, year){
		super(name,surname);
		this.year = year;
	}
	showFullName(midleName){
		console.log(this.name+' '+ this.surname+' '+ midleName);
	}
	showCourse(){
		let day = new Date;
		let year = day.getYear()+1899;
		year = year - this.year;
		console.log('Course: '+ year);

	}
}


function t3(){

console.log("task 3");
const stud1 = new Student("Petro", "Petrenko", 2015);
stud1.showFullName("Petrovych"); // Petrenko Petro Petrovych
stud1.showCourse(); //Current course: 6

console.log("  ");
}


class Worker{
	experience = 1.2;
	constructor(fullName,dayRate,workingDays ){
		this.fullName = fullName ;
		this.dayRate = dayRate ;
		this.workingDays = workingDays ;

	}
	showSalary(){
		console.log('Salary: '+ this.dayRate * this.workingDays)
		
	}
	SalaryWithExperience(){
		let newSal = this.dayRate * this.workingDays * this.experience;
		return (newSal);
	}
	showSalaryWithExperience(){
		console.log('Salary with experience: '+ this.dayRate * this.workingDays * this.experience)
		
	}
	get showExp(){
		return(this.experience)
	}
	set setExp(exp){
		this.experience = exp;
	}
}

function sortArr(arr){
	arr.sort(function(a,b){return a.SalaryWithExperience() - b.SalaryWithExperience()})
   for(let i in arr){
	console.log(arr[i].fullName + ': '+ arr[i].SalaryWithExperience());
   }
	
}




function t4(func){
	console.log("task 4");

	console.log(" ");

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

let workers = [worker1, worker2, worker3];
sortArr(workers);



console.log(" ");

}

class GeometricFigure {
	getArea() {
return 0;
}
toString() {
return Object.getPrototypeOf(this).constructor.name;
}
}

class Triangle extends GeometricFigure{
constructor(a,h){
	super();
	this.a = a;
	this.h = h;
}
getArea(){
	return 0.5*this.a*this.h
}

}
class Square  extends GeometricFigure{
	constructor(b){
		super();
		this.b = b;
		}
getArea(){
	return this.b * this.b
}
}
class Circle extends GeometricFigure{
	constructor(r){
		super();
		this.r = r;
	}
	getArea(){
		return 3.14*this.r*this.r
	}

}

function handleFigures(figures){
	let arr = [];
    for (let i of figures) {
        if (i instanceof GeometricFigure) {
            console.log('Geometric figure: ' + i.constructor.name + ' area - ' + i.getArea());
        }
        arr.push(i.getArea());
    }
    arr = arr.reduce(function(a, b) {
        return a + b;
    }, 0);
    return arr;
}


function t5(){
	
	console.log("task 5");
	const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
    console.log(handleFigures(figures));

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




   