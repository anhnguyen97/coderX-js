var fs = require('fs');
console.log("Start");
fs.readFile("song1.txt", { encoding: 'utf-8'}, function(err, data){
	console.log(data);
})
fs.readFile("song2.txt", {encoding: 'utf-8'}, function(err, data){
	console.log(data);
})

console.log("End");