const express = require('express') ;
const User = require('../db/models/user.js') ;


const router = new express.Router() ;


router.post('/users',async (req,res) => {
  
    const user = new User(req.body) ;

    try{
        const result = await user.save() ;
        res.status(201).send(result) ;
    }catch(e){
        res.status(400).send(e) ;
    }

}) ;

router.get('/users', async (req,res) => {

    try {
        const result = await User.find() ;
        res.send(result) ;
    } catch(e){
        res.status(500).send(e) ;
    } 

}) ;

router.get('/users/:id' , async (req,res) => {
    const _id = req.params.id ;

    try {
        const user = await User.findById(_id) ;
        if(!user){
            return res.status(404).send() ;
        }

        res.send(user) ;
    } catch(e){
        res.status(500).send(e) ;
    }
    
}) ;

router.patch('/users/:id', async (req,res) => {

    const keyList = Object.keys(req.body) ;
    const updatableField = ['name','email','password','age'] ;
    const update = keyList.every( key => updatableField.includes(key)) ;
    if(!update) {
        return res.status(400).send("Invalid update document") ;
    }

    try{

        const user = await User.findById(req.params.id) ;
        keyList.forEach((key) => user[key] = req.body[key]) ;
        await user.save() ;

        //const user = await User.findByIdAndUpdate(req.params.id,req.body, { new: true, runValidators:true}) ;

        if(!user) {
            return res.status(404).send() ;
        }

        res.send(user) ;
    }catch(e) {
        res.status(500).send(e) ;
    }

}) ;

router.delete('/users/:id', async (req,res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id) ;

        if(!user) {
            res.status(404).send() ;
        }

        res.send(user) ;
    }catch(e){
        res.status(500).send(e) ;
    }
})

module.exports = router ;