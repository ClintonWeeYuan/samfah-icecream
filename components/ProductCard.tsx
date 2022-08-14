import {FC} from "react";

interface Props {
  name: string
  url: string,
  price: string,
}

const ProductCard: FC<Props> = ({name, url, price}) => {
  return (
    <a href="#"
       className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
           src={url} alt=""/>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h4>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{price}</p>
        <button
          className="inline-flex justify-center items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Purchase
        </button>
      </div>
    </a>
  )
}

export default ProductCard;