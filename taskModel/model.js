const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'required'],
        trim: true,  // remove whitespace
        maxlength: [20, 'name cannot exceed 20 characters']
    },
    completed:{
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model('Task',taskSchema)

module.exports = Task