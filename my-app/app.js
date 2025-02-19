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
    const task=req.body;
    if(!task){
        return res.status(400).json({error:"Task is required"});
    }
    tasks.push(task);
    res.status(201).send("task added");
    
});

app.put("/tasks",(req,res)=>{
    const {index,newTask}=req.body;
    if (index==null||newTask==null){
        return res.status(400).json({ error: "Index and newTask are required" });
    }
    if(index<0||index>=tasks.length){
        return res.status(400).json({error:"Invalid index"});
    }

    tasks[index]=newTask;
    console.log("Request Body",req.body);
    res.status(201).send("tasks updated");
});


app.listen(3001,()=>{
    console.log("Server is running on port 3001");
});











