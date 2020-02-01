var markdown = require('markdown').markdown;
var markdownText = 'Hello *Coders.Tokyo*!';
console.log(markdown.toHTML(markdownText));