const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });
// // Todo.remove({}) to remove everything, dont get docs back

// // Todo.findOneAndRemove()
// // Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5c2d25f22f7319f58aa78d31').then((todo) => {
    console.log(todo);
});

// Todo.findOneAndRemove(_id: '5c2d25f22f7319f58aa78d31').then((todo) => {
    
// });