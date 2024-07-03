const mongoose = require('mongoose');

const database = 'mongodb+srv://oladipomaryam8:arin@cluster0.ulmzuot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose
.connect(database)
.then(()=>{console.log('connected to database')})
.catch((err)=>{console.log(err)})
// const connectDB = async()=>{
//     try{
//         mongoose.set('strictQuery',false)
//         //connection method
//         const conn = await mongoose.connect(process.env.DATABASE)
//         console.log(`conncected to database: ${conn.connection.host}`)
//     } catch(error) {
//         console.log(`error connceting to the database: ${error.message}`)
//     }
// }

// module.exports = connectDB