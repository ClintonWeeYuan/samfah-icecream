import {withSessionRoute} from "../../utils/withSession";
import { NextApiRequest, NextApiResponse } from "next";


function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();
  res.json({ isLoggedIn: false, name: ""});
}

export default withSessionRoute(logoutRoute);