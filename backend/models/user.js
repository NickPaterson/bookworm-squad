const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        user_id: {
            type: String,
            unqiue: true,
            required: true
        },
        username: {
            type: String,
            unqiue: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String
        },
        role: {
            type: String,
            default: 'user'
        }
    }, {
        collection: 'users',
    }, { timestamps: true }
);
    
const User = mongoose.model('User', userSchema);

module.exports = User;