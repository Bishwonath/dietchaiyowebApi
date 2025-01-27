const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/db_Diet_chaiyoo");
        console.log("Connection of Database established")
    }
    catch(e){
        console.log("MongoDb not connected");
    }
}

module.exports = connectDB;