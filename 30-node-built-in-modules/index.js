var fs = require('fs');
var text = fs.readFileSync('song.txt', {encoding: 'utf-8'});

console.log(text);

fs.writeFileSync('song2.txt', 'I am coderX');