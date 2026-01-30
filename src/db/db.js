const mongoose = require('mongoose')

function connectDB(){
    mongoose.connect(process.env.DB_URI)
    .then(()=>{
        console.log("connected to database")
    }).catch(err => console.log(err))
}

module.exports = connectDB