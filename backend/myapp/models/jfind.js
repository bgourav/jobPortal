const mongoo = require('mongoose');
const Schema = mongoo.Schema;

findSchema = new Schema({
    
    name:{
        type:String,
        require:true,
    },
    splz:{
        type:String,
        require:true,
    },
    exp:{
        type:Number,
        require:true,
    },
    contact:{
        type:Number,
        require:true,
    },
    upld:{
        type:String,
        require:true,
    }
    
},
    {
        timestamps:true
});
  
var gourav = mongoo.model('gjfind', findSchema);
module.exports=gourav; 

