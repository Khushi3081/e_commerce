export type categoryDataType = { uuid: string; name: string; image: string; status: string; }[]

export interface ProductDetailsPageType {
  uuid: number,
  title: string,
  description: string,
 category_uuid: number,
 images: string,
 price: string,
 Quantity: number,
 category:{
  name:string
 }
}