import { useEffect, useState } from "react"
import { addQuantity, getCartListing, paymentProduct, removeQuantity } from "./services/cart.service"
import { cartData } from "./types/cart.types"
import CartProductcard from "component/CartProductcard"
import { ResponseType } from "hepler/common.helper"

const Cart = () => {
  const [cartData,setCartData] = useState<cartData[]>()
  const [payment,setPayment] = useState<boolean>(false)
  const getCartData = async() =>{
    const response = await getCartListing()
    setCartData(response?.data?.data)
  }
  const handleAddQuantity = async(uuid:number,quantity:number,price:string) =>{
    const response = await addQuantity(uuid,quantity,price)
    if(response.responseType === ResponseType.Success){
      getCartData()
    }
  }
  const handleRemoveQuantity = async(uuid:number,quantity:number,price:string) =>{
    const response = await removeQuantity(uuid,quantity,price)
    if(response.responseType === ResponseType.Success){
      getCartData()
    }
  }
  const handlePayment = async(cartProduct:cartData)=>{
    const response = await paymentProduct(cartProduct)
    if(response.responseType === ResponseType.Success){
      setPayment(true)
      getCartData()
    }
  }
  useEffect(()=>{
      getCartData()
  },[])

  return (
    <div>
        {cartData && cartData.length>0 ? (
          <CartProductcard
            data={cartData}
            addQuantity={(uuid,quantity,price)=>handleAddQuantity(uuid,quantity,price)}
            removeQuantity={(uuid,quantity,price)=>handleRemoveQuantity(uuid,quantity,price)}
            payment={(cartProduct)=>handlePayment(cartProduct)}
            donePayment={payment}
          />
        ):
        <h3>Data not found</h3>}
      </div>
  )
}

export default Cart