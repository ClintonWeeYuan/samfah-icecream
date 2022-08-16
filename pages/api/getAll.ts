// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from "../../utils/connectMongo";
import OrderBox from "../../models/Order"


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    const orders = await OrderBox.find({})
    console.log('Retrieved Orders');

    res.json({ orders });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
