// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from "../../utils/connectMongo";
import OrderBox from "../../models/Order"

type Order = {
  orderName: string,
  orderQuantity: number,
  price: string,
}

type OrderBox = {
  orders: Order[],
  name: string,
  email: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('Deleting Order...');
    const order = await OrderBox.findOneAndDelete({name: req.body.name});
    console.log('Order Deleted!');

    res.json({ order });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
