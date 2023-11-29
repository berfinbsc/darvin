const mongoose=require('mongoose')

 
const DarvinSheme= new mongoose.Schema({
    darvinlink:{
        type:String,
        required:[true,'must provide short link'],
        trim:true,
        maxlength:[10,'short link can not be more than 10 characters'],
    },   
    longlink:{  
        type:String,
        required:[true,'must provide link'],
    },

});

module.exports=mongoose.model('DarvinSheme',DarvinSheme)

 
// 