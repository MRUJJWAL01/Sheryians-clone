const mongoose = require("mongoose");

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://chouhanujjwalsingh20:WpEM0H1H6Dh3Yilq@cluster0.bbx5ubb.mongodb.net/user");
    console.log("DB is connected..");
    
}

module.exports = connectDB;