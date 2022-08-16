import {createContext, FC, ReactElement, useContext, useState} from "react";
import {Order} from "../lib/types";

export interface BasketState {
  basket: Order[];
  setBasket: (order: Order) => void
}

const emptyBasket : BasketState = {
  basket: [],
  setBasket:(order: Order) => {}
}

const BasketContext = createContext<BasketState>(emptyBasket);


export function useBasketContext() {
  return useContext(BasketContext);
}

interface Props {
  children: ReactElement
}


export const BasketProvider: FC<Props>= (props) => {
  const [basket, setBasket] = useState<Order[]>([]);

  function handleBasket (order : Order){
    setBasket((prev) => [...prev, order]);
  }

  const initialState : BasketState = {
    basket: basket,
    setBasket: handleBasket
  }

  return (
    <BasketContext.Provider value={initialState}>
      {props.children}
    </BasketContext.Provider>
  )
}