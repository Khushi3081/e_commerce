import { axiosGet, axiosPost } from "../../../axios/method";
import { ProductDetailsPageType } from "../types/dashboard.type";

export const getAllCategory = async () => {
    try {
      const response = await axiosGet("/product/category/get-all");
      return response;
    } catch (err: any) {
      return err;
    }
  };

export const getProductListing = async () =>{
  try {
    const response = await axiosGet("/product/get-all");
    return response;
  } catch (error:any) {
    return error
  }
}

export const getCategoriesWiseProducts = async (apiParams: any) => {
  try {
      const response = await axiosGet(`/product/category-wise-product`, apiParams)
      return response
  } catch (err: any) {
      return err
  }
}

export const addProductToCart = async (data: ProductDetailsPageType) => {
  try {
      const response = await axiosPost(`/product/add-to-cart`,data)
      return response
  } catch (err: any) {
      return err
  }
}