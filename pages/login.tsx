import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import useUser from "../utils/useUser";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {mutateUser} = useUser({redirectTo :"/admin", redirectIfFound : true,})
  const router = useRouter();

  const handleSubmit = async (e : any) =>{
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);

    try {
      await axios.post('/api/login', {
        username: username,
        password: password
      }),
      mutateUser();
    } catch (error) {
      console.error('An unexpected error happened:', error)
    }
  }

  return (
    <div className="max-w-lg h-screen flex justify-center items-center mx-auto">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-6">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
          <input onChange={(e) => {setUsername(e.target.value)}} type="text" id="username"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="username" required/>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
          <input onChange={(e) => {setPassword(e.target.value)}} type="password" id="password"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required/>
        </div>

        <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
        </button>
      </form>

    </div>
  )
}