import {useEffect} from "react";
import Router from "next/router";
import useSWR from "swr"
import axios from "axios"

export default function useUser(
  {
    redirectTo = "",
    redirectIfFound = false,
  } = {}) {
  const {data: user, mutate: mutateUser} = useSWR("/api/admin", async () => {
    const res = await axios.get("/api/admin");
    return res.data;
  })

  useEffect(() => {
    if (!redirectTo || !user) return
    if ((redirectTo && !redirectIfFound && !user?.isLoggedIn) || (redirectIfFound && user?.isLoggedIn)) {
      Router.push(redirectTo)
    }
  }, [user, redirectIfFound, redirectTo])

  return {user, mutateUser}
}