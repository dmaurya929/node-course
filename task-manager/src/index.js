const express = require('express') ;
require('./db/mongoose.js')

const userRouter = require('./routers/user.js') ;
const taskRouter = require('./routers/task.js') ;

const port = process.env.PORT || 3000 ;

const app = express() ;
app.use(express.json()) ;
app.use(userRouter) ;
app.use(taskRouter) ;


app.listen(port, () => {
    console.log(`App running on port ${port}`) ;
}) ;

const jwt = require('jsonwebtoken') ;

const token = jwt.sign({ user: 'deepak123'},'funtop4music air') ;
console.log(token) ;