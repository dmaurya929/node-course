const express = require('express') ;
const Task = require('../db/models/task.js') ;

const router = new express.Router() ;


router.post('/tasks', async (req,res) => {
  
    const task = new Task(req.body) ;

    try{
        const result = await task.save() ;
        res.status(201).send(result) ;
    } catch(e){
        res.status(400).send(e) ;
    }

}) ;


router.get('/tasks', async (req,res) => {

    try{
        const tasks = await Task.find() ;
        res.send(tasks) ;
    }catch(e){
        res.status(500).send(e) ;
    }

}) ;

router.get('/tasks/:id', async (req,res) => {
    const _id = req.params.id ;

    try{
        const task = await Task.findById(_id) ;
        if(!task) {
            return res.status(404).send() ;
        }

        res.send(task) ;
    }catch(e){
        res.status(500).send(e) ;
    }

}) ;

router.patch('/tasks/:id', async (req,res) => {

    const keyList = Object.keys(req.body) ;
    const updatableField = ['description','completed'] ;
    const update = keyList.every( key => updatableField.includes(key)) ;
    if(!update) {
        return res.status(400).send("Invalid update document") ;
    }

    try{
        const task = await findById(req.params.id) ;
        keyList.forEach( key => {
            task[key] = req.body[key] ;
        })

        //const task = await Task.findByIdAndUpdate(req.params.id,req.body, { new: true, runValidators:true}) ;

        if(!task) {
            return res.status(404).send() ;
        }

        res.send(task) ;
    }catch(e) {
        res.status(500).send(e) ;
    }

})


router.delete('/tasks/:id', async (req,res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id) ;

        if(!task) {
            res.status(404).send() ;
        }

        res.send(task) ;
    }catch(e){
        res.status(500).send(e) ;
    }
})

module.exports = router ;
