const mongoo = require('mongoose');
const Schema = mongoo.Schema;

userSchema = new Schema({
  
    user_details:{
        type:mongoo.Schema.Types.ObjectId,
        ref:'gjfind'
    },
    offers:[{
        type:mongoo.Schema.Types.ObjectId,
        ref:'gprovider'
    }],
    
    fname:{
        type:String,
        require:true,
    },
    lname:{
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
    email:{
        type:String,
        require:true,
    },
    contact:{
        type:Number,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    }
},
    {
        timestamps:true
});
  
var gourav = mongoo.model('gseeker', userSchema);
module.exports=gourav; 
 