import {Schema, model, models} from "mongoose"

const OrderSchema = new Schema({
  orderName: {
    required: true,
    type: String,
  },
  orderQuantity: {
    type: Number,
    required: true,
  },
  name: {
    required: true,
    type: String,
  },
  email: {
    type: String,
    required: true
  }
})

const Order = models.Order || model('Order', OrderSchema);

export default Order;