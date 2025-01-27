const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true, // Name is required
        trim: true      // Removes leading/trailing whitespaces
    },

    userName: {
        type: String,
        required: true, // Name is required
        trim: true      // Removes leading/trailing whitespaces
    },
    email: {
        type: String,
        required: false,
        unique: true,   // Email must be unique
        lowercase: true // Convert to lowercase
    },
    password: {
        type: String,
        required: false,
        minlength: 6    // Minimum password length
    },
    phoneNo: {
        type: String,
        required:false,       // Maximum age
    },
    
    // // profile_picture: {
    // //     type: String,  // URL to an image associated with the post (if any)
    // //     required: true
    // },
    // isActive: {
    //     type: Boolean,
    //     default: true   // Default value is true
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now // Automatically set the current date
    // }
});

// Create the User Model
const User = mongoose.model('users', userSchema);

module.exports = User;