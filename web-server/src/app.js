const path = require('path') ;
const express = require('express') ;
const app = express() ;

app.use(express.static(path.join(__dirname,'../public'))) ;

app.get('', (req,res) => {
    res.send('sfdsdfdsf') ;
}) ;

app.get('/help', (req,res) => {
    res.send('<h1>Help<h1>') ;
}) ;

app.get('/about', (req,res) => {
    res.send('about page') ;
}) ;

app.get('/weather', (req,res) => {
    res.send('Weather') ;
})

app.listen(3000,()=> {
    console.log('server running on port 3000...') ;
})