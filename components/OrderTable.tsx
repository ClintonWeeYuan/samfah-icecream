import {FC} from "react";
import {useBasketContext} from "./BasketContext";

const OrderTable : FC = () => {
  const basket = useBasketContext().basket;
  return(
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg pt-3">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            Product Name
          </th>
          <th scope="col" className="py-3 px-6">
            Quantity
          </th>
          <th scope="col" className="py-3 px-6">
            Price
          </th>
          <th scope="col" className="py-3 px-6">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
        </thead>
        <tbody>
        {basket.map((item) => (
          <tr key={item.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {item.name}
            </th>
            <td className="py-4 px-6">
              {item.quantity}
            </td>
            <td className="py-4 px-6">
              {item.price}
            </td>
            <td className="py-4 px-6 text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrderTable