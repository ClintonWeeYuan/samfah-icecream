import useUser from "../utils/useUser";
import {useRouter} from "next/router";
import axios from "axios";

export default function Header(){
  const {user, mutateUser} = useUser();
  const router = useRouter();
  async function logOut(e : any){
    e.preventDefault();
    mutateUser(
      await axios.post("/api/logout"),
      false,
    )
    router.push("/login");
  }
  return(
    <header>
      <button onClick={logOut}>Log Out</button>
    </header>
  )
}

