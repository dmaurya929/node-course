const fs = require('fs') ;
const chalk = require('chalk') ;


const addNote = (title,body) => {
    const notes = loadData() ;
    // notes.some() -> returns boolean value if match found
    //const fileredData = notes.filter(note => note.title === title) ;
    const duplicateNode = notes.filter(note => note.title === title) ;

    if(!duplicateNode){
        const newNote = {
            title: title,
            body: body
        } ;
        notes.push(newNote) ;
        saveNotes(notes) ;
        console.log(chalk.green.inverse('Note saved!')) ;
    }else {
        console.log(chalk.red.inverse('This note already exist !')) ;
    }

}

const removeNote = (title) => {
    const notes = loadData() ;
    let msg = 'No note found' ;
    const newNotes = notes.filter( note => note.title !== title) ;
   
    if(newNotes.length !== notes.length){
        msg = 'Note removed! '
        saveNotes(newNotes) ;
        console.log(chalk.green.inverse.bold(msg)) ;
    }else {
        console.log(chalk.red.inverse.bold(msg)) ;
    }
}

const listNotes = () => {
    const notes = loadData() ;
    console.log(chalk.yellow.inverse('Your notes:')) ;
    notes.forEach( note => {
        console.log(note.title) ;
    }) ;
}

const readNote = (title) => {
    const notes = loadData() ;
    const note = notes.find( note => note.title === title ) ;
    if(!note) console.log(chalk.red.inverse('No note found')) ;
    else {
        console.log(chalk.inverse.bold(title)) ;
        console.log(note.body) ;
    }
}

const loadData = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json') ;
        const dataJSON = dataBuffer.toString() ;
        const data = JSON.parse(dataJSON) ;
        return data ;
    }catch(e){
        return [] ;
    }
}

const saveNotes = (data) => {
    const dataJSON = JSON.stringify(data) ;
    fs.writeFileSync('notes.json',dataJSON) ;
   
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote, 
    listNotes: listNotes,
    readNote: readNote
}; 