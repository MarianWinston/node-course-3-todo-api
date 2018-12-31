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

    // find one and update
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c2996fd2f7319f58aa780a2')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c29766af16e49294ca824e3')
    }, {
        $set: {
            name: 'Marian'
        }, 
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});
