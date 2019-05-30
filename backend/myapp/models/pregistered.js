const mongoo = require('mongoose');
const Schema = mongoo.Schema;

userSchema = new Schema({
  
    company_details:{
        type:mongoo.Schema.Types.ObjectId,
        ref:'goffer'
    },

    cname:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        require:true,
    },
    psw:{
        type:String,
        require:true,
    },
    ctype:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    contact:{
        type:Number,
        require:true,
    }
},
    {
        timestamps:true
});
  
var gourav = mongoo.model('gprovider', userSchema);
module.exports=gourav; 
 