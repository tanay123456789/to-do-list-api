const express=require("express");
const app=express();

app.use(express.json());

let tasks=[];

app.get("/tasks",(req,res)=>{

    res.setHeader("Content-Type","application/json");
    res.json({tasks});
});

app.post("/tasks",(req,res)=>{
    console.log("Request Body",req.body);
    const task=req.body.task;
    if(!task){
        return res.status(400).json({error:"Task is required"});
    }
    tasks.push(task);
    res.status(201).send("task added");
    
});


app.listen(3001,()=>{
    console.log("Server is running on port 3001");
});











