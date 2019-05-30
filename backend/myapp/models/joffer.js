const mongoo = require('mongoose');
const Schema = mongoo.Schema;

offerSchema = new Schema({

    cname:{
        type:String,
        require:true,
    },
    jtitle:{
        type:String,
        require:true,
    },
    adrs:{
        type:String,
        require:true,
    },
    jsmry:{
        type:String,
        require:true,
    },
    exp:{
        type:Number,
        require:true,
    }
},
    {
        timestamps:true
});
  
var gourav = mongoo.model('goffer', offerSchema);
module.exports=gourav; 

