import {withIronSessionApiRoute} from "iron-session/next";
import type {NextApiRequest, NextApiResponse} from 'next'
import { withSessionRoute } from "../../utils/withSession";

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = await req.body;
  const CREDENTIALS_USERNAME = process.env.CREDENTIALS_USERNAME || "";
  const CREDENTIALS_PASSWORD = process.env.CREDENTIALS_PASSWORD || "";
  console.log(username);
  console.log(password);
  try{
    if(username == CREDENTIALS_USERNAME && password ==  CREDENTIALS_PASSWORD){
      req.session.user = {
        isLoggedIn: true,
        name: "admin",
      };
      await req.session.save();
      res.send({ok: true});
    } else {
      res.status(500).json({ok: false, error: "Incorrect credentials"});
    }
  } catch(e){
    res.status(500).json({error: (e as Error).message})
  }
}


export default withSessionRoute(loginRoute);