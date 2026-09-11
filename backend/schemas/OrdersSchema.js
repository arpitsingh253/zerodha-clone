const {schema}= require('mongoose');

const OrdersSchema= new moongoose.Schema({
    name : String,
    qty : Number,
    price : Number,
    mode : String,
});      

module.exports = {OrdersSchema};