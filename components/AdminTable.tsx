import {FC} from "react"
import {useSWRConfig} from "swr"
import axios from "axios";

interface Order {
  orderName: string,
  orderQuantity: number,
  price: string,
}

interface OrderBox {

  email: string,
  name: string,
  orders: Order[]

}

interface Props {
  orders: OrderBox[],
}


const AdminTable: FC<Props> = ({orders}) => {
  const {mutate} = useSWRConfig();

  async function removeElement(name: string) {
    await axios.post("/api/remove", {name})
    await ("/api/getAll");
  }

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            Customer
          </th>
          <th scope="col" className="py-3 px-6">
            Email
          </th>
          <th scope="col" className="py-3 px-6">
            Order
          </th>
          <th scope="col" className="py-3 px-6">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
        </thead>
        <tbody>
        {orders?.map((order) => (
          <tr
            key={order.name}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {order.name}
            </th>
            <td className="py-4 px-6">
              {order.email}
            </td>
            <td className="py-4 px-6 whitespace-nowrap">
              {order.orders.map((item) => (<p key={item.price}>{item.orderQuantity} x {item.orderName} </p>))}
            </td>
            <td className="py-4 px-6 text-right">
              <button onClick={() => removeElement(order.name)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Remove
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminTable