import express from "express"
// import cors from cors

const app=express()
const port=8081

app.use(express.json())
// app.use(cors({}))

app.listen(port,()=>console.log("server started at port "+ port))