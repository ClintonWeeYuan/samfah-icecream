// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from "../../utils/connectMongo";
import Order from "../../models/Order"

type Order = {
  orderName: string,
  orderQuantity: number,
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

    console.log('CREATING DOCUMENT');
    const order = await Order.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ order });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
