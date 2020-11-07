const fs = require('fs') ;

const note = {
    title: 'The power of positive thinking',
    author: 'Tim cook'
}

// const noteJSON = JSON.stringify(note) ;
// fs.writeFileSync('1-json.json',noteJSON) ;

const noteBuffer = fs.readFileSync('1-json.json') ;
const noteJSON = noteBuffer.toString();
const data = JSON.parse(noteJSON) ;

data.name = 'Deepak' ;
data.age = 22 ;

fs.writeFileSync('1-json.json',JSON.stringify(data)) ;
