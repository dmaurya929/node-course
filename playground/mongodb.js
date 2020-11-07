const mongodb = require('mongodb') ;
const MongoClient = mongodb.MongoClient ;
const ObjectID = mongodb.ObjectID ;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager' ;

// const id = new ObjectID() ;
// console.log(id.id)
// console.log(id.toHexString()) ;

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect database') ;
    }

    console.log('connected correctly') ;

    const db = client.db(databaseName) ;

    // db.collection('user').insertOne({
    //     name: 'smith',
    //     age: 25
    // }, (error, result) => {
    //         if(error){
    //             return console.log('Error in inserting') ;
    //         }

    //         console.log(result.ops) ;
    // }) ;

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'To complete nodejs course',
    //         completed: false
    //     }, {
    //         description: 'complete an assignment',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('unable to insert document') ;
    //     }

    //     console.log(result.connection) ;
    // })

    // db.collection('tasks').find({completed: false}).toArray((error,result) => {
    //     console.log(result) ;
    // })

    // db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result) => {
    //     console.log('successful!!')
    //     console.log(result.upsertedId) ;
       
        
    // }).catch((error)=> {
    //     console.log('unable to connect') ;
    // }) ;

    db.collection('tasks').deleteOne({
        description:'complete an assignment'
    }).then((result)=> {
        console.log(result.deletedCount) ;
    }).catch((error) => {
        console.log(error) ;
    })

})