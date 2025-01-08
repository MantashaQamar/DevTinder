 const express = require('express')
 const app = express();

 //request Hnadler
//  app.use((req,res)=>{
//  res.send('Hiii from the server dashboard')
//  })

 app.use("/test",(req,res)=>{
    res.send('hi from Test')
 })

 app.use("/hi",(req,res)=>{
    res.send("hemlooooo from HII")
 })

 app.listen(3000, ()=>{
    console.log('Server is successfully listening on port 3000');
    
 })