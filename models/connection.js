var mongoose=require('mongoose')
var url = "mongodb://localhost:27017/aware"
mongoose.connect(url)
var db = mongoose.connection
console.log("successfully connected to mongob database")
module.exports=db