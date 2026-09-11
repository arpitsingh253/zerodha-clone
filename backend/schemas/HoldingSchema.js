const {schema} = require('mongoose');

const HoldingSchema =new mongoose.Schema({
 name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: Number,
    day: String,
});
module.exports = {HoldingSchema};