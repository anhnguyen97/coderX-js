var readlineSync = require("readline-sync");
var fs = require("fs");
var Student = require("./student");
var exit = false;
var listStudent = [];
const filePath = "./data.json"

while(!exit){
	var option = readlineSync.question("Select an option [1-3] -"+
	" 1. Show all" +
	" 2. Create a new student" +
	" 3. Save & Exit: ");
	switch(option){
		case "1":
			var success = showall(filePath);
			if (success == false) {
				console.log("No such file");
			}
			break;
		case "2":
			var student = createNew();
			listStudent.push(student);
			console.log(listStudent);
			break;
		case "3":
			save(listStudent, filePath);
			exit = true;
			break;
		default:

	}
}

function showall(filePath){

	if (fs.existsSync(filePath)){
		var content = fs.readFileSync(filePath);
		listStudent = JSON.parse(content);
		for (var student of listStudent) {
			console.log(student);
			console.log("");
		}
		return true;
	} else {
		return false;
	}	
}

function createNew(){
	var name = readlineSync.question("- Student's name: ");
	var age = readlineSync.question("- Student's age: ");
	var class_ = readlineSync.question("- Class: ");
	return new Student(name, age, class_);
}

function save(arr, filePath){

	var json = JSON.stringify(arr);
	fs.writeFileSync(filePath, json);
}