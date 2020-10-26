const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const autoIncrement = require("mongoose-auto-increment");

const ProductSchema = new mongoose.Schema({
         
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
ProductSchema.plugin(autoIncrement.plugin, {
  model: "post", // collection or table name in which you want to apply auto increment
  field: "_id", // field of model which you want to auto increment
  startAt: 1, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);