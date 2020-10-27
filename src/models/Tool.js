const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const autoIncrement = require("mongoose-auto-increment");

const ToolSchema = new mongoose.Schema({
         
    title: {
        type: String,
        required: true,
    },  
    link: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: [],

});

autoIncrement.initialize(mongoose.connection);
ToolSchema.plugin(autoIncrement.plugin, {
  model: "post", // collection or table name in which you want to apply auto increment
  field: "_id", // field of model which you want to auto increment
  startAt: 1, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});

ToolSchema.plugin(mongoosePaginate);

mongoose.model('Tool', ToolSchema);