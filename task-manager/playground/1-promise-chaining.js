require('../src/db/mongoose.js') ;
const User = require('../src/db/models/user.js') ;


// User.findByIdAndUpdate('5edcb1efffe8edfd530b0e5b',{age:20}).then((user) => {
//     console.log(user) ;

//     return User.countDocuments({age:{$gte:20}}) ;
// }).then((result) => {
//     console.log(result) ;
// }).catch((e) => {
//     console.log(e) ;
// })

const updateUserByID = async (id,age) => {
    const user = await User.findByIdAndUpdate('5edcb1efffe8edfd530b0e5b',{ age }) ;
    const count = await User.countDocuments({ age }) ;
    return count ;
}

updateUserByID('5edcb1efffe8edfd530b0e5b',22).then((count) => {
    console.log(count) ;
}).catch((e) => {
    console.log(e) ;
})