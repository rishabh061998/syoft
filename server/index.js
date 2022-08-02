require("dotenv").config()
const express=require("express")
const app=express()
const cors=require("cors")
const connection=require('./db')

connection()

app.use(express.json())
app.use(cors())

const port=process.env.PORT || 8080;

app.listen(port,()=>console.log(`server is running on port ${port}`))