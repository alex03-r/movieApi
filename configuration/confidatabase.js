const { Schema , model } = require('mongoose');

const movieSchema = new Schema({

    name:{
        type:String
    },
    category:{
        type:String
    },
    author:{
        type:String
    },
    describtion:{
        type:String
    }, 
    new:{
        type:Boolean
    },
})



module.exports = model('movies', movieSchema);
