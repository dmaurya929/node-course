require('../src/db/mongoose.js') ;
const Task = require('../src/db/models/task.js') ;

// Task.findByIdAndDelete('5edc1039107b9db44d001655').then((task) => {
//     console.log(task) ;

//     return Task.countDocuments() ;
// }).then((result) => {
//     console.log(result) ;
// }).catch((e) => {
//     console.log(e) ;
// })

const deleteByID = async (id) => {
    const task = await Task.findByIdAndDelete(id) ;
    const count = await Task.countDocuments({completed:false}) ;
    return count ;
}

deleteByID('5edc2457677a94bff683817c').then((count) => {
    console.log(count) ;
}).catch((e) => {
    console.log(e) ;
})