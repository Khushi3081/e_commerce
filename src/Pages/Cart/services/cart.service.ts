import { axiosGet, axiosPost } from "../../../axios/method";
import { cartData } from "../types/cart.types";

export const getCartListing = async () =>{
    try {
      const response = await axiosGet("/cart-product/get-all");
      return response;
    } catch (error:any) {
      return error
    }
  }
  export const addQuantity = async (uuid:number,quantity:number,price:string) =>{
    try {
      const response = await axiosPost("/cart-product/add",{uuid,quantity,price});
      return response;
    } catch (error:any) {
      return error
    }
  }

  export const removeQuantity = async (uuid:number,quantity:number,price:string) =>{
    try {
      const response = await axiosPost("/cart-product/remove",{uuid,quantity,price});
      return response;
    } catch (error:any) {
      return error
    }
  }

  export const paymentProduct = async (data:cartData) =>{
    try {
      const response = await axiosPost("/cart-product/payment",{data});
      return response;
    } catch (error:any) {
      return error
    }
  }