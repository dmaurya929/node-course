const mongoose = require('mongoose') ;

const Task = mongoose.model('Tasks', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default:false
    }
}) ;

// const tsk = new Task({
//     description: 'react js   ',
// }) ;

// tsk.save().then((task) => {
//     console.log(task) ;
// }).catch((error) => {
//     console.log(error) ;
// })

module.exports = Task ;