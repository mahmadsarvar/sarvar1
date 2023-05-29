var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    name: {
        type: String,
    },
    address: {
        type: String,
    
    },
    phone: {
        type: String,
    }
});

module.exports = mongoose.model('employees', userSchema);