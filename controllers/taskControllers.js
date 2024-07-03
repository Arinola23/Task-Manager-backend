const asyncHandler = require('express-async-handler');
const Task = require('../taskModel/model')

const getAlltask = asyncHandler(async(req,res) =>{
    try{
        const task = await Task.find()
        res.status(200).json({task})
    } catch(e){
        res.status(500).json({error: e})
    }})

const createTask = asyncHandler(async(req,res) =>{
    try{
        const task = await Task.create(req.body)
        res.status(200).json({task})
    } catch(e){
        res.status(500).json({error: e})
    }
})

const getOneTask = asyncHandler(async(req,res) =>{
    try{
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({message: `Task not found `})
        }
        res.status(200).json({task})
    } catch(e){
        res.status(500).json({error: e})
    }})

const updateTask = asyncHandler(async(req,res) =>{
    try{
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({message: `Task not found`})
        }
        const updatetask = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidator: true})
        res.status(200).json(updatetask)
    } catch(e){
        res.status(500).json({error: e})
        console.error(e)
    }})

const deleteTask = asyncHandler(async(req,res) =>{
try{
        const task = await Task.findOneAndDelete(req.params.id);
        if(!task){
            return res.status(404).json({message: "Task not found"})
        }
        res.status(200).json({task: 'Deleted Successfully'})
    } catch(e){
        res.status(500).json({error: e})
    }})
module.exports = {getAlltask, createTask, deleteTask,getOneTask,updateTask}