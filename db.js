const mongoose = require('mongoose')
require('dotenv').config();

//MongoDb Url

const mongoURL = process.env.DB_URL


//Setup MongoDb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;



db.on("connected",()=>{
    console.log("Connected to mongodb server")
})
db.on("error",(error)=>{
    console.log(" mongodb connected error",error)
})
db.on("diconnected",()=>{
    console.log("mongodb disconnected")
})

//export the database connection
module.exports = db;