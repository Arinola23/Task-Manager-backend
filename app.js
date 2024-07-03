const express = require('express');
const app = express(); //initialize express
require('dotenv').config()
require('./config/db')
// const connectDB = require('./config/db');
const port = 2010

// connectDB()
//middleware
// app.use(express.static('./public'));
app.use(express.json())

//testing the routes
app.get( '/time',(req,res) => {
    res.send('Time says buy yours')
})

//routes
const taskRoutes = require('./routes/route')
app.use('/task', taskRoutes)

app.listen(port,()=>{
    console.log(`app listening on ${port}`)
})