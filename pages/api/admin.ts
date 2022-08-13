
import {withSessionRoute} from "../../utils/withSession";
import {NextApiRequest, NextApiResponse} from "next";

export type User = {
  isLoggedIn: boolean;
  name: string;
};

function userRoute(req :NextApiRequest, res :NextApiResponse) {
  if (req.session.user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    res.json({
      ...req.session.user,
      isLoggedIn: true,
    });
  } else {
    res.json({
      isLoggedIn: false,
      name: "unknown",
    });
  }
}

export default withSessionRoute(userRoute);