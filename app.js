const express =require('express')
const connectDB = require('./db/connect')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config() 
const url=process.env.MONGO_URI
const port=process.env.PORT
const rota=require('./routes/rota')
app.use(express.json());

app.use(express.static('./public'));

app.use('/darvinberfin',rota) 

const start = async()=>{
try{

    await connectDB(url)
    app.listen(port,console.log(`Server is listening on port ${port}`))

}

catch(error){
    console.log(error)
}
}
start() 