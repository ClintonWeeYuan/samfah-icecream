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

    console.log('Getting all Orders...');
    const order = await OrderBox.create(req.body);
    console.log('Orders Retrieved!');

    res.json({ order });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
