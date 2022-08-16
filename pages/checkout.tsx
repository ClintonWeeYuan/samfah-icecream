import {NextPage} from "next";
import BillingForm from "../components/BillingForm";
import ShopHeader from "../components/ShopHeader";
import OrderTable from "../components/OrderTable";
import {useBasketContext} from "../components/BasketContext";
import axios from "axios"
import {useState} from "react"
import Spinner from "../components/Spinner"
import SuccessToast from "../components/SuccessToast";

const Checkout: NextPage = () => {
  const basket = useBasketContext().basket;
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [openToast, setOpenToast] = useState<boolean>(false);

  async function addOrder() {

    try{
      const items = basket.map((item) => ({orderName: item.name, orderQuantity: item.quantity, price: item.price}))
      const data = {
        orders: items,
        name: name,
        email: email,
      }
      setLoading(true);
      const res = await axios.post("/api/add", data);
      setOpenToast(true);
      const closeToast = setTimeout(() => {setOpenToast(false)} , 3000)
      setLoading(false);
      console.log(res);
    } catch(e){
      console.log(e);
      setLoading(false);
    }
  }
  return (
    <div>
      <SuccessToast openToast={openToast}/>
      <ShopHeader/>
      <div className="p-4 md:px-20 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-8  w-full">
        <div className="cols-span-2 md:cols-span-1">
          <h2 className="text-2xl mb-5">Billing Details</h2>
          <BillingForm setName={(value : string) => setName(value)} setEmail={(value: string) => setEmail(value)}/>
        </div>
        <div className="cols-span-2 md:cols-span-1">
          <h2 className="text-2xl mb-5">Your Order</h2>
          <OrderTable/>
          <div className="mt-4 flex justify-center md:justify-end">
            <button onClick={addOrder}
                    disabled={loading}
              className="inline-flex w-full justify-center items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {loading ? <Spinner/> : "PLACE ORDER"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;