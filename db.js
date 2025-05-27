const mongoose = require('mongoose')

//MongoDb Url
const mongoURL =  'mongodb://127.0.0.1:27017/hotels'


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