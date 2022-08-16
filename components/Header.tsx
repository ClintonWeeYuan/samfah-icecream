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
    <header className="px-4 md:px-10 py-4 flex justify-between" >
      <h1 className="text-2xl">Admin Console</h1>
      <button className="inline-flex justify-center items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={logOut}>Log Out</button>
    </header>
  )
}

