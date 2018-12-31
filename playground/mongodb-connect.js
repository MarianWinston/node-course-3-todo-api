// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // example below

// destructuring
// let user = {name: 'Marian', age: 28};
// let {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    } 
    console.log('Connected to mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something todo',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     } 

    //     console.log(JSON.stringify(result.ops, undefined, 2));
        
    // });

    // db.collection('Users').insertOne({
    //     name: 'Marian',
    //     age: 28,
    //     location: 'Portsmouth'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert to Users.', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});