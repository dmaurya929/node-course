const chalk = require('chalk') ;
const notes = require('./notes.js') ;
const yargs = require('yargs') ;

yargs.version('1.1.0') ;

yargs.command({
    command: 'add',
    describe: 'adding to note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body) ;
    }
}) ;

yargs.command({
    command: 'remove',
    describe: 'Removing the note',
    builder: {
        title: {
            describe: 'Removing a note of given title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
         notes.removeNote(argv.title) ;
    }
})

yargs.command({
    command: 'list',
    describe: 'List the note',
    handler(){
        notes.listNotes() ;
    }    
})

yargs.command({
    command: 'read',
    describe: 'Reading note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title) ;
    }
})

yargs.parse() ;