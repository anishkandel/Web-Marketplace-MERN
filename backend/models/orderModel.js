const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "order name required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    userid: {
      type: String,
    },
    orderItems: [],
    shippingAddress: {
      type: Object,
    },
    orderAmount: {
      type: String,
      
    },
    isDeliverd: {
      type: Boolean,
      default: false,
    },
    transectionId: {
      type: String,
   
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('order', orderSchema);
