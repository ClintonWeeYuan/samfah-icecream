
import {withSessionRoute} from "../../utils/withSession";
import {NextApiRequest, NextApiResponse} from "next";


function userRoute(req :NextApiRequest, res :NextApiResponse) {
  res.send({ user: req.session.user });
}

export default withSessionRoute(userRoute);