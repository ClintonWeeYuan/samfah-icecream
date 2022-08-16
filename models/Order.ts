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
  price: {
    required: true,
    type: String,
  },
})

const OrderBoxSchema = new Schema({
  orders: [OrderSchema],
  name: {
    required: true,
    type: String
  },
  email : {
    required: true,
    type: String,
  }
})

const Order = models.Order || model('Order', OrderSchema);
const OrderBox = models.OrderBox || model('OrderBox', OrderBoxSchema);

export default OrderBox;